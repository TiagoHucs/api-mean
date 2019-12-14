import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_URL } from '../../../app/app.url.dev'
import { Post } from 'src/app/models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
  ) { }

  posts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${API_URL}posts`);
  }

}
