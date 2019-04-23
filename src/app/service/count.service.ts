import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CountService {

  constructor(
    private http: HttpClient
    ) { }

  countWords(sentence: string) {
    return this.http.post(environment.apiUrl + '/countwords', {sentence});
  }
}
