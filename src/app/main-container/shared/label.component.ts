import { Component, Input} from '@angular/core';

@Component({
    selector: 'box-label',
    template: '<label class="box-label">{{name}}</label>',
    styles: [`
        .box-label {
            color: #2621a9;
            display: block;
            front-weight: bold;
            letter-spacing: .2em;
            text-transform:uppercase;    
        }
    `]
})

export class Boxlabel {
    @Input() private name: string;
}
