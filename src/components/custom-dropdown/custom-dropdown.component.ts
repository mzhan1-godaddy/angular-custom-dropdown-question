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
        <div class="custom-button" >{{currentItem?.iconText}} {{currentItem?.label}}</div>
        <div *ngFor="let item of items" class="custom-button" (click)="handleClick(item)">
            {{item.iconText}} {{item.label}}
        </div>
        
    `,
    styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent {
    @Input() id = '';
    @Input() items: DropdownItem[] = [];
    @Output() change = new EventEmitter<InputChangeEvent>();
    currentItem?: DropdownItem;

    handleClick(item: DropdownItem) {
        this.currentItem = item;
        this.change.emit({
            id: this.id,
            value: {
                label: item.label,
                value: item.value
            }
        });
    }
}
