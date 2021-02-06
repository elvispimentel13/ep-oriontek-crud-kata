import { Injectable } from '@angular/core';
// FIREBASE
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Directory } from '../models/directory';


@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  directoryList: AngularFireList<any>;
  directorySelected: Directory = new Directory();

  constructor(private firebase: AngularFireDatabase) { }

  getDirectoryList(){
    return this.directoryList = this.firebase.list('directory');
  }

  getClientDirectoryList($key: string){
    const directory = this.directoryList = this.firebase.list('directory');
  }

  insertDirectory(directory: Directory){
    this.directoryList.push({
      clientKey: directory.clientKey,
      line1: directory.line1,
      line2: directory.line2,
      city: directory.city,
      state: directory.state,
      zip: directory.zip,
      phone: directory.phone
    });
  }

  updateDirectory(directory: Directory){
    this.directoryList.update(directory.$key, {
      line1: directory.line1,
      line2: directory.line2,
      city: directory.city,
      state: directory.state,
      zip: directory.zip,
      phone: directory.phone
    });
  }

  deleteDirectory($key: string){
    this.directoryList.remove($key);
  }

}

