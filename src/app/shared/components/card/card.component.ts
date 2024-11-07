import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ItemCard } from '../../../core/models/item-card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {

  @Input() cardData!: ItemCard;


}
