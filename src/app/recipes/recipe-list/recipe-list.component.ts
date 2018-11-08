import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Fagioli all\'uccelletto', 'Ricette toscane', 'https://www.lospicchiodaglio.it/img/ricette/fagioliuccelletto.jpg'),
    new Recipe('Fagioli all\'uccelletto', 'Ricette toscane', 'https://www.lospicchiodaglio.it/img/ricette/fagioliuccelletto.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
