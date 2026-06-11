<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import StatCard from "$lib/components/StatCard.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
</script>

<Header />

<main>
  <section class="hero">
    <h1>Welcome back, Juan 👋</h1>
    <p>Your developer workspace.</p>
  </section>

  <section class="stats">
    <StatCard title="Repositories" value={12} />
    <StatCard title="Stars" value={157} />
    <StatCard title="Forks" value={23} />

    <section class="projects">
      <h2>Recent Projects</h2>

      <div class="project-grid">
        <ProjectCard
          name="Developer Dashboard"
          description="Dashboard built with SvelteKit and TypeScript."
          tech="SvelteKit"
          updated="Today"
        />

        <ProjectCard
          name="Portfolio Website"
          description="Personal portfolio showcasing projects and skills."
          tech="TypeScript"
          updated="Yesterday"
        />
      </div>
    </section>
  </section>
</main>