import {Component} from '@angular/core';
import {CardComponent} from "../components/card/card.component";
import {CustomDropdownComponent} from "../components/custom-dropdown/custom-dropdown.component";
import {IconComponent} from "../components/icon/icon.component";

function createItem(label: string, value: string, iconText: string) {
    return {
        value,
        label,
        iconText
    };
}

const dinnerItems = [
    createItem('Apple', 'food-apple', '🍎'),
    createItem('Burger', 'food-burger', '🍔'),
    createItem('Pizza', 'food-pizza', '🍕')
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    change = undefined;
    dinnerItems = dinnerItems;

    getChangeValue() {
        return JSON.stringify(this.change, null, 2);
    }

    onChange(event: any) {
        console.log(event);
    }
}

