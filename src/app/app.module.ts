import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// FIREBASE MODULES
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

// COMPONENTS
import { ClientsComponent } from './components/clients/clients.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { DirectoryComponent } from './components/clients/directory/directory.component';
import { ClientComponent } from './components/clients/client/client.component';
import { DirectoryListComponent } from './components/clients/directory-single/directory-single.component';

// SERVICES
import { ClientService } from './services/client.service';
import { DirectoryService } from './services/directory.service';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientListComponent,
    DirectoryComponent,
    ClientComponent,
    DirectoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    ClientService,
    DirectoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
