/**
 * Created by robomatix on 06/09/14.
 */


/*
 * The initial array of elements
 ***********************************
 */
var a = ["earth", "water", "air", "fire"];

/*
 * Generating the arrays that will be used for the order in which the element should be clicked and the order they will be displayed
 * *********************************************************************************************************************************
 */

shuffle(a); // Randomize the array of elements

var dB = new Object(); // dB stand for display board. It will be the reference, the order in which the elements should be clicked...
dB.el1 = a[0];
dB.el2 = a[1];
dB.el3 = a[2];
dB.el4 = a[3];

shuffle(a); // Randomize the array of elements

var dG = new Object(); // dG stand for display game. It will be the order in which the elements will be displayed...
dG.el1 = a[0];
dG.el2 = a[1];
dG.el3 = a[2];
dG.el4 = a[3];


sA1 = new Array();
o2a(dB, sA1);

sA2 = new Array();
o2a(dG, sA2);

console.log(sA1);
console.log(sA2);

/*
 * Generating the div in the document displayed in the browser
 ***************************************************************
 */
i = 0;
for (tot = a.length; i < tot; i++)
    addEl(a[i]);

/*
 * The logic of the game ! LOL !
 ***********************************************************************************************************
 */

cC = 0; // cC stand for click counter, sort of index of the "clicks", useful to know if the clicked element is the one that should have been clicked. In the array of elements c should be index of the element in the array

/* To detected witch element is clicked, not the more concise way, but it always work */
elClkd("earth");
elClkd("water");
elClkd("air");
elClkd("fire");

/*
 *******************************************
 * FUNCTIONS
 ******************************************
 */

/*
 * Convert an object to an array
 * @param o : object
 * @param nA : empty array ( new Array )
 * @returns Nothing
 */
function o2a(o, nA) {

    /* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertyNames */
    Object.getOwnPropertyNames(o).forEach(function (val, idx, array) {

        console.log(idx + " ->" + val + " -> " + o[val]);
        nA[idx] = o[val];

    });
}

/*
 * function that randomize an array
 */
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

/*
 * Handle the creation of the div that represents the elements (e = name of the element )
 *******************************************************************************************
 */
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

/*
 * Handle the logic needed when an element  is clicked (e = name of the element, the id of the div )
 *********************************************************************************************************
 */
function elClkd(e) {

    document.getElementById(e).onclick = function () {
        console.log(sA1);
        console.log('sa1 : ' + sA1[cC]);
        console.log(e + " " + cC);

        if (e === sA1[cC]) {// Comparing the element clicked and the one that should have been clicked
            console.log('Ok');
        } else {
            console.log('Ko');
        }
        cC++;
    }

}


/* Memo */
/* http://stackoverflow.com/questions/17157342/pure-js-detect-if-im-clicking-an-element-within-an-element , doesn't always get the id of the div ... */
