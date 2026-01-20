<script lang="ts">
    import { getPhotos } from "$lib/photos";
    import Photo from "./Photo/Photo.svelte";

    //photos fx returns array with list of img objs from folder
    const photos = getPhotos();

    console.log(photos);
</script>

<article class="photos grid">
   {#each photos as photo}
        <div class="img grid">
            <Photo url={photo.url} alt={photo.alt} />
        </div>
    {/each}
</article>

<style>
    .grid {
        display: flex;
    }
    .photos {
        background-color: bisque;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
        gap: 1em;
    }

    .img {
        flex: 40% 1;
        align-items: flex-end;
    }
</style>
