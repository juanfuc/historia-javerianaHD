import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: "/historia-javerianaHD"
		},
		adapter: adapter({
			pages: "docs",
			precompress: false,
			strict: true,
			hydrate: true
		}),
		prerender: {
		  handleMissingId: () => true // Suppress missing ID error
		}
	}
};

export default config;