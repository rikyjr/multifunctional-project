import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardComponent } from './shared/components/card/card.component';

import { MsnSectionComponent } from './shared/components/msn-section/msn-section.component';
import { ProcessLineComponent } from './shared/components/process-line/process-line.component';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './shared/components/card/side-bar/side-bar.component';
import { HttpBackend } from '@angular/common/http';
import { ItemCard } from './core/models/item-card';
import { ItemLine } from './core/models/litem-line';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    CardComponent,
    SideBarComponent,
    MsnSectionComponent,
    ProcessLineComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-main';



  itemCard: ItemCard[] =
  [

    {
      id: 1,
      date: 'December 10, 2020',
      title: 'Web Designing',
      subTitle: 'Prototyping',
      progress: 'Progress',
      number: '60',
      bgColor:"#fee4cb",
      progressColor:"#ff942e",
      dayLeft: "#ff942e"
    },
    {
      id: 2,
      date: 'December 10, 2020',
      title: 'Testing',
      subTitle: 'Prototyping',
      progress: 'Progress',
      number: '50',
      bgColor:"#e9e7fd",
      progressColor:"#4f3ff0",
      dayLeft:"#4f3ff0"
    },
    {
      id: 3,
      date: 'December 10, 2020',
      title: 'Svg Animations',
      subTitle: 'Prototyping',
      progress: 'Progress',
      number: '80',
      bgColor:"#dbf6fd",
      progressColor:"#096c86",
       dayLeft:"#096c86",

    },
    {
      id: 4,
      date: 'December 10, 2020',
      title: 'UI Development',
      subTitle: 'Prototyping',
      progress: 'Progress',
      number: '20',
      bgColor:"#ffd3e2 ",
      progressColor:"#df3670",
       dayLeft:"#df3670",

    },
    {
      id: 5,
      date: 'December 10, 2020',
      title: 'Data Analysis',
      subTitle: 'Prototyping',
      progress: 'Progress',
      number: '30',
      bgColor:"#c8f7dc",
       progressColor:"#34c471",
       dayLeft:"#34c471",
    },
    {
      id: 6,
      date: 'December 10, 2020',
      title: 'Web Designing',
      subTitle: 'Prototyping',
      progress: 'Progress',
      number: '40',
      bgColor:"#d5deff",
       progressColor:"#4067f9",
       dayLeft:"#4067f9",
    },
  ];

  infoProgress: ItemLine []= [
    {
      number: 45,
      title:'In Progress'
    },
    {
      number: 24,
      title:'Upcoming'
    },
    {
      number: 45,
      title:'Total Projects'
    }
  ]



}
