<script context="module">
	export async function load({ session }) {
		return {
			props: {
				overrideMobile: session.mobile
			}
		};
	}
</script>

<script>
	// Device type
	import { width, mobile } from '$lib/utils/device';
	export let overrideMobile = true;
	$mobile = overrideMobile;

	// Modal
	import Modal from '$lib/components/Modal.svelte';
	import { modal, three_state, portfolios_all } from '$lib/stores/store.js';

	// Tree
	import Three from '$lib/components/Three.svelte';

	// Page elements
	import Tagsbar from '$lib/components/Tagsbar.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Change from '$lib/components/change.svelte';
	// Styles
	import '$lib/css/box_ofer.css';
	import '$lib/css/layout.scss';

	// App Store
	import { page } from '$app/stores';
	import { tagsAll } from '$lib/stores/store.js';

	export let data; // Odbieramy dane z `load()` w `+layout.js`
	/* console.log('Data from layout', data); */
	// Sprawdzamy, czy dane tags są dostępne
	if (data && data.data && data.data.tags) {
		tagsAll.set(data.data.tags);
	}
	//portfolios_all
	if (data && data.data && data.data.portfolios) {
		portfolios_all.set(data.data.portfolios);
	}
	// log portfolios_all.get()
	console.log($portfolios_all);
	


	let y;
</script>

<!-- {$modal.open} -->
<Modal />
<!-- <Cange> -->
<div class="layout-wrapper {y < 50 ? 'xvisible' : 'xhidden'} ">
	<Three />

	<Navigation />

	<button on:click={() => ($modal.open = true)} />

	<section class="content pageContent">
		<div class="container max-w-4xl mx-auto m-8 relative">
			<!-- {$width}, {$mobile} -->
			<slot />
		</div>
	</section>

	{#if $page.url.pathname == '/realizacje' || $page.url.pathname == '/'}
		<!-- <Tagsbar /> -->
	{/if}
</div>
<!-- </Cange> -->


<ul class="menuinvisible">
	{#if $portfolios_all && Array.isArray($portfolios_all)}
		{#each $portfolios_all as elem}
			{#if elem && typeof elem === 'object' && elem.slug}
				<li>

					


					
					
					<a href="/realizacje/{elem.slug}" alt={elem.subtitle || ''}>{elem.title || 'Untitled'}</a>
				</li>
			{:else}
				<!-- Możesz tu dodać logowanie lub obsługę niepoprawnego elementu, jeśli to konieczne -->
				<!-- <li>Invalid portfolio item</li> -->
			{/if}
		{/each}
	{:else}
		<!-- Opcjonalnie: Coś do wyświetlenia, jeśli $portfolios_all nie jest (jeszcze) tablicą -->
		<!-- <li>Ładowanie portfolio...</li> -->
	{/if}
</ul>

<svelte:window bind:scrollY={y} />
