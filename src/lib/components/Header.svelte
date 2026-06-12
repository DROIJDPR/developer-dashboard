<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import { themeStore } from '$lib/stores/theme.svelte';
</script>

<header class="header">
	<div class="logo">
		Developer Dashboard
	</div>

	<div class="header-actions">
		<Avatar initials="JP" />

		<button
			class="theme-btn"
			onclick={() => themeStore.toggle()}
		>
			{themeStore.theme === 'dark' ? '🌙' : '☀️'}
		</button>
	</div>
</header>