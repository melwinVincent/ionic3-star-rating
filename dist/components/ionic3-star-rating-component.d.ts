import { Events } from 'ionic-angular';
export declare class StarRating {
    private events;
    rating: number;
    readonly: string;
    activeColor: string;
    defaultColor: string;
    activeIcon: string;
    defaultIcon: string;
    Math: any;
    parseFloat: any;
    constructor(events: Events);
    changeRating(event: any): void;
}
