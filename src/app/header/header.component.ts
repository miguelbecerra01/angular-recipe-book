import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() selectedPage = new EventEmitter<string>();
    onSelected(page: string) {
        this.selectedPage.emit(page);
    }
}