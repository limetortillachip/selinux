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
    href="https://fonts.googleapis.com/css2?family=Azeret+Mono:ital,wght@0,100..900;1,100..900&family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/fill/style.css"
  />
</svelte:head>

<div class="page grid">
  <Header />
  <main class="content grid">
    {@render children()}
  </main>
  <Footer />
</div>

<style lang="scss">
  /* normalize for reseting elements */
  @import url("https://necolas.github.io/normalize.css/8.0.1/normalize.css");
  @use "../styles/base" as *;

  /* page class w/ flex */
  .page {
    height: 100vh;
    width: 100%;
    background-color: $primary;
    font-size: 14px;
    flex-flow: column nowrap;
    font-family: "Azeret Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    margin: 0 auto;
  }

  .grid {
    display: flex;
  }

  .content {
    flex: 1;
    width: 90vw;
    background-color: red;
    align-self: center;
  }
</style>
