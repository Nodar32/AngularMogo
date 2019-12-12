export interface IClient {
  id?: number,
  author: string,
  profession: string,
  comments: string,
  imgUrl: string

}
export interface IBlog {
  id?: number,
  title: string,
  text: string,
  imgUrl: string,
  views: number,
  commentsCounter: number,
  comments: string []
}
export interface IComment {
  author: string,
  comment: string,
  imgUrl: string
}
export interface IImgItem {
  id?: number,
  title: string,
  text: string,
  imgUrl: string
}
export interface IUser {
  id?: number,
  email: string,
  password: string,
  userName: string
}
export interface IPost {
  id?: string,
  title: string,
  text: string,
  author: string,
  date: Date
}
export interface IMember {
  id?: number,
  author: string,
  profession: string,
  imgUrl: string,
  fbUrl: string,
  twUrl: string,
  instUrl: string
}
export interface FbResponseCreate {
  name: string
}
