import type {
	GitHubRepo,
	GitHubInsights,
	LanguageStat
} from './github.types';

export function calculateLanguages(
	repos: GitHubRepo[]
): LanguageStat[] {
	if (!repos.length) return [];

	const counts = new Map<string, number>();

	for (const repo of repos) {
		if (!repo.language) continue;

		counts.set(
			repo.language,
			(counts.get(repo.language) ?? 0) + 1
		);
	}

	const total = [...counts.values()]
		.reduce((a, b) => a + b, 0);

	return [...counts.entries()]
		.map(([name, count]) => ({
			name,
			count,
			percentage: Math.round(
				(count / total) * 100
			)
		}))
		.sort((a, b) => b.count - a.count);
}

export function calculateInsights(
	repos: GitHubRepo[],
	languages: LanguageStat[]
): GitHubInsights | null {
	if (!repos.length || !languages.length) {
		return null;
	}

	const totalStars = repos.reduce(
		(sum, repo) =>
			sum + repo.stargazers_count,
		0
	);

	return {
		mostUsedLanguage:
			languages[0].name,

		totalStars,

		averageStars: Math.round(
			totalStars / repos.length
		),

		totalRepos: repos.length
	};
}

export function sortRepositories(
	repos: GitHubRepo[],
	sortBy: 'stars' | 'updated' | 'name'
): GitHubRepo[] {
	const sorted = [...repos];

	switch (sortBy) {
		case 'stars':
			return sorted.sort(
				(a, b) =>
					b.stargazers_count -
					a.stargazers_count
			);

		case 'updated':
			return sorted.sort(
				(a, b) =>
					new Date(
						b.updated_at
					).getTime() -
					new Date(
						a.updated_at
					).getTime()
			);

		case 'name':
			return sorted.sort((a, b) =>
				a.name.localeCompare(b.name)
			);

		default:
			return sorted;
	}
}