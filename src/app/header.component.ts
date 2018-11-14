import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector : "app-header",
    template:`
        <header>
            <div class="row">
                <div class="col s4 offset-s4 search-btn center-align" (click) = newSearch.emit()>
                    <span class="material-icons">search</span>
                </div>
            </div>
        </header>
    `
})
export class HeaderComponent{

    @Output() newSearch = new EventEmitter();
}
