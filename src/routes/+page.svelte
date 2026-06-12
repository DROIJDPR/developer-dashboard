<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import UserCard from "$lib/components/UserCard.svelte";

  import { getGitHubUser } from "$lib/services/github";

  import type { GitHubUser } from "$lib/types/github";

  let user = $state<GitHubUser | null>(null);

  let isLoading = $state(false);

  let error = $state("");

  async function searchUser(username: string) {
    try {
      error = "";
      isLoading = true;

      user = await getGitHubUser(username);
    } catch {
      error = "User not found";
      user = null;
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
</main>
