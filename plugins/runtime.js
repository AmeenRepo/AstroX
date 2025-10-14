const {
  AstroX,
  commands
} = require("../command");
AstroX({
  'pattern': 'uptime',
  'desc': "Check bot online or no.",
  'category': "main",
  'filename': __filename
}, async (_0x57413e, _0x19d4dc, _0x248943, {
  from: _0x25ebc5,
  quoted: _0x2f27a8,
  body: _0x1b43aa,
  isCmd: _0x5dac9c,
  command: _0x57fe2d,
  args: _0x310044,
  q: _0x3b6ffe,
  isGroup: _0x14228b,
  sender: _0x175c07,
  senderNumber: _0x183233,
  botNumber2: _0x28121e,
  botNumber: _0x523666,
  pushname: _0xc6da15,
  isMe: _0x799a3c,
  isOwner: _0x2f1f04,
  groupMetadata: _0x2cbb59,
  groupName: _0x19e45b,
  participants: _0x4c1c42,
  groupAdmins: _0x3ede0c,
  isBotAdmins: _0x14dec6,
  isAdmins: _0x35c67e,
  reply: _0x212010
}) => {
  try {
    _0x248943.uptime = async () => {
      const _0x12943f = process.uptime();
      const _0x397a0a = Math.floor(_0x12943f % 0x3c);
      const _0xdc3bac = Math.floor(_0x12943f / 0x3c % 0x3c);
      const _0x4c74dc = Math.floor(_0x12943f / 3600 % 0x18);
      const _0x287c34 = _0x4c74dc.toString().padStart(0x2, '0') + ':' + _0xdc3bac.toString().padStart(0x2, '0') + ':' + _0x397a0a.toString().padStart(0x2, '0');
      return _0x287c34;
    };
    const _0x1e0f41 = "*AstroX⚡*\n\n_Bot Uptime : " + (await _0x248943.uptime()) + '_';
    return await _0x57413e.sendMessage(_0x25ebc5, {
      'image': {
        'url': "https://ameen-api.vercel.app/AstroX"
      },
      'caption': _0x1e0f41
    }, {
      'quoted': _0x19d4dc
    });
  } catch (_0x6ea5bd) {
    console.log(_0x6ea5bd);
    _0x212010('' + _0x6ea5bd);
  }
});