<script>
  import HeroWrapper from "$blocks/HeroWrapper.svelte";
  import {i} from '@inlang/sdk-js';
  import Title from "$components/title.svelte";
</script>



<HeroWrapper>
  <Title>
    {i('Ablauf.title')}
  </Title>
  <article class="flow">
    <p>{i('Ablauf.p_1')}</p>
    <div class="indent">
      <div></div>
      <q>{i('Ablauf.q_1')}</q>
    </div>
    <h2>{i('Ablauf.h2_1')} </h2>
    <p>{i('Ablauf.p_2')}</p>
    <h2>{i('Ablauf.h2_2')} </h2>
    <p>{i('Ablauf.p_3')}</p>
    <p></p>
  </article>
</HeroWrapper>



<style lang="postcss">
  q{
    display: block;
    max-width: 40ch;
    quotes: none;
    font-family: var(--font-serif-text);
    font-style: italic;
  }
   

</style>

