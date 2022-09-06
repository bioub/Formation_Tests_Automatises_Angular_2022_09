import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-timeouts',
  templateUrl: './with-timeouts.component.html',
  styleUrls: ['./with-timeouts.component.css']
})
export class WithTimeoutsComponent implements OnInit {

  prop1 = '';
  prop2 = '';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.prop1 = 'value 1';
    }, Math.random() * 1000);

    setTimeout(() => {
      this.prop2 = 'value 2';
    }, Math.random() * 1000);
  }

}
