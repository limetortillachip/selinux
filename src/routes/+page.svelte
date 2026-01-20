<script lang="ts">
    import Hero from "../components/Hero/Hero.svelte";

</script>

<article class="grid homepage">
    <div class="hero grid">
        <Hero />
    </div>
    <div>   
    </div>

    <div class="projects">
        <h2>Projects</h2>  
        <p>
            Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to
            read the documentation
        </p>
    </div>
</article>

<style>
    .homepage {
        flex: 75% 0;
        margin: 0 auto;
        background-color: orange;
        padding: 1em;
        flex-flow: column nowrap;
    }

    .grid {
        display: flex;
    }

    .hero {
        flex: 1;
        flex-flow: column;
        justify-content: center;
        gap: 1em;
    }

    .projects {
        flex: 3;
    }
</style>
