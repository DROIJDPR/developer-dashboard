export interface GitHubUser {
	login: string;
	name: string | null;
	avatar_url: string;
	bio: string | null;
	public_repos: number;
	followers: number;
	following: number;
	html_url: string;
}

export interface GitHubRepo {
	id: number;
	name: string;
	description: string | null;
	language: string | null;
	html_url: string;
	updated_at: string;
	stargazers_count: number;
}