import { Product, CartService } from '../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { RestService } from 'src/app/rest.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  cart: Product[] = [];
  p: any;
  api: RestService;
  form = {
    nom: '',
    prenom: '',
    numtel: Number(),
    price: Number(),
  };
  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public restapi: RestService,
    public loadingController: LoadingController) {
      this.api = restapi;
    }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async checkout() {
    if (this.getTotal() !== 0) {
      this.cart.forEach((item) => {
        this.api.insertCommande(this.form.nom, this.form.prenom, this.form.numtel, item.title, item.amount)
          .subscribe(res => {
          });
      });
      const alert = await this.alertCtrl.create({
        header: 'Merci pour votre commande!',
        message: 'Nous vous avertirons dès que votre commande sera prête',
        buttons: ['OK']
      });
      alert.present().then(() => {
        this.modalCtrl.dismiss();
      });
      this.cart.forEach((item) => {
        this.removeCartItem(item);
      });
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Votre panier est vide',
        message: 'Essayez d\'ajouter des pizzas',
        buttons: ['OK']
      });
      alert.present().then(() => {
        this.modalCtrl.dismiss();
      });
    }


  }
}

