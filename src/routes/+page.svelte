<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import UserCard from "$lib/components/UserCard.svelte";
  import RepoCard from "$lib/components/RepoCard.svelte";
  import LanguageStats from "$lib/components/LanguageStats.svelte";
  import SkeletonProfile from "$lib/components/SkeletonProfile.svelte";
  import SkeletonRepo from "$lib/components/SkeletonRepo.svelte";
  import ErrorCard from "$lib/components/ErrorCard.svelte";
  import { getGitHubUser, getGitHubRepos } from "$lib/services/github";
  import GitHubInsights from "$lib/components/GitHubInsights.svelte";
  import type { GitHubInsights as GitHubInsightsType } from "$lib/types/github";
  import type { GitHubUser, GitHubRepo } from "$lib/types/github";

  let user = $state<GitHubUser | null>(null);
  let repos = $state<GitHubRepo[]>([]);

  let recentSearches = $state<string[]>(
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("recent-searches") ?? "[]")
      : [],
  );

  let sortBy = $state<"stars" | "updated" | "name">("stars");

  let languages = $derived.by(() => {
    if (!repos.length) return [];

    const counts = new Map<string, number>();

    for (const repo of repos) {
      if (!repo.language) continue;

      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    }

    const total = [...counts.values()].reduce((a, b) => a + b, 0);

    return [...counts.entries()]
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / total) * 100),
      }))
      .sort((a, b) => b.count - a.count);
  });

  let sortedRepos = $derived.by(() => {
    const sorted = [...repos];

    switch (sortBy) {
      case "stars":
        return sorted.sort((a, b) => b.stargazers_count - a.stargazers_count);

      case "updated":
        return sorted.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
        );

      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));

      default:
        return sorted;
    }
  });

  let insights = $derived.by<GitHubInsightsType | null>(() => {
    if (!repos.length || !languages.length) {
      return null;
    }

    const totalStars = repos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0,
    );

    return {
      mostUsedLanguage: languages[0].name,
      totalStars,
      averageStars: Math.round(totalStars / repos.length),
      totalRepos: repos.length,
    };
  });

  let isLoading = $state(false);

  let error = $state("");

  async function searchUser(username: string) {
    try {
      error = "";
      isLoading = true;
      user = null;
      repos = [];

      const [userData, repoData] = await Promise.all([
        getGitHubUser(username),
        getGitHubRepos(username),
      ]);

      user = userData;
      repos = repoData;
      recentSearches = [
        username,
        ...recentSearches.filter((search) => search !== username),
      ].slice(0, 5);
    } catch {
      error = "User not found";
      user = null;
      repos = [];
    } finally {
      isLoading = false;
    }
  }

  $effect(() => {
    searchUser("DROIJDPR");
  });

  $effect(() => {
    localStorage.setItem("recent-searches", JSON.stringify(recentSearches));
  });
</script>

<Header />

<main>
  <section class="hero">
    <h1>GitHub Profile Explorer</h1>

    <p>Search any GitHub user and explore their profile.</p>
  </section>

  <SearchBar onSearch={searchUser} />

  {#if recentSearches.length}
    <section class="recent-searches">
      <h3>Recent Searches</h3>

      <div class="search-tags">
        {#each recentSearches as search}
          <button
            type="button"
            class="search-tag"
            onclick={() => searchUser(search)}
          >
            {search}
          </button>
        {/each}
      </div>
    </section>
  {/if}

  {#if isLoading}
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

  {#if error}
    <ErrorCard message={error} />
  {/if}

  {#if user}
    <UserCard {user} />
  {/if}

  {#if languages.length}
    <LanguageStats {languages} />
  {/if}

  {#if insights}
    <GitHubInsights {insights} />
  {/if}

  {#if repos.length > 0}
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
