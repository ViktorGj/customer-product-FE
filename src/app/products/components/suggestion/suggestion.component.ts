import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent {

  constructor(private modal: NgbActiveModal) {
  }

  dismiss(): void {
    this.modal.close(false);
  }

  confirm(): void {
    this.modal.close(true);
  }

}
