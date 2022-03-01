import {IBookInfo} from "./IBookInfo";

export interface IUser{
  email:string,
  password:string
}

export interface IUserInfo{
  email:string,
  firstName:string,
  lastName:string,
  address:IAddress
  books:IBookInfo[]
}

export interface IAddress{
  streetNumber:string;
  streetName:string;
  zipCode:string;
  country:string;
}
