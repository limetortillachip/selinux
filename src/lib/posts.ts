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