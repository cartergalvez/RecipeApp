import { Component, OnInit } from '@angular/core';
import { favRecipes } from '../../shared/lookups/favorite-recipes-lookup';
import { RecipesService } from '../../shared/services/recipes.service';
import { randomRecipies } from '../../shared/models/random-recipesmodel';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  constructor(public recipiceService: RecipesService) { }
  favRecipes = favRecipes.favoriteRecipies;
  rngRecipes: randomRecipies [] = [];
 

  ngOnInit(): void {
   this.recipiceService.parseData();
    this.rngRecipes = this.recipiceService.recipies;
    
  }

}
