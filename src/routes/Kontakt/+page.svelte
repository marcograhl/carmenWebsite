
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
    <div class="[ praxis grid ] [ text-step-0 ]" data-layout="50-50">
      <div class="flow">
        <p>{@html i('Kontakt.p_2')}</p>
        <div class="indent">
          <div></div>
          <div class="flow">
            <p class="">{@html i('Kontakt.p_4')}</p>
            <p class="">{@html i('Kontakt.p_3')}</p>
          </div>
        </div>
      </div>
      <div>
        <img src={praxisImg} alt="" width="512" height="384">
      </div>
    </div>
    <p></p>
  </article>
</HeroWrapper>

<style lang="postcss">

  .praxis{
   --gutter: var(--space-s-m);
  }
</style>
