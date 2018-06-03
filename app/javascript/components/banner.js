
import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["It only takes 6 minutes for brain cells to react to alcohol.",
    "Alcohol is not digested; it gets absorbed directly into the bloodstream.",
     "Alcohol doesn't make you forget anything. When you get blackout drunk, the brain temporarily loses the ability to create memories.",
     "Each Russian consumes 18 litres (4.8 US gal) of alcohol per year.",
     "People with blue eyes have a higher alcohol tolerance.",
     "Beer was not considered an alcoholic beverage in Russia until 2013.",
     "The strongest beer in the world has a 67.5% alcohol content.",
     "In the U.K., it is legal for kids over 5 years old to drink alcohol at home or on other private premises.",
     "Amsterdam pays alcoholics in beer to clean streets: 5 cans of beer for a day's work, plus €10 and tobacco."],
    typeSpeed: 65,
    loop: true
  });
}

export { loadDynamicBannerText };

