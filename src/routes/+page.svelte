<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import StatCard from '$lib/components/StatCard.svelte';
</script>

<Header />

<main>
	<section class="hero">
		<h1>Welcome back, Juan 👋</h1>
		<p>Your developer workspace.</p>
	</section>

	<section class="stats">
		<StatCard title="Repositories" value={12} />
		<StatCard title="Stars" value={157} />
		<StatCard title="Forks" value={23} />
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family:
			Inter,
			system-ui,
			sans-serif;
		background: #09090b;
		color: white;
	}

	main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.hero {
		margin-bottom: 2rem;
	}

	.hero h1 {
		font-size: clamp(2rem, 4vw, 4rem);
		margin-bottom: 0.5rem;
	}

	.hero p {
		color: #a1a1aa;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1rem;
	}
</style>