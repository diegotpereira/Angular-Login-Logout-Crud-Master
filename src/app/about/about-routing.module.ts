import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from '../home';
import { AboutComponent } from '../about/about.component';
import { LayoutComponent } from '../about/layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [

    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'about', component: AboutComponent }
        ]
    }  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutRoutingModule { }