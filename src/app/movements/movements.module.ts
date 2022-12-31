import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsIndexPageComponent } from './movements-index-page/movements-index-page.component';
import { MovementsResolver } from './movements-resolver.resolver';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MovementTypeSelectorComponent } from './components/movement-type-selector/movement-type-selector.component';

const routes: Routes = [
  {
    path: 'movements',
    component: MovementsIndexPageComponent,
    resolve: {
      movements: MovementsResolver
    },
    data: {
      title: 'RC | Movimentações'
    }
  },
]

@NgModule({
  declarations: [
    MovementTypeSelectorComponent
  ],
  exports: [
    MovementTypeSelectorComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class MovementsModule { }
