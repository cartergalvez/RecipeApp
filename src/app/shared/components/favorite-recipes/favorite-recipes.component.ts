import { Component, OnInit, Input } from '@angular/core';
import { favRecipes } from '../../models/favrecipesmodel';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.scss']
})
export class FavoriteRecipesComponent implements OnInit {
  constructor() { }
  @Input() favoriteRecipies: favRecipes;
  @Input() even: any;
  ngOnInit(): void {
  }

}
