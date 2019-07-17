import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  passed = null;

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.passed = this.navParams.get('custom_id')
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
