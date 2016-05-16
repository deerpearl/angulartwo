import { Injectable } from '@angular/core';
//import { Injectable } from 'angular2/core';
import {URLSearchParams, Jsonp} from '@angular/http';
import { Animals } from './animals.model';
import { Http, Response} from '@angular/http'
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
//https://github.com/angular/angular/issues/5632
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AnimalsService {

  constructor(private http: Http) {}
  
  private heroesUrl = 'app/main-container/shared/animals.json';  // URL to web API
  
  getAnimals (): Observable<Animals[]> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  
  addAnimal (name: string): Observable<Animals> { 
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.heroesUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
 /* 
  constructor(private jsonp: Jsonp) {}
  search (term: string) {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
                .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
                .subscribe(
                   res => {},
                   err => {}
                );
   }
   
  getAnimals(): Promise<Planets[]>{
    return Promise.resolve(ANIMALSDATA);
  }
  */
  
}
/*
const ANIMALSDATA: Animals[] = [
  {name: 'Panda', description: '88 earth days to orbit the sun', imgurl: ''},
  {name: 'Tiger', description: '225 earth days to orbit the sun', imgurl: '' },
  {name: 'Monkey', description: '365 earth days to orbit the sun', imgurl: '' },
  ];
  */