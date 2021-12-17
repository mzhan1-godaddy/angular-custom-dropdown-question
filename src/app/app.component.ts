import {Component} from '@angular/core';
import {CardComponent} from "../components/card/card.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    change = undefined;

    getChangeValue() {
        return JSON.stringify(this.change, null, 2);
    }
}
