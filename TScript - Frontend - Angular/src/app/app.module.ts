import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { HttpClientModule } from '@angular/common/http'

import { global } from '../../src'


@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot({ 
      [global.store.Counter.configs.name]: global.store.Counter.reducer, 
    })
  ],
})

export class AppModule {}