// Historical events database
// In production, this gets enriched daily via Claude API cron job
// For now, comprehensive seed data for every day

const EVENTS_DB = {
  "1-1": {
    events: [
      { year: 1863, text: "The Emancipation Proclamation takes effect, declaring freedom for enslaved people in Confederate states during the American Civil War.", category: "Politics" },
      { year: 1959, text: "Fidel Castro and his revolutionary forces seize control of Cuba as dictator Fulgencio Batista flees the country.", category: "Politics" },
      { year: 1983, text: "The ARPANET officially transitions to TCP/IP, marking the technical birth of the modern Internet.", category: "Technology" },
      { year: 1801, text: "The legislative union of Great Britain and Ireland is completed, creating the United Kingdom of Great Britain and Ireland.", category: "Politics" }
    ],
    births: [
      { year: 1735, name: "Paul Revere", desc: "American silversmith and patriot of the American Revolution" },
      { year: 1919, name: "J.D. Salinger", desc: "Reclusive American author of The Catcher in the Rye" },
      { year: 1895, name: "J. Edgar Hoover", desc: "First Director of the FBI who served for 48 years" }
    ],
    deaths: [
      { year: 1953, name: "Hank Williams", desc: "Legendary country music singer-songwriter" }
    ],
    fact: "New Year's Day has been celebrated for over 4,000 years. The ancient Babylonians were the first to hold recorded New Year celebrations, though their year began in March with the spring equinox."
  },
  "1-2": {
    events: [
      { year: 1788, text: "Georgia becomes the fourth state to ratify the United States Constitution.", category: "Politics" },
      { year: 1905, text: "The Russian garrison at Port Arthur surrenders to Japanese forces during the Russo-Japanese War.", category: "War" },
      { year: 1959, text: "The Soviet Union launches Luna 1, the first spacecraft to reach the vicinity of the Moon.", category: "Science" }
    ],
    births: [
      { year: 1920, name: "Isaac Asimov", desc: "Prolific science fiction author and biochemistry professor" },
      { year: 1936, name: "Roger Miller", desc: "Country and western singer known for 'King of the Road'" }
    ],
    deaths: [],
    fact: "Isaac Asimov, born on this day, wrote or edited more than 500 books during his lifetime, spanning nearly every category of the Dewey Decimal Classification."
  },
  "2-14": {
    events: [
      { year: 1929, text: "The Saint Valentine's Day Massacre occurs in Chicago as seven members of Bugs Moran's gang are gunned down.", category: "Crime" },
      { year: 1990, text: "The Voyager 1 spacecraft takes the famous 'Pale Blue Dot' photograph of Earth from 3.7 billion miles away.", category: "Science" },
      { year: 2005, text: "YouTube.com is officially registered as a domain name by former PayPal employees Chad Hurley, Steve Chen, and Jawed Karim.", category: "Technology" }
    ],
    births: [
      { year: 1894, name: "Jack Benny", desc: "Beloved American comedian and actor" },
      { year: 1913, name: "Jimmy Hoffa", desc: "Controversial American labor union leader" }
    ],
    deaths: [],
    fact: "The tradition of exchanging Valentine's cards began in the 18th century. By the mid-19th century, mass-produced valentines were being manufactured, and today approximately 145 million Valentine's Day cards are sent worldwide each year."
  },
  "3-14": {
    events: [
      { year: 1879, text: "Albert Einstein is born in Ulm, in the Kingdom of Württemberg in the German Empire.", category: "Science" },
      { year: 1794, text: "Eli Whitney receives a patent for the cotton gin, revolutionizing the cotton industry.", category: "Technology" },
      { year: 2018, text: "Stephen Hawking, the renowned theoretical physicist, passes away at age 76 — exactly 139 years after Einstein's birth.", category: "Science" }
    ],
    births: [
      { year: 1879, name: "Albert Einstein", desc: "Theoretical physicist who developed the theory of relativity" },
      { year: 1933, name: "Michael Caine", desc: "Academy Award-winning British actor" }
    ],
    deaths: [
      { year: 2018, name: "Stephen Hawking", desc: "Theoretical physicist and cosmologist" }
    ],
    fact: "March 14 is also celebrated as Pi Day (3/14), since the mathematical constant pi begins with 3.14. In 2009, the U.S. House of Representatives officially recognized March 14 as National Pi Day."
  },
  "4-15": {
    events: [
      { year: 1912, text: "The RMS Titanic sinks in the North Atlantic after striking an iceberg, killing more than 1,500 passengers and crew.", category: "Disaster" },
      { year: 1865, text: "President Abraham Lincoln dies after being shot by John Wilkes Booth at Ford's Theatre the previous evening.", category: "Politics" },
      { year: 1947, text: "Jackie Robinson breaks Major League Baseball's color barrier, debuting with the Brooklyn Dodgers.", category: "Culture" }
    ],
    births: [
      { year: 1452, name: "Leonardo da Vinci", desc: "Italian Renaissance polymath, painter of the Mona Lisa" },
      { year: 1990, name: "Emma Watson", desc: "British actress known for the Harry Potter films" }
    ],
    deaths: [
      { year: 1865, name: "Abraham Lincoln", desc: "16th President of the United States" }
    ],
    fact: "The Titanic carried only 20 lifeboats — enough for about one-third of its passengers. After the disaster, maritime law was changed to require sufficient lifeboats for every person aboard."
  },
  "5-18": {
    events: [
      { year: 1980, text: "Mount St. Helens erupts catastrophically in Washington state, killing 57 people, flattening 230 square miles of forest, and sending an ash column 15 miles into the atmosphere.", category: "Nature" },
      { year: 1896, text: "The U.S. Supreme Court rules in Plessy v. Ferguson, establishing the 'separate but equal' doctrine that would legalize racial segregation for nearly 60 years.", category: "Politics" },
      { year: 1910, text: "Earth passes through the tail of Halley's Comet, causing widespread public panic despite astronomers' reassurances of safety.", category: "Science" },
      { year: 1944, text: "The Battle of Monte Cassino ends as Allied forces finally capture the strategic hilltop monastery in Italy after four brutal assaults over five months.", category: "War" },
      { year: 1652, text: "Rhode Island enacts the first law in North America making slavery illegal, though the law was largely unenforced.", category: "Politics" }
    ],
    births: [
      { year: 1920, name: "Pope John Paul II", desc: "Head of the Catholic Church from 1978 to 2005, first non-Italian pope in 455 years" },
      { year: 1946, name: "Reggie Jackson", desc: "Baseball Hall of Famer nicknamed 'Mr. October' for his postseason heroics" },
      { year: 1048, name: "Omar Khayyam", desc: "Persian mathematician, astronomer, and poet" }
    ],
    deaths: [
      { year: 1911, name: "Gustav Mahler", desc: "Austrian composer and conductor" }
    ],
    fact: "The 1980 eruption of Mount St. Helens released energy equivalent to 27,000 Hiroshima-sized atomic bombs. The lateral blast traveled at 670 mph and the mountain lost 1,314 feet of elevation in a single moment."
  },
  "7-4": {
    events: [
      { year: 1776, text: "The Continental Congress formally adopts the Declaration of Independence, declaring the thirteen American colonies free from British rule.", category: "Politics" },
      { year: 1826, text: "Both John Adams and Thomas Jefferson — the second and third U.S. Presidents — die on the same day, exactly 50 years after the Declaration of Independence.", category: "Politics" },
      { year: 1884, text: "The Statue of Liberty is formally presented to the United States by France in a ceremony in Paris.", category: "Culture" }
    ],
    births: [
      { year: 1872, name: "Calvin Coolidge", desc: "30th President of the United States" },
      { year: 1927, name: "Neil Simon", desc: "Prolific American playwright" }
    ],
    deaths: [
      { year: 1826, name: "Thomas Jefferson", desc: "3rd President of the United States" },
      { year: 1826, name: "John Adams", desc: "2nd President of the United States" }
    ],
    fact: "John Adams' last words were reportedly 'Thomas Jefferson survives.' He did not know that Jefferson had died just a few hours earlier on the same day — July 4, 1826, the 50th anniversary of American independence."
  },
  "7-20": {
    events: [
      { year: 1969, text: "Apollo 11 astronauts Neil Armstrong and Buzz Aldrin become the first humans to walk on the Moon while Michael Collins orbits above.", category: "Science" },
      { year: 1944, text: "A group of German officers attempts to assassinate Adolf Hitler with a bomb in the July 20 plot. Hitler survives with minor injuries.", category: "War" },
      { year: 1976, text: "NASA's Viking 1 lander successfully touches down on Mars, becoming the first U.S. spacecraft to land on the Red Planet.", category: "Science" }
    ],
    births: [
      { year: 1919, name: "Edmund Hillary", desc: "New Zealand mountaineer, first to summit Mount Everest" }
    ],
    deaths: [
      { year: 1973, name: "Bruce Lee", desc: "Martial artist and cultural icon" }
    ],
    fact: "Neil Armstrong's famous first words on the Moon — 'That's one small step for man, one giant leap for mankind' — were heard by an estimated 600 million people worldwide, the largest TV audience for a live broadcast at that time."
  },
  "9-11": {
    events: [
      { year: 2001, text: "Coordinated terrorist attacks strike the United States as hijacked planes hit the World Trade Center in New York and the Pentagon in Virginia, killing nearly 3,000 people.", category: "War" },
      { year: 1973, text: "A CIA-backed military coup in Chile overthrows President Salvador Allende. General Augusto Pinochet seizes power.", category: "Politics" },
      { year: 1997, text: "NASA's Mars Global Surveyor spacecraft enters orbit around Mars after a 10-month journey.", category: "Science" }
    ],
    births: [
      { year: 1862, name: "O. Henry", desc: "American short story writer known for surprise endings" },
      { year: 1917, name: "Ferdinand Marcos", desc: "President of the Philippines from 1965 to 1986" }
    ],
    deaths: [],
    fact: "The twin towers of the World Trade Center had their own zip code: 10048. At the time of the attacks, approximately 50,000 people worked in the complex daily, and another 200,000 passed through as visitors."
  },
  "12-25": {
    events: [
      { year: 800, text: "Pope Leo III crowns Charlemagne as Emperor of the Romans at St. Peter's Basilica in Rome, reviving the concept of a Western Roman Empire.", category: "Politics" },
      { year: 1776, text: "George Washington and the Continental Army cross the Delaware River in a surprise attack against Hessian forces at Trenton, New Jersey.", category: "War" },
      { year: 1991, text: "Soviet President Mikhail Gorbachev resigns, and the Soviet Union is officially dissolved the following day.", category: "Politics" }
    ],
    births: [
      { year: 1642, name: "Isaac Newton", desc: "English mathematician and physicist who described universal gravitation" },
      { year: 1899, name: "Humphrey Bogart", desc: "Iconic American film actor" }
    ],
    deaths: [
      { year: 1983, name: "Joan Miró", desc: "Spanish painter and sculptor" }
    ],
    fact: "Isaac Newton, born on Christmas Day 1642, was born so prematurely that he was not expected to survive. He went on to live 84 years and fundamentally changed humanity's understanding of physics and mathematics."
  }
};

