<script lang="ts">
	import type { GitHubInsights } from '$lib/types/github';

	let { insights } = $props<{
		insights: GitHubInsights;
	}>();
</script>

<section class="insights">
	<h2>GitHub Insights</h2>

	<div class="insights-grid">
		<div class="insight-card">
			<h3>Most Used Language</h3>
			<p>{insights.mostUsedLanguage}</p>
		</div>

		<div class="insight-card">
			<h3>Repositories Analyzed</h3>
			<p>{insights.totalRepos}</p>
		</div>

		<div class="insight-card">
			<h3>Total Stars</h3>
			<p>{insights.totalStars.toLocaleString()}</p>
		</div>

		<div class="insight-card">
			<h3>Average Stars</h3>
			<p>{insights.averageStars.toLocaleString()}</p>
		</div>
	</div>
</section>