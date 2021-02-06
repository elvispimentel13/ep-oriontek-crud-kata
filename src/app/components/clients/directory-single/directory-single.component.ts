import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Directory } from 'src/app/models/directory';
import { ClientService } from 'src/app/services/client.service';
// ACCESING SERVICES
import { DirectoryService } from '../../../services/directory.service';

@Component({
  selector: 'app-directory-single',
  templateUrl: './directory-single.component.html',
  styleUrls: ['./directory-single.component.css']
})
export class DirectoryListComponent implements OnInit {

  constructor(public directoryService: DirectoryService, public clientService: ClientService) { }

  ngOnInit(): void {
    this.directoryService.getDirectoryList();
    this.clearForm();
  }

  onSubmit(directoryForm: NgForm){
    if (this.clientService.clientSelected.$key != null)
    {
      if (directoryForm.value.$key == null) {
        directoryForm.value.clientKey = this.clientService.clientSelected.$key;
        this.directoryService.insertDirectory(directoryForm.value);
      }
      else{
        this.directoryService.updateDirectory(directoryForm.value);
      }
    }
    else{
      if (this.directoryService.directorySelected != null && this.clientService.clientSelected.$key != null)
      {
        this.directoryService.updateDirectory(directoryForm.value);
      }
      else{
        alert('You need to select a client.');
      }
    }
    this.clearForm(directoryForm);
  }

  clearForm(directorySingleForm?: NgForm){
    if (directorySingleForm != null){
      directorySingleForm.reset();
      this.directoryService.directorySelected = new Directory();
    }
  }
}