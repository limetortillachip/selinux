<script>
  import favicon from "$lib/assets/favicon.svg";
  import Footer from "../components/Footer/Footer.svelte";
  import Header from "../components/Header/Header.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="page">
  <Header />
  {@render children()}
  <Footer />
</div>

<style>
  /* normalize for reseting elements */
  @import url("https://necolas.github.io/normalize.css/8.0.1/normalize.css");

  /* page class w/ flex */
  .page {
    display: inline-flex;
    height: 100vh;
    width: 100%;
    background-color: red;
    flex-flow: column nowrap;
  }
</style>
