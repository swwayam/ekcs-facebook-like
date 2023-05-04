export class Post{
  title: String;
  link: String;
  dislikeCount: number;
  likeCount: number;

  constructor(title: String, link: String, like ?: number, dislike ?: number){
    this.title = title;
    this.link = link;
    this.likeCount = like || 0;
    this.dislikeCount = dislike || 0;
  }
}