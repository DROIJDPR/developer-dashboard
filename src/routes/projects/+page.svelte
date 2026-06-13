<script lang="ts">
	const projects = [
		{
			name: 'Developer Dashboard',
			description:
				'Personal dashboard built with SvelteKit.',
			status: 'In Progress'
		},
		{
			name: 'Portfolio Website',
			description:
				'Personal portfolio deployed on Vercel.',
			status: 'Live'
		},
		{
			name: 'Atrapa Esfera',
			description:
				'Arcade-style game project.',
			status: 'Prototype'
		}
	];
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