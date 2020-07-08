import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'
import { HeaderComponent } from './components/header/header.component'
import { ToolbarButtonComponent } from './components/toolbar-button/toolbar-button.component'
import { MainCardComponent } from './components/main-card/main-card.component';
import { IncomesCardComponent } from './components/incomes-card/incomes-card.component';
import { GoalsSliderComponent } from './components/goals-slider/goals-slider.component';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';

@NgModule({
    declarations: [
        HeaderComponent, 
        ToolbarButtonComponent, 
        MainCardComponent, 
        IncomesCardComponent, 
        GoalsSliderComponent, 
        PortfolioCardComponent,
        VideoCardComponent,
        BlogCardComponent
    ],
    imports: [IonicModule, CommonModule],
    exports: [
        HeaderComponent, 
        ToolbarButtonComponent, 
        MainCardComponent, 
        IncomesCardComponent, 
        GoalsSliderComponent, 
        PortfolioCardComponent,
        VideoCardComponent,
        BlogCardComponent
    ]
})

export class ComponentsModule { }