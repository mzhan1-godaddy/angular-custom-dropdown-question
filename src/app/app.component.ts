import {Component} from '@angular/core';
import {CardComponent} from "../components/card/card.component";
import {CustomDropdownComponent, DropdownItem} from "../components/custom-dropdown/custom-dropdown.component";

export interface InputChangeEvent {
    id: string;
    value: {
        label: string;
        value: string;
    }
}

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
    dinnerItems = dinnerItems;
    change?: InputChangeEvent;

    getChangeValue() {
        return JSON.stringify(this.change, null, 2);
    }

    handleInputChange(event: InputChangeEvent) {
        this.change = event;
    }
}
