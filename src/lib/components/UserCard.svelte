<script lang="ts">
	import type { GitHubUser } from '$lib/types/github';

	let { user } = $props<{
		user: GitHubUser;
	}>();
</script>

<div class="user-card">
	<img
		src={user.avatar_url}
		alt={user.login}
		width="100"
		height="100"
	/>

	<h2>{user.name ?? user.login}</h2>

	<p>{user.bio}</p>

	<div class="stats">
		<span>Repos: {user.public_repos}</span>
		<span>Followers: {user.followers}</span>
		<span>Following: {user.following}</span>
	</div>
</div>