export interface ISignUpUser{
  email:string,
  password:string,
  firstName:string,
  lastName:string,
  address:{
    zipCode:string,
    country:string
    streetNumber:string,
    streetName:string
  }
}
