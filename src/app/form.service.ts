import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

createUsers(data) {
  return this.http.post('http://localhost:3000/customers', data).toPromise();
}

retriveUsers(){
  return this.http.get('http://localhost:3000/customers').toPromise();
}
deleteUserList(id){
  return this.http.delete(`http://localhost:3000/customers/${id}`).toPromise();

}

}