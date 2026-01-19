<script lang="ts">
    import { getPhotos } from "$lib/photos";
    import Photo from "./Photo/Photo.svelte";

    //photos fx returns array with list of img objs from import
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
        flex-flow: row wrap;
        gap: 1em;
    }

    .img {
        width: 33%;
        flex: 1 1 auto;
        align-items: flex-end;
    }
</style>
