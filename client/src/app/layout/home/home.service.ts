import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_URL } from '../../../app/app.url.dev'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
  ) { }

  posts(){
    return this.http.get(`${API_URL}posts`);
  }
}
