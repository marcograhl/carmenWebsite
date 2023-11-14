<script>
  import HeroWrapper from "$blocks/HeroWrapper.svelte";
  import {i} from '@inlang/sdk-js';
  import ansatzImg from "$assets/ansatz-img.jpg"
</script>


<HeroWrapper>
  <h1 class="">
    {i('meinAnsatz.title')}
  </h1>
  <article class="">
    <p>{i('meinAnsatz.p_1')}</p>
    <p>{@html i('meinAnsatz.p_2')}</p>
    <p>{@html i('meinAnsatz.p_3')}</p>
    <div class="">
      <img class="" src={ansatzImg} alt={i('meinAnsatz.img_alt')} title="Carmen Alvarez" width="200" height="300">
    </div>
    <p>{@html i('meinAnsatz.p_4')}</p>
    <p>{@html i('meinAnsatz.p_5')}</p>
    <p>{i('meinAnsatz.p_6')}</p>
    <p>{@html i('meinAnsatz.p_7')}</p>
    <p>{@html i('meinAnsatz.p_8')}</p>
    <p></p>
  </article>
</HeroWrapper>
<style lang="postcss">
</style>


