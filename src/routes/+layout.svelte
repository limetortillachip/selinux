<script>
  import favicon from "$lib/assets/favicon.svg";
  import Footer from "../components/Footer/Footer.svelte";
  import Header from "../components/Header/Header.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="page">
  <Header />
  <main class="content">
    {@render children()}
  </main>
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
    font-size: 14px;
    flex-flow: column nowrap;
    font-family: "Mulish", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  .content {
    flex: 1;
  }
</style>
