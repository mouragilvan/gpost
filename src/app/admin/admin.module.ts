import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule, NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PainelComponent } from './painel/painel.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    ReactiveFormsModule    
  ],
  declarations: [
    AdminComponent,
    PainelComponent
  ],
})
export class AdminModule {
}
