import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { EmpComponent } from './emp/emp.component';
import { FancyCardComponent } from './fancy-card/fancy-card.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  {path:"Login", component:LoginComponent},
  {path:"Contact", component:ContactComponent},
  {path:"Home", component:HomeComponent},
  {path:"About", component:AboutusComponent},
  {path:"Categories", component:CategoriesComponent},
  {path :"Products/:cat", component: ProductComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
