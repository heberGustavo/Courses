import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'statusClass'
})
export class StatusClassPipe implements PipeTransform {
    transform(status: number) {
        const obj: { [key: number]: string } = {
            1: 'item1',
            2: 'item2',
            3: 'item3',
        }

        return obj[status];
    }
}