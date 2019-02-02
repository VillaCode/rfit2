import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
@Component({
    selector: "login",
    templateUrl: "loginModal.html"
})
export class loginModal {
   
    constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) { }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}
