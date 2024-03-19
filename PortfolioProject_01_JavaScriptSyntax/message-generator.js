const message = [
  "Watch your thoughts, they become words. Watch your words, they become actions. Watch your actions, they become habit.",
  "For all things difficult to acquire, the intelligent man works with perseverance.",
  "The moment truth is asserted, it becomes false.",
  "When nothing is done, nothing is left undone.",
  "Perfect kindness acts without thinking of kindness.",
  "Let your workings remain a mystery. Just show people the results.",
  "Perfection is the willingness to be imperfect.",
  "Excellent warriors are not violent.",
  "True words are not pleasing. Pleasing words are not true.",
  "Be careful what you water your dreams with. Water them with worry and fear and you will produce weeds that choke the life from your dream. Water them with optimism and solutions and you will cultivate success. Always be on the lookout for ways to turn a problem into an opportunity for success. Always be on the lookout for ways to nurture your dream.",
  "True words aren't eloquent; eloquent words aren't true. Wise men don't need to prove their point; men who need to prove their point aren't wise. The Master has no possessions. The more he does for others, the happier he is. The more he gives to others, the wealthier he is. The Tao nourishes by not forcing. By not dominating, the Master leads.",
  "Those who seek knowledge, collect something every day. Those who seek the Way, let go of something every day.",
  "When the best leader's work is done the people say, 'We did it ourselves.",
  "An ant on the move does more than a dozing ox.",
  "In dwelling, live close to the ground. In thinking, keep to the simple. In conflict, be fair and generous. In governing, don't try to control. In work, do what you enjoy. In family life, be completely present.",
  "At the center of your being you have the answer; you know who you are and you know what you want.",
  "Fill your bowl to the brim and it will spill. Keep sharpening your knife and it will blunt.",
  "Manifest plainness, embrace simplicity, reduce selfishness, have few desires.",
  "If you would take, you must first give, this is the beginning of intelligence.",
  "To lead people walk behind them.",
  "Anticipate the difficult by managing the easy.",
  "To see things in the seed, that is genius.",
  "The words of truth are always paradoxical.",
  "The softest things in the world overcome the hardest things in the world.",
  "He who talks more is sooner exhausted.",
  "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.",
];
const quotes = message.map((quote) => quote + " - Lao Tzu");

function generateQuote(quoteLibrary) {
  randomQuote = Math.round(Math.random() * (quoteLibrary.length - 1));
  console.log(quoteLibrary[randomQuote]);
}

generateQuote(quotes); // randomly generate quotes from the list
