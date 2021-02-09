
function capitalizeFirstLetters(input) {
    const words = input.split(' ');
    for (i = 0; i < words.length; i ++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
  }

  module.exports = capitalizeFirstLetters;