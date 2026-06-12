<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import UserCard from "$lib/components/UserCard.svelte";
  import RepoCard from '$lib/components/RepoCard.svelte';

  import { getGitHubUser, getGitHubRepos } from '$lib/services/github';

  import type { GitHubUser, GitHubRepo } from '$lib/types/github';

  let user = $state<GitHubUser | null>(null);
  let repos = $state<GitHubRepo[]>([]);

  let isLoading = $state(false);

  let error = $state("");

  async function searchUser(username: string) {
    try {
      error = "";
      isLoading = true;

      const [userData, repoData] = await Promise.all([
        getGitHubUser(username),
        getGitHubRepos(username)
      ]);

      user = userData;
      repos = repoData;
    } catch {
      error = "User not found";
      user = null;
      repos = [];
    } finally {
      isLoading = false;
    }
  }

  $effect(() => {
    searchUser('DROIJDPR');
  });
</script>

<Header />

<main>
	<section class="hero">
		<h1>GitHub Profile Explorer</h1>

		<p>
			Search any GitHub user and explore their profile.
		</p>
	</section>

	<SearchBar onSearch={searchUser} />

	{#if isLoading}
		<p>Loading...</p>
	{/if}

	{#if error}
		<p>{error}</p>
	{/if}

	{#if user}
		<UserCard {user} />
	{/if}

	{#if repos.length > 0}
		<section class="projects">
			<h2>Recent Repositories</h2>

			<div class="project-grid">
				{#each repos as repo}
					<RepoCard {repo} />
				{/each}
			</div>
		</section>
	{/if}
</main>
