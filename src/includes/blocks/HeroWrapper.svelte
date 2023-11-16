<section class="hero wrapper pb-l-xl">
  <div class="hero-inner">
    <slot/>
  </div>
</section>


<style lang="postcss">
  .hero{
    @media(--below_large){
      --content-max-width: 55rem;
    }
  }

  .hero-inner{
    background-color: var(--green);
    min-height: 23.25rem;
    border-radius: none;
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: var(--space-l) var(--space-m);


    @media(--above_small){
    padding: var(--space-l-xl) var(--space-m-3xl);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    border: 1px solid var(--border-color);
    margin-inline: auto;
    width: 100%;
    transform: initial;
  }

  }

</style>
