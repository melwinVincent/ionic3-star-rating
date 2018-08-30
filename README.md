# Ionic3 Star Rating

### add the ionic3-star-rating component in your page (parent component) as follows

`<ionic3-star-rating readonly="false" [rating]="3"></ionic3-star-rating>`

* readonly (optional) is default "false". change to "true" to make it read only
* rating (mandatory) should be provided, is of type number (assign any number from 1 to 5). If the rating is of type string as per your API response, then use parseInt funtion as follows 

`<ionic3-star-rating readonly="false" [rating]="parseInt('3')"></ionic3-star-rating>`

## Get the changed rating in the parent component

Subscribe to the event **star-rating:changed** in the constructor of the parent function as follows

`events.subscribe('star-rating:changed', (starRating) => {console.log(starRating)});`