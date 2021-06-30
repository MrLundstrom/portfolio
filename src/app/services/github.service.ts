import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

    // define our class properties. apiUrl is what we need
    // usually you could get this from an environment fil
    apiUrl = 'https://api.github.com/';
  
    // inject the HttpClient as http so we can use it in this class
    constructor(private http: HttpClient) {}
  
    // return what comes back from this http call
    getProjects() {
     return this.http.get(`${this.apiUrl}users/MrLundstrom/repos`);
    };
}
