export class Patient {
    _id?: string;
    created_date?:any;
    updated_date?:any;
    username?:string;
    password?:string;
    name?: string;
    lastname_p?:string;
    lastname_m?:string;
    num_history?:number;
    dni?:number;
    gender?:string;
    birthday?:Date;
    ubigeo?:number;
    email?:string;
    role?:any;
    status?:boolean;
    phone?:any;
    /*constructor(name:string,username:string,dni:number,lastname_m:string,lastname_p:string,email:string,gender:string,birthday:Date){
        this.name=name;
        this.username=username;
        this.dni=dni;
        this.lastname_m=lastname_m;
        this.lastname_p=lastname_p;
        this.email=email;
        this.gender=gender;
        this.birthday=birthday;
    }*/
}