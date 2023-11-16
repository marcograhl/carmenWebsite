
<script>
  import HeroWrapper from "$blocks/HeroWrapper.svelte";
  import {i} from '@inlang/sdk-js';
  import praxisImg from "$assets/praxis-img.jpeg";
	import Title from "$components/title.svelte";
</script>



<HeroWrapper>
	<Title>
		{i('Kontakt.title')}
	</Title>
  <article class="adjust flow">
    <p>{@html i('Kontakt.p_1')}</p>
    <h2>{i('Kontakt.h2_1')}</h2>
    <div class="[ praxis grid ] [ text-step-1]" data-layout="50-50">
      <div>
        <img src={praxisImg} alt="" width="512" height="384">
      </div>
      <div class="flex flex-col justify-between">
        <p>{@html i('Kontakt.p_2')}</p>
        <div class="flow text-step-0 mt-s">
          <div></div>
          <div class="">
            <p class="">{@html i('Kontakt.p_4')}</p>
            <p class="mt-s">{@html i('Kontakt.p_3')}</p>
          </div>
        </div>
      </div>
    </div>
    <p></p>
  </article>
</HeroWrapper>

<style lang="postcss">

  .praxis{
   --gutter: var(--space-s-m);
  }
	:is(h2,h3) + * {
			--flow-space: 0.75em;
	}
</style>
