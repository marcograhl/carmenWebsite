<script>
	import { i } from '@inlang/sdk-js';
	import HeroWrapper from "$blocks/HeroWrapper.svelte"
</script>


<HeroWrapper>
	<div class="sidebar">
		<div class="headline">
			<h1>{@html i('Startseite.heading')}</h1>
			<p>{i('Startseite.subheading')}<p>
		</div>
	</div>
</HeroWrapper>


<style lang="postcss">

	
</style>
