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
        <a href="/about" aria-label="about-me-page-link" class="nav-link"
          >about me</a
        >
      </li>
      <li>
        <a href="photos" aria-label="photos-page-link" class="nav-link"
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
    font-size: 0.5em;
    align-self: stretch;
    text-transform: uppercase;
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
    font-weight: 900;
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
    letter-spacing: 0.1em;
  }

  .nav-link {
    text-decoration: none;
  }
</style>
