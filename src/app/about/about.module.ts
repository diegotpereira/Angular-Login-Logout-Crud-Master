import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutRoutingModule } from './about-routing.module';
import { LayoutComponent } from './layout.component';
import { AboutComponent } from '../about/about.component';


@NgModule({
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AboutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    AboutComponent
    
    
]
})
export class AboutModule { }
