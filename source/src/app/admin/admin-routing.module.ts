import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { AdminComponent } from './admin.component';
import { PainelComponent } from './painel/painel.component';
const routes: Routes = [{
    path: '',
    component: AdminComponent,
    children: [   
      {
          path: '',
          component: PainelComponent
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdminRoutingModule {
  }