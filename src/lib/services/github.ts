import type { GitHubUser } from '$lib/types/github';

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