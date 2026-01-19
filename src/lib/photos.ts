class Photo {
    url: string;
    alt: string;
    id: number;

    constructor(url: string, alt: "", id: 0) {
        this.url= url;
        this.alt = alt;
        this.id = id;
    }

    setId(index: number) {
        this.id += index;
        return index;
    }

    setImgAlt (dir: string) {
        //remove directory location and image file name from url
        //removes dashes from file name
        let alt = this.url.slice((dir.length +1), -4).replaceAll("-", " ");
        this.alt = alt;
    }
}

//import images from folder
const images = import.meta.glob("$lib/assets/images/*.png", {
    eager: true,
    import: "default",
    });

//array from imported images
const imagesList: Array<unknown> = Object.values(images);
console.log(imagesList);

//images directory
const imagesDir = "/src/lib/asses/images/";
//console.log(imagesDir);

export const getPhotos = () => {
    let photos = [];
    
    if (imagesList.length > 0) {
    
    imagesList.map((item, i)=>{
        //console.log(item, i);
        const photoObj = new Photo(item, "", 0);
        photoObj.setId(i + 1);
        photoObj.setImgAlt(imagesDir);
        photos.push(photoObj);
    })

    return photos;

} else {
   return null;
}
}
