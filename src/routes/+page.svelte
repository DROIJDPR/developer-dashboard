<script lang="ts">
	const stats = [
		{
			title: 'GitHub',
			value: 'Analytics',
			description:
				'Explore profiles and repositories.'
		},
		{
			title: 'Projects',
			value: '3',
			description:
				'Active development projects.'
		},
		{
			title: 'Learning',
			value: '4',
			description:
				'Skills currently tracked.'
		},
		{
			title: 'Theme',
			value: 'Dark',
			description:
				'Current dashboard appearance.'
		}
	];
</script>

<section class="dashboard-home">
	<div class="hero">
		<h1>Welcome back, Juan 👋</h1>

		<p>
			Track your projects, learning journey
			and GitHub activity.
		</p>
	</div>

	<div class="stats-grid">
		{#each stats as stat}
			<div class="stat-overview-card">
				<span class="stat-label">
					{stat.title}
				</span>

				<h2>
					{stat.value}
				</h2>

				<p>
					{stat.description}
				</p>
			</div>
		{/each}
	</div>

	<section class="quick-actions">
		<h2>Quick Actions</h2>

		<div class="actions-grid">
			<a href="/github">
				Open GitHub Analytics
			</a>

			<a href="/projects">
				View Projects
			</a>

			<a href="/learning">
				Continue Learning
			</a>
		</div>
	</section>
</section>