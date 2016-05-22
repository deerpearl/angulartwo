import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'box-text-field',
    template: `
    <input class="box-text-field"
        [placeholder]="placeholder"
        #field (keyup)="handleKeyup(field.value)">
    `,
    styles: [`
        .box-text-field {
            border-radius: 3px;
            border: 1px solid #ccc;
            box-sizing:border-box;
            display: inline-block;
            font-size: inherit;
            font-weight:inherit;
            height: 2.5rem;
            margin-bottom: 1rem;
            padding: .5rem;    
        }
    `]
})

export class Boxtextfield {
    @Input() private placeholder: string;
    @Input() value: string; 
    @Output() valueChange: EventEmitter<string> = new EventEmitter();
    
    handleKeyup(fieldValue:string):void{
        this.valueChange.emit(fieldValue);
    }
}
