import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	 server: {
		fs: {
			allow: ['C:\\Users\\chill\\Downloads\\multi-step-form-main\\multi-step-form-main']
		}
	 }
};

export default config;
