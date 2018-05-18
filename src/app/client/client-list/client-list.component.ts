import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  listClient:Client[];

  constructor(private clientService: ClientService ) { }

  ngOnInit() {
    this.clientService.loadClients().subscribe(data => this.listClient = data );
  }

  deleteQuiz(listClient: Client): boolean {
    // Delete the given quiz _AFTER_ user confirmation.
    this.showConfirmationModal()
      .subscribe({
        complete: () => this.qs.deleteQuiz(client.id).subscribe(() => this.clientService.loadClients()),
        error: () => {}
      });

    return false;  // No action on the <button>
}



}
