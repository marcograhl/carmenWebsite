<script>
	import Footer from '$partials/Footer.svelte';
	import Header from '$partials/Header.svelte';
	import '../styles/style.css';
	import { i } from '@inlang/sdk-js';
	import { page } from '$app/stores';

</script>

<Header pathname={$page.url.pathname} />
	<main>
		<slot />
	</main>
<Footer />
