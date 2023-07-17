export interface ILink {
    link: string
    platform: string
}

export interface IProfile {
    lastName:string
    firstName:string
    email:string
}

export interface IData {
    id:number
    links: ILink[],
    profile:IProfile,
    img?:string
}

export class FileUpload {
    key!: string;
    name!: string;
    url!: string;
    file: File;
  
    constructor(file: File) {
      this.file = file;
    }
  }
  