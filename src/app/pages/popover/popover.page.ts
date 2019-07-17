import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  passed = null;

  constructor(
    private navParams: NavParams,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.passed = this.navParams.get('custom_id')
  }

  closePopover(){
    this.popoverCtrl.dismiss();
  }

}
