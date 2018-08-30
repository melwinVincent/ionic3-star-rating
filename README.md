# Ionic3 Star Rating

#Step-I
### add the ionic3-star-rating component in your page (parent component) as follows

`<ionic3-star-rating readonly="false" [rating]="3"></ionic3-star-rating>`

* readonly (optional) is default "false". change to "true" to make it read only
* rating (mandatory) should be provided, is of type number (assign any number from 1 to 5). If the rating is of type string as per your API response, then use parseInt funtion as follows 

`<ionic3-star-rating readonly="false" [rating]="parseInt('3')"></ionic3-star-rating>`
#Step-2
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
#Step-3 (optional)
## To get the changed rating in the parent component

Subscribe to the event **star-rating:changed** in the constructor of the parent function as follows

`events.subscribe('star-rating:changed', (starRating) => {console.log(starRating)});`