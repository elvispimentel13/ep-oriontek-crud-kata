import { Injectable } from '@angular/core';
// FIREBASE
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Client } from '../models/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientList: AngularFireList<any>;
  clientSelected: Client = new Client();

  constructor(private firebase: AngularFireDatabase) { }

  getClientList(){
    return this.clientList = this.firebase.list('clients');
  }

  insertClient(client: Client){
    this.clientList.push({
      firstName: client.firstName,
      lastname: client.lastname,
      id: client.id,
      age: client.age,
      mail: client.mail
    });
  }

  updateClient(client: Client){
    this.clientList.update(client.$key, {
      firstName: client.firstName,
      lastname: client.lastname,
      id: client.id,
      age: client.age,
      mail: client.mail
    });
  }

  deleteClient($key: string){
    this.clientList.remove($key);
  }
}
