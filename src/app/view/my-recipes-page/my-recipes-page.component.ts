import { Component, OnInit } from '@angular/core';
import { favRecipes } from '../../shared/lookups/favorite-recipes-lookup';

@Component({
  selector: 'app-my-recipes-page',
  templateUrl: './my-recipes-page.component.html',
  styleUrls: ['./my-recipes-page.component.scss']
})
export class MyRecipesPageComponent implements OnInit {
  constructor() { }
  favRecipes = favRecipes.favoriteRecipies;
  
  ngOnInit(): void {
  }

}
