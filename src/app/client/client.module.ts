import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';


const route:Routes=[
  { path: 'listeClients', component: ClientListComponent },
  { path: 'editClient/:clientId', component: ClientFormComponent },
  { path: 'newClient', component: ClientFormComponent },
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(route)
  ],
  declarations: [ClientListComponent, ClientFormComponent]
})
export class ClientModule { }
