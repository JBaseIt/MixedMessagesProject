let adjectives = ['bewildered', 'eager', 'sparkling', 'tender'];
let nouns = ['people', 'knowledge', 'thing', 'ball', 'field'];
let verbs = ['run', 'deliver', 'plant', 'scrub'];
let adverbs = ['boldly', 'safely', 'foolishly', 'occasionally'];
let randAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
let randNoun = nouns[Math.floor(Math.random() * nouns.length)];
let randVerb = verbs[Math.floor(Math.random() * verbs.length)];
let randAdv = adverbs[Math.floor(Math.random() * adverbs.length)];
let nounArray = []; //testing user input storage
let adjectiveArray = [];
let verbArray = [];
let adverbArray = [];


let messages = [
    `This is a random sentence. It will contain a random adjective (${randAdj}), a random noun (${randNoun}), a random verb (${randVerb}), and maybe even a random adverb (${randAdv}).`,
    `This is another test sentence. It has all the random components as well: ${randAdj}, ${randNoun}, ${randVerb}, ${randAdv}.`
];

//let randMess = messages[Math.floor(Math.random() * messages.length)];
//console.log(randMess);

function addAdj () {
    let word = document.getElementById("adjinput").value;
    adjectives.push(word);
    document.getElementById("adjinput").value = '';
}

function listAdj () {
    let words = adjectives.join(' ');
    document.getElementById("displayAdj").innerHTML = `Adjectives in the pool are: ${words}`;
}

function addNoun () {
    let word = document.getElementById("nouninput").value;
    nounArray.push(word);
    document.getElementById("nouninput").value = ' ';
}

function listNouns () {
    let allNouns = nouns.concat(nounArray)
    let words = allNouns.join(', ');
    document.getElementById("displayNouns").innerHTML = `Nouns in the pool are: ${words} \n User-submitted nouns are: ${nounArray}`;
}

document.getElementById("displayNouns").innerHTML = `The default nouns are: ${nouns.join(' ')}`

function addVerb () {
    let word = document.getElementById("verbinput").value;
    verbs.push(word);
    document.getElementById("verbinput").value = '';
}

function listVerbs () {
    let words = verbs.join(' ');
    document.getElementById("displayVerbs").innerHTML = `Verbs in the pool are: ${words}`;
}

function addAdv () {
    let word = document.getElementById("advinput").value;
    adverbs.push(word);
    document.getElementById("advinput").value = '';
}

function listAdv () {
    let words = adverbs.join(' ');
    document.getElementById("displayAdv").innerHTML = `Adverbs in the pool are: ${words}`;
}

function showMess () {
    let randMess = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("messageHere").innerHTML = `${randMess}`
}

