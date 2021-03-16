let adjectives = ['bewildered', 'eager', 'sparkling', 'tender'];
let nouns = ['people', 'knowledge', 'thing', 'ball', 'field'];
let verbs = ['run', 'deliver', 'plant', 'scrub'];
let adverbs = ['boldly', 'safely', 'foolishly', 'occasionally'];
let randAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
let randNoun = nouns[Math.floor(Math.random() * nouns.length)];
let randVerb = verbs[Math.floor(Math.random() * verbs.length)];
let randAdv = adverbs[Math.floor(Math.random() * adverbs.length)];

let messages = [
    `This is a random sentence. It will contain a random adjective (${randAdj}), a random noun (${randNoun}), a random verb (${randVerb}), and maybe even a random adverb (${randAdv}).`,
    `This is another test sentence. It has all the random components as well: ${randAdj}, ${randNoun}, ${randVerb}, ${randAdv}.`
]; 

let randMess = messages[Math.floor(Math.random() * messages.length)];
console.log(randMess);

function paragraphChange () { //Testing grabbing user input and displaying on action
let testing = document.getElementById("userinput").value;

document.getElementById("p1").innerHTML = `You have typed: ${testing}`;
};