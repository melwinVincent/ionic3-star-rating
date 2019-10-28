# Ionic3 Star Rating

You can give your custom icons, custom color, custom font-size and also make it read-only.  

You can specify the total number of icons to be displayed, default is set to 5. You may change this to 10 star rating component or 7 star rating component depending on your requirement.  

**Supports Half Star Rating.**    
Single tap on default-star-icon changes it to half-star-icon, tap on half-star-icon changes it to full-star-icon and tap on full-star-icon changes it to half-star-icon. The rating value then steps by 0.5 instead of 1.  

You can use it multiple times in a single page/multiple pages and get the changed rating value in the parent component.  

You can also use it inside the `<form>` component (multiple use inside `<form>` is also supported).  

Easy to integrate with your Ionic 2 or Ionic 3 projects. 
Demo: https://stackblitz.com/edit/ionic3-star-rating-melwin

**For ionic-4 projects please check this package : https://www.npmjs.com/package/ionic4-star-rating**

# How to use

## Step-1

### Install it
```npm i ionic3-star-rating```

### add the ionic3-star-rating component in your page.html (parent component) as follows

```
    <ionic3-star-rating #rating
        activeIcon = "ios-star"
        defaultIcon = "ios-star-outline"
        activeColor = "#488aff" 
        defaultColor = "#f4f4f4"
        readonly="false"
        rating="3"
        fontSize = "32px"
        (ratingChanged)="logRatingChange($event)">
    </ionic3-star-rating>
```

### to use inside the `<form>` component

```
    <form [formGroup]="customForm">

        <ionic3-star-rating #rating 
            activeIcon = "ios-star"
            defaultIcon = "ios-star-outline"
            activeColor = "#d1301a"
            defaultColor = "#aaaaaa"
            readonly = "false"
            fontSize = "32px"
            (ratingChanged)="logRatingChange($event)"
            formControlName="starRating">
        </ionic3-star-rating>

    </form>
```
## Options (all are optional, default values are set in the component itself)

