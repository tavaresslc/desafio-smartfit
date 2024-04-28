import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    });
    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data.locations;
      this.filteredResults = [];
    });
  }

  onSubmit(): void {
    if (!this.formGroup.value.showClosed) {
      this.filteredResults = this.results.filter(location => location.opened === true);
    } else {
      this.filteredResults = this.results;
    }
  }

  clearResults(): void {
    this.formGroup.reset();
  }

}
