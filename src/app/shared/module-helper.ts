import { HeaderComponent } from "./components/header/header.component";
import { FavoriteRecipesComponent } from "./components/favorite-recipes/favorite-recipes.component";
import { HttpClientModule, HttpHeaders  } from '@angular/common/http';
import { RandomRecipesComponent } from "./components/random-recipes/random-recipes.component";
import { FavoriteBtnComponent } from "./components/favorite-btn/favorite-btn.component";
import { RemoveBtnComponent } from "./components/remove-btn/remove-btn.component";



export const Components = [
HeaderComponent,
FavoriteRecipesComponent,
RandomRecipesComponent,
FavoriteBtnComponent,
RemoveBtnComponent
];

export const Modules = [
   
];