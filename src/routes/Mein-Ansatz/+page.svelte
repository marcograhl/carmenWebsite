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
    <p>{i('meinAnsatz.p_1')}</p>
    <p>{i('meinAnsatz.p_2')}</p>
    <p>{i('meinAnsatz.p_3')}</p>
    <div class="img-wrapper">
      <img class="" src={ansatzImg} alt={i('meinAnsatz.img_alt')} title="Carmen Alvarez" width="200" height="300">
    </div>
    <p>{i('meinAnsatz.p_4')}</p>
    <p>{i('meinAnsatz.p_5')}</p>
    <p>{i('meinAnsatz.p_6')}</p>
    <p>{i('meinAnsatz.p_7')}</p>
		<p>
			{i('meinAnsatz.p_8')}
			<a href={i('meinAnsatz.link')}>{i('meinAnsatz.text')}</a>
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
    margin-block: 2.75ex  var(--photo-margin);
  }

  }

	img{
		width:	98.25%;
		border-radius: calc(var(--border-radius)/2);
	}
</style>


