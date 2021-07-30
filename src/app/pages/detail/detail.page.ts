import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor( private popoverController: PopoverController ) { }

  ngOnInit() {

  }

  async onClick(event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: event,
      
    });
  
    await popover.present();
  }

}
