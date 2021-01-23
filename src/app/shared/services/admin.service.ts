import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Home } from '../models/Home';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
 //para adicionar um novo item   
//https://github.com/angular/angularfire/blob/HEAD/docs/firestore/collections.md

  constructor(private afs: AngularFirestore) { }

  getTextHome(): Observable<any> {
    
    let collection = this.afs.collection<Home>('inicio');

    return collection.snapshotChanges().pipe(
        map(item =>{
           return item.map(
                i =>{
                 const data =   i.payload.doc.data() as Home;
                 const id = i.payload.doc.id;
                 return {id, ...data}
                }
            )
        })
    );
  }

  setTextHome(data: any) 
  {
     return this.afs.collection("inicio")
            .doc(data.id)
            .set(data);
  }   
  
}
