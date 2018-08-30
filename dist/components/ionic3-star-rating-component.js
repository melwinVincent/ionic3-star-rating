import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular';
var HTML_TEMPLATE = "\n<div class=\"ionic3-star-rating\">\n  <button *ngFor=\"let index of [0,1,2,3,4]\" id=\"{{index}}\" ion-button icon-only (click)=\"changeRating($event)\" [ngClass]=\"{'rated' : index < rating}\">\n    <ion-icon name=\"star\"></ion-icon>\n  </button>\n</div>\n";
var CSS_STYLE = "\n    .ionic3-star-rating .button {\n        height: auto;\n        background: none;\n        color: #f4f4f4;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        width: 28px;\n    }\n    .ionic3-star-rating .button ion-icon {\n        font-size: 32px;\n    }\n    .ionic3-star-rating .button.rated ion-icon {\n      color : #488aff\n    }\n";
var StarRating = (function () {
    function StarRating(events) {
        this.events = events;
    }
    StarRating.prototype.changeRating = function (event) {
        if (this.readonly && this.readonly === "true")
            return;
        this.rating = parseInt(event.target.parentElement.id) + 1;
        // subscribe this event to get the changed value in ypour parent compoanent
        this.events.publish('star-rating:changed', this.rating);
    };
    StarRating.decorators = [
        { type: Component, args: [{
                    selector: 'ionic3-star-rating',
                    template: HTML_TEMPLATE,
                    styles: [CSS_STYLE]
                },] },
    ];
    /** @nocollapse */
    StarRating.ctorParameters = function () { return [
        { type: Events, },
    ]; };
    StarRating.propDecorators = {
        "rating": [{ type: Input },],
        "readonly": [{ type: Input },],
    };
    return StarRating;
}());
export { StarRating };
//# sourceMappingURL=ionic3-star-rating-component.js.map