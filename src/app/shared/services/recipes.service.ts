import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { favRecipes } from '../models/favrecipesmodel';
import { Observable } from 'rxjs';
import { randomRecipies } from '../models/random-recipesmodel';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private http: HttpClient) { }
  parseUrl: any;
  private url = "https://api.spoonacular.com/recipes/random?number=5&apiKey=ebaa596273a2405081190fe5ee113875";
  recipies: randomRecipies [] = [];
  
  parseData() {
    this.parseUrl = this.http.get(this.url);
    this.parseUrl.subscribe(
      x => {
        for (const r of x.recipes) {
          const nFo: randomRecipies = {
            id: r.id,
            image: r.image,
            title: r.title,
            instructions: r.instructions
          };this.recipies.push(nFo);
        }console.log(this.recipies);
      }
    )

  }
}
