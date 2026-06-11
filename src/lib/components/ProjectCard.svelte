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

<article class="project-card">
	<div class="project-content">
		<h3>{name}</h3>
		<p>{description}</p>
	</div>

	<div class="project-meta">
		<span>{tech}</span>
		<span>{updated}</span>
	</div>
</article>