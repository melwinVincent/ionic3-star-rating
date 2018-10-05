# Ionic3 Star Rating

You can give your custom icons, custom color and also make it read only. Simple steps to integrate with your Ionic 2 or Ionic 3 projects.
ionic-star-rating is deprecated, use `npm i ionic3-star-rating` instead. 

Demo: https://stackblitz.com/edit/ionic3-star-rating
# How to use

## Step-1
### Install it
```npm i ionic3-star-rating```

### add the ionic3-star-rating component in your page (parent component) as follows

```
    <ionic3-star-rating 
        activeIcon = "ios-star"
        defaultIcon = "ios-star-outline"
        activeColor = "#488aff" 
        defaultColor = "#f4f4f4"
        readonly="false"
        [rating]="3">
    </ionic3-star-rating>
```

## Options (all are optional, default values are set in the component)

* activeIcon (string) : can specify the icon name for active rating (icon name should be from the https://ionicframework.com/docs/ionicons/  ,  default is set to 'ios-star');
* defaultIcon (string): can specify the default icon name (icon name should be from the https://ionicframework.com/docs/ionicons/  , default is set to 'ios-star-outline');
* activeColor (string): can specify the active color for the active rating icon (should be a valid color code, default is set to '#488aff')
* defaultColor (string): can specify the default color for the rating icon (should be a valid color code, default is set to '#f4f4f4')
* readonly (string): default is set to "false", change to "true" and make it read only. End user won't be able to change the rating then.
* rating (string or number): default is set to 3. input can be of type **number** or **string** (*assign any number from 1 to 5, floating numbers are also accepted, Math.round(parseFloat(rating) is done for all inputs*). 

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

## Step-3 (optional)

## To get the changed rating in the parent component

Subscribe to the event **star-rating:changed** in the constructor of the parent function as follows

```
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
  public events: Events) {
     events.subscribe('star-rating:changed', (starRating) => {console.log(starRating)});
  }

}
```


## Contact
gmail : melwin.vincent.90@gmail.com