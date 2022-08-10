//creado por Lazaro para la bd
export class Specialty {
    id?: string;
    name?: string;
    status?: boolean;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
    _id?: string

    constructor(id:string,name:string,status:boolean,createdAt:string,updatedAt:string,_id:string){
      this.id=id;
      this.name=name;
      this.status=status;
      this.createdAt=createdAt;
      this.updatedAt=updatedAt;
      this._id=id;
    }

  }