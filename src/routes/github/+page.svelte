<script lang="ts">
  import SearchBar from "$lib/components/SearchBar.svelte";
  import UserCard from "$lib/components/UserCard.svelte";
  import RepoCard from "$lib/components/RepoCard.svelte";
  import LanguageStats from "$lib/components/LanguageStats.svelte";
  import SkeletonProfile from "$lib/components/SkeletonProfile.svelte";
  import SkeletonRepo from "$lib/components/SkeletonRepo.svelte";
  import ErrorCard from "$lib/components/ErrorCard.svelte";
  import GitHubInsights from "$lib/components/GitHubInsights.svelte";
  import {calculateLanguages,calculateInsights,sortRepositories} from '$lib/features/github/github.helpers';
  import {githubStore} from '$lib/features/github/github.store.svelte';

  const github = githubStore;

  function handleSearch(username: string) {
    github.searchUser(username);

    recentSearches = [
      username,
      ...recentSearches.filter(
        (search) => search !== username,
      ),
    ].slice(0, 5);
  }

  let recentSearches = $state<string[]>(
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("recent-searches") ?? "[]")
      : [],
  );

  let sortBy = $state<"stars" | "updated" | "name">("stars");

 let languages = $derived.by(() =>
	calculateLanguages(github.repos)
);

let sortedRepos = $derived.by(() =>
	sortRepositories(github.repos, sortBy)
);

  let insights = $derived.by(() =>
	calculateInsights(
		github.repos,
		languages
	)
);

  $effect(() => {
    github.searchUser("DROIJDPR");
  });

  $effect(() => {
    localStorage.setItem("recent-searches", JSON.stringify(recentSearches));
  });
</script>

<main>
  <section class="hero">
    <h1>GitHub Profile Explorer</h1>

    <p>Search any GitHub user and explore their profile.</p>
  </section>

  <SearchBar onSearch={handleSearch} />

  {#if recentSearches.length}
    <section class="recent-searches">
      <h3>Recent Searches</h3>

      <div class="search-tags">
        {#each recentSearches as search}
          <button
            type="button"
            class="search-tag"
            onclick={() => handleSearch(search)}
          >
            {search}
          </button>
        {/each}
      </div>
    </section>
  {/if}

  {#if github.isLoading}
    <SkeletonProfile />

    <section class="projects">
      <div class="project-grid">
        <SkeletonRepo />
        <SkeletonRepo />
        <SkeletonRepo />
        <SkeletonRepo />
      </div>
    </section>
  {/if}

  {#if github.error}
	<ErrorCard message={github.error} />
{/if}

  {#if github.user}
	<UserCard user={github.user} />
{/if}

  {#if languages.length}
    <LanguageStats {languages} />
  {/if}

  {#if insights}
    <GitHubInsights {insights} />
  {/if}

  {#if github.repos.length > 0}
    <section class="projects">
      <h2>
        Recent Repositories ({sortedRepos.length})
      </h2>

      <div class="repo-controls">
        <label for="sort"> Sort by: </label>

        <select id="sort" bind:value={sortBy}>
          <option value="stars"> Stars </option>

          <option value="updated"> Last Updated </option>

          <option value="name"> Name </option>
        </select>
      </div>

      <div class="repo-summary">
        Showing {sortedRepos.length} repositories sorted by {sortBy}
      </div>

      <div class="project-grid">
        {#each sortedRepos as repo}
          <RepoCard {repo} />
        {/each}
      </div>
    </section>
  {/if}
</main>
