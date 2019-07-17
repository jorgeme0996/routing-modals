import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  passed = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.passed = this.route.snapshot.paramMap.get('myid');
  }

}
