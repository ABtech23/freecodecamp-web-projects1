
const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];


const flattenPlaylists = (playlist) => {
  if (!Array.isArray(playlist)) {
    return [];
  }
  let result = [];
  for (let i = 0; i < playlist.length; i++) {
    for (let j = 0; j < playlist[i].length; j++) {
      result.push({
        ...playlist[i][j],
        source: [i, j]
      });
    }
  }

  return result;
}


const scoreTracks = (playlist) => {
  return playlist.map(track => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120)
  }));
}


const dedupeTracks = (playlist) => {
  let dplaylist = [];

  for (let i = 0; i < playlist.length; i++) {
    let found = false;

    for (let j = 0; j < dplaylist.length; j++) {
      if (playlist[i].trackId === dplaylist[j].trackId) {
        found = true;
        break;
      }
    }

    if (!found) {
      dplaylist.push(playlist[i]);
    }
  }

  return dplaylist;
}


const enforceArtistQuota = (playlist, maxPerArtist) => {
  let result = [];
  let artistCount = {};

  for (let i = 0; i < playlist.length; i++) {
    let artist = playlist[i].artist;

    if (!artistCount[artist]) {
      artistCount[artist] = 0;
    }

    if (artistCount[artist] < maxPerArtist) {
      result.push(playlist[i]);
      artistCount[artist]++;
    }
  }

  return result;
}

const buildSchedule = (playlist) => {
  return playlist.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId
  }));
}

const remixPlaylist = (playlist, maxPerArtist) => {
  let flattened = flattenPlaylists(playlist);
  let scored = scoreTracks(flattened);
  let deduped = dedupeTracks(scored);
  let limited = enforceArtistQuota(deduped, maxPerArtist);

  return buildSchedule(limited);
}


let flattened = flattenPlaylists(playlists);
console.log("STEP 1:", flattened);

let scored = scoreTracks(flattened);
console.log("STEP 2:", scored);

let testTracks = [
  { trackId: "trk101", artist: "Velvet Comet" },
  { trackId: "trk102", artist: "Neon Harbor" },
  { trackId: "trk101", artist: "Velvet Comet" }
];

console.log("STEP 3:", dedupeTracks(testTracks));

let limited = enforceArtistQuota(scored, 1);
console.log("STEP 4:", limited);

let schedule = buildSchedule(limited);
console.log("STEP 5:", schedule);

console.log("FINAL:", remixPlaylist(playlists, 1));
