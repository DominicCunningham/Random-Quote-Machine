function randomNumber() {
    var randomNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    console.log(randomNumber);
    var quote = [
      'Once We Accept Our Limits, We Go Past Them', 'Strive not to be a success, but rather to be of value.',
      ' I attribute my success to this: I never gave or took any excuse.', ' You miss 100% of the shots you don’t take. ',
      'Every strike brings me closer to the next home run.', 'We become what we think about.',
      'Eighty percent of success is showing up.', 'Either you run the day, or the day runs you. ',
      'The best revenge is massive success.', 'People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.',
      'Eyes up guardian'
    ];
    var author = [
      '~ Albert Einstein', '~ Albert Einstein', '~ Florence Nightingale', '~ Wayne Gretzky', '~ Babe Ruth',
      '~ Earl Nightingale', '~ Woody Allen', '~ Jim Rohn', '~ Frank Sinatra', '~ Zig Ziglar', '~ Destiny'
    ];
    document.getElementById('RandomQuote').innerHTML = quote[randomNumber];
    document.getElementById('RandomAuthor').innerHTML = author[randomNumber];
  }
function tweet() {
    window.open("https://twitter.com/intent/tweet");
  }
