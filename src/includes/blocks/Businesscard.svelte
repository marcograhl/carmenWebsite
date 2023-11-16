<script>
  import {i} from '@inlang/sdk-js';
  import imgCardPlant from '$assets/card-plant.png'
</script>

<article class="praxis region">
  <address class="card offset font-base not-italic mx-auto">
    <div class="card-row">
      <img class="self-center card-plant" src={imgCardPlant} alt="deco" width="53" height="104">
      <p class="inline-block self-center">
        <span class="block card-row_title">{@html i('Startseite.card.0')}</span>
        <span class="text-step-1">{@html i('Startseite.card.1')}</span>
      </p>
    </div>
    <div class="card-row">
      <span class="card-row_title">{i('Startseite.card.2')}</span>
      <a class="text-step-1" target='_blank' rel='noreferrer' href='https://www.google.com/maps/place/Psychologische+Privatpraxis+im+Bayerischen+Viertel+Carmen+Alvarez/@52.4869995,13.3383774,15z/data=!4m6!3m5!1s0x47a851faa4a2d3a3:0xba7343ea7b73ad4d!8m2!3d52.4869995!4d13.3383774!16s%2Fg%2F11sjgtq6tx?entry=ttu' >Bozener Str. 17, 10825 Berlin</a>
    </div>
    <div class="card-row">
      <span class="card-row_title">e&#8211;mail:</span>
      <a class="text-step-1" href="mailto:alvarez.carmenglo@gmail.com">alvarez.carmenglo@gmail.com</a>
    </div>
  </address>
</article>

<style lang="postcss">

  .card {
    overflow: hidden;
    width: 100%;
    border-radius: var(--border-radius);
    letter-spacing: 0.015em;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-2);
    white-space: nowrap;
    background-color: var(--green);
    

    @media (--above_small) {
      display: grid;
      width: max-content;
      align-content: center;
      grid-template-columns: max-content 1fr;
      column-gap: 0;
      column-gap: var(--space-s-l);
    }
  }

  .card-row:first-child{
    padding-block: var(--space-xs-s);
  }

   .card-row{
    padding-inline: var(--space-s-l);
  }

  .card > * + * {
    border-top: 1px solid var(--border-color);
    padding-block: var(--space-s);
  }


  .card-row{
    display: grid;
     grid-column: span 2;
    grid: inherit;
    align-items: baseline;
    grid-template-columns: subgrid;
  }

  .card-row_title{
    font-size: var(--size-step-2);
    letter-spacing: 0.05em;
    font-variant: all-petite-caps;
    letter-spacing: 0.05em;
  }

  .card-plant{
    position: relative;
    mix-blend-mode: multiply;
    justify-self: end;
    @media (--above_small) {
    right: 14px;
    justify-self: start;
    }

  }


</style>
