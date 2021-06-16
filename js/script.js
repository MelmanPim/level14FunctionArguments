/* 
let paintWall = function () {
    console.log('De muur is rood geverft');
}

paintWall(); 
*/


/* 
let paintWall = function (paintColor) {
    console.log('De muur is ' + paintColor + ' geverft');
}

paintWall('groen');
 */

let paintWall = function (wallDirection, paintColor) {
    console.log('The ' + paintColor + ' wall has been painted ' + wallDirection);
};

paintWall('north', 'green');

// paintWall('north', 'green');     moet op dezelfde plek staan als     function (wallDirection, paintColor) {