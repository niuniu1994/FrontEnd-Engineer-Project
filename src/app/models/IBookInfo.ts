import {comment} from "./Comment";

export interface IBookInfo{
  id:number,
  isbn:string,
  title:string,
  author:string,
  category:string,
  publishDate:string,
  rate:number,
  description:string,
  thumbnail:string,
  ebookUrl: string
}


export interface IBookInfoWithComments extends IBookInfo{
  comments:comment[];
}
