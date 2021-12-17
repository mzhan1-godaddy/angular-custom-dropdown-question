import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InputChangeEvent} from "../../app/app.component";

export interface DropdownItem {
    label: string;
    value: string;
    iconText: string;
}

@Component({
    selector: 'custom-dropdown',
    template: `
        <div class="custom-button">TODO implement this</div>
    `,
    styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent {
}
