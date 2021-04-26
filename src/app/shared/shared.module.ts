import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modules, Components } from './module-helper';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavoriteRecipesComponent } from './components/favorite-recipes/favorite-recipes.component';
import { RandomRecipesComponent } from './components/random-recipes/random-recipes.component';
import { FavoriteBtnComponent } from './components/favorite-btn/favorite-btn.component';
import { RemoveBtnComponent } from './components/remove-btn/remove-btn.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, FavoriteRecipesComponent, RandomRecipesComponent, FavoriteBtnComponent, RemoveBtnComponent],
  imports: [
    CommonModule,
    Modules
  ],
  exports: [
    Components,
    Modules
  ]
})
export class SharedModule { }
