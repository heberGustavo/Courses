import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/users/user.interface';
import { UsersList } from './data/users-list';
import { FilterOptions } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';
import { filterUsersList } from './utils/filter-users-list';

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
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }

}
