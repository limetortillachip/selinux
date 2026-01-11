<script>
    import Photo from "./Photo/Photo.svelte";

    //import images from folder
    const images = import.meta.glob("$lib/assets/images/*.png", {
        eager: true,
        import: "default",
    });

    //console.log(images);

    //create img obj with imported url info
    const img = {
        id: Number,
        url: String,
        alt: String,
    };

    //array from imported images
    const imagesList = Object.values(images);
    console.log(imagesList);

    //photos fx returns array with list of img objs from import
    const getPhotos = () => {
        const photosList = [];

        imagesList.forEach((x, i) => {
            const image = Object.create(img);

            image.url = x;
            console.log(image.url);
            image.alt = x.slice(23, -4).replaceAll("-", " ");
            console.log(image.alt);
            image.id = i + 1;
            photosList.push(image);
        });

        return photosList;
    };

    const photos = getPhotos();

    console.log(photos);
</script>

<article class="photos">
    {#each photos as photo}
        <Photo url={photo.url} alt={photo.alt} />
    {/each}
</article>

<style>
    .photos {
        display: flex;
    }
</style>
