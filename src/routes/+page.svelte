<script lang="ts">
    import Hero from "../components/Hero/Hero.svelte";
    import { getPhotos } from "$lib/photos";

    const photos = getPhotos();

    let random : Number = Math.floor(Math.random() * (photos.length)+1);
    console.log(random);

    console.log(photos);

   let randomPhoto = photos.filter((item) => {
        if (item.id === random) {
            return item
        }
        else {
            return null
        }
   })

   console.log(randomPhoto);
</script>

<article class="grid homepage">
    <div class="hero grid">
        <Hero />
    </div>
    <div>
        <div class="pic">
            <img src={randomPhoto[0].url}
             alt={randomPhoto[0].alt}/>
        </div>
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

    img {
        width: 100%;
        height: auto;
    }
    .homepage {
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
