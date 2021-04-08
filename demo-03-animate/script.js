const audio = document.querySelector('video');

document.body.addEventListener('click', () => {
	audio.play();
})

// when the audio file has loaded call the function 'preloadSubtitles'

audio.addEventListener('canplay', ()=>{
	preloadSubtitles(audio);
});

// this function reads all of the subtitles and inserts them into the page at a random position

function preloadSubtitles(){

	const tracks = audio.textTracks[0];

	const cues = tracks.cues;
	for (const [index, cue] of Object.entries(cues)) {
		if(typeof(cue) === 'object'){
			cue.onenter = cueEnter;
			cue.onexit = cueExit;

			// Assign an index property to each cue. The index refers to its position in the list, 0, 1, 2, etc.

			cue.index = index;
			
			// Create a div
			const singleSubtitle = document.createElement('div');

			// Add text content - the text of the subtitle

			singleSubtitle.innerText = cue.text;

			// Give the subtitle div and 'id' that refers to the index

			singleSubtitle.id = 'subtitle-'+index;
				
			// set the top and left css properties to a random number to randomize the div's position on the screen

			singleSubtitle.style.left = Math.random() * window.innerWidth + 'px';
			singleSubtitle.style.top = Math.random() * window.innerHeight + 'px';

			// Add the div to the page

			document.querySelector('#subtitle-container').appendChild(singleSubtitle);
		}
	}
}

function cueEnter(){

	// when it is 'this' subtitles turn, assign it the class 'focus'
	
	document.querySelector('#subtitle-'+this.index).classList.add('focus')
}

function cueExit(){
	
	// when 'this' subtitle is finished, remove the class 'focus'

	document.querySelector('#subtitle-'+this.index).classList.remove('focus')
}



