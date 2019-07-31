import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Events } from 'ionic-angular';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var HTML_TEMPLATE = "\n<div class=\"ionic3-star-rating\">\n  <button [ngStyle]=\"{'width' : fontSize, 'height' : fontSize}\" *ngFor=\"let index of iconsArray\" id=\"{{index}}\" type=\"button\" ion-button icon-only (click)=\"changeRating($event)\">\n    <ion-icon [ngStyle]=\"{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor, 'font-size' : fontSize }\" name=\"{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}\"></ion-icon>\n  </button>\n</div>\n";
var CSS_STYLE = "\n    .ionic3-star-rating .button {\n        background: none;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n    }\n";
var StarRating = (function () {
    function StarRating(events) {
        this.events = events;
        this.eventInfo = (function () {
            var id = new Date().getTime();
            var topic = "star-rating:" + id + ":changed";
            return {
                topic: topic
            };
        })();
        this.ratingChanged = new EventEmitter();
        this.readonly = "false";
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'ios-star';
        this.defaultIcon = 'ios-star-outline';
        this.halfIcon = 'ios-star-half';
        this.halfStar = "false";
        this.maxRating = 5;
        this.fontSize = '28px';
        this.iconsArray = [];
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    StarRating.prototype.ngOnInit = function () {
        this.rating = this.rating || 3; //default after input`s initialization
        for (var i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    };
    StarRating.prototype.writeValue = function (obj) {
        this.rating = obj;
    };
    StarRating.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    StarRating.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    StarRating.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    };
    Object.defineProperty(StarRating.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (val) {
            this._rating = val;
            // for form
            if (this.onChange) {
                this.onChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    StarRating.prototype.changeRating = function (event) {
        if (this.readonly && this.readonly === "true")
            return;
        // event is different for firefox and chrome
        var id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === "true") {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // subscribe this event to get the changed value in your parent compoanent
        this.events.publish("star-rating:changed", this.rating); //common event for all instances included for backwards compatibility
        this.events.publish(this.eventInfo.topic, this.rating); //common event for all instances
        // unique event
        this.ratingChanged.emit(this.rating);
    };
    StarRating.decorators = [
        { type: Component, args: [{
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
                },] },
    ];
    /** @nocollapse */
    StarRating.ctorParameters = function () { return [
        { type: Events, },
    ]; };
    StarRating.propDecorators = {
        "rating": [{ type: Input },],
        "ratingChanged": [{ type: Output },],
        "readonly": [{ type: Input },],
        "activeColor": [{ type: Input },],
        "defaultColor": [{ type: Input },],
        "activeIcon": [{ type: Input },],
        "defaultIcon": [{ type: Input },],
        "halfIcon": [{ type: Input },],
        "halfStar": [{ type: Input },],
        "maxRating": [{ type: Input },],
        "fontSize": [{ type: Input },],
    };
    return StarRating;
}());
export { StarRating };
//# sourceMappingURL=ionic3-star-rating-component.js.map