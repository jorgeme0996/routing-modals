import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { PopoverPage } from '../popover/popover.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  value = 0;

  constructor(
    private nav: NavController,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController
  ) {}

  pushPage() {
    this.nav.navigateForward(`second/${this.value}`)
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        custom_id: this.value
      }
    });

    modal.present();
  }

  async openPopover(event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      componentProps: {
        custom_id: this.value
      },
      event
    });

    popover.present();
  }

}
