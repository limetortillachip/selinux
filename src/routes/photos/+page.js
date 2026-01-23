import * as photos from '$lib/photos';

/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
    return {
        photoList: await photos.getPhotos(),
    };
}