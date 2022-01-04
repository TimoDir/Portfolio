const Joke = ['There was once a young man who, in his youth, professed his desire to become a great writer. When asked to define "Great" he said,<br>"I want to write stuff that the whole world will read, stuff that people will react to on a truly emotional level, stuff that will make them scream, cry, howl in pain and anger!" <br>He now works for Microsoft, writing error messages.',
'Programmer. A person who fixed a problem that you don’t know you have, in a way you don’t understand.',
'The 21st century: Deleting history is more important than making it.',
'A system administrator has 2 problems:<br>- dumb users<br>- smart users',
'I would love to change the world, but they won’t give me the source code.',
'Chuck Norris’s programs can pass the Turing Test by staring at the interrogator.',
'The optimist sees the glass half full.<br>The pessimist sees the glass half empty.<br>The chemist see the glass completely full, half in the liquid state and half in the vapor state.',
'Parallel lines have so much in common.<br>It’s a shame they’ll never meet.',
'Wich color is your eyes?<br>#1292f4 ;) and you?',
'If you can’t find it on Google, it doesn’t exist!',]

document.getElementById('JokeGenerator').addEventListener('click', function(){
    var Random = Math.floor(Math.random()*Joke.length);
    document.getElementById('JokeInput').innerHTML = Joke[Random];
})
