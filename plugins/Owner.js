const {
  AstroX,
  commands
} = require("../command");
const ownerContacts = [{
  'name': '𝐂𝐚𝐥𝐜𝐢𝐅𝐞𝐫⚡',
  'number': "+916238768108"
}, {
  'name': 'GoodSpirit⚡',
  'number': "+918589959671"
}];
AstroX({
  'pattern': "owner",
  'desc': "Send owner numbers.",
  'category': "main",
  'filename': __filename
}, async (_0x1e7197, _0x367a60, _0xd92f0d, {
  from: _0x9ca556,
  quoted: _0x6bf276,
  body: _0x5e9fda,
  isCmd: _0x25355c,
  command: _0x5221eb,
  args: _0x3a283f,
  q: _0x369c1b,
  isGroup: _0x3151d7,
  sender: _0x16ecca,
  senderNumber: _0xffeeac,
  botNumber2: _0x5679d1,
  botNumber: _0x338329,
  pushname: _0x1999ba,
  isMe: _0x413a21,
  isOwner: _0x25057e,
  groupMetadata: _0x45d433,
  groupName: _0x55734d,
  participants: _0x43c924,
  groupAdmins: _0x84dda5,
  isBotAdmins: _0x59767b,
  isAdmins: _0x4ae164,
  reply: _0x52bb34
}) => {
  try {
    for (const _0x8c9d40 of ownerContacts) {
      const _0x519149 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x8c9d40.name + "\nTEL;type=CELL;type=VOICE;waid=" + _0x8c9d40.number.replace('+', '') + ':' + _0x8c9d40.number + "\nEND:VCARD";
      await _0x1e7197.sendMessage(_0x9ca556, {
        'contacts': {
          'displayName': _0x8c9d40.name,
          'contacts': [{
            'vcard': _0x519149
          }]
        }
      }, {
        'quoted': _0x367a60
      });
    }
  } catch (_0x36d707) {
    console.log(_0x36d707);
    _0x52bb34('' + _0x36d707);
  }
});