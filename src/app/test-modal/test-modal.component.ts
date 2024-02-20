import { Component, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'test-modal.component.html',
})
export class TestModalComponent {

  constructor(private modalCtrl: ModalController) {}

  @Input() text = 'Hello World';

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(true, 'confirm');
  }
}
