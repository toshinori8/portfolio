<svelte:head>
	<title>Realizacje - Zbigniew Adam Karski</title>
	<meta name="description" content="Realizacje" />
</svelte:head>


<script>
	import Loader from "$lib/components/loader.svelte";
	import { fade } from 'svelte/transition';
	import { fly } from 'svelte/transition'
	import moreinfo from '$lib/images/moreinfo.svg';
	let visible = false;
	let loadingDataState = true;
	let src;

	async function getPortfolioItems() {
	  	let response = await fetch("//strapi.adamkarski.art/portfolios/");
	  		let portfolios = await response.json();
	  	return portfolios;
		}
	let promise = getPortfolioItems();

	function preload(src) {
	return new Promise(function(resolve) {
		let img = new Image()
		img.onload = resolve
		img.src = src
	})
	}
	
</script>


<section class="section" transition:fade>
	<div class="mx-auto m-8 relative sm:w-auto p-20">
		<div class="flex flex-wrap flex-table">
			
	
	{#await promise}	
			   {#if loadingDataState}
			   <Loader />
      {/if}

		

	{:then item}
	

		{#each item as item}

		
		<div class="w-full p-2 rounded lg:w-1/2 md:w-full xl:w-1/3 item" >

		<div style="transform: translateY(150px) translateZ(0px);">
			<div style="display: none;">{src = "//strapi.adamkarski.art/"}{src=src+item.miniatura.url}</div>
		
			<div class="coverImage">
			
			{#await preload(src) then _}
			<a class="" href="/realizacje/{item.slug}">
			<img {src} in:fly alt="{item.title}">
		</a>
		  {/await}	
		
			</div>

				<div class=" box_ofer shadow-xl rounded-xl">
					<div class=" content rounded-xl">
						
						<div class=" backgr rounded-md" />
						<div class=" texts rounded-md">
							<div class=" p-3 title">
								<h3 class=" font-semibold text-xl leading-6 my-2">{item.title}</h3>
								<p class=" paragraph-normal opis">
									{item.subtitle}
								</p>
							</div>
						</div>
						<div class=" flex items-center icons">
							
							<div class="button_">
								<a href="/realizacje/{item.slug}">
										<button
											class="bg-white text-black px-1 py-2 m-2 rounded-md pl-3"
											style="transform: none;"
										>
										
										<img alt=""src={moreinfo} class="w10 h10" />
										
										</button>
								</a>
							</div>
							
							<ul class=" list-none flex">

							
								{#each item.tags as tag}


								<li class="tag_icon">
									<img alt="{tag.tag_name}"
										src="//strapi.adamkarski.art/icons/{tag.tag_name}.svg"
										class=" h-10 w-10 m-0 p-1 hover:bg-gray-100"
									/>
								</li>

							

							{/each}

							
								
							</ul>
							
							
							
							
						</div>
						
					</div>
				</div>
			</div>
		</div>


	
		{/each}
	{:catch error}

		<p style="color: red">{error.message}</p>




	{/await}









	
		
		</div>
	</div>
</section>
