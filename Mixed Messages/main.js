const adjectiveArray = ['super','gnarly','funky','spinning','smashing','delicious','serene','abominable','zombie','dead','undead','spicy','crushing','awesome','honest',
'melancholy','tight','loose','luminating','lucid','flaccid','enigmatic','hairy','lukewarm','prestigous','paranoid','xenophobic','deiphobic','paraplegic','leprous','distilled',
'fiery','ice cold','frigid','magic','lying','dying','thriving','cauliflour','burnt','deep-sea','billionare','cheesy','metaphoric','upside-down','oxymoronic','ironic','dancing',
'broke-neck','broke-back','limp','indecent','moist','unassuming','forgettable','wicked','morbid','lunar','solar','extraterrestrial','ancient','wandering','duck-billed','red-breasted',
'oven-roasted','charbroiled','drowned','swollen','unprecedented','lyrical','ambient','weird','interdimensional','virtual','binary','disoriented','spotted','dysfunctional','merry',
'green','cyan','blue','indigo','red','orange','yellow','black','white','gray','purple','lime','violet','pink','irreverent','cadywompus','narcissistic','troubled','stimulated',
'awkward','hammy','conceited','vain','villianous','absurd','shimmering','gargantuan','blazing','flaming','theoretical']

const adverbArray = ['somewhat','inadvertantly','slightly','mostly','overly','socially','technically','partially','absurdly','undoubtedly','possibly','understandably']

const nounArray = [
    'darkness', 'light',      'midnight',
    'platypus', 'streetcar',  'vixen',
    'harlot',   'saint',      'muffin',
    'time',     'person',     'year',
    'way',      'day',        'thing',
    'man',      'world',      'life',
    'hand',     'part',       'child',
    'eye',      'woman',      'place',
    'work',     'week',       'case',
    'point',    'government', 'company',
    'number',   'group',      'problem',
    'fact',     'whoreson',   'nematoad',
    'giant',    'pickle',     'hydrofoil',
    'cream',    'dream',      'galaxy',
    'star',     'planetarium','undecided'
  ]
  

// let unprocessedNouns = `time person year way day thing man world life hand part child eye woman place work week case point government company number group problem fact`;

// const addToNounArray = array => {
//     let partiallyProcessedNouns = array.split(' ');
//     partiallyProcessedNouns.forEach(element => nounArray.push(element));
//         return nounArray;
// }

// console.log(addToNounArray(unprocessedNouns));

// begin band name generating using string concat/interpolation

const createBandName = () => {
  let modifier = '';
  let adjectiveIndex = Math.floor(Math.random()*adjectiveArray.length);
  let nounIndex = Math.floor(Math.random()*nounArray.length);
  let selector = Math.floor(Math.random()*11);
  let simpleName = `${adjectiveArray[adjectiveIndex]} ${nounArray[nounIndex]}`;
  let finalName = `${modifier} ${simpleName}`
  if (selector < 4) {
    modifier = '';
  } else if (selector < 7) {
    modifier = 'The';
    let finalName = finalName + 's';
  } else if (selector < 10) {
    modifier = adverbArray[Math.floor(Math.random()*adverbArray.length)];
  } else if (selector >= 10) {
    let secondNounIndex = Math.floor(Math.random()*nounArray.length);
    finalName = `${nounArray[nounIndex]} ${nounArray[secondNounIndex]}`;
  }
  return finalName
}

console.log(createBandName());