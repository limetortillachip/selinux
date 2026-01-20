<script lang="ts">
    import Post from "./Post/Post.svelte";
    import postData from "../../data/posts.json" with { type: 'json'};
    import { getPosts } from "$lib/posts";
    import { getPhotos } from "$lib/photos";

    const postsList = getPosts(postData);
    const photosList = getPhotos();

    postsList.map((post)=> {
        let image = []
        photosList.forEach((photo) => {
            post.coverPhoto.includes(photo.id) ? image.push(photo): null;
        })
        post.coverPhoto = image;
    })

    console.log(postsList);


</script>

<article class="posts">
    {#each postsList as post}
    <Post title={post.title} text={post.text} date={post.date} coverPhoto={post.coverPhoto}/>
    {/each}
</article>
