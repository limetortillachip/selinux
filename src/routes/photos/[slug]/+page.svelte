<script>
	/** @type {import('./$types').PageProps} */
	let { data } = $props();
</script>

<article class="photo">
    <div>
        <a href="/photos">View all photos</a>
    </div>
{#each data.photo as p}
    <div class="image">
        <img src={p.url} alt={p.alt} />
    </div>  
{/each}
</article>

<style>
    .photo {
        display: flex;
        flex-flow: column nowrap;
        gap: 1em;
        
    }

    .image {
        flex: 1;
    }
    img {
        width: 100%;
        height: auto;
    }
</style>
