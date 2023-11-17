
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
    <p>
      {i('Kontakt.p_1')}
      <a class='text-step-1' href='mailto:alvarez.carmenglo@gmail.com'>alvarez.carmenglo@gmail.com</a>. 
    </p>
    <h2>{i('Kontakt.h2_1')}</h2>
    <div class="[ praxis grid ] [ text-step-1]" data-layout="50-50">
      <div>
        <img src={praxisImg} alt="" width="512" height="384">
      </div>
      <div class="flex flex-col justify-between">
        <p>{i('Kontakt.p_2')}</p>
        <div class="flow text-step-0 mt-s">
          <div></div>
          <div>
            <p class="font-bold">{i('Kontakt.p_4')}</p>
            <p class="">{i('Kontakt.p_41')}
               Bayerischen Viertel
               Bozener Str. 17, 10825 Berlin
              <a class="block" target='_blank' rel='noreferrer' href='https://www.google.com/maps/place/Psychologische+Privatpraxis+im+Bayerischen+Viertel+Carmen+Alvarez/@52.4869995,13.3383774,15z/data=!4m6!3m5!1s0x47a851faa4a2d3a3:0xba7343ea7b73ad4d!8m2!3d52.4869995!4d13.3383774!16s%2Fg%2F11sjgtq6tx?entry=ttu'>Google Maps</a>
            </p>
            <p class="mt-s font-bold">{i('Kontakt.p_3')}</p>
            <p>
              {i('Startseite.card.1')}
              9:00&thinsp;&ndash;&thinsp;18:00
              {i('uhr')}
            </p>
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
