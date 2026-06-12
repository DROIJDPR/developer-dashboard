<script lang="ts">
	let { onSearch } = $props<{
		onSearch: (username: string) => void;
	}>();

	let username = $state('');
</script>

<form
	class="search-form"
	onsubmit={(e) => {
		e.preventDefault();
		onSearch(username);
	}}
>
	<input
		class="search-input"
		bind:value={username}
		type="text"
		placeholder="Search GitHub username..."
	/>

	<button
		class="search-button"
		type="submit"
	>
		Search
	</button>
</form>