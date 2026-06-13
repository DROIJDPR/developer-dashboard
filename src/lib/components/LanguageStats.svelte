<script lang="ts">
  import type { LanguageStat } from "$lib/types/github";

  const languageColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f7df1e",
    Python: "#3776ab",
    Go: "#00add8",
    Rust: "#dea584",
    Java: "#ed8b00",
    CSS: "#1572b6",
    HTML: "#e34f26",
    PHP: "#777bb4",
    C: "#a8b9cc",
    "C++": "#00599c",
  };

  let { languages } = $props<{
    languages: LanguageStat[];
  }>();
</script>

<section class="languages">
  <h2>Top Languages</h2>

  {#each languages as language}
    <div class="language-item">
      <div class="language-header">
        <span class="language-name">
          <span
            class="language-dot"
            style={`background:${languageColors[language.name] ?? "#3b82f6"}`}
          ></span>

          {language.name}
        </span>

        <span>{language.percentage}%</span>
      </div>

      <div class="language-bar">
        <div
          class="language-fill"
          style={`
			width:${language.percentage}%;
			background:${languageColors[language.name] ?? "#3b82f6"};
		`}
        ></div>
      </div>
    </div>
  {/each}
</section>
