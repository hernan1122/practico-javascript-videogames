const emojis = {
  "-": " ",
  O: "🚪",
  X: "💣",
  I: "🧠",
  PLAYER: "🧟‍♂️",
  BOMB_COLLISION: "🔥",
  GAME_OVER: "👎",
  WIN: "🏆",
  HEART: "❤️",
};

const maps = [];
maps.push(`
  I--XXXXXXX
  XX----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XX-XXXX
  XX-XX-XXXX
  XX-XX---XX
  ---XXXX-XX
  -XXXXXX-XX
  OXXXXXXXXX
`);
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  XX--XX--XX
  XX--XXX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);
maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);
maps.push(`
  O---XXXXXX
  XXX-XXXXXX
  XXX-XXXXXX
  X---XXXXXX
  X-X-XXXXXX
  X-X----XXX
  X-XXXX-XXX
  XXI-XX-XXX
  XXX----XXX
  XXXXXXXXXX
`);
maps.push(`
  XXXXXXXXXX
  X-XX----XX
  X-XX-XX-XX
  X----XX-XX
  X-XXX---XX
  X-XXX-XXXX
  X-XXX---XX
  X-OXXXX-XX
  X-XXXXX-XX
  XXXXXXX--I
`);
