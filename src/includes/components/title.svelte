<h1 class="title">
  <slot />

</h1>


<style lang="postcss">
  .title{
  position: relative;
  margin-bottom: 0.5em;
  @media(--above_small){
    &::before{
    content: "";
    position: absolute;
    display: inline-block;
    align-items: center;
    width: calc(var(--space-s-2xl) + 4px);
    height: clamp(4px, 0em + 0.5vw, 0.375rem);

    background-color: var(--color-nebula-950);
    top: 1.1ex;
    left: calc(-1 * var(--space-m-3xl));
    }
    }
  }


</style>


