import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.page.html',
  styleUrls: ['./adminpanel.page.scss'],
})
export class AdminpanelPage{

api: RestService;
reservation: any;

  constructor(
    public restapi :  RestService,
    public loadingController: LoadingController){
    this.api = restapi;
   }

   async getAllCommande() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getAllCommandes()
      .subscribe(res => {
        console.log(res);
        this.reservation = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    }


  ngOnInit() {
    this.getAllCommande();

  }

  async deletepizzacommander(p:string) {
    this.api.deleteOneCommandeById(p)
      .subscribe(res => {
        console.log(res);
      });
      await location.reload();
    }

}