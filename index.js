// emoji-unicode from npm
emojiUnicode = function (input) {
    if (input.length === 1) {
        return input.charCodeAt(0);
    }
    let comp = (
        (input.charCodeAt(0) - 0xD800) * 0x400
      + (input.charCodeAt(1) - 0xDC00) + 0x10000
    );
    if (comp < 0) {
        return input.charCodeAt(0);
    }
    return comp;
};


// jack's code
document.querySelector('button').addEventListener('click', ()=>{
  location = `https://github.com/googlefonts/noto-emoji/blob/master/svg/emoji_u${emojiUnicode(document.querySelector('input').value).toString(16)}.svg`
}) 