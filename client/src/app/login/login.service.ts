import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_URL } from '../../app/app.url.dev'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient,
  ) { }

  login(user: any){
    return this.http.post(`${API_URL}auth`,user);
  }

}
