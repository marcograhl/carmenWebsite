<script>
  import HeroWrapper from "$blocks/HeroWrapper.svelte";
  import {i} from '@inlang/sdk-js';
  import ansatzImg from "$assets/ansatz-img.jpg"
	import Title from "$components/title.svelte";
</script>


<HeroWrapper>
	<Title>
		{i('meinAnsatz.title')}
	</Title>
  <article class="[ adjust flow w-text ]">
    <p>{i('meinAnsatz.p.0')}</p>
    <p>
      {i('meinAnsatz.p.1')}
      {i('meinAnsatz.p.2')}
    </p>
    <div class="img-wrapper">
      <img class="" src={ansatzImg} alt={i('meinAnsatz.img_alt')} title="Carmen Alvarez" width="200" height="300">
    </div>
    <p>
      {i('meinAnsatz.p.3')}
    </p>
    <p>{i('meinAnsatz.p.4')}</p>
    <p>
      {i('meinAnsatz.p.5')} 
    </p>
    <p>
	{i('meinAnsatz.p.6')}
      <span class="font-bold">
	{i('meinAnsatz.p.6b')}
	<a href='/Beratungsangebot'>mein Beratungsangebot</a>.
      </span>
    </p>
    <p></p>
  </article>
</HeroWrapper>

<style lang="postcss">
  .img-wrapper{
    display: grid;
    grid-template-areas:
    "container";
    place-items: start;
    margin-inline: auto;
    @media(--above_med){
    --photo-margin: 1em;
    clear: both;
    float: var(--float, right);
    margin-inline-start: var(--photo-margin);
    margin-block: 3ex  var(--photo-margin);
  }

  }

img{
  width: min(96%, 200px);
  border-radius: calc(var(--border-radius)/2);
}
</style>


