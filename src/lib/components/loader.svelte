<script>
	import { onMount } from 'svelte';

	var alphaEffect = true;
	var alphaStart = 1;
	var scaleFactor = 4.8; // by volume with 8 circs at 16px rad
	var initialScale = 0.6;
	var finalScale = initialScale * scaleFactor;
	var offset = 1 / 20;
	var travel = 150;

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
		TweenMax.set('.ellipse', { transformOrigin: '50% 50%' });

		// @ts-ignore
		var tl = new TimelineMax({ repeat: -1 });

		tl.fromTo(
			'.ellipses',
			3.5,
			{ x: -travel },
			// @ts-ignore
			{ x: travel, ease: Linear.easeNone }
		)
			.staggerFromTo(
				'.ellipse',
				2.5,
				{ x: -350, autoAlpha: alphaStart },
				{
					x: 350,
					autoAlpha: 1,
					// @ts-ignore
					ease: SlowMo.ease.config(0.25, 1.0, false),
					transformOrigin: '50% 50%'
				},
				offset,
				'-=3.4'
			)
			.staggerFromTo(
				'.ellipse',
				1.75,
				{ scale: initialScale },
				// @ts-ignore
				{ scale: finalScale, ease: SlowMo.ease.config(0, 1, true), yoyo: true },
				offset,
				'-=3.0'
			);

		tl.eventCallback('onUpdate', function () {});
	});
</script>

<svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 601 401">
	<!-- from  https://codepen.io/Ranjithkumar10/pen/bwPXXp   -->
	<defs>
		<filter id="goo" color-interpolation-filters="sRGB">
			<feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
			<feColorMatrix
				in="blur"
				mode="matrix"
				values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 8 -7"
				result="goo"
			/>
			<feBlend in="SourceGraphic" in2="goo" />
		</filter>
	</defs>
	<rect class="bg" x="0" y="0" width="600" height="400" fill="transparent" />
	<g class="ellipses" filter="url(#goo)">
		<!-- <ellipse class="ellipse" cx="300" cy="200" rx="16" ry="16" fill="rgba(8, 110, 149, 1.000)"/> -->
		<ellipse class="ellipse" cx="300" cy="200" rx="16" ry="16" fill="rgba(0, 150, 176, 1.000)" />
		<ellipse class="ellipse" cx="300" cy="200" rx="16" ry="16" fill="rgba(48, 175, 227, 1.000)" />
		<!-- <ellipse class="ellipse" cx="300" cy="200" rx="16" ry="16" fill="rgba(8, 96, 130, 1.000)"/>
     <ellipse class="ellipse" cx="300" cy="200" rx="16" ry="16" fill="rgba(8, 110, 149, 1.000)"/> -->
		<!-- <ellipse class="ellipse" cx="300" cy="200" rx="16" ry="16" fill="rgba(0, 150, 176, 1.000)"/> -->
		<ellipse class="ellipse" cx="300" cy="200" rx="16" ry="16" fill="rgba(8, 96, 130, 1.000)" />
		<!-- <ellipse class="ellipse" cx="300" cy="200" rx="16" ry="16" fill="rgba(8, 110, 149, 1.000)"/>  -->
	</g>
</svg>
