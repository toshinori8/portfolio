<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	var alphaEffect = true;
	var alphaStart = 1;
	var scaleFactor = 4.8; // by volume with 8 circs at 16px rad
	var initialScale = 0.6;


	// tMax = window.TweenMax;

	onMount(() => {
		if (alphaEffect) {
			alphaStart = 1;
		}
		// @ts-ignore
		TweenMax.set('svg', {
			visibility: 'visible'
		});
		// @ts-ignore
	
		// @ts-ignore
	
		
	});
</script>
<svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 601 401">
<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 300"> -->
    <defs>
   
        <clipPath id="ClipPath-1">
            <path fill="#ddd" d="M.9 0c0 1.4-0.4 2.5-0.9 2.5c-0.5 0-0.9-1.1-0.9-2.5c0-1.4 .4-2.5 .9-2.5c.5 0 .9 1.1 .9 2.5Z" transform="translate(16.2,18.1) translate(3.2,.2)" style="animation: 1.3s linear both ac6cu4bgu8u4hq2osoqylj66_t, 1.3s linear both ac6cu4bgu8u4hq2osoqylj66_d;"/>
        </clipPath>
        <clipPath id="ClipPath-2">
            <path fill="#ddd" d="M-8.5 0c0 1.9-8.2 1.9-12.5 1.9c-4.2 0-5.2 5.9-5.2-1.9c0-7.8 1 0 5.2 0c4.3 0 12.5-5.4 12.5 0Z" transform="translate(26.2,36.7)" style="animation: 1.3s linear both jh9nvmkk9z4eeec2kn9ac2vc_d;"/>
        </clipPath> 

        <clipPath id="ClipPath-3"/>
    </defs>
    <style>

		.loader{

			transform: scale(0.5);
		}
        @keyframes w4uvwtybllugaa3smfkk6xrf_t {
            0% {
                transform: translate(556.1px, 143.6px) scale(4.4, 4.4) translate(-1.4px, 0px);
            }
            100% {
                transform: translate(556.1px, 143.6px) scale(4.4, 4.4) translate(-1.4px, -25.1px);
            }
        }
        @keyframes w4uvwtybllugaa3smfkk6xrf_o {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes w4uvwtybllugaa3smfkk6xrf_h {
            0% {
                height: 2.9px;
            }
            100% {
                height: 46.4px;
            }
        }
        @keyframes iakpdz26sf4i82si4jp8bxyd_t {
            0% {
                transform: translate(625.7px, 405.4px) scale(4.4, 4.4) translate(-1.4px, -23.9px);
            }
            100% {
                transform: translate(625.7px, 153.5px) scale(4.4, 4.4) translate(-1.4px, -23.9px);
            }
        }
        @keyframes iakpdz26sf4i82si4jp8bxyd_o {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes tzf283tdux3vzmsyeoy5alkc_t {
            0% {
                transform: translate(589.1px, -111.9px) scale(4.4, 4.4) translate(-1.4px, -23.9px);
                animation-timing-function: cubic-bezier(0.3,.1,0.9,0);
            }
            38.462% {
                transform: translate(589.1px, 160.5px) scale(4.4, 4.4) translate(-1.4px, -23.9px);
            }
            100% {
                transform: translate(591.1px, 164.8px) scale(4.4, 4.4) translate(-1.4px, -23.9px);
            }
        }
        @keyframes tzf283tdux3vzmsyeoy5alkc_o {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes ac6cu4bgu8u4hq2osoqylj66_t {
            0% {
                transform: translate(19.5px, 18.3px);
            }
            30.769% {
                transform: translate(17.4px, 18.3px);
            }
            100% {
                transform: translate(16.8px, 18.3px);
            }
        }
        @keyframes ac6cu4bgu8u4hq2osoqylj66_d {
            0% {
                d: path('M.9, 0C.9, 1.4, 0.5, 2.5, 0, 2.5C-0.5, 2.5, -0.9, 1.4, -0.9, 0C-0.9, -1.4, -0.5, -2.5, 0, -2.5C.5, -2.5, 0.9, -1.4, 0.9, 0Z');
            }
            69.231% {
                d: path('M17, 0C17, 1.4, 0.5, 2.5, 0, 2.5C-0.5, 2.5, -17.4, 1.4, -17.4, 0C-17.4, -1.4, -0.5, -2.5, 0, -2.5C.5, -2.5, 17, -1.4, 17, 0Z');
            }
            84.615% {
                d: path('M18.4, 0C18.4, 1.4, -17.7, 9.1, -18.2, 9.1C-18.7, 9.1, -18.2, 1.4, -18.2, 0C-18.2, -1.4, 13.7, -14.7, 14.2, -14.7C14.6, -14.7, 18.4, -1.4, 18.4, 0Z');
            }
            100% {
                d: path('M19.1, 0C19.1, 1.4, -8.8, 23, -9.3, 23C-9.8, 23, -18.6, 1.4, -18.6, 0C-18.6, -1.4, 8, -22.4, 8.4, -22.4C8.9, -22.4, 19.1, -1.4, 19.1, 0Z');
            }
        }
        @keyframes jh9nvmkk9z4eeec2kn9ac2vc_d {
            0% {
                d: path('M-8.5, 0C-8.5, 1.9, -16.7, 1.9, -21, 1.9C-25.2, 1.9, -26.2, 7.8, -26.2, 0C-26.2, -7.8, -25.2, 0, -21, 0C-16.7, 0, -8.5, -5.4, -8.5, 0Z');
            }
            7.692% {
                d: path('M0, 0C1.8, 0.6, -16.7, 1.9, -21, 1.9C-25.2, 1.9, -26.2, 7.8, -26.2, 0C-26.2, -7.8, -25.2, 0, -21, 0C-16.7, 0, -9.4, -3.1, 0, 0Z');
            }
            46.154% {
                d: path('M8.1, 0C7.6, 1.8, -16.7, 1.9, -21, 1.9C-25.2, 1.9, -26.2, 7.8, -26.2, 0C-26.2, -7.8, -7.5, -15.8, -3.2, -15.8C1, -15.8, 13.7, -21.5, 8.1, 0Z');
            }
            69.231% {
                d: path('M9.7, 4.1C9.2, 6, -11.5, 13.1, -15.7, 13.1C-19.9, 13.1, -26.2, 7.8, -26.2, 0C-26.2, -7.8, -7.5, -15.8, -3.2, -15.8C1, -15.8, 15.2, -17.4, 9.7, 4.1Z');
            }
            76.923% {
                d: path('M10.2, 5.5C9.7, 7.3, -9.7, 16.9, -13.9, 16.9C-18.1, 16.9, -26.2, 7.8, -26.2, 0C-26.2, -7.8, -7.5, -15.8, -3.2, -15.8C1, -15.8, 15.7, -16, 10.2, 5.5Z');
            }
            100% {
                d: path('M10.4, 13.9C10.2, 15.8, -9.7, 16.9, -13.9, 16.9C-18.1, 16.9, -26.2, 7.8, -26.2, 0C-26.2, -7.8, -7.5, -15.8, -3.2, -15.8C1, -15.8, 15.1, -24.9, 10.4, 13.9Z');
            }
        }
        @keyframes xqymg0e2rfjdx1llghf7s35k_o {
            0% {
                opacity: 0;
                animation-timing-function: cubic-bezier(0.8,.2,0.8,.9);
            }
            69.231% {
                opacity: 1;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes pkqzcd8ikebzlc8f6kx5fdte_o {
            0% {
                opacity: 0;
            }
            53.846% {
                opacity: 0;
            }
            92.308% {
                opacity: 1;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes asxs3fq2sxj2mzju15b71eno_o {
            0% {
                opacity: 0;
            }
            84.615% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes ld1ijw38ci1hgpja700mwcta_o {
            0% {
                opacity: 0;
            }
            53.846% {
                opacity: 0;
            }
            76.923% {
                opacity: 1;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes y1wak8tu28i8gk57wesc0u98_o {
            0% {
                opacity: 0;
            }
            61.538% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes xpv4v8ye3bobnl8dzrxxvt6y_o {
            0% {
                opacity: 0;
            }
            30.769% {
                opacity: 0;
            }
            38.462% {
                opacity: 1;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes iqfbz2pxd7lkfaqfrk12vb0z_o {
            0% {
                opacity: 0;
            }
            7.692% {
                opacity: 0;
            }
            38.462% {
                opacity: 1;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes dzh442awf3ybt2p7kqcgxxw0_o {
            0% {
                opacity: 0;
            }
            46.154% {
                opacity: 0;
            }
            76.923% {
                opacity: 1;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes akeze5x5j9lqdlc1tr7tn4e5_o {
            0% {
                opacity: 0;
            }
            30.769% {
                opacity: 0;
            }
            76.923% {
                opacity: 1;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes xgekrwqo5pjmgitlde4lvza9_o {
            0% {
                opacity: 0;
            }
            30.769% {
                opacity: 1;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes uefjkoheqnwom93rk949vobt_o {
            0% {
                opacity: 0;
            }
            46.154% {
                opacity: 0;
            }
            76.923% {
                opacity: 1;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes e9y6vx0l9v8yc9ir2s9ptgyn_o {
            0% {
                opacity: 0;
            }
            23.077% {
                opacity: 0;
            }
            46.154% {
                opacity: 1;
            }
            100% {
                opacity: 1;
            }
        }
    </style>
    <rect class="st0" width="2.9" height="2.9" fill="#006c93" opacity="0" transform="translate(556.1,143.6) scale(4.4,4.4) translate(-1.4,0)" style="animation-delay: 13s; animation: 1.3s linear both w4uvwtybllugaa3smfkk6xrf_t, 1.3s linear both w4uvwtybllugaa3smfkk6xrf_o, 1.3s linear both w4uvwtybllugaa3smfkk6xrf_h;"/>
    <rect class="st1" width="2.9" height="47.9" fill="#0095af" opacity="0" transform="translate(519.6,143.6) scale(4.4,4.4) translate(-1.4,-23.9)"/>
    <rect class="st0" width="2.9" height="47.9" fill="#006c93" opacity="0" transform="translate(625.7,405.4) scale(4.4,4.4) translate(-1.4,-23.9)" style="animation-delay: 13s; animation: 1.3s linear both iakpdz26sf4i82si4jp8bxyd_t, 1.3s linear both iakpdz26sf4i82si4jp8bxyd_o;"/>
    <rect class="st1" width="2.9" height="47.9" fill="#0095af" opacity="0" transform="translate(589.1,-111.9) scale(4.4,4.4) translate(-1.4,-23.9)" style="animation-delay: 13s; animation: 1.3s linear both tzf283tdux3vzmsyeoy5alkc_t, 1.3s linear both tzf283tdux3vzmsyeoy5alkc_o;"/>
    <path d="M1.9 19.9v-0.6h4.1c3.7 0 7.5 0 11.3 0c1.1-0.1 2.2-0.1 3.4-0.1c3.9-0.2 8.1 .3 11.9-0.2c.5-4.2-0.8-8.4-3.7-11.7c-2.8-3.3-7-5.4-10.6-5.5c.1 .4 .1 1.6 .1 1.6c6.9 1 12.2 6.6 12.5 13.4v.6h-5.3c-4.4 .1-8.7 .1-13.2 .1h-4.3c-2.6 0-5.3 0-8.1 .1c-0.7 8.7 6.5 15 12.1 16.2l.5 .1c.8 .2 1.7 .5 2.5 .2c0-0.6 .1-1.2-0.2-1.6c-6.7-0.7-12.4-6.2-13-12.6Z" clip-path="url(#ClipPath-1)" transform="translate(72.1,117.5) scale(4.4,4.4) translate(-16.4,-18)"/>
    <path d="M24.6 36.7l-1.2-0.5l1.1-0.5c7-3.2 9.3-9.7 8.7-12.9c-0.4 0-0.8 0-1.3 0c-0.2 6.2-5 11.3-10.9 11.8l-0.6 .1l.1-0.6c-0.1-2.5-0.1-4.9-0.1-7.2v-3.9c-0.7-0.4-1-0.1-1.6-0.1c-0.2 7.7-0.2 18.8 .2 27.8c.5 0 1 .1 1.4 .1c.2-0.7 .2-1.5 .1-2.3c0-0.5 0-1.1 0-1.6c.1-1.2 .1-2.5 0-3.7c0-1.7-0.1-3.3 .2-5l.1-0.6l.6 .1c6.4 1.1 10.4 5.9 10.6 12.9c.8 .2 .6 .1 1.4-0.1c.4-1.6 0-3.3-0.6-5.3c-1.3-3.8-4-6.6-8.2-8.5Z" clip-path="url(#ClipPath-2)" transform="translate(114.8,200.2) scale(4.4,4.4) translate(-26.1,-36.8)"/>
    <path d="M63.6 35.8l-0.2-0.2h.4c1.5 .1 3 .1 4.5 .1c.5-0.9 .3-2 .2-2.8c-0.9-6-6.7-10.8-12.6-9.9c-0.2 4.1-0.1 21.4 .4 23.2c0 0 1 0 1.5-0.1c0-2.7 0-5.3 0-7.9v-2.5c1.8-0.1 3.4 .7 4.5 1.5c3.5 2.1 4.5 5.9 5 8.9c.9 .1 1.1 .2 1.8-0.3c-0.5-4.1-2.2-7.3-5.4-10Zm-5.9-1.9h-0.1v-9h.1c4.3-0.3 8.8 4.3 8.9 8.9v.1h-0.1c-2.9 0-5.8 0-8.8 0Z" opacity="0" transform="translate(274.9,190.3) scale(4.4,4.4) translate(-62.5,-34.6)" style="animation: 1.3s linear both xqymg0e2rfjdx1llghf7s35k_o;"/>
    <path d="M50.8 23c-0.4-0.1-0.6-0.1-1-0.1c-6.2 .5-11.1 5.7-11 11.8c.1 4-0.1 7.6 .1 11.6h1.5c0-3.6 0-6.9 0-10.4v-0.1h.1c2.9 0 6.1-0.1 8.9 .1h.1v.1c.2 3.5 0 6.9 .2 10.4c0 0 1.4-0.1 1.7-0.1l-0.1-23.2c-0.2-0.1-0.4-0.1-0.6-0.1Zm-1.2 10.9h-0.1c-2.9 .1-5.8 .1-8.8 .1h-0.1v-0.1c.2-5.2 5-9.2 9-9.1c0 2.1 0 9.1 0 9.1Z" opacity="0" transform="translate(198.6,190.7) scale(4.4,4.4) translate(-45.1,-34.6)" style="animation: 1.3s linear both pkqzcd8ikebzlc8f6kx5fdte_o;"/>
    <path d="M87.1 33.8c-4.5 0-9.7 .1-14-0.2h-0.1v-0.1c.8-5.4 3.8-8.4 9.5-9.1c0-0.5 0-1 0-1.6c-3.2-0.1-5.9 .9-8.2 3.4c-2.7 2.7-3.7 5.8-3 9.4c5.3 0 11.1-0.1 16.5 .1v.1c-0.7 4.7-2.8 6.7-8.7 8.6l.2 1.8c3.5-0.2 6.5-1.8 8.7-4.9c1.6-2.4 2.3-5.7 1.5-7.5c-0.8 0-1.5 0-2.4 0Z" opacity="0" transform="translate(354.1,190) scale(4.4,4.4) translate(-80.5,-34.5)" style="animation: 1.3s linear both asxs3fq2sxj2mzju15b71eno_o;"/>
    <path d="M105.6 22.7c-0.5 0-1 0-1.3 0c-1.3 6.2-4.5 9.5-9.3 9.8h-0.2v-0.2c0-3.1 0-6.2 0-9.5c-0.7 0-1 0-1.7 0c0 7.8 .2 15.5 0 23.3c0 0 1.4-0.1 1.7-0.1c.3-3.6-0.2-7.2 .2-10.7v-0.1c2.6 .4 4 1 5.8 2.5c2.2 2 3.3 4.7 3.3 8.2c.5-0.1 1.5-0.1 1.5-0.1c0-5.6-2.5-9.5-8-11.9l-0.2-0.1l.2-0.1c5.2-2.2 7.8-5.7 8-11Z" opacity="0" transform="translate(437.3,189.6) scale(4.4,4.4) translate(-99.4,-34.4)" style="animation: 1.3s linear both ld1ijw38ci1hgpja700mwcta_o;"/>
    <path d="M68.5 15.4c.3-0.6 .6-1.4 .2-2.1c-1.4-0.3-4.9-0.2-5.9 .3l.2 1.2c.7 0 3.9 0 3.9 0l-0.1 .1c-2.4 6.5-12 5-12.3-2c.2-8.6 11.7-8.8 12.9-0.7c.5 0 .9-0.1 1.4-0.1c0-0.4 0-0.7 0-1c-1.9-9.2-15.6-8.4-16 1.5c.4 9.1 12.4 11.3 15.7 2.8Z" opacity="0" transform="translate(267.9,94.2) scale(4.4,4.4) translate(-60.9,-12.7)" style="animation: 1.3s linear both y1wak8tu28i8gk57wesc0u98_o;"/>
    <path d="M109.8 20.1c0 .1 0 .3 0 .4c.5-0.1 1-0.1 1.5-0.2c-0.1-2.6 .1-5.2 0-7.9c0-1 0-2 0-3c0-1.6 0-3.3-0.2-4.9h-1.5v9.9l-0.1-0.2c-3.5-3.6-9.1-3.6-12.5 .1l-0.2 .2v-9.9h-1.5c-0.2 2-0.2 14 .2 15.9c.3 0 .8 0 1.1 0c.2-3.7 2.2-7.4 6.8-7.4h.1c3.8 0 6.4 3.4 6.3 7Z" opacity="0" transform="translate(454.2,93.2) scale(4.4,4.4) translate(-103.2,-12.5)" style="animation: 1.3s linear both xpv4v8ye3bobnl8dzrxxvt6y_o;"/>
    <path d="M42.9 20.7c2.4 0 4.2-0.1 4.9-0.4c-0.2-2.5-1.4-4.7-3.2-6.5l-0.2-0.2h.3c.9 0 1.7 0 2.7-0.2c.3-2-0.3-4.1-1.8-5.8c-1.8-2-4.2-3-6.5-2.6c-0.4 1.5-0.4 13.7 0 15.5c1 .1 2.4 .2 3.9 .2Zm3.1-1.6v.1h-5.8v-0.1c0-1.2 0-5.6 0-5.5h.1c3.1 .7 5 2.5 5.7 5.5Zm-5.9-12.5h.3c2.8 0 4.9 2.1 5.5 5.4v.1l-5.8 .1v-5.6Z" opacity="0" transform="translate(190.5,94.6) scale(4.4,4.4) translate(-43.3,-12.8)" style="animation: 1.3s linear both iqfbz2pxd7lkfaqfrk12vb0z_o;"/>
    <path d="M72.2 6.4h.1c5.8 1.1 5.7 5.7 5.5 10.1c0 1.1 0 2.3 0 3.4c0 .1 0 .3 .2 .5c0 .1 0 .1 0 .2l1.3 .1c.2-5.4 .4-10.6 0-16l-1.5 .2v2.6l-0.2-0.1c-3.8-2.5-4.2-2.9-7-2.4c0 5.7 0 10.8 0 15.7l1.7 .1v-14.4Z" opacity="0" transform="translate(330.1,94.3) scale(4.4,4.4) translate(-75,-12.8)" style="animation: 1.3s linear both dzh442awf3ybt2p7kqcgxxw0_o;"/>
    <path d="M93.2 19.1c-4.4-0.5-6.7-2.4-7-5.6v-0.1c0 0 5.8-0.1 7.1-0.1v-1.5h-7v-0.1c.5-3.4 3.4-5.7 7-5.6v-1.3c-3.1-0.5-6.2 1.1-7.8 4c-1.2 2.2-1.2 5.1 .2 7.6c1.7 2.9 4.7 4.6 7.6 3.8c0 0 0-0.9 0-1.1Z" opacity="0" transform="translate(391.6,93.5) scale(4.4,4.4) translate(-89,-12.6)" style="animation: 1.3s linear both akeze5x5j9lqdlc1tr7tn4e5_o;"/>
    <path d="M111.3 22.7c-0.4-0.7-0.9-0.6-1.7-0.2c0 7.8 .2 15.6 .2 23.7l1.7-0.1v-4.3c-0.2-6.5-0.2-12.9-0.2-19.1Z" opacity="0" transform="translate(486.4,188.7) scale(4.4,4.4) translate(-110.5,-34.2)" style="animation: 1.3s linear both xgekrwqo5pjmgitlde4lvza9_o;"/>
    <path d="M82.8 20.6l.2 .1c.3-2.2 .2-14.4 0-15.9c-0.6-0.2-0.9-0.1-1.5 0c0 2.8 .1 15.8 .1 15.8c.5 0 .9 0 1.2 0Z" opacity="0" transform="translate(362.5,94.1) scale(4.4,4.4) translate(-82.4,-12.7)" style="animation: 1.3s linear both uefjkoheqnwom93rk949vobt_o;"/>
    <path d="M49.9 4.8c-0.2 2.2-0.1 14.4 .2 16c.3 0 .7 0 1.3-0.1c0-5.3-0.1-10.5-0.1-15.8l-1.4-0.1Z" opacity="0" transform="translate(222.7,94.6) scale(4.4,4.4) translate(-50.6,-12.8)" style="animation: 1.3s linear both e9y6vx0l9v8yc9ir2s9ptgyn_o;"/>
    <rect width="102.5" height="79" clip-path="url(#ClipPath-3)" transform="translate(.2,16)"/>
</svg>