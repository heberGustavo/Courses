import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/users/user.interface";
import { FilterOptions } from "../interfaces/filter-options.interface";

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined || name === '';

    if (NAME_NOT_TYPPED)
        return usersList;

    return usersList.filter(item => item.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_TYPPED = status === undefined;

    if (STATUS_NOT_TYPPED)
        return usersList;

    return usersList.filter(item => item.ativo === status);
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATES_NOT_TYPPED = startDate === undefined || endDate === undefined;

    if (DATES_NOT_TYPPED)
        return usersList;

    return usersList.filter(item => isWithinInterval(new Date(item.dataCadastro), {
        start: startDate,
        end: endDate
    }));
}

const filterUsersList = (filterOptions: FilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
}

export {
    filterUsersList,
}