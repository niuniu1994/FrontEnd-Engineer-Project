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
  books:string[]
}

export interface IAddress{
  streetNumber:string;
  streetName:string;
  zipCode:string;
  country:string;
}
