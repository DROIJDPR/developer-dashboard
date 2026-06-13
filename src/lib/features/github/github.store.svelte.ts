import { getGitHubUser, getGitHubRepos } from './github.service';

import type {
	GitHubUser,
	GitHubRepo
} from './github.types';

export class GitHubStore {
	user = $state<GitHubUser | null>(null);

	repos = $state<GitHubRepo[]>([]);

	isLoading = $state(false);

	error = $state('');

	async searchUser(username: string) {
		try {
			this.error = '';
			this.isLoading = true;

			this.user = null;
			this.repos = [];

			const [userData, repoData] =
				await Promise.all([
					getGitHubUser(username),
					getGitHubRepos(username)
				]);

			this.user = userData;
			this.repos = repoData;
		} catch {
			this.error = 'User not found';

			this.user = null;
			this.repos = [];
		} finally {
			this.isLoading = false;
		}
	}
}

export const githubStore =
	new GitHubStore();