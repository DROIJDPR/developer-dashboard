<script lang="ts">
	let { message } = $props<{
		message: string;
	}>();
</script>

<div class="error-card">
	<h3>⚠️ Something went wrong</h3>

	<p>{message}</p>
</div>