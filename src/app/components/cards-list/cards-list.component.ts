import { Component, Input } from '@angular/core';
import { Location } from '../../types/location.interface';
import { GetUnitsService } from '../../services/get-units.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent {
  @Input() unitsList: Location[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
