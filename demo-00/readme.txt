1. Get your .mp3 file and place it in this directory, then
	- Open a terminal window to this directory
	- Open Sublime Text to this directory

2. Create a short clip 
	- Edit the ffmpeg command in audio-shorten.sh with your own filename
	- Run the command in audio-shorten.sh by copying and pasting it into terminal 
		- (Alternatively you can run the shell script with `bash audio-shorten.sh`)

3. Convert the audio file to a video file
	- Edit the ffmpeg command in audio-to-video.sh with your own audio filename, image, and video filename
	- Run the command or the script

4. Upload the video to YouTube
	- Click 'Create'
	- Upload the video
	- Click Next, Next, Next
	- Edit the video
	- Choose Subtitles from the left menu
	- Refresh occasionally, after 10 or 15 minutes you'll see an entry - English (Automatic) 
	- Click the 3-dots, then download, then .SRT

5. Convert the .srt to a .vtt file
	- Run the command in audio-srt-to-vtt.sh (or the script itself)
	- Move captions.vtt to your project folder 
	