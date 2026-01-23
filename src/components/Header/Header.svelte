<div class="top grid">
  <header>
    <h1>selinux</h1>
  </header>
  <nav>
    <ul class="navLinks grid">
      <li>
        <a href="/" aria-label="home-link" class="nav-link">home</a>
      </li>

      <li>
        <a data-sveltekit-preload-code="eager" href="photos" aria-label="photos-page-link" class="nav-link"
          >photos</a
        >
      </li>
      <li>
        <a href="/blog" aria-label="blog-link" class="nav-link">blog</a>
      </li>
      <li>
        <a href="/credits" aria-label="credits-page-link" class="nav-link"
          >credits</a
        >
      </li>
    </ul>
  </nav>
</div>

<style>
  .top {
    font-size: 0.75em;
    align-self: stretch;
    text-transform: lowercase;
    align-items: center;
  }
  .grid {
    display: flex;
    flex-flow: row nowrap;
    gap: 1em;
  }

  header {
    flex: 1;
  }

  h1 {
    text-align: center;
    font-weight: 800;
  }

  nav {
    flex: 5;
  }

  .navLinks {
    justify-content: space-evenly;
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: 0.01em;
    list-style-type: none;
  }

  h1,
  .navLinks {
    letter-spacing: 0.05em;
  }

  .nav-link {
    text-decoration: none;
  }
</style>
