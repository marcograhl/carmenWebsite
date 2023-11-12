<script>
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import '../styles/style.css';
	import { i } from '@inlang/sdk-js';
	import { page } from '$app/stores';

	console.log($page.url.pathname);
</script>

<div class="">
	<div class="">
		<div
			class=""
		>
			<div class="">
				<LanguageSwitcher />
			</div>
			{#if $page.url.pathname === '/todo'}
				<a
					class=""
					href="/"
				>
					{i('pages.todo.goToHome')}
				</a>
			{/if}
			<Header />
			<slot />
		</div>
	</div>
	<Footer />
</div>
