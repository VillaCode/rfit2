import { Component, ViewChild } from '@angular/core';

import { CorreTab } from '../corre/corre';
import { PerfilTab } from '../perfil/perfil';
import { RetosTab } from '../retos/retos';
import { loginModal } from "../Login/loginModal";
import { ModalController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RetosTab;
  tab2Root = CorreTab;
  tab3Root = PerfilTab;

  constructor(public modalCtrl: ModalController) {
    let infoModal = this.modalCtrl.create(loginModal);
    infoModal.present();
  }


  

}
