import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductCategoriesModalComponent } from '../../components/product-categories-modal/product-categories-modal.component';
@Component({
  selector: 'products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsIndexPage implements OnInit {

  public showSettingModal = false;

  constructor( private modalController: ModalController) { }

  ngOnInit(): void { }

  log(event){
    console.log(event);
  }

  async toggleSettingsModalVisibility() {
    const modal = await this.modalController.create({
      component: ProductCategoriesModalComponent
    })

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if( role == 'confirm' ) {
      // Do something
    }
  }

  // WHEN create category SELECTED, SHOW CATEGORY CREATION COMPONENT

}
