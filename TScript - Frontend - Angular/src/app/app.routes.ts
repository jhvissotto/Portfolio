import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import * as Page from './pages'


export const routes: Routes = [
    { path:'page-list',      title:     'List Page',  component:Page.ListComponent      }, 
    { path:'page-counter',   title:  'Counter Page',  component:Page.CounterComponent   }, 
    { path:'page-counter2',  title:'Counter 2 Page',  component:Page.Counter2Component  }, 
    { path:'page-counter3',  title:'Counter 3 Page',  component:Page.Counter3Component  }, 
    { path:'page-form',      title:     'Form Page',  component:Page.FormComponent      }, 
    { path:'page-api',       title:      'Api Page',  component:Page.ApiComponent       }, 
]


// @NgModule({
//     imports: [RouterModule.forRoot(routes)], 
//     exports: [RouterModule], 
// })


// export class AppRoutingModule {}