import { Component, Input, OnInit } from '@angular/core';
import { TestModalComponent } from '../test-modal/test-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss'],
})
export class PictureCardComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  @Input() pictureSource: string | undefined;
  @Input() title: string | undefined;
  @Input() action: string | undefined;
  @Input() keepTraining: boolean | undefined;

  public async openModal(text: string) {
    const modal = await this.modalController.create({
      component: TestModalComponent,
      componentProps: {
        text
      }
    });

    modal.present();

    await modal.onWillDismiss();
  }
}
