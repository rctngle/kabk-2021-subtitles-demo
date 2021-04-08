const audio = document.querySelector('video');

document.body.addEventListener('click', () => {
	audio.play();
})

audio.addEventListener('play', () => {

	const tracks = audio.textTracks[0];

	const cues = tracks.cues;

	for (const [index, cue] of Object.entries(cues)) {
		if(typeof(cue) === 'object'){
			cue.onenter = cueEnter;
			cue.onexit = cueExit;
		}
	}
});

// this function will be called when each subtitle starts
// this time we'll search the text for instances of [[some-element-id]] 
// some-element-id refers to an element in the DOM, like <div id="some-element-id"></div>
// that element will be shown when its id is found in the subtitle

function cueEnter(){

	let subtitleText = this.text;
	
	// Check if the subtitle text contains double brackets

	if(subtitleText.includes('[[')) {


		// Use a 'Regular Expression' to check if the subtitle contains a text like [[some-element-id]]

		const matches = this.text.match(/\[\[(.*)\]\]/);
		
		if(matches[1]){

			// if the element exists, show it the element
			
			document.querySelector('#'+matches[1]).style.display = 'block';
 
			// and remove the [[some-element-id]] from the subtitle text

			subtitleText = subtitleText.replace(matches[0], '');
		}
		
	}
	document.querySelector('#subtitle-container').innerText = subtitleText;
}

function cueExit(){
	document.querySelector('#subtitle-container').innerText = '';
}



