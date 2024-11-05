import { Component, Input } from '@angular/core';
import { ItemLine } from '../../../core/models/litem-line';

@Component({
  selector: 'app-process-line',
  standalone: true,
  imports: [],
  templateUrl: './process-line.component.html',
  styleUrl: './process-line.component.scss'
})
export class ProcessLineComponent {

  @Input() lineData!: ItemLine;

}
