const textArea = document.querySelector('#textarea');

const charOutput = document.querySelector('#char');
const wordOutput = document.querySelector('#words');

textArea.addEventListener('input', () => {
  let chars = textArea.value.replace(/\s/g, '');
  chars.length == 1 ? charOutput.innerHTML = `<span>${chars.length}</span> Character` : charOutput.innerHTML = `<span>${chars.length}</span> Characters`;

  let words = textArea.value;
  let wordCount = 0;
  let isSpaceOrNewLine = false;

  for (let i = 0; i < words.length; i++) {
    let currentChar = words[i];
    if (currentChar == ' ' || currentChar == '\n') {
      if (!isSpaceOrNewLine) {
        wordCount++;
      }
      isSpaceOrNewLine = true;
    } else {
      isSpaceOrNewLine = false;
    }
  };
  words.slice(-1) == ' ' || words.slice(-1) == '\n' ? null : wordCount++;
  words == '' ? wordCount = 0 : null;
  wordCount == 1 ? wordOutput.innerHTML = `<span>${wordCount}</span> Word` : wordOutput.innerHTML = `<span>${wordCount}</span> Words`;
});