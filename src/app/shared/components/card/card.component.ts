import { Component, Input } from '@angular/core';
import { ItemCard } from '../../../core/models/item-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {

  @Input() date = 'December 10, 2020';
  @Input() title = 'titulo';
  @Input() description = 'Descripcion';
  @Input() titleBar = 'Progress';
  @Input() percent = 50;

  //@Input() bgColor = '#fee4cb';
 // @Input() progressColor = '#ff942e';
 // @Input() message = '#ff942e';
  // @Input() data: any
  @Input() cardData!: ItemCard;
  @Input() bgColor: string = '#ffffff';
  @Input() progressColor: string = '#ffffff';
  @Input() dayLeft : string = '#ffffff' ;



}
