<script lang="ts">
    import { getPhoto } from "$lib/photos";
    import Hero from "../components/Hero/Hero.svelte";
    import Projects from "../components/Projects/Projects.svelte";

    const photo = getPhoto(0);

    console.log(photo);

</script>

<article class="grid homepage">
    <div class="page-title grid">
        <h2>Welcome to my page!</h2>
    </div>
    <div class="hero">
        <Hero />
    </div>
    <div class="photo">
        {#each photo as random }
        <div class="random-photo">
            <img src={random.url} alt={random.alt}>
        </div>
        {/each}
    </div>
    <div class="projects">
        <Projects />
    </div>
        
</article>

<style>
    .homepage {
        flex: 75% 0;
        margin: 0 auto;
        flex-flow: column nowrap;
        gap: 1em;
    }

    .grid {
        display: flex;
    }

    .hero,
    .photo,
    .projects{
        padding-inline: 2em;
    } 

    .page-title {
        flex: 1;
        align-items: flex-end;
        padding-inline: 2em;
    }

    .page-title>h2 {
        font-family: 'Mulish', sans-serif;
        font-size: 2.5em;
        font-weight: 900;
    }

    .photo {
        flex: 1;
    }
    
    .hero {
        flex: 0;
        flex-flow: column;
        justify-content: center;
    }

    .random-photo {
        padding: 1em;
        background-color: aquamarine;
    }

    .random-photo > img {
        width: 100%;
        height: auto;
    }

    .projects {
        flex: 3;
    }
</style>
