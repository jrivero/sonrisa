export const SITE = {
	name: 'Sonrisa',

	origin: 'https://astrowind.vercel.app',
	basePathname: '/',

	title: 'Sonrisa — Tu psicólogo online al instante 24/7',
	description: 'Tu psicólogo online al instante 24/7',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: true,
	postsPerPage: 4,

	blog: {
		disabled: true,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: true,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: true,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: true,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
