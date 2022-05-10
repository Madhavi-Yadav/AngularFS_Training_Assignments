import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { FriendsComponent } from './friends/friends.component';
import { ProductComponent } from './product/product.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { SortOptionsComponent } from './sort-options/sort-options.component';
import { UsersComponent } from './users/users.component';
import { GradesPipe } from './grades.pipe';
import { GenderPipe } from './gender.pipe';
import { FilterRangePipe } from './filter-range.pipe';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { FancyCardComponent } from './fancy-card/fancy-card.component';
import { LoginComponent } from './login/login.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorDemoComponent } from './interceptor-demo/interceptor-demo.component';
import { CustomHttpInterceptorService } from './custom-http-interceptor.service';
import { RxjsOperatorComponent } from './rxjs-operator/rxjs-operator.component';
import { ModelFormsComponent } from './model-forms/model-forms.component';
import { CustomShadowDirective } from './custom-shadow.directive';
import { CustomAdminDirective } from './custom-admin.directive';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MymaterialModule } from './mymaterial/mymaterial.module';
import { MaterialDemoComponent } from './mymaterial//material-demo/material-demo.component';
import { LoginDemoComponent } from './mymaterial/login-demo/login-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    FriendsComponent,
    ProductComponent,
    DeptListComponent,
    SortOptionsComponent,
    UsersComponent,
    GradesPipe,
    GenderPipe,
    FilterRangePipe,
    DirectivesDemoComponent,
    FancyCardComponent,
    LoginComponent,
    TemplateVariableComponent,
    HttpDemoComponent,
    InterceptorDemoComponent,
    RxjsOperatorComponent,
    ModelFormsComponent,
    CustomShadowDirective,
    CustomAdminDirective,
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    CategoriesComponent,
    MaterialDemoComponent,
    LoginDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  ,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MymaterialModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
