import { Component } from '@angular/core'
import { global } from '../../../src'


@Component({
  selector: 'page-counter2',
  imports: [],
  templateUrl: './counter2.component.html',
  styleUrl: './counter2.component.css'
})


export class Counter2Component {
  pageName = 'Page Counter 2'

  count = 0

  constructor(private counterState: global.obs.counter.Service) {
    this.counterState.value$.subscribe(value => this.count = value)
  }

  onIncrement() { this.counterState.increment() }
  onDecrement() { this.counterState.decrement() }
  onReset()     { this.counterState.reset()     }
}