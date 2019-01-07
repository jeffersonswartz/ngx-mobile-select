import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgmComponent } from './ngm/ngm.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgmComponent],
  exports: [NgmComponent]
})
export class NgmModule { }