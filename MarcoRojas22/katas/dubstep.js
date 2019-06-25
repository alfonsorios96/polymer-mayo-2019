function songDecoder(song){
  // ...
  while(song.includes('WUB')){
    song = song.replace('WUB',' ');
  }
  while(song.includes('  ')){
    song = song.replace('  ', ' ');
  }
  if(song.charAt(0) == ' ')
    song = song.replace(' ','');
  if(song.charAt(song.length-1) == ' ')
    song = song.slice(0, song.length-1);
  return song
}