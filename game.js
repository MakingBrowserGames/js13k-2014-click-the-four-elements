/**
 * Created by robomatix on 06/09/14.
 */

var a = ["e","w","a","f"];
shuffle(a);
console.log(a);

//Add a div
/* http://stackoverflow.com/questions/14004117/javascript-create-div-and-append-div-dynamically */
var iDiv = document.createElement('div');
iDiv.id = 'block';
iDiv.className = 'block';
document.getElementsByTagName('body')[0].appendChild(iDiv);
iDiv.innerHTML = "I'm the first div";

/*http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array*/
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}