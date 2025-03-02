import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { HttpClientModule } from '@angular/common/http'

import { GlobalState } from '../../src'


@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot({ 
      [GlobalState.store.Counter.configs.name]: GlobalState.store.Counter.reducer, 
    })
  ],
})

export class AppModule {}