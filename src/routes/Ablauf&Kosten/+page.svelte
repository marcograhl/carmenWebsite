<script>
  import HeroWrapper from "$blocks/HeroWrapper.svelte";
  import {i} from '@inlang/sdk-js';
</script>



<HeroWrapper>
  <h1 class="title">
    {i('Ablauf.title')}
  </h1>
  <article class="">
    <p>{@html i('Ablauf.p_1')}</p>
    <div class="">
      <div></div>
      <q class="">{i('Ablauf.q_1')}</q>
    </div>
    <h2>{i('Ablauf.h2_1')} </h2>
    <p>{i('Ablauf.p_2')}</p>
    <h2>{i('Ablauf.h2_2')} </h2>
    <p>{i('Ablauf.p_3')}</p>
    <p></p>
  </article>
</HeroWrapper>



<style lang="postcss">
   

</style>

