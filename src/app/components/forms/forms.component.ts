import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';
import { FilterUnitsService } from '../../services/filter-units.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService, private filterUnitsService: FilterUnitsService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    });
    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data;
      this.filteredResults = [];
    });
  }

  onSubmit(): void {
    let {showClosed, hour} = this.formGroup.value;
    this.filteredResults = this.filterUnitsService.filter(this.results, showClosed, hour);
    this.unitService.setFilteredUnits(this.filteredResults);
        
    this.submitEvent.emit();
  }

  clearResults(): void {
    this.formGroup.reset();
    this.filteredResults = [];
    this.unitService.setFilteredUnits(this.filteredResults);

    this.submitEvent.emit();
  }

}
