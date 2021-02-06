import { Component, OnInit } from '@angular/core';
// SERVICE IMPLEMENTATION
import { DirectoryService } from '../../../services/directory.service';
import { ClientService } from '../../../services/client.service';
// DIRECTORY CLASS REQUIRED
import { Directory } from '../../../models/directory';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  directoryList: Directory[];

  constructor(private directoryService: DirectoryService, private clientService: ClientService) { }

  ngOnInit(): void {
    this.directoryService.getDirectoryList()
      .snapshotChanges()
      .subscribe(item => {
        this.directoryList = [];
        item.forEach(directory => {
          const x = directory.payload.toJSON();
          const directoryObj = x as Directory;
          directoryObj.$key = (directory.payload.key) ? directory.payload.key?.toString() : '';
          this.directoryList.push(directoryObj);
        });
      });
  }

  onEdit(directory: Directory){
    this.directoryService.directorySelected = Object.assign({}, directory);
    const clients = this.clientService.getClientList().query.equalTo('-MSqrIumzh7nR9vUxmm8');
  }

  onDelete($key: string){
      this.directoryService.deleteDirectory($key);
  }

}
