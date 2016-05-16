import { Component, OnInit } from '@angular/core';
import { AnimalsService } from './shared/animals.service'
import { HTTP_PROVIDERS} from '@angular/http'
import { Animals } from './shared/animals.model';
//import { Component, OnInit } from 'angular2/core';

@Component({
  moduleId: module.id,
  selector: 'app-main-container',
  templateUrl: 'main-container.component.html',
  styleUrls: ['main-container.component.css'],
  providers: [AnimalsService, HTTP_PROVIDERS]
})
export class MainContainerComponent implements OnInit {

  constructor(private anmlsrvc:AnimalsService) {}
  
  errorMessage: string;
  
  animals: Animals[];
  /* To be deleted later:
  search (term) {
    this.anmlsrvc.search(term)
                         .then(items => this.items = items);
  }
  */
  ngOnInit() {
    this.getAnimals();
  }
  
  getAnimals(){
    this.anmlsrvc.getAnimals()
                  .subscribe(
                    animals => this.animals = animals,
                    error =>  this.errorMessage = <any>error);
  }
  
  addAnimal (name: string) {
    if (!name) {return;}
    this.anmlsrvc.addAnimal(name)
                     .subscribe(
                       animal  => this.animals.push(animal),
                       error =>  this.errorMessage = <any>error);
  }

}
