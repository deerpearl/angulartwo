import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'box-button',
    template: `
        <button [ngClass]="dynamicaStyles()"
            class="box-button"
            (click)="onClick.emit()">
            {{name}}
        </button>
        `,
    styles: [`
        .box-button {
            border: none;
            border-radius: 3px; 
            color: white;
            front-weight: bold;
            letter-spacing: .2em;
            padding: 0.5rem;
            text-transform:uppercase;    
        }
        .primary {background: #E5373A;}
        .normal  {background: #422D3F;}
    `]
})

export class Boxbutton {
    @Input() name: string;
    @Input() isPrimary: boolean;
    @Output() onClick: EventEmitter<any> = new EventEmitter();
    
    dynamicaStyles() {
        return this.isPrimary ? 'primary' : '';
    }
    
}
