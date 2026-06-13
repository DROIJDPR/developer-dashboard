<script lang="ts">
	const links = [
		{
			name: 'Dashboard',
			href: '/'
		},
		{
			name: 'GitHub',
			href: '/github'
		},
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'Learning',
			href: '/learning'
		},
		{
			name: 'Settings',
			href: '/settings'
		}
	];
</script>

<nav class="sidebar">
	<h2>Developer Dashboard</h2>

	{#each links as link}
		<a href={link.href}>
			{link.name}
		</a>
	{/each}
</nav>