let adjectives = ['bewildered', 'eager', 'sparkling', 'tender'];
let nouns = ['people', 'knowledge', 'thing', 'ball', 'field'];
let verbs = ['run', 'deliver', 'plant', 'scrub'];
let adverbs = ['boldly', 'safely', 'foolishly', 'occasionally'];
function getRandAdj() {return adjectives[Math.floor(Math.random() * adjectives.length)]};
function getRandNoun() {return nouns[Math.floor(Math.random() * nouns.length)]};
function getRandVerb() {return verbs[Math.floor(Math.random() * verbs.length)]};
function getRandAdv() {return adverbs[Math.floor(Math.random() * adverbs.length)]};
let nounArray = []; //testing user input storage
let adjectiveArray = [];
let verbArray = [];
let adverbArray = [];


function addAdj () {
    let word = document.getElementById("adjinput").value;
    adjectiveArray.push(word);
    document.getElementById("adjinput").value = '';
}

function listAdj () {
    let allAdj = adjectives.concat(adjectiveArray);
    let words = allAdj.join(' ');
    document.getElementById("displayAdj").innerHTML = `Adjectives in the pool are: ${words} <br> User-submitted adjectives are: ${adjectiveArray.join(' ')}`;
}

document.getElementById("displayAdj").innerHTML = `The default adjectives are: ${adjectives.join(' ')}`

function addNoun () {
    let word = document.getElementById("nouninput").value;
    nounArray.push(word);
    document.getElementById("nouninput").value = '';
}

function listNouns () {
    let allNouns = nouns.concat(nounArray);
    let words = allNouns.join(' ');
    document.getElementById("displayNouns").innerHTML = `Nouns in the pool are: ${words} <br> User-submitted nouns are: ${nounArray.join(' ')}`;
}

document.getElementById("displayNouns").innerHTML = `The default nouns are: ${nouns.join(' ')}`

function addVerb () {
    let word = document.getElementById("verbinput").value;
    verbArray.push(word);
    document.getElementById("verbinput").value = '';
}

function listVerbs () {
    let allVerbs = verbs.concat(verbArray);
    let words = allVerbs.join(' ');
    document.getElementById("displayVerbs").innerHTML = `Verbs in the pool are: ${words} <br> User-submitted verbs are: ${verbArray.join(' ')}`;
}

document.getElementById("displayVerbs").innerHTML = `The default verbs are: ${verbs.join(' ')}`

function addAdv () {
    let word = document.getElementById("advinput").value;
    adverbArray.push(word);
    document.getElementById("advinput").value = '';
}

function listAdv () {
    let allAdverbs = adverbs.concat(adverbArray);
    let words = allAdverbs.join(' ');
    document.getElementById("displayAdv").innerHTML = `Adverbs in the pool are: ${words} <br> User-submitted verbs are: ${adverbArray.join(' ')}`;
}

document.getElementById("displayAdv").innerHTML = `The default adverbs are: ${adverbs.join(' ')}`

const getRandMess = () => {
    let messages = [
        `This is a random sentence. It will contain a random adjective (${getRandAdj()}), a random noun (${getRandNoun()}), a random verb (${getRandVerb()}), and maybe even a random adverb (${getRandAdv()}).`,
        `This is another test sentence. It has all the random components as well: ${getRandAdj()}, ${getRandNoun()}, ${getRandVerb()}, ${getRandAdv()}.`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}


function showMess () {
    let randMess = getRandMess();
    document.getElementById("messageHere").innerHTML = `${randMess}`
}

