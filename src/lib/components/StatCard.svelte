<script lang="ts">
	let { title, value } = $props<{
		title: string;
		value: string | number;
	}>();
</script>

<div class="card">
	<p>{title}</p>
	<h2>{value}</h2>
</div>

<style>
	.card {
		padding: 1.5rem;
		border-radius: 16px;
		border: 1px solid #27272a;
		background: #18181b;
	}

	p {
		margin: 0;
		color: #a1a1aa;
	}

	h2 {
		margin-top: 0.5rem;
	}
</style>