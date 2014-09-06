/**
 * Created by robomatix on 06/09/14.
 */

var a = ["earth", "water", "air", "fire"];
shuffle(a);

i = 0;
for (tot = a.length; i < tot; i++)
    addEl(a[i]);

/* To detected witch element is clicked, not the more more concise way, but it always work */
elClkd("earth");
elClkd("water");
elClkd("air");
elClkd("fire");


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

    // Create a paragraph so we can verticaly center it /* http://phrogz.net/css/vertical-align/ */
    var iP = document.createElement('p');
    iP.innerHTML = e;

    // Appending the previous elements
    document.getElementsByTagName('body')[0].appendChild(iDiv).appendChild(iP);

}

function elClkd(el){
    document.getElementById(el).onclick = function() {
        console.log(el);
    }
}


/* Memo */
/* http://stackoverflow.com/questions/17157342/pure-js-detect-if-im-clicking-an-element-within-an-element , doesn't always get the id of the div ... */
