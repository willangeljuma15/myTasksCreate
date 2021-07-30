import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MyComponents
import { FabComponent } from './fab/fab.component';
import { ListaComponent } from './lista/lista.component';
import { PopoverComponent } from './popover/popover.component';


@NgModule({
  declarations: [
    FabComponent,
    ListaComponent,
    PopoverComponent
  ],
  exports: [
    FabComponent,
    ListaComponent,
    PopoverComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
