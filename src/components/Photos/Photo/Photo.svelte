<script>
    let { url, alt } = $props();
    let caption = "caption here!";
</script>

<div class="photo">
    <div id="img">
        <img src={url} {alt} />
    </div>
    <div class="caption">
        <p>{caption}</p>
    </div>
</div>

<style>
    .photo {
        flex: 1;
    }

    img {
        width: 100%;
        height: auto;
    }
</style>
