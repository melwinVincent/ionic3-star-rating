import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Events } from 'ionic-angular'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const HTML_TEMPLATE = `
<div class="ionic3-star-rating">
  <button *ngFor="let index of [0,1,2,3,4]" id="{{index}}" type="button" ion-button icon-only (click)="changeRating($event)">
    <ion-icon [ngStyle]="{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor }" name="{{index < this.Math.round(this.parseFloat(rating)) ? activeIcon : defaultIcon}}"></ion-icon>
  </button>
</div>
`

const CSS_STYLE = `
    .ionic3-star-rating .button {
        height: 28px;
        background: none;
        box-shadow: none;
        -webkit-box-shadow: none;
        width: 28px;
    }
    .ionic3-star-rating .button ion-icon {
        font-size: 32px;
    }
`

@Component({
  selector: 'ionic3-star-rating',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: StarRating,
        multi: true
    }
]
})
export class StarRating implements ControlValueAccessor, OnInit{

  ngOnInit(): void {
    this.rating = this.rating || 3; //default after input`s initialization
  }

  public readonly eventInfo = (()=>{
    const id =new Date().getTime();
    const topic = `star-rating:${id}:changed`;
    return{id,topic};
  })()

  private _rating : number;

  private onChange : any;
  private onTouched : any;
  public disabled : boolean;

  writeValue(obj: number): void {
    this.rating = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.readonly = isDisabled ? "true" : "false";
  }

  @Input() public set rating(val : number){
    this._rating = val;
    if(this.onChange){
      this.onChange(val);
    }
  }

  public get rating(): number{
    return this._rating;
  }




  @Output()
  ratingChanged : EventEmitter<number> = new EventEmitter<number>();

  @Input()
  readonly: string = "false";
  @Input()
  activeColor : string = '#488aff';
  @Input()
  defaultColor : string = '#f4f4f4';
  @Input()
  activeIcon : string = 'ios-star';
  @Input()
  defaultIcon : string = 'ios-star-outline';
  Math: any;
  parseFloat : any;

  constructor(private events : Events) {
    this.Math = Math;
    this.parseFloat = parseFloat;
    this
  }

  changeRating(event){

    if(this.readonly && this.readonly === "true") return;
    // event is different for firefox and chrome
    this.rating = event.target.id ? parseInt(event.target.id) + 1 : parseInt(event.target.parentElement.id) + 1;
    // subscribe this event to get the changed value in ypour parent compoanent 
    this.events.publish(`star-rating:changed`, this.rating); //common event for all instances
    this.events.publish(this.eventInfo.topic, this.rating); //common event for all instances
    this.ratingChanged.emit(this.rating)
  }

}
