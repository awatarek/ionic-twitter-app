import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBadgeComponent } from './add-badge';
import { NavbarComponent } from './navbar/navbar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AddBadgeComponent, NavbarComponent],
  imports: [
    CommonModule,
    IonicModule 
  ],
  exports: [AddBadgeComponent, NavbarComponent]
})
export class ComponentsModule { }
