import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  codigo = localStorage.getItem("academia_codigo");

  constructor(private afs: AngularFirestore) { }

  getData(): Observable<any> {
    return this.afs.collection('inicio').valueChanges();
  }

  
}
