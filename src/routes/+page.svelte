<script>
	import { i } from '@inlang/sdk-js';
	import HeroWrapper from '$blocks/HeroWrapper.svelte';
	import HeroImg from '$assets/heroimg.png';
	import PraxisSection from '$blocks/Praxis.svelte';
	import QuoteSection from '$blocks/Quote.svelte';
</script>

<HeroWrapper>
	<div class="sidebar">
		<div class="left center-xy">
			<div class="heading-wrapper flow">
				<h1 class="heading">
					{i('Startseite.title.0')}
					<span class="indent-line">
						{i('Startseite.title.1')}
					</span>
					{i('Startseite.title.2')}
				</h1>
				<p>{i('Startseite.subheading')}</p>
			</div>
		</div>
		<div class="right">
			<img class="mx-auto" src={HeroImg} alt="testing" width="322" height="400" />
		</div>
	</div>
</HeroWrapper>

<!-- <PraxisSection /> -->
<!-- <QuoteSection /> -->

<style lang="postcss">
	
	.heading-wrapper{
		margin-bottom: 1.5ex;

	}

	.heading{
		line-height: 1.1;
		@media(--above_large){
		display: grid;
    max-width: 28ch;
		}
	}

	img{
    width: clamp(14.5rem, 13.5rem + 12vw, 20.15rem);
	}



	

	 
	.indent-line {
		@media (--above_large) {
			text-indent: 1.5ch;
		}
	}

	.sidebar {
		--sidebar-vertical-alignment: flex-start;
		--sidebar-target-width: 32.5rem;
		--sidebar-content-min-width: 25%;
		--gutter: var(--space-m-3xl);
	}

	p {
    max-width: 55ch;
		font-size: var(--size-step-2);
    @media(--above_large){
     text-indent: 1ch;
  }
	}

	:global(.indent-line) {
		@media (--above_large) {
			text-indent: 1.5ch;
		}
	}
</style>
