<script lang="ts">
	let { initials = 'JP' } = $props<{
		initials?: string;
	}>();
</script>

<div class="avatar">
	{initials}
</div>