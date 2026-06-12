<script lang="ts">
	import { themeStore } from '$lib/stores/theme.svelte';
</script>

<header class="header">
	<div class="logo">
		Developer Dashboard
	</div>

	<button
		class="theme-btn"
		onclick={() => themeStore.toggle()}
	>
		{themeStore.theme === 'dark' ? '🌙' : '☀️'}
	</button>
</header>