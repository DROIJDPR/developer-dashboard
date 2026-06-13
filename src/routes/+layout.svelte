<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '$lib/styles/main.css'
	let { children } = $props();
</script>

<Sidebar />

{@render children?.()}