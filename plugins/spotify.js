const {
  AstroX,
  commands
} = require('../command');
AstroX({
  'pattern': "spotify",
  'desc': "download songs",
  'category': "download",
  'filename': __filename
}, async (_0x3490ac, _0x2bcece, _0x51633c, {
  from: _0x340ff4,
  quoted: _0xc23796,
  body: _0xbb77f5,
  isCmd: _0x3bafb4,
  command: _0x38fa5b,
  args: _0x3d2739,
  q: _0x4f1c7a,
  isGroup: _0x3bb71e,
  sender: _0x5d05cb,
  senderNumber: _0x2339f,
  botNumber2: _0xcaa616,
  botNumber: _0x201a7a,
  pushname: _0x3f5831,
  isMe: _0x2dd281,
  isOwner: _0x38c9ee,
  groupMetadata: _0x5648ea,
  groupName: _0x473c34,
  participants: _0x98015d,
  groupAdmins: _0x494f86,
  isBotAdmins: _0x2fed22,
  isAdmins: _0x33c2f1,
  reply: _0x267261
}) => {
  try {
    if (!_0x4f1c7a) {
      return _0x51633c.reply("_Enter a Spotify url_\n_Eg :-  .Spotify https://open.spotify.com/track/7HtPBwBoCBDy1tpstag7HL_");
    }
    if (!_0x4f1c7a.startsWith("https://open.spotify.com/track/")) {
      return _0x51633c.reply("_Enter a valid url !_");
    } else {
      await _0x51633c.reply("_Downloading.._");
      var _0x26a9d6 = await fetch("https://api.devstackx.in/v1/spotify?url=" + _0x4f1c7a);
      var _0x664655 = await _0x26a9d6.json();
      var _0x5a0fb3 = await _0x664655.data;
      let _0x458f80 = await _0x5a0fb3.url;
      return await _0x3490ac.sendMessage(_0x51633c.chat, {
        'audio': {
          'url': _0x458f80
        },
        'mimetype': "audio/mpeg"
      }, {
        'quoted': _0x2bcece
      });
    }
  } catch (_0x42de3b) {
    console.log(_0x42de3b);
    _0x267261('' + _0x42de3b);
  }
});