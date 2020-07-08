import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
})
export class PortfolioCardComponent implements OnInit {
  @Input() userData: any;
  currentPortfolioIndex = 0
  portfolioLoaderRotation = 0
  constructor() { }

  changeAsset(delta){
    this.currentPortfolioIndex += delta
    this.portfolioLoaderRotation += 36 * delta
  }

  ngOnInit() {}

}
