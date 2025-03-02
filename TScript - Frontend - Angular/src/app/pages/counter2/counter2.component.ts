import { Component } from '@angular/core'
import { CounterService } from '../../../global-state/behavior-subject'


@Component({
  selector: 'page-counter2',
  imports: [],
  templateUrl: './counter2.component.html',
  styleUrl: './counter2.component.css'
})


export class Counter2Component {
  pageName = 'Page Counter 2'

  count = 0

  constructor(private counterState: CounterService) {
    this.counterState.value$.subscribe(value => this.count = value)
  }

  onIncrement() { this.counterState.increment() }
  onDecrement() { this.counterState.decrement() }
  onReset()     { this.counterState.reset()     }
}