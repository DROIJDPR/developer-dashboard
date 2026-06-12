import { browser } from '$app/environment';

class ThemeStore {
	theme = $state<'light' | 'dark'>('dark');

	constructor() {
		if (!browser) return;

		const saved = localStorage.getItem('theme');

		if (saved === 'light' || saved === 'dark') {
			this.theme = saved;
			document.documentElement.dataset.theme = saved;
		}
	}

	toggle() {
		this.theme = this.theme === 'dark'
			? 'light'
			: 'dark';

		document.documentElement.dataset.theme = this.theme;

		localStorage.setItem('theme', this.theme);
	}
}

export const themeStore = new ThemeStore();