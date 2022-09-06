import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People } from './people.model';

@Injectable({
  providedIn: 'root'
})
export class DoHttpRequestService {

  constructor(private httpClient: HttpClient) { }

  getLuke() {
    return this.httpClient.get<People>('https://swapi.dev/api/people/1');
  }
}
