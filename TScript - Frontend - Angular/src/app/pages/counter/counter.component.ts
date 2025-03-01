import { Component } from '@angular/core'

@Component({
  selector: 'page-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent {
  pageName = 'Page Counter'

  count = 0

  increment() { this.count++ }
  decrement() { this.count-- }
}