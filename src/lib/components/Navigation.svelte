<svelte:options accessors />

<script>
	import logotype from '$lib/images/logotype.svg';
	import logotype_safari from '$lib/images/logotype_safari.svg';
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
	import { browser } from '$app/environment';
	import { scale, fade, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { tag, visibleMessage } from '$lib/stores/store.js';
    import { base } from '$app/paths';

// import messageIcon from '$lib/images/messageIcon.json'
	
	function fadeSlide(node, options) {
		const slideTrans = slide(node, options)
		return {
			delay: options.delay,
			duration: options.duration,
			css: t => `
				${slideTrans.css(t)}
				opacity: ${t};
				top:	${t};
			`
		};
	}


	let mobile = false;
	let safari = false;

	import { isMacSafari } from 'svelte-browser';
	import { onMount } from 'svelte';
	if (isMacSafari) {
		safari = true;
	} else {
		safari = false;
		let logotype = '../logotype_safari.svg';
	}

	function resetTags() {
		tag.set('all');
	}

	$: hamburger = mobile ? 'close-hamburguer' : '';


	function log(x) {
		console.log(x);
	}
	let animation;
	onMount(() => {
		animation.getLottie().addEventListener('complete', () => {
			animation.setLooping(false);
			animation.seek(195);
		});
	});

	function mouseLeave() {
		animation.play();
		animation.setLooping(false);
	}
	function mouseEnter() {
		animation.play();
		animation.setLooping(true);
	}

	function on_key_down(event) {
		if (event.repeat) return;

		// In the switch-case we're updating our boolean flags whenever the
		// desired bound keys are pressed.
		switch (event.key) {
			case 'Control':
				is_ctrl_down = true;

				// By using `preventDefault`, it tells the Browser not to handle the
				// key stroke for its own shortcuts or text input.
				//event.preventDefault();
				break;

			case 'h':
				is_h_down = true;

				//event.preventDefault();
				break;
		}

		// If both of boolean flags were truthy, that means our
		// keybind can be activated.
		if (is_ctrl_down && is_h_down) {
			on_bind();
		}
	}
</script>

<nav id="header" class="fixed w-full top-0 text-white lg:bg-opacity-100">
	<div
		class="visible_false w-full max-w-4xl container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
	>
		<div class="logo_div">
			<a href="{base}/realizacje" on:click={() => resetTags()}>
				{#if !safari}
					<img src={logotype} alt="Zbigniew Adam Karski" width="400" height="400" class="logo_animated" />
				{/if}

				{#if safari}
					<img src={logotype_safari} alt="Zbigniew Adam Karski" width="400" height="400" class="logo_animated" />
				{/if}
			</a>

			<div class="text-slogan">
				<p class="text-gray-700 text-4xl">Lepsza wersja Twojej strony</p>
			</div>
		</div>
		<div class="block lg:hidden pr-4">
			<a
				id="nav-toggle"
				on:click={() => (mobile = !mobile)}
				on:keypress={() => (mobile = !mobile)}
				class="button focus:outline-none focus:shadow-outline"
			>
				<div class="hamburguer {hamburger}">
					<div class="lines line-top" />
					<div class="lines line-mid" />
					<div class="lines line-bottom" />
				</div>
			</a>
		</div>
		<div
			class=" w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-opacity-0 text-black p-4 lg:p-0 z-20"
			id="nav-content"
		>
			<ul class="list-reset lg:flex justify-end flex-1 items-center NavMenuIcons">
				<!-- SEO LINKS FOR SITEMAP  -->

			
				

				<ul style="display: none;">
				<!-- {#if portfolios_all}
					{#each Object.entries(portfolios_all) as elem}
						<li>
							<a
								href="{base}/realizacje/{elem.slug}"
								target="_self"
								on:click={() => (mobile = !mobile)}
								class="mobileMenu_a"
								alt={elem.subtitle}
								>{elem.title}
							</a>
						</li>
					{/each}
				{/if} -->
				</ul>

				<li class="mr-3" style="display:{$visibleMessage}" in:fade out:scale>
					<a
						on:mouseleave={mouseLeave}
						on:mouseenter={mouseEnter}
						class="navlink mx-auto lg:mx-0 text-gray-500 font-bold mt-4 lg:mt-0 py-3 px-5 focus:outline-none"
						href="{base}/kontakt"
					>
						{#if browser}
							<LottiePlayer
								bind:this={animation}
								src="/images/messageIcon.json"
								autoplay={false}
								loop={true}
								controlsLayout={false}
								controls={false}
								defaultFrame={195}
								hover={true}
								renderer="svg"
								background="transparent"
								height={100}
								width={100}
							/>
						{/if}
					</a>
					<div class="stackInfo">Kontakt</div>
				</li>
			</ul>
		</div>
	</div>
</nav>

{#if mobile == true}
	<div class="mobileMenu" transition:scale={{ delay: 150, duration: 400, easing: quintOut }}>
		<div class="back">
			<div class="bg" />
			<div class="bg bg2" />
			<div class="bg bg3" />
		</div>
		<ul>
			<li class="menu_centered_mobile">
				<a draggable={false} selectable={false}
					href="{base}/realizacje"
					on:click={() => (mobile = !mobile)}
					class="mobileMenu_a"
					style=""
				>
					{#if browser}
						<LottiePlayer draggable={false} selectable={false}
							bind:this={animation}
							src="images/realizacje.json"
							autoplay={true}
							loop={false}
							controlsLayout={false}
							controls={false}
							defaultFrame={0}
							hover={false}
							renderer="svg"
							background="transparent"
							width={300}
							height={120}
						/>
					{/if}

					<span class="menu_title_mobile" in:fadeSlide={{delay:1700, duration:200}} out:fade>Realizacje</span>

				</a>
			</li>
			<li class="menu_centered_mobile">
				<a href="{base}/kontakt" on:click={() => (mobile = !mobile)} class="mobileMenu_a" draggable={false} selectable={false}>
				
					{#if browser}
						<LottiePlayer draggable={false} selectable={false}
							bind:this={animation}
							src="/images/messageIcon.json"
							autoplay={true}
							loop={false}
							controlsLayout={false}
							controls={false}
							defaultFrame={0}
							hover={false}
							renderer="svg"
							background="transparent"
							width={300}
							height={120}
						/>
					{/if}
				
					<span class="menu_title_mobile" in:fadeSlide={{delay:2700, duration:150}} out:fade draggable={false} selectable={false}>Kontakt</span>
				</a>
			</li>

			
		</ul>

		<div
			class="hamburguer {hamburger}"
			on:click={() => (mobile = !mobile)}
			on:keydown={() => mobile}
		>
			<div class="lines line-top white" />
			<div class="lines line-mid white" />
			<div class="lines line-bottom white" />
		</div>
	</div>
{/if}

<style>




	


	.menu_title_mobile{

		position: relative;
		top:80px;
	}
	
	.menu_centered_mobile {
		text-align: center;
		margin-bottom: 40px;
		display: inline-flex;
		padding:30px;
	}

	.logo_div {
		transform: scale(0.7);
		transition: all 0.5s ease;
	}

	.bg {
		animation: slide 7s ease-in-out infinite alternate;
		background-image: linear-gradient(-60deg, #016889 50%, #0095bd 50%);
		bottom: 0;
		left: -50%;
		opacity: 0.5;
		position: fixed;
		right: -50%;
		top: 0;
		z-index: -1;
	}

	.bg2 {
		animation-direction: alternate-reverse;
		animation-duration: 9s;
		filter: blur(18px);
	}

	.bg3 {
		filter: blur(18px);
		animation-duration: 13s;
	}

	@keyframes slide {
		0% {
			transform: translateX(-25%);
		}
		100% {
			transform: translateX(25%);
		}
	}
</style>
