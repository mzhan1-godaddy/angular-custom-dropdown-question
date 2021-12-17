import {Component, Input} from '@angular/core';

@Component({
    selector: 'icon',
    template: `
        <div class="icon-container">
            {{text}}
        </div>
    `,
    styleUrls: ['./icon.component.scss']
})
export class IconComponent {
    @Input() text = '';
}
