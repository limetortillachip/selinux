import * as photos from '$lib/photos';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	return {
		photo: await photos.getPhoto(Number(params.slug)),
	};
}