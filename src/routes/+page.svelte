<script lang="ts">
import { projects } from '$lib/data/projects';
import { skills } from '$lib/data/skills';

 const stats = [
	{
		title: 'Projects',
		value: String(projects.length),
		description: 'Tracked projects.',
		href: '/projects'
	},
	{
		title: 'Skills',
		value: String(skills.length),
		description: 'Skills currently tracked.',
		href: '/learning'
	},
	{
		title: 'GitHub',
		value: 'Ready',
		description: 'GitHub analytics module.',
		href: '/github'
	},
	{
		title: 'Theme',
		value: 'Dark',
		description: 'Current dashboard appearance.',
		href: '/settings'
	}
];

const currentProject = projects[0] ?? null;
</script>

<section class="dashboard-home">
  <div class="hero">
    <h1>Welcome back, Juan 👋</h1>

    <p>
      Track your projects, learning journey and GitHub activity from one place.
    </p>
  </div>

  <div class="stats-grid">
    {#each stats as stat}
      <a
        href={stat.href}
        class="stat-overview-card"
      >
        <span class="stat-label">
          {stat.title}
        </span>

        <h2>
          {stat.value}
        </h2>

        <p>
          {stat.description}
        </p>
      </a>
    {/each}
  </div>

  {#if currentProject}
	<section class="current-focus">
		<h2>Current Focus</h2>

		<div class="focus-card">
			<div class="project-header">
				<h3>{currentProject.name}</h3>

				<span class="project-status">
					{currentProject.status}
				</span>
			</div>

			<p>
				{currentProject.description}
			</p>

			<div class="project-meta">
				Version {currentProject.version}
			</div>
		</div>
	</section>
{/if}

  <section class="quick-actions">
    <h2>Quick Actions</h2>

    <div class="actions-grid">
      <a href="/github"> Open GitHub Analytics </a>

      <a href="/projects"> View Projects </a>

      <a href="/learning"> Continue Learning </a>
    </div>
  </section>
</section>
