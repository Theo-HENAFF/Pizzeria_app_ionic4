import { Component, ViewChild, ElementRef } from '@angular/core';
import { RestService } from '../rest.service';
import { LoadingController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  api: RestService;
  carte: any;
  p: any;
  form = {
    nom: '',
    price: Number(null),
    plat_du_jour : Boolean(false),
    url : '',
    description : '',
  };

  constructor(

    public restapi: RestService,
    public loadingController: LoadingController) {
    this.api = restapi;

  }
  async getAll() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getAll()
      .subscribe(res => {
        this.carte = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  ngOnInit() {
    this.getAll();
  }

  async delete(p: string) {
    this.api.deleteOnePizzaByTitle(p)
      .subscribe(res => {
        console.log(res);
      });
    await location.reload();
  }
  async create() {
    this.api.insertPizza(this.form.nom, this.form.price, this.form.plat_du_jour, this.form.url, this.form.description)
      .subscribe(res => {
        console.log(res);
      });
    await location.reload();
  }
}
