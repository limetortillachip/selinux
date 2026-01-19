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

interface Data {
    body: string | Array <{}> | false;
}

class Post {
    id: number;
    title: string;
    text: Data;
    photos: Data;
    date: string;

    constructor(id: number, title: string, text: Data, photos: Data, date: string) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.photos = photos;
        this.date = date;
    }

    makePostDate () {
        let postDate = new Date(this.date);

        return postDate.toLocaleDateString();
    }
}

export const getPhotos = (images: Array<unknown>, dir: string) => {
    let photos = [];
    
    if (images.length > 0) {
    
    images.map((item, i)=>{
        //console.log(item, i);
        const photoObj = new Photo(item, "", 0);
        photoObj.setId(i + 1);
        photoObj.setImgAlt(dir);
        photos.push(photoObj);
    })

    return photos;

} else {
   return null;
}
}
