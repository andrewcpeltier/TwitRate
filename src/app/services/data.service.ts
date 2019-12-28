import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postHashtag(hash: string) {
    this.http.post('http://localhost:5000/hashtag', hash).subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error.error);
    });
  }
}
