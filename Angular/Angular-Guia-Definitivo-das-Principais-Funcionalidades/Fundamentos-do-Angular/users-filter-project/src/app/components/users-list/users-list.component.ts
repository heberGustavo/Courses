import { IUser } from './../../interfaces/users/user.interface';
import { Component } from '@angular/core';

import { UsersList } from 'src/app/data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  displayedColumns: string[] = ['nome', 'dataCadastro', 'status'];
  usersList: IUser[] = UsersList;

  onSelectUser(user: IUser){
    console.log(user);
  }
}
