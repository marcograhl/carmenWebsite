<script>
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import '../styles/style.css';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
