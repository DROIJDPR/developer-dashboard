<script lang="ts">
	let {
		value = '',
		onSearch
	} = $props<{
		value?: string;
		onSearch: (username: string) => void;
	}>();

	let username = value;
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