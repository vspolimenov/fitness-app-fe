export class User {
    public firstName:string;
    public lastName:string;
    public password:string;
    public email:string;
    public phone: string;
    public photo: ImageData;
    public age: number;
    public weight:number;
    public height:number;
    public role:string;


    constructor(email, password) { 
        this.email = email;
        this.password = password;
        this.role = "client";
    }
  }
  