import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Pipe({
    name: 'buttonFilter',
    pure: false
})
export class ButtonFilterPipe implements PipeTransform {
    transform(items: MenuItem[], type: string, filter: any): MenuItem[] | MenuItem {
        if(!type) {
            throw  `Undefined type`;
        }
        if (!filter.isOnGoing) {
            return items.filter(item => item.label !== `End Sprint`);
        }

        return items;
    }

}