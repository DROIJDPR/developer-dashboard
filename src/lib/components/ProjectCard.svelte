<script lang="ts">
	let {
		name,
		description,
		tech,
		updated
	} = $props<{
		name: string;
		description: string;
		tech: string;
		updated: string;
	}>();
</script>

<div class="project-card">
	<div class="content">
		<h3>{name}</h3>
		<p>{description}</p>
	</div>

	<div class="meta">
		<span>{tech}</span>
		<span>{updated}</span>
	</div>
</div>

<style>
	.project-card {
		background: #18181b;
		border: 1px solid #27272a;
		border-radius: 16px;
		padding: 1.25rem;
		transition:
			transform 0.2s ease,
			border-color 0.2s ease;
	}

	.project-card:hover {
		transform: translateY(-2px);
		border-color: #3f3f46;
	}

	h3 {
		margin: 0;
		font-size: 1rem;
	}

	p {
		margin-top: 0.5rem;
		color: #a1a1aa;
		font-size: 0.9rem;
	}

	.meta {
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;
		font-size: 0.8rem;
		color: #71717a;
	}
</style>