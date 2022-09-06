import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() count = 0;
  @Output() increment = new EventEmitter<number>();
  // constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  handleIncrement() {
    this.count++;
    this.increment.emit(this.count);
    // this.cd.detectChanges();
  }
}
