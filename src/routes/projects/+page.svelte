<script lang="ts">
	import { projects } from '$lib/data/projects';
</script>

<h1>Projects</h1>

<div class="projects-grid">
	{#each projects as project}
		<div class="project-card">
			<div class="project-header">
				<h2>{project.name}</h2>

				<span class="project-status">
					{project.status}
				</span>
			</div>

			<p>{project.description}</p>

			<div class="project-meta">
				<span>
					Version {project.version}
				</span>
			</div>
		</div>
	{/each}
</div>