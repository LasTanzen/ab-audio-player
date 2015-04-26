$(function() {
  var tracks = [];
  $('.ab-player').each(function(index, player) {
    var track = {};
    var fileFormats = $(player).data('formats').replace(' ', '').split(',');

    var trackWithFormats = [];
    $(fileFormats).each(function(indes, format) {
      trackWithFormats.push($(player).data('track-a').concat('.', format));
    });
    track.a = new Howl({urls: trackWithFormats});

    trackWithFormats = [];
    $(fileFormats).each(function(indes, format) {
      trackWithFormats.push($(player).data('track-b').concat('.', format));
    });
    track.b = new Howl({urls: trackWithFormats});

    track.a.mute();
    track.b.mute();
    track.audible = 'none';

    $(this).find('.ab-player-button-a').click(function(){
      switch(track.audible) {
        case 'none':
          track.a.play();
          track.b.play();
          track.a.unmute();
          track.b.mute();
          track.audible = 'a';
          break;
        case 'a':
          track.a.pause();
          track.b.pause();
          track.a.mute();
          track.b.mute();
          track.audible = 'none';
          break;
        case 'b':
          track.a.unmute();
          track.b.mute();
          track.audible = 'a';
          break;
      }
    });

    $(this).find('.ab-player-button-b').click(function(){
      switch(track.audible) {
        case 'none':
          track.a.play();
          track.b.play();
          track.a.mute();
          track.b.unmute();
          track.audible = 'b';
          break;
        case 'b':
          track.a.pause();
          track.b.pause();
          track.a.mute();
          track.b.mute();
          track.audible = 'none';
          break;
        case 'a':
          track.b.unmute();
          track.a.mute();
          track.audible = 'b';
          break;
      }
    });

    tracks.push(track);
  });
});
