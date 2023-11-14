<script>
	import Footer from '$partials/Footer.svelte';
	import Header from '$partials/Header.svelte';
	import '../styles/style.css';
	import { i } from '@inlang/sdk-js';

</script>

<Header />
	<main>
		<slot />
	</main>
<Footer />
