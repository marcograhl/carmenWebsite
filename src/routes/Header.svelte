<script>
	import { i,languages,switchLanguage } from '@inlang/sdk-js';
	
</script>

<header class="">
    <nav class="">
      <ul role="list" class="cluster">
        <li>
          <a href={i('navigation.0.url')}>{i('navigation.0.text')}</a>
        </li>
        <li>
          <a href={i('navigation.1.url')}>{i('navigation.1.text')}</a>
        </li>
        <li>
          <a href={i('navigation.2.url')}>{i('navigation.2.text')}</a>
        </li>
        <li>
          <a href={i('navigation.3.url')}>{@html i('navigation.3.text')}</a>
        </li>
        <li>
          <a href={i('navigation.4.url')}>{i('navigation.4.text')}</a>
        </li>
      </ul>
    </nav>
		{#each languages as lang}
		<button on:click={()=>switchLanguage(lang)}>{lang}</button>
		{/each}

</header>
