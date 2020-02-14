import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeeRolesComponent } from './Roles/list-employee-roles/list-employee-roles.component';
import { CreateEmployeeRolesComponent } from './Roles/create-employee-roles/create-employee-roles.component';
import { UpdateEmployeeRoleComponent } from './Roles/update-employee-role/update-employee-role.component';
import { DetailsEmployeeRoleComponent } from './Roles/details-employee-role/details-employee-role.component';
import { ListProjectDetailsComponent } from './Project/list-project-details/list-project-details.component';
import { CreateProjectDetailsComponent } from './Project/create-project-details/create-project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeRolesComponent,
    CreateEmployeeRolesComponent,
    UpdateEmployeeRoleComponent,
    DetailsEmployeeRoleComponent,
    ListProjectDetailsComponent,
    CreateProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
