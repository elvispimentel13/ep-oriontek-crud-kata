import { Component, OnInit } from '@angular/core';
// SERVICE IMPLEMENTATION
import { ClientService } from '../../../services/client.service';
import { DirectoryService } from '../../../services/directory.service';
// CLIENT CLASS REQUIRED
import { Client } from '../../../models/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientList: Client[];

  constructor(private clientService: ClientService, private directoryService: DirectoryService) {}

  ngOnInit(): void {
    this.clientService.getClientList()
      .snapshotChanges()
      .subscribe(item => {
        this.clientList = [];
        item.forEach(client => {
          const x = client.payload.toJSON();
          const clientObj = x as Client;
          clientObj.$key = (client.payload.key) ? client.payload.key?.toString() : '';
          this.clientList.push(clientObj);
        });
      });
  }

  onEdit(client: Client){
    this.clientService.clientSelected = Object.assign({}, client);
    this.directoryService.getClientDirectoryList(client.$key);
  }

  onDelete($key: string){
      this.clientService.deleteClient($key);
  }

}
