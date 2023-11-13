<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import '../styles/style.css';
	import { i } from '@inlang/sdk-js';

</script>

<Header />
	<main>
		<slot />
	</main>
<Footer />
