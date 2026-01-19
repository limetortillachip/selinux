<script lang="ts">
    import Post from "./Post/Post.svelte";
    import postData from "../../data/posts.json" with { type: 'json'};
    import { getPosts } from "$lib/posts";
    import { getPhotos } from "$lib/photos";

    const postsList = getPosts(postData);
    const photosList = getPhotos();

    postsList.map((post, i)=> {
        let images = []
        photosList.forEach((photo) => {
            post.photos.includes(photo.id) ? images.push(photo): null;
        })

        post.photos = images;
    })

    console.log(postsList);


</script>

<article class="posts">
    <Post />
</article>
