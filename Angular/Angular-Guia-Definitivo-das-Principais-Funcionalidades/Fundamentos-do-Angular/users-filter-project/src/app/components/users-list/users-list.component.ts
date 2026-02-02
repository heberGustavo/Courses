import { IUser } from './../../interfaces/users/user.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  displayedColumns: string[] = ['nome', 'dataCadastro', 'status'];

  @Input({ required: true }) usersList: IUser[] = [] as IUser[];
  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onSelectUser(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
}
