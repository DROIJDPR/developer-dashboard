<script lang="ts">
	let { onSearch } = $props<{
		onSearch: (username: string) => void;
	}>();

	let username = $state('');
</script>

<form
	onsubmit={(e) => {
		e.preventDefault();
		onSearch(username);
	}}
>
	<input
		bind:value={username}
		type="text"
		placeholder="Search GitHub user..."
	/>

	<button type="submit">
		Search
	</button>
</form>