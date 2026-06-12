<script lang="ts">
	import type { GitHubRepo } from '$lib/types/github';

	let { repo } = $props<{
		repo: GitHubRepo;
	}>();
</script>

<a
	class="repo-card"
	href={repo.html_url}
	target="_blank"
	rel="noopener noreferrer"
>
	<h3>{repo.name}</h3>

	{#if repo.description}
		<p>{repo.description}</p>
	{/if}

	<div class="repo-meta">
		<span>{repo.language ?? 'Unknown'}</span>

		<span>⭐ {repo.stargazers_count}</span>
	</div>
</a>