ffmpeg -loop 1 -i trident.jpg -i trident-short.mp3 -c:a aac -ab 112k -c:v libx264 -shortest -strict -2 trident-short.mp4
