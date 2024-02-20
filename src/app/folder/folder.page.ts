import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TestModalComponent } from '../test-modal/test-modal.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

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
