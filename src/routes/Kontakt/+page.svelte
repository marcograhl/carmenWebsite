
<script>
  import HeroWrapper from "$blocks/HeroWrapper.svelte";
  import {i} from '@inlang/sdk-js';
  import praxisImg from "$assets/praxis-img.jpeg";
</script>



<HeroWrapper>
  <h1 class="">
    {i('Kontakt.title')}
  </h1>
  <article class="">
    <p>{@html i('Kontakt.p_1')}</p>
    <h2>{i('Kontakt.h2_1')}</h2>
    <div class="" data-layout="50-50">
      <div class="">
        <p>{@html i('Kontakt.p_2')}</p>
        <div class="">
          <div></div>
          <div class="">
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
</style>
