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

        /*
            forEach item in imagesList, create image Obj:
                1. each item is the url to library
                2. id from index in list
                3. alt text from image name by slicing the directory names off and replacing dashes with spaces
            each image Obj is added to photoList Array 
            */
        imagesList.forEach((x, i) => {
            const image = Object.create(img);

            //create image ID
            image.id = i + 1;

            //url is from imported file location
            image.url = x;
            //console.log(image.url);

            //create alt text by removing directory names
            //and replacing dashes with spaces
            image.alt = x.slice(23, -4).replaceAll("-", " ");
            //console.log(image.alt);

            //add each image Obj to photoList Array
            photosList.push(image);
        });

        return photosList;
    };

    const photos = getPhotos();

    console.log(photos);
</script>

<article class="photos grid">
    {#each photos as photo}
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
        gap: 1em;
    }

    .img {
        width: 33%;
        flex: 1 1 auto;
        align-items: flex-end;
    }
</style>
