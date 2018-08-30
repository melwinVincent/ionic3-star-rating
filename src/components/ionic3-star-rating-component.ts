import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular'

const HTML_TEMPLATE = `
<div class="ionic3-star-rating">
  <button *ngFor="let index of [0,1,2,3,4]" id="{{index}}" ion-button icon-only (click)="changeRating($event)" [ngClass]="{'rated' : index < rating}">
    <ion-icon name="star"></ion-icon>
  </button>
</div>
`

const CSS_STYLE = `
    .ionic3-star-rating .button {
        height: auto;
        background: none;
        color: #f4f4f4;
        box-shadow: none;
        -webkit-box-shadow: none;
        width: 28px;
    }
    .ionic3-star-rating .button ion-icon {
        font-size: 32px;
    }
    .ionic3-star-rating .button.rated ion-icon {
      color : #488aff
    }
`
@Component({
  selector: 'ionic3-star-rating',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class StarRating {
  @Input()
  rating: number;
  @Input()
  readonly: string;

  constructor(private events : Events) {
  }


  changeRating(event){

    if(this.readonly && this.readonly === "true") return;
    this.rating = parseInt(event.target.parentElement.id) + 1;
    // subscribe this event to get the changed value in ypour parent compoanent 
    this.events.publish('star-rating:changed', this.rating);
  }

}