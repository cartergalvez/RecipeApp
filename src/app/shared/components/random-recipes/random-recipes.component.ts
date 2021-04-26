import { Component, OnInit, Input } from '@angular/core';
import { randomRecipies } from '../../models/random-recipesmodel';

@Component({
  selector: 'app-random-recipes',
  templateUrl: './random-recipes.component.html',
  styleUrls: ['./random-recipes.component.scss']
})
export class RandomRecipesComponent implements OnInit {
  constructor() { }
  @Input() rngRecipes: randomRecipies;
  @Input() even: any;
  
  ngOnInit(): void {
    
  }

}
