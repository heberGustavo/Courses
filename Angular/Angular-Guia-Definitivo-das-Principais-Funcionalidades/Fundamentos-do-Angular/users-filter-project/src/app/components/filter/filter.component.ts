import { Component, EventEmitter, Output } from '@angular/core';
import { FilterOptions } from 'src/app/interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output('onFilter') onFilterEmitt = new EventEmitter<FilterOptions>();

  filterOptions: FilterOptions = { 
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  }

  statusList = [
    { description: 'Todos', value: undefined },
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false }
  ]

  onFilter(){
    this.onFilterEmitt.emit(this.filterOptions);
  }

}
