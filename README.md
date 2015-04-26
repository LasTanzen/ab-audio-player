# ab-audio-player
Simple audio player for a/b comparision based on howler.js and jquery

## Dependencies
[jQuery](https://github.com/jquery/jquery), [howler](https://github.com/goldfire/howler.js/)

or user bower

## Usage
- Include ab-player.js and dependencies

- Add elements with following attributes:
```
class='ab-player'
data-track-a="/audio/example" // path to files without file extension!!
data-track-b="/audio/example" 
data-formats="mp3, ogg, wav" // provided file extensions
```

- Inside these elements add clickable elements with 
```
class='ab-player-button-a'
```
and
```
class='ab-player-button-b'
```

## Example
See working example in example.html
