import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  login(user: any){
    console.log('chegou no servico front')
    return this.http.post(`/auth`,user);
  }
}
