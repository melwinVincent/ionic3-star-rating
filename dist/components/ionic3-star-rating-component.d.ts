import { Events } from 'ionic-angular';
export declare class StarRating {
    private events;
    rating: number;
    readonly: string;
    constructor(events: Events);
    changeRating(event: any): void;
}
