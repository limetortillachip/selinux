<script lang="ts">
import Photo from '../../components/Photo/Photo.svelte';

/** @type {import('./$types').PageProps} */ 
let { data } = $props();
</script>
<article class="photos grid">
    {#each data.photoList as photo}
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
        justify-content: space-between;
        align-items: center;
    }

    .img {
        flex: 50% 0 0;
        align-items: flex-end;
    }
</style>


