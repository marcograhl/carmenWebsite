<script>
	import { i } from '@inlang/sdk-js';
	import HeroWrapper from "$blocks/HeroWrapper.svelte";
	import HeroImg from "$assets/heroimg.png";
	import PraxisSection from "$blocks/Praxis.svelte";
	import QuoteSection from '$blocks/Quote.svelte';
</script>


<HeroWrapper>
	<div class="sidebar">
		<div class="headline">
			<h1>{@html i('Startseite.heading')}</h1>
			<p>{i('Startseite.subheading')}<p>
		</div>
		<div class="img-wrapper">
        <img class="mx-auto" src={HeroImg} alt="testing" width="322" height="400">
		</div>
	</div>
</HeroWrapper>

<PraxisSection/>
<QuoteSection/>




<style lang="postcss">

	
</style>
