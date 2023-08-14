<script context="module">
    //the session object destructured below comes from the hooks.js file above
    export async function load({ session }) {
        return {
            props: {
                //Add the boolean as a property of the __layout.svelte component
                overrideMobile: session.mobile,
            }
        }
    }
</script>

<script>
	// Device type
	import { width, mobile } from '$lib/utils/device';
	export let overrideMobile = true;
	$mobile = overrideMobile;

	// Modal
	import Modal from '$lib/components/Modal.svelte';
	import { modal } from '$lib/stores/store.js';

	// Page elements
	import responsive_devices from '$lib/images/responsive_devices.png';
	import Tagsbar from '$lib/components/Tagsbar.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import HeaderIcons from '$lib/components/HeaderIcons.svelte';

	// Styles
	import '$lib/css/box_ofer.css';
	import '$lib/css/layout.scss';

	// App Store
	import { page } from '$app/stores';

	let y;
</script>

<!-- {$modal.open} -->
<Modal />

<div class="layout-wrapper {y < 50 ? 'xvisible' : 'xhidden'}">
	<Navigation />

	<div id="cube-wrapper"><HeaderIcons /></div>
	

	<button on:click={() => ($modal.open = true)} />

	<section class="startPage">
		<div class="headerElements">
			<div class="responsiveDev">
				<div class=" border_hack" />
				<video muted class="video">
					<source src="anim-vp9-chrome.webm" type="video/webm" />
					This browser does not display the video tag.
				</video>
			</div>

			<!-- <img src={responsive_devices} class="responsiveDev" alt="" /> -->
		</div>

		<!-- {/* <Mouse /> */} -->
	</section>

	<section class="content pageContent">
		<div class="container max-w-4xl mx-auto m-8 relative">
			<!-- {$width}, {$mobile} -->
			<slot />
		</div>
	</section>

	{#if $page.url.pathname == '/realizacje' || $page.url.pathname == '/'}
		<Tagsbar />
	{/if}
</div>

<svelte:window bind:scrollY={y} />
