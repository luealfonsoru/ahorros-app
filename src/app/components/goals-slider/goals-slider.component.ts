import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goals-slider',
  templateUrl: './goals-slider.component.html',
  styleUrls: ['./goals-slider.component.scss'],
})
export class GoalsSliderComponent implements OnInit {

  @Input() userData: any

  slideOptions = { slidesPerView: 'auto', zoom: false, grabCursor: true }
  
  constructor() { }

  ngOnInit() {}

}
