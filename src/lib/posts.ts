class Post {
    id: number;
    title: string;
    text: Array<any>;
    photos: Array<any>;
    date: string;

    constructor(id: number, title: string, text: Array<any>, photos: Array<any>, date: string) {
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

export const getPosts = (posts: Array<any>) => {
    let postsList = [];

    posts.map((post, index)  =>{
        let newPost = new Post((index+1), post.title, post.body, post.images.keys,post.date)
        postsList.push(newPost);
    })
    return postsList;
}
