<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{
			label: 'Overview',
			href: '/'
		},
		{
			label: 'GitHub',
			href: '/github'
		},
		{
			label: 'Projects',
			href: '/projects'
		},
		{
			label: 'Learning',
			href: '/learning'
		}
	];
</script>

<header class="header">
	<div class="logo">
		Developer Dashboard
	</div>

	<nav class="nav">
		{#each links as link}
			<a
				href={link.href}
				class:active={
					page.url.pathname ===
					link.href
				}
			>
				{link.label}
			</a>
		{/each}
	</nav>

	<div class="profile">
		JP
	</div>
</header>