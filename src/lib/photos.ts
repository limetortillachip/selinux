//images directory
const imagesDir : Array<string> = ["/src/lib/asses/images/","$lib/assets/images/"];
//console.log(imagesDir);

const images = import.meta.glob(["$lib/assets/images/fall/*.png", "$lib/assets/images/nyc/*.png"], {
    eager: true,
    import: "default"
    });

//array from imported images
const imagesList: Array<unknown> = Object.values(images);
console.log(imagesList);

//Photo Obj configuration
class Photo {
    url: string;
    alt: string;
    id: number;
    tag: string | Array<string> | false;

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
        let alt = this.url.slice((dir.length), -4).replaceAll("-", " ");
        let tags = ["nyc", "fall", "shotoniphone"];
        
        tags.forEach((tag) => {
           if  (alt.includes(tag)) {
            this.tag = tag; 
            alt = alt.replaceAll(tag, "").replaceAll("/", "");
            } else {
                false;
            }
        })

        this.alt = alt;
    }
}

export const getPhotos = () => {
    let photos = [];
    
    if (imagesList.length > 0) {
    
    imagesList.map((item, i)=>{
        //console.log(item, i);
        const photoObj = new Photo(item, "", 0);
        photoObj.setId(i + 1);
        photoObj.setImgAlt(imagesDir[0]);
        photos.push(photoObj);
    })

    return photos;

} else {
   return null;
}
}

export const getPhoto = (num) => {
    const photosList = getPhotos();
    let photo = [];

    if (num === 0) {
        let random = Math.floor(Math.random() * photosList.length)+1;

        photosList.find((item) =>{
            item.id === random ? photo.push(item) : null;
        })
    } else {
        photosList.find((item) => {
            item.id === num ? photo.push(item) : null;
        })
    }

    return photo;
}


getPhoto(0);