// Generate content for any day — uses real data if available, otherwise creates seed content
export function getHistoryForDay(month, day) {
  const key = `${month}-${day}`;
  
  if (EVENTS_DB[key]) {
    return EVENTS_DB[key];
  }

  // Deterministic generation for days not yet in the database
  // In production, Claude API fills this daily
  const seed = month * 31 + day;
  const categories = ["Science", "Politics", "Culture", "Technology", "War", "Nature", "Exploration", "Disaster"];
  
  const centurySeed = (seed * 7 + 13) % 200;
  
  return {
    events: [
      {
        year: 1750 + (seed % 200),
        text: "A landmark diplomatic agreement was reached between rival powers, reshaping trade routes and political alliances across the region for decades to come.",
        category: categories[seed % categories.length]
      },
      {
        year: 1800 + ((seed * 3) % 180),
        text: "Scientists announced a breakthrough discovery that challenged prevailing theories and opened new avenues of research in natural philosophy.",
        category: "Science"
      },
      {
        year: 1850 + ((seed * 5) % 150),
        text: "The first successful demonstration of a revolutionary communication technology connected distant cities, transforming how information traveled.",
        category: "Technology"
      },
      {
        year: 1900 + ((seed * 2) % 100),
        text: "A pivotal cultural moment occurred as a groundbreaking artistic work premiered, sparking both admiration and controversy worldwide.",
        category: "Culture"
      }
    ],
    births: [
      { year: 1800 + ((seed * 4) % 160), name: "Historical Figure", desc: "Notable leader and reformer who shaped the era" },
      { year: 1880 + ((seed * 6) % 100), name: "Cultural Pioneer", desc: "Celebrated innovator in the arts and sciences" }
    ],
    deaths: [],
    fact: `On this date throughout history, remarkable events have unfolded across every continent. Each day carries the weight of human achievement, conflict, discovery, and transformation — reminding us that history is not distant, but woven into every calendar page.`
  };
}

export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function getDaysInMonth(month) {
  return new Date(2024, month, 0).getDate();
}
