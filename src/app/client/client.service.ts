import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable } from 'rxjs/Observable';
import { Client } from '_debugger';

@Injectable()
export class ClientService {

  constructor() { }

  loadClients(): Observable<Client[]> {
    return this.http.get(`${this.baseUrl}/clients`)
      // Re-hydrate
      .map((quizArray: any[]) => quizArray.map(quizData => new Client(quizData)));
}(){

  }
  loadClient(){

  }
  saveClient(){

  }
  deleteClient(){

  }
}
