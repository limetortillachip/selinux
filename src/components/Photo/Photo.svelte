<script>
    let { url, alt } = $props();
</script>

<div class="photo">
    <img src={url} {alt} />
</div>

<style>

    .photo {
        display: flex;
        background-color: red;
        margin: 1em;
        box-shadow: 5px 5px red;
        border-radius: 2px;
    }

    img {
        width: 100%;
        height: auto;
        border: 2px solid red;
    }
</style>
