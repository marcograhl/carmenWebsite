<script>
  import {i} from '@inlang/sdk-js';
  import imgCardPlant from '$assets/card-plant.png'
</script>

<article class="card business">
  <div class="inner">
    <address class="row">
      <div class="">
        <img class="self-center card-plant" src={imgCardPlant} alt="deco" width="53" height="104">
        <p class="">
          <span class="">{i('Startseite.card.0')}</span>
          <span class="">{i('Startseite.card.1')}</span>
        </p>
      </div>
      <div class="row">
        <span class="">{i('Startseite.card.2')}</span>
        <a class="" target='_blank' rel='noreferrer' href='https://www.google.com/maps/place/Psychologische+Privatpraxis+im+Bayerischen+Viertel+Carmen+Alvarez/@52.4869995,13.3383774,15z/data=!4m6!3m5!1s0x47a851faa4a2d3a3:0xba7343ea7b73ad4d!8m2!3d52.4869995!4d13.3383774!16s%2Fg%2F11sjgtq6tx?entry=ttu' >Bozener Str. 17, 10825 Berlin</a>
      </div>
      <div class="row">
        <span class="">e&#8211;mail:</span>
        <a class="" href="mailto:alvarez.carmenglo@gmail.com">alvarez.carmenglo@gmail.com</a>
      </div>
    </address>
  </div>
</article>


<style lang="postcss">
  .card{
     background-color: var(--green);
     border: 1px solid var(--border-color);
     border-radius: var(--border-radius);
  }

.business{
  @media (--above_small) {
    display: grid;
    align-content: center;
    grid-template-columns: max-content 1fr;
    column-gap: 0;
    column-gap: var(--space-s-l);
  }

  & .row:first-child{
    padding-inline: var(--space-s-l);
  }


  & .row{
    display: grid;
    grid-column: span 2;
    grid: inherit;
    align-items: baseline;
    padding-inline: var(--space-s-l);
  }
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

