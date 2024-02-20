import { Component, OnInit } from '@angular/core';
import { TestModalComponent } from '../test-modal/test-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) {}

  ngOnInit() {}


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
