import { NgModule, ModuleWithProviders } from '@angular/core';
import { StarRating } from './components/ionic3-star-rating-component';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        StarRating
    ],
    exports: [
        StarRating
    ]
})
export class StarRatingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: StarRatingModule,
        };
    }
}