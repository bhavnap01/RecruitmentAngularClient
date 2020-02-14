import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeRolesComponent } from './Roles/list-employee-roles/list-employee-roles.component';
import { CreateEmployeeRolesComponent } from './Roles/create-employee-roles/create-employee-roles.component';
import { UpdateEmployeeRoleComponent } from './Roles/update-employee-role/update-employee-role.component';
import { ListProjectDetailsComponent } from './Project/list-project-details/list-project-details.component';
import { CreateProjectDetailsComponent } from './Project/create-project-details/create-project-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  
  { path: 'roles', component: ListEmployeeRolesComponent },
  { path: 'roles/addrole', component: CreateEmployeeRolesComponent},
  { path: 'updateRole/:roleId', component:UpdateEmployeeRoleComponent},

  { path: 'projects', component: ListProjectDetailsComponent},
  { path: 'projects/project', component: CreateProjectDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
