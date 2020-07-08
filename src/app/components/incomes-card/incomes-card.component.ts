import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incomes-card',
  templateUrl: './incomes-card.component.html',
  styleUrls: ['./incomes-card.component.scss'],
})
export class IncomesCardComponent implements OnInit {
  @Input() userData: any;
  constructor() { }

  ngOnInit() {}

}
