import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MyRecipesPageComponent } from './my-recipes-page/my-recipes-page.component';


const routes: Routes = [
    {path:'main', component: MainPageComponent},
    {path:'' ,pathMatch:'full', redirectTo:'main'},
    {path: 'my-recipies', component: MyRecipesPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
