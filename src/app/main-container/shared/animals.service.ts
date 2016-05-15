import { Injectable } from '@angular/core';
//import { Injectable } from 'angular2/core';
import {URLSearchParams, Jsonp} from '@angular/http';
import { Animals } from './animals.model';

@Injectable()
export class AnimalsService {

  constructor(private jsonp: Jsonp) {}

  
   /*
   
   search (term: string) {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
                .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
                .subscribe
   }
  getAnimals(): Promise<Planets[]>{
    return Promise.resolve(ANIMALSDATA);
  }
  */
  
}

const ANIMALSDATA: Animals[] = [
  {name: 'Panda', description: '88 earth days to orbit the sun', imgurl: ''},
  {name: 'Tiger', description: '225 earth days to orbit the sun', imgurl: '' },
  {name: 'Monkey', description: '365 earth days to orbit the sun', imgurl: '' },
  ];