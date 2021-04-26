import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './view-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MyRecipesPageComponent } from './my-recipes-page/my-recipes-page.component';



@NgModule({
  declarations: [MainPageComponent, MyRecipesPageComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule
  ],
  
})
export class ViewModule { }
