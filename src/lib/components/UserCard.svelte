<script lang="ts">
	import type { GitHubUser } from '$lib/types/github';

	let { user } = $props<{
		user: GitHubUser;
	}>();
</script>

<div class="user-card">
	<img
		class="user-avatar"
		src={user.avatar_url}
		alt={user.login}
		width="96"
		height="96"
	/>

	<div class="user-info">
		<h2>{user.name ?? user.login}</h2>

		{#if user.bio}
			<p>{user.bio}</p>
		{/if}
	</div>

	<div class="stats">
		<div>
			<strong>{user.public_repos}</strong>
			<span>Repos</span>
		</div>

		<div>
			<strong>{user.followers}</strong>
			<span>Followers</span>
		</div>

		<div>
			<strong>{user.following}</strong>
			<span>Following</span>
		</div>
	</div>
</div>