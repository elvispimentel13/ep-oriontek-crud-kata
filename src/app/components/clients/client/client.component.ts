import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/models/client';

// ACCESING SERVICES
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(public clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClientList();
    this.clearForm();
  }

  onSubmit(clientForm: NgForm){
    if (clientForm.value.$key == null) {
      this.clientService.insertClient(clientForm.value);
    }
    else{
      this.clientService.updateClient(clientForm.value);
    }
    this.clearForm(clientForm);
  }

  clearForm(clientForm?: NgForm){
    if (clientForm != null){
      clientForm.reset();
      this.clientService.clientSelected = new Client();
    }
  }
}

