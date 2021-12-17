import {Component, Input} from '@angular/core';

@Component({
    selector: 'card',
    template: `
        <div class="card">
            <code>{{title}}</code>
            <div class="card-content"><ng-content></ng-content></div>
        </div>
    `,
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() title = 'sample';
}
