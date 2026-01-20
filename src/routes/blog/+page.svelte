<script>
    import Posts from "../../components/Posts/Posts.svelte";
</script>

<div class="blog">
    <div class="blog-title">
        <h2>blog</h2>
    </div>
    <div class="posts">
        <Posts />
    </div>
</div>

<style>
    .blog {
        background-color: darkorchid;
        flex: 50% 0;
        margin: 0 auto;
        height: auto;
        padding: 2em;
    }
</style>
