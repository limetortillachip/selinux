<script>
    let { url, alt } = $props();
</script>

<div class="photo">
    <div id="img">
        <img src={url} {alt} />
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
