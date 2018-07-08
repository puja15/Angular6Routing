import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { CitiesComponent } from './cities/cities.component';
import { PatientsComponent } from './patients/patients.component';
import { TestserviceComponent } from './Services/testservice/testservice.component';
import { Testservice2Component } from './Services/testservice2/testservice2.component';
import { ActorsComponent } from './actors/actors.component';
import { MediaComponent } from './media/media.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';
import { DynamicFormComponentComponent } from './dynamic-form-component/dynamic-form-component.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CitiesComponent,
    PatientsComponent,
    TestserviceComponent,
    Testservice2Component,
    ActorsComponent,
    MediaComponent,
    DoctorFormComponent,
    EmployeeComponent,
    ProductsComponent,
    RegistrationComponent,
    ReactiveRegisterComponent,
    DynamicFormComponentComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      
        {path:'',component:HomeComponent},
        {path:'contact',component:ContactComponent},
        {path:'about',component:AboutComponent},
        {path:'info/:id',component:InfoComponent}
      

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
