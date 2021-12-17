import { Component } from '@angular/core';

@Component({
    selector: 'card',
    template: `
        <div class="card">
            {{title}}
            <div class="card-content"><ng-content></ng-content></div>
        </div>
    `,
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    title = 'sample';
}
