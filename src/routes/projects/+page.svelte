<script lang="ts">
	import { projects } from '$lib/data/projects';
</script>

<h1>Projects</h1>

<div class="projects-grid">
	{#each projects as project}
		<div class="project-card">
			<h2>{project.name}</h2>

			<p>{project.description}</p>

			<span>{project.status}</span>
		</div>
	{/each}
</div>