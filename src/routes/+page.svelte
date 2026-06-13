<script lang="ts">
	const modules = [
		{
			name: 'GitHub Analytics',
			href: '/github',
			description: 'Analyze GitHub profiles and repositories.'
		},
		{
			name: 'Projects',
			href: '/projects',
			description: 'Manage and track development projects.'
		},
		{
			name: 'Learning',
			href: '/learning',
			description: 'Track skills and learning progress.'
		},
		{
			name: 'Settings',
			href: '/settings',
			description: 'Customize your dashboard.'
		}
	];
</script>

<h1>Developer Dashboard</h1>

<p>Choose a module to get started.</p>

<div class="dashboard-grid">
	{#each modules as module}
		<a
			href={module.href}
			class="dashboard-card"
		>
			<h2>{module.name}</h2>

			<p>{module.description}</p>
		</a>
	{/each}
</div>