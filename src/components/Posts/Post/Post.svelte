<script lang="ts">
    let {title, text, date, coverPhoto} = $props();
</script>

<article class="post grid">
        <div class="cover grid">
            <div class="photo">
                {#each coverPhoto as photo}
                    <img src={photo.url} alt={photo.alt} />
                {/each}</div>
                <div class="photos-link">
                    <a href="/photos/nyc" id="cover-link">View all photos from New York City.</a>
                </div>
        </div>

    <div class="post-text">
        <div class="post-title">
            <h3 id="title">{title}</h3>
        </div>
        <div class="post-body">
            <p>{text}</p>
        </div>
    </div>
        <div class="date">
            <p id="datetime">
                <time datetime={date}>{date}</time>
            </p>
        </div>
</article>


<style>
    #cover-link {
        font-size: 0.8em;
        text-transform: uppercase;
        font-weight: 600;
    }
    img{
        width: 100%;
    }
    .cover {
        flex-flow: column nowrap;
        align-items: flex-end;
    }

    .grid {
        display: flex;
    }

    .post {
        flex-flow: column nowrap;
        gap: 2em;
    }

    .cover {
        flex: 2;
    }

    .photo {
        flex: 25%;
    }

    .post-text {
        flex: 1;
        font-family: 'Mulish', sans-serif;
    }
</style>