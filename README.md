# Ionic3 Star Rating

add the component in your page as following

<ionic3-star-rating readonly="false" [rating]="3"></ionic3-star-rating>

* readonly (optional) is default "false". change to "true" to make it read only
* rating (mandatory) should be provided, is of type number (assign any number from 1 to 5). If the rating is of type string as per your API response, then use parseInt funtion as follows 

<ionic3-star-rating readonly="false" [rating]="parseInt('3')"></ionic3-star-rating>