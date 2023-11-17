<script lang="ts">
	import {
		languages,
		switchLanguage,
		loadResource,
		language as selectedLanguage
	} from '@inlang/sdk-js';

</script>


<div class="button-group">
		<button
			on:focus={() => loadResource(languages[0])}
			on:mouseover={() => loadResource(languages[0])}
			on:click={() => switchLanguage(languages[0])}
		>
			<div
			class={(languages[0] === selectedLanguage ? 'underline font-bold ' : 'no-underline') +
					'button-inside'}
			>
				{languages[0]}
			</div>
		</button>
	  <span>&thinsp;/&thinsp;</span>

		<button
			on:focus={() => loadResource(languages[1])}
			on:mouseover={() => loadResource(languages[1])}
			on:click={() => switchLanguage(languages[1])}
		>
			<div
			class={(languages[1] === selectedLanguage ? 'underline font-bold ' : 'no-underline') +
					'button-inside'}
			>
				{languages[1]}
			</div>
		</button>
</div>

<style lang="postcss">

	.button-group{
		display: flex;
	  padding: 4px 6px;
	  font-size: 1.75rem;
		border-radius: calc(var(--border-radius)/2);
    font-variant-caps: all-petite-caps;
		 line-height: 1;
	}

	button{
	 background-color: transparent;
	 line-height: 1;
	}



</style>
