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