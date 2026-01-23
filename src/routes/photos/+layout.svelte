<script>
  let { children } = $props();
</script>

<div class="photos-page">
  <h2>Photos here</h2>
  {@render children()}
</div>

<style>
  .photos-page {
    flex: 90% 0;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
  }
</style>