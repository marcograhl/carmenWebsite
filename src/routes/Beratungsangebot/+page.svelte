<script>
	import HeroWrapper from '$blocks/HeroWrapper.svelte';
	import { i } from '@inlang/sdk-js';
	import beratungImg from '$assets/beratung-img.jpg';
	import Title from '$components/title.svelte';
</script>

<HeroWrapper>
	<Title>
		{i('beratungsangebot.title')}
	</Title>
	<div class="[ grid ] [ adjust ]" data-layout="50-50">
		<ul class="left flow" role="presentation">
			<li role="presentation">{i('beratungsangebot.liste.0')}</li>
			<li role="presentation">{i('beratungsangebot.liste.1')}</li>
			<li role="presentation">{i('beratungsangebot.liste.2')}</li>
		</ul>

		<div class="right">
			<p>
				<strong>
					{i('beratungsangebot.behandlungsangebot.0')}
				</strong>
			</p>
			<p>
				{i('beratungsangebot.behandlungsangebot.1')}
			</p>
		<p><p/>
		</div>
	</div>
</HeroWrapper>

<div class="region center-xy">
	<div class="wrapper offset">
		<img src={beratungImg} alt="" width="960" height="640" />
	</div>
</div>

<style lang="postcss">
	:is(.left){
		--flow-space: 0.2em;
	}

	.grid {
		--gutter: var(--space-2xs);
	}

	ul {
		& li {
			list-style-type: '✓ ';
			list-style-position: outside;

			@media (--above_small) {
				list-style-type: '✓';
				padding-inline-start: var(--space-2xs-xs);
				margin-inline-start: calc(-1 * var(--space-2xs-xs));
			}
		}
	}

</style>
