import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  title: string = "myTasksCreate";

  constructor( private menuController: MenuController ) {}

  ngOnInit() {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then( resp => {
    //     console.log(resp.data);
    //   })
  }

  onClick() {
    this.menuController.open();
  }

}
