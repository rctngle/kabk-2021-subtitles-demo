// 1. Get the video element from the DOM

const video = document.querySelector('video');

// 2. When you click the anywhere on the page, play the video	

document.body.addEventListener('click', () => {
	video.play();
})

// 3. When the video starts playing, set up some function to handle 'onenter' and 'onexit' events

video.addEventListener('play', () => {

	// get the track, there can be multiple but we're only using one, so just get the first one
	const tracks = video.textTracks[0];

	// each individual subtitle/statement/sentence is called a 'cue'
	const cues = tracks.cues;

	for (const [index, cue] of Object.entries(cues)) {
		if(typeof(cue) === 'object'){
			cue.onenter = cueEnter;
			cue.onexit = cueExit;
		}
	}
});

// 4.
// this function will be called when each subtitle starts
// you can access the text of the current subtitle in `this.text`

function cueEnter(){
	document.querySelector('#subtitle-container').innerText = this.text;
}

// 5.
// this function will be called when each subtitle ends
// so these two functions will be called repeatedly, for each subtitle in your track.

function cueExit(){
	document.querySelector('#subtitle-container').innerText = '';
}



