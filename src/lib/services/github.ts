import type { GitHubUser, GitHubRepo  } from '$lib/types/github';

export async function getGitHubRepos(
	username: string
): Promise<GitHubRepo[]> {
	const response = await fetch(
		`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
	);

	if (!response.ok) {
		throw new Error('Repositories not found');
	}

	return response.json();
}

export async function getGitHubUser(
	username: string
): Promise<GitHubUser> {
	const response = await fetch(
		`https://api.github.com/users/${username}`
	);

	if (!response.ok) {
		throw new Error('User not found');
	}

	return response.json();
}
