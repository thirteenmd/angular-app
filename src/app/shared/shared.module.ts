import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatNameIdPipe } from './pipes/concat-name-id.pipe';

const MODULES = [
  CommonModule
];

const PIPES = [
  ConcatNameIdPipe
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...PIPES
  ],
  declarations: [
    ...PIPES
  ]
})
export class SharedModule { }