* activeIcon (string) : can specify the icon name for active rating (icon name should be from the https://ionicframework.com/docs/ionicons/  ,  default is set to 'ios-star');
* defaultIcon (string): can specify the default icon name (icon name should be from the https://ionicframework.com/docs/ionicons/  , default is set to 'ios-star-outline');
* halfIcon (string) : can specify the icon name for active half rating (icon name should be from the https://ionicframework.com/docs/ionicons/  ,  default is set to 'ios-star-half');
* halfStar (string) : to support half star rating set this to 'true', default is set to 'false'. The rating value then steps by 0.5 instead of 1. Single tap on defaultIcon changes it to halfIcon , tap on halfIcon changes it to activeIcon and tap on activeIcon changes it to halfIcon again.
* maxRating (number) : can specify the total number of icons to be displayed, default is set to 5. You may change this to 10 star rating component or 7 star rating component depending on your requirement.
* activeColor (string): can specify the active color for the active rating icon (should be a valid color code, default is set to '#488aff')
* defaultColor (string): can specify the default color for the rating icon (should be a valid color code, default is set to '#f4f4f4')
* readonly (string): default is set to "false", change to "true" and make it read only. End user won't be able to change the rating then.
* rating (string or number): default is set to 3. input can be of type **number** or **string** (*assign any number from 1 to 5, floating numbers are also accepted, Math.round(parseFloat(rating) is done for all inputs*). 
* fontSize (string) : can specify the font-size for the icon ( should be a valid string as used in css, a number followed by letters 'px', default is set to '28px'). 
* ratingChanged (funtion) : used to handle the rating change in the parent component and do your stuff
* formControlName : only if you are using the ionic3-star-rating component inside the `<form>` component

## Step-2

### you have to import the StarRatingModule in the module.ts of your parent component as follows
```
    import { NgModule } from '@angular/core';
    import { IonicPageModule } from 'ionic-angular';
    import { ParentPage } from './parent';
    import { StarRatingModule } from 'ionic3-star-rating';

    @NgModule({
    declarations: [
        ParentPage,
    ],
    imports: [
        StarRatingModule,
        IonicPageModule.forChild(ParentPage),
    ],
    })
    export class ParentPageModule {}
```

## Step-3

## To get the changed rating in the parent component

### method-1 : (recommended method)

```
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

    constructor() {
        // do your stuff
    }
  
    logRatingChange(rating){
        console.log("changed rating: ",rating);
        // do your stuff
    }


```

### method-2 : Using @ViewChild and Events

```
import { Component, ViewChild } from '@angular/core';
import { IonicPage, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  
    @ViewChild('rating') rating : any;

    constructor(private events : Events) {
        // do your stuff
    }
  
    ngOnInit() {
        this.events.subscribe(this.rating.eventInfo.topic, ()=> {
            console.log("changed rating", this.rating._rating);
            // do your stuff
        });
    }


```

## To get the changed rating in the parent component if you want to use ionic3-star-rating component inside `<form>` component  

```
import { Component, ViewChild } from '@angular/core';
import { IonicPage, Events } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  
    customForm: FormGroup;
    
    constructor( private events : Events, private formBuilder: FormBuilder ) {
        // do your stuff
    }
    
    ngOnInit() {

        this.customForm = this.formBuilder.group({
            starRating: [3] // set the default value
        });

    }

    logRatingChange(rating){
        console.log("changed rating: ",rating);
        // do your stuff
    }

```


## Multiple usage of the component in same parent page

### parent-component.html

```
    <ionic3-star-rating #rating
        activeIcon = "ios-star"
        defaultIcon = "ios-star-outline"
        activeColor = "#ff0000"
        defaultColor = "#aaaaaa"
        readonly = "false"
        rating = "2"
        fontSize = "32px"
        (ratingChanged)="logRatingChange($event)">
    </ionic3-star-rating>

    <ionic3-star-rating #rating2
        activeIcon = "ios-star"
        defaultIcon = "ios-star-outline"
        activeColor = "#d1301a"
        defaultColor = "#aaaaaa"
        readonly = "false"
        rating = "3"
        fontSize = "32px"
        (ratingChanged)="logRatingChange2($event)">
    </ionic3-star-rating>

```
### parent-component.ts

#### method-1

```
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

    constructor() {
        // do your stuff
    }
  
    logRatingChange(rating){
        console.log("changed rating: ",rating);
        // do your stuff
    }
    
    logRatingChange2(rating){
        console.log("changed rating2: ",rating);
        // do your stuff
    }


}
```

#### method-2 : Using @ViewChild and Events

```
import { Component, ViewChild } from '@angular/core';
import { IonicPage, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  
    @ViewChild('rating') rating : any;
    @ViewChild('rating2') rating2 : any;

    constructor(private events : Events) {
        // do your stuff
    }
  
    ngOnInit() {
        this.events.subscribe(this.rating.eventInfo.topic, ()=> {
            console.log("changed rating", this.rating._rating);
            // do your stuff
        });

        this.events.subscribe(this.rating2.eventInfo.topic, ()=> {
            console.log("changed rating2", this.rating2._rating);
            // do your stuff
        });

    }

```

## Multiple usage of ionic3-star-rating component in the same `<form>` of the parent page

### parent-component.html
```
    <form [formGroup]="customForm">

      <ionic3-star-rating #rating 
          activeColor = "#ff0000"
          defaultColor = "#aaaaaa"
          readonly = "false"
          (ratingChanged)="logRatingChange($event)"
          formControlName="starRating">
      </ionic3-star-rating>

      <ionic3-star-rating #rating2 
          activeColor = "#ff0000"
          defaultColor = "#aaaaaa"
          readonly = "false"
          (ratingChanged)="logRatingChange2($event)"
          formControlName="starRating2">
      </ionic3-star-rating>

    </form>
```

### parent-component.ts

```
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  
    customForm: FormGroup;
    
    constructor( private formBuilder: FormBuilder ) {
        // do your stuff
    }
    
    ngOnInit() {

        this.customForm = this.formBuilder.group({
            starRating: [3],
            starRating2: [4]
        });

    }

    logRatingChange(rating){
        console.log("changed rating: ",rating);
        // do your stuff
    }
    
    logRatingChange2(rating){
        console.log("changed rating2: ",rating);
        // do your stuff
    }

```
### common event for all instances in a page (useful in some specific scenarios)
```
this.events.subscribe('star-rating:changed', (rating) => {
    console.log("changed rating: ",rating);
});
```

## Contact
gmail : melwin.vincent.90@gmail.com
