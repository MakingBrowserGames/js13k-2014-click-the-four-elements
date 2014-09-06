/**
 * Created by robomatix on 06/09/14.
 */

var a = ["earth", "wind", "air", "fire"];
shuffle(a);

i = 0;
for (tot = a.length; i < tot; i++)
    addEl(a[i]);


/*http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array*/
function shuffle(array) {

    var currentIndex = array.length, temporaryValue, randomIndex;

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

function addEl(e) {
    /* http://stackoverflow.com/questions/14004117/javascript-create-div-and-append-div-dynamically */

    // Create a div
    var iDiv = document.createElement('div');
    iDiv.id = e;
    iDiv.className = 'el';

    // Create a paragraph so we can verticaly center it
    var iP = document.createElement('p');
    iP.innerHTML = e;

    // Appending the previous elements
    document.getElementsByTagName('body')[0].appendChild(iDiv).appendChild(iP);

}