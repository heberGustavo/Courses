import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/users/user.interface';
import { UsersList } from './data/users-list';
import { FilterOptions } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = UsersList;
    }, 1500);
  }

  onUserSelected(user: IUser){
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: FilterOptions){
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  filterUsersList(filterOptions: FilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = this.filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }
  
  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined || name === '';
    
    if(NAME_NOT_TYPPED)
      return usersList;
    
    return usersList.filter(item => item.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }
  
  filterUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_TYPPED = status === undefined;

    if(STATUS_NOT_TYPPED)
      return usersList;

    return usersList.filter(item => item.ativo === status);
  }

  filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
    const DATES_NOT_TYPPED = startDate === undefined || endDate === undefined;

    if(DATES_NOT_TYPPED)
      return usersList;

    return usersList.filter(item => isWithinInterval(new Date(item.dataCadastro), {
      start: startDate,
      end: endDate
    }));
  }
}
