<script>
	import favicon from '$lib/assets/favicon.svg';
  import Footer from '../components/Footer/Footer.svelte';
  import Header from '../components/Header/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children()}
<Footer />
