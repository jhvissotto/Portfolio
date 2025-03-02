import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { page } from '../../src'


export const routes: Routes = [
    { path:'page-list',      title:'Page List',       component:page.ListComponent      }, 
    { path:'page-counter',   title:'Page Counter',    component:page.CounterComponent   }, 
    { path:'page-counter2',  title:'Page Counter 2',  component:page.Counter2Component  }, 
    { path:'page-counter3',  title:'Page Counter 3',  component:page.Counter3Component  }, 
    { path:'page-form',      title:'Page Form',       component:page.FormComponent      }, 
    { path:'page-api',       title:'Page Api',        component:page.ApiComponent       }, 
]


// @NgModule({
//     imports: [RouterModule.forRoot(routes)], 
//     exports: [RouterModule], 
// })

// export class AppRoutingModule {}