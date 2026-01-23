<script>
  let { children } = $props();
</script>

<div class="photos-page grid">
  <div class="photos-page-header">
  <h2>Photos here</h2>
  <div class="filters">
    <span>
      <h3 id="filters-title">Filters</h3>
    </span>
    <ul class="filters-links grid">
      <li id="nyc">New York City</li>
      <li id="fall">Fall</li>
      <li id="shotoniphone">#shotoniPhone</li>
    </ul>
</div>
</div>
  {@render children()}
</div>

<style>
  .grid {
    display: flex;
}

  .photos-page {
    flex: 90% 0;
    margin: 0 auto;
    flex-flow: column nowrap;
  }

  .filters-links {
    padding-inline-start: 0;
    gap: 2em;
    list-style-type: none;
  }

  .filters-links>li {
    background-color: red;
    padding: 0.25em 0.5em;
  }


</style>