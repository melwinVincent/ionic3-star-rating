import { NgModule } from '@angular/core';
import { StarRating } from './components/ionic3-star-rating-component';
import { IonicModule } from 'ionic-angular';
var StarRatingModule = (function () {
    function StarRatingModule() {
    }
    StarRatingModule.forRoot = function () {
        return {
            ngModule: StarRatingModule,
        };
    };
    StarRatingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [
                        StarRating
                    ],
                    exports: [
                        StarRating
                    ]
                },] },
    ];
    /** @nocollapse */
    StarRatingModule.ctorParameters = function () { return []; };
    return StarRatingModule;
}());
export { StarRatingModule };
//# sourceMappingURL=ionic3-star-rating.module.js.map