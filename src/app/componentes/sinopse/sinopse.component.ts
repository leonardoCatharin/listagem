import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-sinopse',
  templateUrl: './sinopse.component.html',
  styleUrls: ['./sinopse.component.scss'],
})
export class SinopseComponent {
  
  public sinopse : any;

  constructor(private navParams: NavParams) { 
    /* recebe parâmetros e os atribui às variáveis */
    this.sinopse = this.navParams.get('sinopse');
  }
}
