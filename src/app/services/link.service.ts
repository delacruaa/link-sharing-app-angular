import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, finalize, throwError } from 'rxjs';
import { FileUpload, IData, ILink, IProfile } from '../models/links.interface';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  linksArr= new BehaviorSubject<ILink[]>([])
  imageUrl = new BehaviorSubject<string | undefined>('')
  tab= new BehaviorSubject<string>('links')
  profile = new BehaviorSubject<IProfile>({} as IProfile) 
  private basePath = '/uploads';
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          this.imageUrl.next(downloadURL)
          fileUpload.name = fileUpload.file.name;
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }


  createData(id:number, data:IData) {
    return this.db.object(`${id}`).set(data)
  }

  getDataList() {
    return  this.db.list<IData>('/').valueChanges().pipe(
      catchError(error => {
        console.error('Error fetching data:', error);
        return throwError('Something went wrong');
      })
    )
  }
  
}
