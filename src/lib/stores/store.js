import { writable } from 'svelte/store';

<<<<<<< Updated upstream
export const modal = writable({ open: false, title: '', message: '', button: 'OK' , action: 'close'});

export const tag = writable("all");
export const portfolioCount = writable(1);
export const portfolios_all = writable({});

export const strapiURL          = '//strapi.adamkarski.art/';
export const strapiTags         = '//strapi.adamkarski.art/tags';
export const strapiPorfolios    = '//strapi.adamkarski.art/portfolios/';









=======
export const portfolioCount = writable(1);
export const portfolios_all = writable({});



export const body_color = writable('#193b48')
export const visibleMessage = writable('initial')
export const tag = writable('all')


export const strapiURL = '//strapi.adamkarski.art/';
export const strapiTags = '//strapi.adamkarski.art/tags';
export const strapiPorfolios = '//strapi.adamkarski.art/portfolios/';

export const modal = writable({
	open: false,
	title: 'Wystąpił błąd',
	message: '',
	button: 'OK',
	action: 'close'
});
>>>>>>> Stashed changes
