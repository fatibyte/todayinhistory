export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function getDaysInMonth(month) {
  return new Date(2024, month, 0).getDate();
}

const EVENTS_DB = {
  "1-1": {
    "events": [
      {
        "year": 1863,
        "text": "The Emancipation Proclamation takes effect, declaring freedom for enslaved people in Confederate states during the American Civil War.",
        "category": "Politics"
      },
      {
        "year": 1959,
        "text": "Fidel Castro and his revolutionary forces seize control of Cuba as dictator Fulgencio Batista flees the country.",
        "category": "Politics"
      },
      {
        "year": 1983,
        "text": "The ARPANET officially transitions to TCP/IP, marking the technical birth of the modern Internet.",
        "category": "Technology"
      },
      {
        "year": 1502,
        "text": "Portuguese explorers arrive at Guanabara Bay in Brazil, mistaking it for a river mouth and naming it Rio de Janeiro.",
        "category": "Exploration"
      },
      {
        "year": 1801,
        "text": "The Act of Union merges Great Britain and Ireland into the United Kingdom of Great Britain and Ireland.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1735,
        "name": "Paul Revere",
        "desc": "American silversmith and patriot of the American Revolution"
      },
      {
        "year": 1919,
        "name": "J.D. Salinger",
        "desc": "Reclusive American author of The Catcher in the Rye"
      },
      {
        "year": 1895,
        "name": "J. Edgar Hoover",
        "desc": "First Director of the FBI who served for 48 years"
      }
    ],
    "deaths": [
      {
        "year": 1953,
        "name": "Hank Williams",
        "desc": "Legendary country music singer-songwriter, died at age 29"
      }
    ],
    "fact": "New Year's Day has been celebrated for over 4,000 years. The ancient Babylonians were the first to hold recorded New Year celebrations, though their year began in March with the spring equinox."
  },
  "1-2": {
    "events": [
      {
        "year": 1788,
        "text": "Georgia becomes the fourth state to ratify the United States Constitution.",
        "category": "Politics"
      },
      {
        "year": 1905,
        "text": "The Russian garrison at Port Arthur surrenders to Japanese forces during the Russo-Japanese War.",
        "category": "War"
      },
      {
        "year": 1959,
        "text": "The Soviet Union launches Luna 1, the first spacecraft to reach the vicinity of the Moon.",
        "category": "Science"
      },
      {
        "year": 1839,
        "text": "The first photograph of the Moon is taken by French photographer Louis Daguerre.",
        "category": "Science"
      }
    ],
    "births": [
      {
        "year": 1920,
        "name": "Isaac Asimov",
        "desc": "Prolific science fiction author and biochemistry professor"
      },
      {
        "year": 1936,
        "name": "Roger Miller",
        "desc": "Country singer known for 'King of the Road'"
      }
    ],
    "deaths": [],
    "fact": "Isaac Asimov, born on this day, wrote or edited more than 500 books during his lifetime, spanning nearly every category of the Dewey Decimal Classification."
  },
  "1-3": {
    "events": [
      {
        "year": 1521,
        "text": "Pope Leo X excommunicates Martin Luther from the Catholic Church with the papal bull Decet Romanum Pontificem.",
        "category": "Politics"
      },
      {
        "year": 1870,
        "text": "Construction begins on the Brooklyn Bridge, which would take 13 years to complete.",
        "category": "Technology"
      },
      {
        "year": 1959,
        "text": "Alaska is admitted as the 49th state of the United States.",
        "category": "Politics"
      },
      {
        "year": 1977,
        "text": "Apple Computer is incorporated by Steve Jobs, Steve Wozniak, and Ronald Wayne.",
        "category": "Technology"
      }
    ],
    "births": [
      {
        "year": 106,
        "name": "Cicero",
        "desc": "Roman statesman, orator, and philosopher"
      },
      {
        "year": 1892,
        "name": "J.R.R. Tolkien",
        "desc": "English author of The Lord of the Rings"
      }
    ],
    "deaths": [],
    "fact": "J.R.R. Tolkien, born on this day, created entire languages before writing his novels. He once said the stories of Middle-earth grew from the languages, not the other way around."
  },
  "1-4": {
    "events": [
      {
        "year": 1643,
        "text": "Isaac Newton is born in Woolsthorpe, England, though some records place his birth on December 25, 1642 under the Julian calendar.",
        "category": "Science"
      },
      {
        "year": 1903,
        "text": "Topsy, a circus elephant, is electrocuted at Coney Island in an event filmed by Thomas Edison's company.",
        "category": "Culture"
      },
      {
        "year": 2010,
        "text": "The Burj Khalifa in Dubai officially opens as the tallest building in the world at 2,717 feet.",
        "category": "Technology"
      },
      {
        "year": 1847,
        "text": "Samuel Colt sells his first revolvers to the United States government.",
        "category": "Technology"
      }
    ],
    "births": [
      {
        "year": 1643,
        "name": "Isaac Newton",
        "desc": "English mathematician who described universal gravitation"
      },
      {
        "year": 1809,
        "name": "Louis Braille",
        "desc": "Inventor of the Braille reading system for the blind"
      }
    ],
    "deaths": [
      {
        "year": 1941,
        "name": "Henri Bergson",
        "desc": "French philosopher and Nobel Prize laureate"
      }
    ],
    "fact": "Louis Braille, born on this day, was blinded in an accident at age three. By age fifteen, he had developed the raised-dot reading system that bears his name, revolutionizing literacy for blind people worldwide."
  },
  "1-5": {
    "events": [
      {
        "year": 1933,
        "text": "Construction begins on the Golden Gate Bridge in San Francisco.",
        "category": "Technology"
      },
      {
        "year": 1972,
        "text": "President Nixon orders the development of the Space Shuttle program.",
        "category": "Science"
      },
      {
        "year": 1914,
        "text": "Henry Ford announces an eight-hour, five-dollar workday for his factory workers, doubling most workers' pay.",
        "category": "Culture"
      },
      {
        "year": 1589,
        "text": "Catherine de Medici, Queen of France, dies at Blois. She was one of the most powerful women in 16th-century Europe.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1946,
        "name": "Diane Keaton",
        "desc": "Academy Award-winning American actress"
      },
      {
        "year": 1928,
        "name": "Walter Mondale",
        "desc": "42nd Vice President of the United States"
      }
    ],
    "deaths": [],
    "fact": "Henry Ford's decision on this day to pay workers $5 for an eight-hour day was considered radical. It was more than double the average wage. Ford believed well-paid workers would become customers for his cars."
  },
  "1-6": {
    "events": [
      {
        "year": 1412,
        "text": "Joan of Arc is born in Domr\u00e9my, France. She would lead French forces to victory at age seventeen.",
        "category": "War"
      },
      {
        "year": 1838,
        "text": "Samuel Morse first publicly demonstrates his telegraph system in Morristown, New Jersey.",
        "category": "Technology"
      },
      {
        "year": 1941,
        "text": "President Franklin Roosevelt delivers his famous Four Freedoms speech to the U.S. Congress.",
        "category": "Politics"
      },
      {
        "year": 2021,
        "text": "Supporters of President Trump storm the U.S. Capitol building in Washington, D.C., disrupting the certification of the 2020 presidential election.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1412,
        "name": "Joan of Arc",
        "desc": "French heroine and Catholic saint who led armies at age 17"
      },
      {
        "year": 1832,
        "name": "Gustave Dor\u00e9",
        "desc": "French artist known for his illustrations of classic literature"
      }
    ],
    "deaths": [
      {
        "year": 1919,
        "name": "Theodore Roosevelt",
        "desc": "26th President of the United States"
      }
    ],
    "fact": "Joan of Arc, believed born on this day, was just 17 when she convinced the French court to let her lead an army. She was captured, tried for heresy, and burned at the stake at 19 \u2014 then canonized as a saint in 1920."
  },
  "1-7": {
    "events": [
      {
        "year": 1610,
        "text": "Galileo Galilei observes four of Jupiter's moons for the first time, fundamentally changing our understanding of the solar system.",
        "category": "Science"
      },
      {
        "year": 1927,
        "text": "The first transatlantic telephone service is established between New York and London.",
        "category": "Technology"
      },
      {
        "year": 1953,
        "text": "President Truman announces that the United States has developed a hydrogen bomb.",
        "category": "Science"
      },
      {
        "year": 1785,
        "text": "Jean-Pierre Blanchard and John Jeffries make the first crossing of the English Channel by balloon.",
        "category": "Exploration"
      }
    ],
    "births": [
      {
        "year": 1844,
        "name": "Bernadette Soubirous",
        "desc": "French saint who reported visions of the Virgin Mary at Lourdes"
      },
      {
        "year": 1964,
        "name": "Nicolas Cage",
        "desc": "Academy Award-winning American actor"
      }
    ],
    "deaths": [],
    "fact": "When Galileo first spotted Jupiter's moons on this day, he initially thought they were stars. Over several nights of observation, he realized they were orbiting Jupiter \u2014 proof that not everything revolved around Earth."
  },
  "1-8": {
    "events": [
      {
        "year": 1790,
        "text": "President George Washington delivers the first State of the Union address to Congress in New York City.",
        "category": "Politics"
      },
      {
        "year": 1815,
        "text": "The Battle of New Orleans ends with a decisive American victory, unaware that a peace treaty had already been signed two weeks earlier.",
        "category": "War"
      },
      {
        "year": 1935,
        "text": "Elvis Presley is born in Tupelo, Mississippi, in a two-room house built by his father.",
        "category": "Culture"
      },
      {
        "year": 2002,
        "text": "The No Child Left Behind Act is signed into law by President George W. Bush.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1935,
        "name": "Elvis Presley",
        "desc": "The King of Rock and Roll"
      },
      {
        "year": 1942,
        "name": "Stephen Hawking",
        "desc": "Theoretical physicist and cosmologist"
      }
    ],
    "deaths": [
      {
        "year": 1642,
        "name": "Galileo Galilei",
        "desc": "Italian astronomer and physicist"
      }
    ],
    "fact": "Elvis Presley and Stephen Hawking were both born on January 8 \u2014 Elvis in 1935 and Hawking in 1942. Hawking often noted with amusement that his birth fell on the 300th anniversary of Galileo's death."
  },
  "1-9": {
    "events": [
      {
        "year": 1793,
        "text": "Jean-Pierre Blanchard makes the first balloon flight in the United States, ascending from Philadelphia as George Washington watches.",
        "category": "Science"
      },
      {
        "year": 1799,
        "text": "British Prime Minister William Pitt the Younger introduces an income tax to fund the war against Napoleon.",
        "category": "Politics"
      },
      {
        "year": 2007,
        "text": "Steve Jobs unveils the first iPhone at the Macworld Conference in San Francisco, changing the technology industry forever.",
        "category": "Technology"
      },
      {
        "year": 1861,
        "text": "Mississippi becomes the second state to secede from the Union before the Civil War.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1913,
        "name": "Richard Nixon",
        "desc": "37th President of the United States"
      },
      {
        "year": 1908,
        "name": "Simone de Beauvoir",
        "desc": "French existentialist philosopher and feminist author"
      }
    ],
    "deaths": [],
    "fact": "When Steve Jobs revealed the iPhone on this day in 2007, he began by saying Apple was introducing three devices: a widescreen iPod, a phone, and an Internet communicator. The audience slowly realized all three were the same device."
  },
  "1-10": {
    "events": [
      {
        "year": 49,
        "text": "Julius Caesar crosses the Rubicon river with his army, triggering a civil war that would end the Roman Republic.",
        "category": "War"
      },
      {
        "year": 1920,
        "text": "The League of Nations is officially established with the ratification of the Treaty of Versailles.",
        "category": "Politics"
      },
      {
        "year": 1946,
        "text": "The first meeting of the United Nations General Assembly takes place in London with 51 nations represented.",
        "category": "Politics"
      },
      {
        "year": 1863,
        "text": "The London Underground opens as the world's first underground railway, carrying 38,000 passengers on its first day.",
        "category": "Technology"
      }
    ],
    "births": [
      {
        "year": 1769,
        "name": "Michel Ney",
        "desc": "French military commander known as the 'bravest of the brave'"
      },
      {
        "year": 1945,
        "name": "Rod Stewart",
        "desc": "British rock and pop singer"
      }
    ],
    "deaths": [],
    "fact": "When Caesar crossed the Rubicon on this day, he reportedly said 'the die is cast.' The river was the boundary between Gaul and Italy \u2014 crossing it with an army was an act of treason that made civil war inevitable."
  },
  "1-11": {
    "events": [
      {
        "year": 1922,
        "text": "Insulin is first used to treat diabetes in a human patient, a 14-year-old boy named Leonard Thompson in Toronto.",
        "category": "Science"
      },
      {
        "year": 1964,
        "text": "U.S. Surgeon General Luther Terry issues the first government report linking smoking to cancer.",
        "category": "Science"
      },
      {
        "year": 1787,
        "text": "William Herschel discovers Titania and Oberon, two moons of Uranus.",
        "category": "Science"
      },
      {
        "year": 1935,
        "text": "Amelia Earhart becomes the first person to fly solo from Hawaii to California.",
        "category": "Exploration"
      }
    ],
    "births": [
      {
        "year": 1755,
        "name": "Alexander Hamilton",
        "desc": "Founding Father and first U.S. Secretary of the Treasury"
      },
      {
        "year": 1842,
        "name": "William James",
        "desc": "American philosopher and psychologist"
      }
    ],
    "deaths": [],
    "fact": "When insulin was first injected into Leonard Thompson on this day, the 14-year-old weighed only 65 pounds and was near death. The first batch caused an allergic reaction, but a purified version 12 days later saved his life."
  },
  "1-12": {
    "events": [
      {
        "year": 1773,
        "text": "The first public museum in America opens in Charleston, South Carolina.",
        "category": "Culture"
      },
      {
        "year": 1915,
        "text": "The U.S. House of Representatives rejects a proposal to give women the right to vote.",
        "category": "Politics"
      },
      {
        "year": 1966,
        "text": "Batman, starring Adam West, premieres on ABC television and becomes an instant pop culture phenomenon.",
        "category": "Culture"
      },
      {
        "year": 2010,
        "text": "A devastating 7.0 magnitude earthquake strikes Haiti, killing an estimated 220,000 people.",
        "category": "Nature"
      }
    ],
    "births": [
      {
        "year": 1876,
        "name": "Jack London",
        "desc": "American author of The Call of the Wild"
      },
      {
        "year": 1954,
        "name": "Howard Stern",
        "desc": "American radio personality"
      }
    ],
    "deaths": [
      {
        "year": 2003,
        "name": "Maurice Gibb",
        "desc": "Member of the Bee Gees"
      }
    ],
    "fact": "Jack London, born on this day, was largely self-educated. He spent time as an oyster pirate, a gold prospector, and a sailor before becoming one of America's most popular authors, all before the age of 30."
  },
  "1-13": {
    "events": [
      {
        "year": 1898,
        "text": "\u00c9mile Zola publishes 'J'accuse!' in a Paris newspaper, accusing the French government of antisemitism in the Dreyfus affair.",
        "category": "Politics"
      },
      {
        "year": 1968,
        "text": "Johnny Cash performs his legendary concert at Folsom State Prison in California.",
        "category": "Culture"
      },
      {
        "year": 2018,
        "text": "A false missile alert is sent to residents of Hawaii, causing widespread panic for 38 minutes before being corrected.",
        "category": "Technology"
      },
      {
        "year": 1942,
        "text": "Henry Ford patents a car made from soybean-based plastic, which is 30% lighter than steel.",
        "category": "Technology"
      }
    ],
    "births": [
      {
        "year": 1832,
        "name": "Horatio Alger Jr.",
        "desc": "American author who popularized the rags-to-riches narrative"
      },
      {
        "year": 1966,
        "name": "Patrick Dempsey",
        "desc": "American actor known for Grey's Anatomy"
      }
    ],
    "deaths": [],
    "fact": "Johnny Cash's Folsom Prison concert on this day became one of the most iconic live albums ever. Cash had never been to prison himself, but his song 'Folsom Prison Blues' had made him a hero to inmates across America."
  },
  "1-14": {
    "events": [
      {
        "year": 1784,
        "text": "The United States ratifies the Treaty of Paris, officially ending the American Revolutionary War.",
        "category": "War"
      },
      {
        "year": 1943,
        "text": "Franklin Roosevelt and Winston Churchill begin the Casablanca Conference to plan the next phase of World War II.",
        "category": "War"
      },
      {
        "year": 1953,
        "text": "Josip Broz Tito is inaugurated as the first President of Yugoslavia.",
        "category": "Politics"
      },
      {
        "year": 2005,
        "text": "The Huygens probe lands on Saturn's moon Titan, becoming the first spacecraft to land in the outer solar system.",
        "category": "Science"
      }
    ],
    "births": [
      {
        "year": 1741,
        "name": "Benedict Arnold",
        "desc": "American general who became infamous for treason"
      },
      {
        "year": 1875,
        "name": "Albert Schweitzer",
        "desc": "Nobel Peace Prize-winning physician and philosopher"
      }
    ],
    "deaths": [
      {
        "year": 1898,
        "name": "Lewis Carroll",
        "desc": "Author of Alice's Adventures in Wonderland"
      }
    ],
    "fact": "The Huygens probe that landed on Titan on this day took 2 hours and 27 minutes to descend through the moon's thick atmosphere. It sent back images of a landscape eerily similar to Earth, with rivers, lakes, and shorelines \u2014 made of liquid methane."
  },
  "1-15": {
    "events": [
      {
        "year": 1559,
        "text": "Elizabeth I is crowned Queen of England at Westminster Abbey, beginning a 44-year reign that would define an era.",
        "category": "Politics"
      },
      {
        "year": 1919,
        "text": "A massive tank of molasses explodes in Boston, sending a 25-foot wave through the streets and killing 21 people.",
        "category": "Disaster"
      },
      {
        "year": 1929,
        "text": "Martin Luther King Jr. is born in Atlanta, Georgia.",
        "category": "Culture"
      },
      {
        "year": 2001,
        "text": "Wikipedia is launched by Jimmy Wales and Larry Sanger as a free online encyclopedia.",
        "category": "Technology"
      }
    ],
    "births": [
      {
        "year": 1929,
        "name": "Martin Luther King Jr.",
        "desc": "Civil rights leader and Nobel Peace Prize laureate"
      },
      {
        "year": 1622,
        "name": "Moli\u00e8re",
        "desc": "French playwright and master of comedy"
      }
    ],
    "deaths": [],
    "fact": "The Great Molasses Flood of 1919 sent 2.3 million gallons of molasses surging through Boston's North End at 35 mph. Residents claimed that on hot summer days, the area smelled of molasses for decades afterward."
  },
  "1-16": {
    "events": [
      {
        "year": 27,
        "text": "Gaius Julius Caesar Octavianus is granted the title Augustus by the Roman Senate, marking the beginning of the Roman Empire.",
        "category": "Politics"
      },
      {
        "year": 1547,
        "text": "Ivan the Terrible is crowned as the first Tsar of Russia at age 16.",
        "category": "Politics"
      },
      {
        "year": 1920,
        "text": "Prohibition begins in the United States as the 18th Amendment takes effect, banning the manufacture and sale of alcohol.",
        "category": "Politics"
      },
      {
        "year": 1969,
        "text": "Czech student Jan Palach sets himself on fire in Prague's Wenceslas Square to protest the Soviet invasion of Czechoslovakia.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1853,
        "name": "Andr\u00e9 Michelin",
        "desc": "French industrialist who co-founded the Michelin tire company"
      },
      {
        "year": 1974,
        "name": "Kate Moss",
        "desc": "British supermodel who redefined fashion in the 1990s"
      }
    ],
    "deaths": [],
    "fact": "When Prohibition began on this day in 1920, many Americans had stockpiled alcohol in advance. The Yale Club in New York had a 14-year supply in its cellar. The ban lasted 13 years and gave rise to organized crime."
  },
  "1-17": {
    "events": [
      {
        "year": 1773,
        "text": "Captain James Cook and his crew become the first known Europeans to cross the Antarctic Circle.",
        "category": "Exploration"
      },
      {
        "year": 1893,
        "text": "The Kingdom of Hawaii is overthrown when a group of American and European businessmen depose Queen Liliuokalani.",
        "category": "Politics"
      },
      {
        "year": 1945,
        "text": "Soviet forces liberate Warsaw from Nazi occupation during World War II.",
        "category": "War"
      },
      {
        "year": 1995,
        "text": "A devastating earthquake strikes Kobe, Japan, killing over 6,400 people and leaving 300,000 homeless.",
        "category": "Nature"
      }
    ],
    "births": [
      {
        "year": 1706,
        "name": "Benjamin Franklin",
        "desc": "Founding Father, inventor, and diplomat"
      },
      {
        "year": 1942,
        "name": "Muhammad Ali",
        "desc": "Legendary boxer and cultural icon, born Cassius Clay"
      }
    ],
    "deaths": [],
    "fact": "Benjamin Franklin, born on this day, was one of seventeen children. Despite only two years of formal education, he became a scientist, inventor, diplomat, and one of the most influential figures in American history."
  },
  "1-18": {
    "events": [
      {
        "year": 1778,
        "text": "Captain James Cook becomes the first European to discover the Hawaiian Islands, which he names the Sandwich Islands.",
        "category": "Exploration"
      },
      {
        "year": 1871,
        "text": "Wilhelm I is proclaimed the first German Emperor at the Palace of Versailles during the Franco-Prussian War.",
        "category": "Politics"
      },
      {
        "year": 1919,
        "text": "The Paris Peace Conference opens at the Palace of Versailles to negotiate the end of World War I.",
        "category": "War"
      },
      {
        "year": 1977,
        "text": "Scientists identify a previously unknown bacterium as the cause of Legionnaires' disease.",
        "category": "Science"
      }
    ],
    "births": [
      {
        "year": 1882,
        "name": "A.A. Milne",
        "desc": "English author who created Winnie-the-Pooh"
      },
      {
        "year": 1892,
        "name": "Oliver Hardy",
        "desc": "Comedian, one half of Laurel and Hardy"
      }
    ],
    "deaths": [],
    "fact": "A.A. Milne created Winnie-the-Pooh based on his son Christopher Robin's stuffed animals. The original toys are now displayed at the New York Public Library, where they have been since 1987."
  },
  "1-19": {
    "events": [
      {
        "year": 1736,
        "text": "James Watt, the inventor whose improvements to the steam engine powered the Industrial Revolution, is born.",
        "category": "Technology"
      },
      {
        "year": 1883,
        "text": "The first electric lighting system using overhead wires begins service in Roselle, New Jersey.",
        "category": "Technology"
      },
      {
        "year": 1966,
        "text": "Indira Gandhi is elected as the first female Prime Minister of India.",
        "category": "Politics"
      },
      {
        "year": 1983,
        "text": "The Apple Lisa is introduced as one of the first personal computers with a graphical user interface.",
        "category": "Technology"
      }
    ],
    "births": [
      {
        "year": 1736,
        "name": "James Watt",
        "desc": "Scottish inventor who transformed the steam engine"
      },
      {
        "year": 1809,
        "name": "Edgar Allan Poe",
        "desc": "American author and poet, master of the macabre"
      }
    ],
    "deaths": [],
    "fact": "Edgar Allan Poe, born on this day, died under mysterious circumstances at age 40. He was found delirious on the streets of Baltimore, wearing someone else's clothes, and never coherently explained what had happened."
  },
  "1-20": {
    "events": [
      {
        "year": 1265,
        "text": "The first English Parliament to include ordinary citizens meets in London, called by Simon de Montfort.",
        "category": "Politics"
      },
      {
        "year": 1841,
        "text": "Britain formally occupies Hong Kong, which would remain under British control for over 150 years.",
        "category": "Politics"
      },
      {
        "year": 1961,
        "text": "John F. Kennedy is inaugurated as the 35th President, delivering his famous 'ask not what your country can do for you' address.",
        "category": "Politics"
      },
      {
        "year": 2009,
        "text": "Barack Obama is inaugurated as the 44th President of the United States, becoming the first African American to hold the office.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1930,
        "name": "Buzz Aldrin",
        "desc": "Astronaut, second person to walk on the Moon"
      },
      {
        "year": 1946,
        "name": "David Lynch",
        "desc": "Visionary American filmmaker and artist"
      }
    ],
    "deaths": [],
    "fact": "January 20 became the official Inauguration Day in 1937 with the 20th Amendment. Before that, presidents were inaugurated on March 4, leaving a four-month gap between election and taking office."
  },
  "1-21": {
    "events": [
      {
        "year": 1793,
        "text": "King Louis XVI of France is executed by guillotine during the French Revolution.",
        "category": "Politics"
      },
      {
        "year": 1954,
        "text": "The USS Nautilus, the world's first nuclear-powered submarine, is launched in Groton, Connecticut.",
        "category": "Technology"
      },
      {
        "year": 1976,
        "text": "The Concorde supersonic airliner begins commercial service simultaneously from London and Paris.",
        "category": "Technology"
      },
      {
        "year": 2017,
        "text": "The Women's March takes place in cities worldwide, becoming one of the largest single-day protests in U.S. history.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1824,
        "name": "Stonewall Jackson",
        "desc": "Confederate general in the American Civil War"
      },
      {
        "year": 1905,
        "name": "Christian Dior",
        "desc": "French fashion designer who revolutionized postwar fashion"
      }
    ],
    "deaths": [
      {
        "year": 1793,
        "name": "Louis XVI",
        "desc": "King of France during the Revolution"
      }
    ],
    "fact": "The Concorde could cross the Atlantic in under 3.5 hours at twice the speed of sound. Due to time zones, passengers would arrive in New York before they left London by local clock time."
  },
  "1-22": {
    "events": [
      {
        "year": 1506,
        "text": "The first contingent of 150 Swiss Guards arrives at the Vatican to serve as the Pope's personal army.",
        "category": "Politics"
      },
      {
        "year": 1901,
        "text": "Queen Victoria dies at age 81 after reigning for 63 years, the longest in British history at that time.",
        "category": "Politics"
      },
      {
        "year": 1973,
        "text": "The Supreme Court rules 7-2 in Roe v. Wade, establishing a constitutional right to abortion in the United States.",
        "category": "Politics"
      },
      {
        "year": 1984,
        "text": "Apple introduces the Macintosh computer during Super Bowl XVIII with its famous '1984' television commercial.",
        "category": "Technology"
      }
    ],
    "births": [
      {
        "year": 1561,
        "name": "Francis Bacon",
        "desc": "English philosopher and father of the scientific method"
      },
      {
        "year": 1788,
        "name": "Lord Byron",
        "desc": "Influential English Romantic poet"
      }
    ],
    "deaths": [
      {
        "year": 1901,
        "name": "Queen Victoria",
        "desc": "Queen of the United Kingdom for 63 years"
      }
    ],
    "fact": "The Swiss Guard, which arrived at the Vatican on this day in 1506, is the world's smallest army. Recruits must be unmarried Swiss Catholic males between 19 and 30, at least 5'8\" tall."
  },
  "1-23": {
    "events": [
      {
        "year": 1556,
        "text": "The deadliest earthquake in recorded history strikes Shaanxi, China, killing approximately 830,000 people.",
        "category": "Nature"
      },
      {
        "year": 1849,
        "text": "Elizabeth Blackwell becomes the first woman in America to receive a medical degree.",
        "category": "Science"
      },
      {
        "year": 1960,
        "text": "The bathyscaphe Trieste descends to the bottom of the Mariana Trench, the deepest point in the ocean at 35,814 feet.",
        "category": "Exploration"
      },
      {
        "year": 2003,
        "text": "The last signal is received from Pioneer 10, the first spacecraft to travel through the asteroid belt and past Jupiter.",
        "category": "Science"
      }
    ],
    "births": [
      {
        "year": 1832,
        "name": "\u00c9douard Manet",
        "desc": "French painter and pioneer of Impressionism"
      },
      {
        "year": 1944,
        "name": "Rutger Hauer",
        "desc": "Dutch actor known for Blade Runner"
      }
    ],
    "deaths": [],
    "fact": "The 1556 Shaanxi earthquake killed an estimated 830,000 people \u2014 more than any other earthquake in history. Many victims lived in yaodongs, cave-like dwellings carved into loess cliffs that collapsed during the shaking."
  },
  "1-24": {
    "events": [
      {
        "year": 41,
        "text": "Roman Emperor Caligula is assassinated by his own Praetorian Guard after a reign marked by cruelty and erratic behavior.",
        "category": "Politics"
      },
      {
        "year": 1848,
        "text": "James W. Marshall discovers gold at Sutter's Mill in California, sparking the Gold Rush that would transform the American West.",
        "category": "Exploration"
      },
      {
        "year": 1935,
        "text": "The first canned beer goes on sale, produced by the Gottfried Krueger Brewing Company in New Jersey.",
        "category": "Culture"
      },
      {
        "year": 1984,
        "text": "Steve Jobs introduces the first Apple Macintosh computer at a shareholders meeting in Cupertino.",
        "category": "Technology"
      }
    ],
    "births": [
      {
        "year": 1732,
        "name": "Pierre de Beaumarchais",
        "desc": "French playwright who wrote The Barber of Seville"
      },
      {
        "year": 1941,
        "name": "Neil Diamond",
        "desc": "American singer-songwriter"
      }
    ],
    "deaths": [
      {
        "year": 41,
        "name": "Caligula",
        "desc": "Roman Emperor assassinated by his guards"
      }
    ],
    "fact": "When gold was discovered at Sutter's Mill on this day, James Marshall tried to keep it secret. Within weeks, word spread and over 300,000 people flooded into California. Ironically, Sutter himself went bankrupt as squatters overran his land."
  },
  "1-25": {
    "events": [
      {
        "year": 1533,
        "text": "King Henry VIII secretly marries Anne Boleyn, his second wife, setting in motion England's break from the Catholic Church.",
        "category": "Politics"
      },
      {
        "year": 1890,
        "text": "Journalist Nellie Bly completes her trip around the world in 72 days, beating the fictional record of Phileas Fogg.",
        "category": "Culture"
      },
      {
        "year": 1924,
        "text": "The first Winter Olympic Games open in Chamonix, France.",
        "category": "Culture"
      },
      {
        "year": 1961,
        "text": "President Kennedy holds the first live televised presidential news conference.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1759,
        "name": "Robert Burns",
        "desc": "Scotland's national poet"
      },
      {
        "year": 1882,
        "name": "Virginia Woolf",
        "desc": "Modernist English author and feminist icon"
      }
    ],
    "deaths": [],
    "fact": "Nellie Bly carried only a single small bag on her 72-day journey around the world. She traveled by steamship, train, horse, and rickshaw, filing reports to the New York World newspaper at every stop."
  },
  "1-26": {
    "events": [
      {
        "year": 1788,
        "text": "The First Fleet arrives at Sydney Cove, beginning European colonization of Australia.",
        "category": "Exploration"
      },
      {
        "year": 1838,
        "text": "Tennessee enacts the first prohibition law in the United States, banning the sale of alcoholic beverages.",
        "category": "Politics"
      },
      {
        "year": 1950,
        "text": "India formally becomes a republic as its constitution takes effect, with Rajendra Prasad as its first president.",
        "category": "Politics"
      },
      {
        "year": 1998,
        "text": "President Clinton emphatically denies having sexual relations with Monica Lewinsky during a White House press conference.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1880,
        "name": "Douglas MacArthur",
        "desc": "Supreme Commander of Allied Forces in the Pacific during WWII"
      },
      {
        "year": 1925,
        "name": "Paul Newman",
        "desc": "Academy Award-winning actor and philanthropist"
      }
    ],
    "deaths": [],
    "fact": "Australia Day on January 26 commemorates the arrival of the First Fleet in 1788. The fleet consisted of 11 ships carrying about 1,500 people, more than half of whom were convicts. The voyage from England took eight months."
  },
  "1-27": {
    "events": [
      {
        "year": 1880,
        "text": "Thomas Edison receives a patent for his incandescent light bulb.",
        "category": "Technology"
      },
      {
        "year": 1945,
        "text": "Soviet forces liberate the Auschwitz concentration camp in Poland, where over 1.1 million people had been killed.",
        "category": "War"
      },
      {
        "year": 1967,
        "text": "A fire during a launch pad test for Apollo 1 kills astronauts Gus Grissom, Ed White, and Roger Chaffee.",
        "category": "Science"
      },
      {
        "year": 1973,
        "text": "The Paris Peace Accords are signed, officially ending direct U.S. military involvement in the Vietnam War.",
        "category": "War"
      }
    ],
    "births": [
      {
        "year": 1756,
        "name": "Wolfgang Amadeus Mozart",
        "desc": "Austrian composer and musical prodigy"
      },
      {
        "year": 1832,
        "name": "Lewis Carroll",
        "desc": "Author of Alice's Adventures in Wonderland"
      }
    ],
    "deaths": [],
    "fact": "Mozart, born on this day, composed his first piece of music at age five and his first symphony at age eight. By the time he died at 35, he had composed over 600 works, many considered among the greatest ever written."
  },
  "1-28": {
    "events": [
      {
        "year": 1521,
        "text": "The Diet of Worms begins, where Martin Luther would famously refuse to recant his writings before Emperor Charles V.",
        "category": "Politics"
      },
      {
        "year": 1813,
        "text": "Jane Austen's Pride and Prejudice is published for the first time.",
        "category": "Culture"
      },
      {
        "year": 1986,
        "text": "The Space Shuttle Challenger breaks apart 73 seconds after launch, killing all seven crew members including teacher Christa McAuliffe.",
        "category": "Science"
      },
      {
        "year": 1958,
        "text": "The Lego company patents the modern interlocking brick design that would make it one of the world's most popular toys.",
        "category": "Culture"
      }
    ],
    "births": [
      {
        "year": 1853,
        "name": "Jos\u00e9 Mart\u00ed",
        "desc": "Cuban poet and revolutionary leader"
      },
      {
        "year": 1936,
        "name": "Alan Alda",
        "desc": "American actor known for M*A*S*H"
      }
    ],
    "deaths": [],
    "fact": "The Challenger disaster on this day was caused by a failed O-ring seal in the right solid rocket booster, made brittle by unusually cold weather. Engineers had warned against launching in the cold, but were overruled."
  },
  "1-29": {
    "events": [
      {
        "year": 1845,
        "text": "Edgar Allan Poe's poem 'The Raven' is published for the first time in the New York Evening Mirror.",
        "category": "Culture"
      },
      {
        "year": 1886,
        "text": "Karl Benz patents the first automobile powered by an internal combustion engine.",
        "category": "Technology"
      },
      {
        "year": 1936,
        "text": "The first inductees are named to the Baseball Hall of Fame: Ty Cobb, Babe Ruth, Honus Wagner, Christy Mathewson, and Walter Johnson.",
        "category": "Culture"
      },
      {
        "year": 2002,
        "text": "President George W. Bush describes Iraq, Iran, and North Korea as an 'axis of evil' in his State of the Union address.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1843,
        "name": "William McKinley",
        "desc": "25th President of the United States"
      },
      {
        "year": 1954,
        "name": "Oprah Winfrey",
        "desc": "Media mogul and cultural icon"
      }
    ],
    "deaths": [],
    "fact": "When 'The Raven' was published on this day, it made Poe famous overnight. Despite its success, he was paid only about $9 for the poem. Poe once said he chose a raven because it was the most melancholy of birds."
  },
  "1-30": {
    "events": [
      {
        "year": 1649,
        "text": "King Charles I of England is beheaded at the Palace of Whitehall after being convicted of treason.",
        "category": "Politics"
      },
      {
        "year": 1933,
        "text": "Adolf Hitler is sworn in as Chancellor of Germany, beginning his rise to absolute power.",
        "category": "Politics"
      },
      {
        "year": 1948,
        "text": "Mahatma Gandhi is assassinated in New Delhi by Nathuram Godse, a Hindu nationalist.",
        "category": "Politics"
      },
      {
        "year": 1969,
        "text": "The Beatles perform their last public concert on the rooftop of Apple Corps headquarters in London.",
        "category": "Culture"
      }
    ],
    "births": [
      {
        "year": 1882,
        "name": "Franklin D. Roosevelt",
        "desc": "32nd President of the United States who served four terms"
      },
      {
        "year": 1937,
        "name": "Vanessa Redgrave",
        "desc": "Academy Award-winning British actress"
      }
    ],
    "deaths": [
      {
        "year": 1948,
        "name": "Mahatma Gandhi",
        "desc": "Leader of Indian independence movement"
      }
    ],
    "fact": "The Beatles' rooftop concert on this day lasted only 42 minutes before police shut it down. John Lennon's final words to the audience were: 'I'd like to say thank you on behalf of the group and ourselves, and I hope we passed the audition.'"
  },
  "1-31": {
    "events": [
      {
        "year": 1606,
        "text": "Guy Fawkes is executed for his role in the Gunpowder Plot to blow up the English Parliament.",
        "category": "Politics"
      },
      {
        "year": 1865,
        "text": "The U.S. House of Representatives passes the Thirteenth Amendment, abolishing slavery.",
        "category": "Politics"
      },
      {
        "year": 1950,
        "text": "President Truman announces the development of the hydrogen bomb, escalating the nuclear arms race.",
        "category": "Science"
      },
      {
        "year": 1958,
        "text": "Explorer 1, the first American satellite, is launched into orbit by the U.S. Army.",
        "category": "Science"
      }
    ],
    "births": [
      {
        "year": 1797,
        "name": "Franz Schubert",
        "desc": "Austrian composer of the Romantic period"
      },
      {
        "year": 1937,
        "name": "Philip Glass",
        "desc": "Influential American minimalist composer"
      }
    ],
    "deaths": [
      {
        "year": 1606,
        "name": "Guy Fawkes",
        "desc": "English conspirator in the Gunpowder Plot"
      }
    ],
    "fact": "Explorer 1, launched on this day, discovered the Van Allen radiation belts around Earth \u2014 one of the first major scientific discoveries of the Space Age. The satellite was only 6 inches in diameter but carried instruments designed by James Van Allen."
  },
  "2-1": {
    "events": [
      {
        "year": 1790,
        "text": "The Supreme Court of the United States convenes for the first time in New York City.",
        "category": "Politics"
      },
      {
        "year": 1884,
        "text": "The first volume of the Oxford English Dictionary is published, covering words from A to Ant.",
        "category": "Culture"
      },
      {
        "year": 1960,
        "text": "Four African American college students begin a sit-in at a segregated Woolworth's lunch counter in Greensboro, North Carolina.",
        "category": "Politics"
      },
      {
        "year": 2003,
        "text": "The Space Shuttle Columbia disintegrates during reentry over Texas, killing all seven astronauts aboard.",
        "category": "Science"
      }
    ],
    "births": [
      {
        "year": 1901,
        "name": "Clark Gable",
        "desc": "Legendary Hollywood actor, the King of Hollywood"
      },
      {
        "year": 1965,
        "name": "Sherilyn Fenn",
        "desc": "American actress known for Twin Peaks"
      }
    ],
    "deaths": [],
    "fact": "The Oxford English Dictionary took 49 years to complete its first edition. The original editor estimated it would take 10 years. When finished, it contained 414,825 words and over 1.8 million quotations."
  },
  "2-2": {
    "events": [
      {
        "year": 1848,
        "text": "The Treaty of Guadalupe Hidalgo is signed, ending the Mexican-American War and ceding vast territories to the United States.",
        "category": "War"
      },
      {
        "year": 1876,
        "text": "The National League of Professional Baseball Clubs is founded with eight teams.",
        "category": "Culture"
      },
      {
        "year": 1943,
        "text": "The last German forces surrender at Stalingrad, marking a decisive turning point in World War II.",
        "category": "War"
      },
      {
        "year": 1990,
        "text": "South African President F.W. de Klerk lifts the ban on the African National Congress and promises to release Nelson Mandela.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1882,
        "name": "James Joyce",
        "desc": "Irish author of Ulysses and pioneer of modernist literature"
      },
      {
        "year": 1905,
        "name": "Ayn Rand",
        "desc": "Russian-American novelist and philosopher"
      }
    ],
    "deaths": [],
    "fact": "The Battle of Stalingrad, which ended on this day, was one of the bloodiest battles in history. Nearly 2 million people were killed, wounded, or captured during the five-month siege in bitter winter conditions."
  },
  "2-3": {
    "events": [
      {
        "year": 1468,
        "text": "Johannes Gutenberg, inventor of the movable-type printing press, dies in Mainz, Germany.",
        "category": "Technology"
      },
      {
        "year": 1870,
        "text": "The Fifteenth Amendment to the U.S. Constitution is ratified, granting voting rights regardless of race.",
        "category": "Politics"
      },
      {
        "year": 1959,
        "text": "A plane crash near Clear Lake, Iowa kills rock musicians Buddy Holly, Ritchie Valens, and The Big Bopper \u2014 later called 'The Day the Music Died.'",
        "category": "Culture"
      },
      {
        "year": 1966,
        "text": "The Soviet spacecraft Luna 9 achieves the first soft landing on the Moon.",
        "category": "Science"
      }
    ],
    "births": [
      {
        "year": 1809,
        "name": "Felix Mendelssohn",
        "desc": "German Romantic composer"
      },
      {
        "year": 1894,
        "name": "Norman Rockwell",
        "desc": "American painter known for depicting everyday American life"
      }
    ],
    "deaths": [
      {
        "year": 1468,
        "name": "Johannes Gutenberg",
        "desc": "Inventor of the movable-type printing press"
      }
    ],
    "fact": "Buddy Holly was only 22 years old when he died on this day. In his brief career of less than two years, he recorded songs that influenced the Beatles, the Rolling Stones, and virtually every rock band that followed."
  },
  "2-4": {
    "events": [
      {
        "year": 1789,
        "text": "George Washington is unanimously elected as the first President of the United States by the Electoral College.",
        "category": "Politics"
      },
      {
        "year": 1861,
        "text": "Delegates from six southern states meet in Montgomery, Alabama to form the Confederate States of America.",
        "category": "Politics"
      },
      {
        "year": 2004,
        "text": "Mark Zuckerberg launches 'TheFacebook' from his Harvard University dorm room.",
        "category": "Technology"
      },
      {
        "year": 1945,
        "text": "The Yalta Conference begins with Roosevelt, Churchill, and Stalin meeting to plan the postwar world.",
        "category": "War"
      }
    ],
    "births": [
      {
        "year": 1902,
        "name": "Charles Lindbergh",
        "desc": "Aviator who made the first solo transatlantic flight"
      },
      {
        "year": 1913,
        "name": "Rosa Parks",
        "desc": "Civil rights activist known as the mother of the freedom movement"
      }
    ],
    "deaths": [],
    "fact": "When Zuckerberg launched Facebook on this day, it was restricted to Harvard students. Within 24 hours, over 1,200 students had signed up. Within two weeks, half of Harvard's undergraduates had created profiles."
  },
  "2-5": {
    "events": [
      {
        "year": 1631,
        "text": "Roger Williams arrives in Boston, where he would eventually found Rhode Island on principles of religious freedom.",
        "category": "Politics"
      },
      {
        "year": 1917,
        "text": "The United States Congress overrides President Wilson's veto to pass an immigration act that includes a literacy test.",
        "category": "Politics"
      },
      {
        "year": 1958,
        "text": "A hydrogen bomb is lost off the coast of Savannah, Georgia after a mid-air collision. It has never been found.",
        "category": "War"
      },
      {
        "year": 1971,
        "text": "Apollo 14 astronaut Alan Shepard becomes the first person to hit a golf ball on the Moon.",
        "category": "Science"
      }
    ],
    "births": [
      {
        "year": 1914,
        "name": "William S. Burroughs",
        "desc": "American Beat Generation author"
      },
      {
        "year": 1934,
        "name": "Hank Aaron",
        "desc": "Baseball legend who broke Babe Ruth's home run record"
      }
    ],
    "deaths": [],
    "fact": "The hydrogen bomb lost off Georgia's coast on this day in 1958 is known as the Tybee Island bomb. It contains 400 times the explosive power of the Hiroshima bomb and remains on the ocean floor to this day."
  },
  "2-6": {
    "events": [
      {
        "year": 1778,
        "text": "France signs a Treaty of Alliance with the United States during the American Revolution, becoming the first country to recognize American independence.",
        "category": "War"
      },
      {
        "year": 1820,
        "text": "The first organized immigration of freed African Americans to Africa begins, leading to the founding of Liberia.",
        "category": "Politics"
      },
      {
        "year": 1952,
        "text": "Elizabeth II becomes Queen of the United Kingdom upon the death of her father, King George VI.",
        "category": "Politics"
      },
      {
        "year": 1958,
        "text": "A plane crash at Munich Airport kills 23 people, including eight Manchester United footballers in the Munich air disaster.",
        "category": "Disaster"
      }
    ],
    "births": [
      {
        "year": 1756,
        "name": "Aaron Burr",
        "desc": "Third Vice President of the United States"
      },
      {
        "year": 1895,
        "name": "Babe Ruth",
        "desc": "Legendary baseball player, the Sultan of Swat"
      }
    ],
    "deaths": [
      {
        "year": 1952,
        "name": "King George VI",
        "desc": "King of the United Kingdom during World War II"
      }
    ],
    "fact": "Babe Ruth, born on this day, grew up in a Baltimore orphanage and reform school. He was so dominant that the Yankees' stadium, opened in 1923, was nicknamed 'The House That Ruth Built.'"
  },
  "2-7": {
    "events": [
      {
        "year": 1497,
        "text": "Followers of the monk Savonarola collect and burn thousands of objects including cosmetics, art, and books in Florence's 'Bonfire of the Vanities.'",
        "category": "Culture"
      },
      {
        "year": 1812,
        "text": "The most severe of the New Madrid earthquakes strikes the central United States, causing the Mississippi River to flow backwards temporarily.",
        "category": "Nature"
      },
      {
        "year": 1940,
        "text": "Walt Disney's Pinocchio premieres in New York City.",
        "category": "Culture"
      },
      {
        "year": 1964,
        "text": "The Beatles arrive at John F. Kennedy Airport for their first visit to the United States, greeted by 3,000 screaming fans.",
        "category": "Culture"
      }
    ],
    "births": [
      {
        "year": 1478,
        "name": "Thomas More",
        "desc": "English statesman and author of Utopia"
      },
      {
        "year": 1812,
        "name": "Charles Dickens",
        "desc": "Victorian novelist who created Scrooge, Oliver Twist, and David Copperfield"
      }
    ],
    "deaths": [],
    "fact": "Charles Dickens, born on this day, was so popular that crowds in New York harbor shouted to arriving ships: 'Is Little Nell dead?' \u2014 desperate to learn the fate of a character in his serialized novel The Old Curiosity Shop."
  },
  "2-8": {
    "events": [
      {
        "year": 1587,
        "text": "Mary Queen of Scots is executed at Fotheringhay Castle after 19 years of imprisonment by her cousin Elizabeth I.",
        "category": "Politics"
      },
      {
        "year": 1910,
        "text": "The Boy Scouts of America is incorporated by William Boyce.",
        "category": "Culture"
      },
      {
        "year": 1924,
        "text": "The first execution by gas chamber takes place in the United States at the Nevada State Prison.",
        "category": "Politics"
      },
      {
        "year": 1969,
        "text": "The last issue of The Saturday Evening Post is published after 147 years of continuous publication.",
        "category": "Culture"
      }
    ],
    "births": [
      {
        "year": 1820,
        "name": "William Tecumseh Sherman",
        "desc": "Union general known for his March to the Sea"
      },
      {
        "year": 1828,
        "name": "Jules Verne",
        "desc": "French novelist known as the father of science fiction"
      }
    ],
    "deaths": [
      {
        "year": 1587,
        "name": "Mary Queen of Scots",
        "desc": "Queen of Scotland from 1542 to 1567"
      }
    ],
    "fact": "Jules Verne, born on this day, predicted submarines, space travel, and video conferencing over a century before they existed. When asked about his accuracy, he credited it to reading every scientific journal he could find."
  },
  "2-9": {
    "events": [
      {
        "year": 1825,
        "text": "The U.S. House of Representatives elects John Quincy Adams as president after no candidate wins an Electoral College majority.",
        "category": "Politics"
      },
      {
        "year": 1870,
        "text": "The U.S. National Weather Service is established under the Army Signal Corps.",
        "category": "Science"
      },
      {
        "year": 1950,
        "text": "Senator Joseph McCarthy claims to have a list of 205 communists working in the State Department, launching the Red Scare.",
        "category": "Politics"
      },
      {
        "year": 1964,
        "text": "The Beatles make their first appearance on The Ed Sullivan Show, watched by 73 million Americans.",
        "category": "Culture"
      }
    ],
    "births": [
      {
        "year": 1773,
        "name": "William Henry Harrison",
        "desc": "9th President who died 31 days after inauguration"
      },
      {
        "year": 1943,
        "name": "Joe Pesci",
        "desc": "Academy Award-winning American actor"
      }
    ],
    "deaths": [],
    "fact": "The Beatles' appearance on Ed Sullivan on this day drew 73 million viewers \u2014 34% of the entire U.S. population. Police departments across the country reported that crime dropped significantly during the broadcast."
  },
  "2-10": {
    "events": [
      {
        "year": 1763,
        "text": "The Treaty of Paris is signed, ending the French and Indian War and giving Britain control of Canada.",
        "category": "War"
      },
      {
        "year": 1840,
        "text": "Queen Victoria marries Prince Albert of Saxe-Coburg, beginning one of history's great love stories.",
        "category": "Culture"
      },
      {
        "year": 1942,
        "text": "The first gold record is awarded to Glenn Miller for 'Chattanooga Choo Choo,' which sold 1.2 million copies.",
        "category": "Culture"
      },
      {
        "year": 1996,
        "text": "IBM's Deep Blue defeats world chess champion Garry Kasparov in a game for the first time.",
        "category": "Technology"
      }
    ],
    "births": [
      {
        "year": 1893,
        "name": "Jimmy Durante",
        "desc": "American comedian and entertainer"
      },
      {
        "year": 1898,
        "name": "Bertolt Brecht",
        "desc": "Influential German playwright and theater director"
      }
    ],
    "deaths": [],
    "fact": "Queen Victoria's marriage to Prince Albert on this day helped establish many modern wedding traditions. She wore a white dress, which popularized the tradition of white wedding gowns \u2014 before that, brides simply wore their best dress."
  },
  "2-11": {
    "events": [
      {
        "year": 1531,
        "text": "King Henry VIII is recognized as supreme head of the Church of England, breaking with the Catholic Church.",
        "category": "Politics"
      },
      {
        "year": 1809,
        "text": "Robert Fulton patents the steamboat, revolutionizing river transportation in America.",
        "category": "Technology"
      },
      {
        "year": 1929,
        "text": "The Lateran Treaty is signed, creating Vatican City as an independent state within Rome.",
        "category": "Politics"
      },
      {
        "year": 1990,
        "text": "Nelson Mandela is released from Victor Verster Prison after 27 years of imprisonment.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1847,
        "name": "Thomas Edison",
        "desc": "Inventor who held 1,093 patents including the phonograph and practical light bulb"
      },
      {
        "year": 1926,
        "name": "Leslie Nielsen",
        "desc": "Canadian actor known for Airplane! and The Naked Gun"
      }
    ],
    "deaths": [],
    "fact": "When Mandela walked out of prison on this day, he had been locked up for 10,052 days. He later said: 'As I walked out the door toward the gate that would lead to my freedom, I knew if I didn't leave my bitterness behind, I'd still be in prison.'"
  },
  "2-12": {
    "events": [
      {
        "year": 1554,
        "text": "Lady Jane Grey, the 'Nine Days Queen,' is executed at the Tower of London at age 16.",
        "category": "Politics"
      },
      {
        "year": 1809,
        "text": "Both Abraham Lincoln and Charles Darwin are born on the same day, thousands of miles apart.",
        "category": "Culture"
      },
      {
        "year": 1909,
        "text": "The National Association for the Advancement of Colored People (NAACP) is founded.",
        "category": "Politics"
      },
      {
        "year": 1924,
        "text": "George Gershwin's Rhapsody in Blue premieres at Aeolian Hall in New York City.",
        "category": "Culture"
      }
    ],
    "births": [
      {
        "year": 1809,
        "name": "Abraham Lincoln",
        "desc": "16th President who preserved the Union and abolished slavery"
      },
      {
        "year": 1809,
        "name": "Charles Darwin",
        "desc": "Naturalist who developed the theory of evolution by natural selection"
      }
    ],
    "deaths": [
      {
        "year": 1554,
        "name": "Lady Jane Grey",
        "desc": "Queen of England for nine days"
      }
    ],
    "fact": "Lincoln and Darwin, both born on this exact day in 1809, reshaped the world in completely different ways. Lincoln freed millions from slavery while Darwin revolutionized our understanding of life itself."
  },
  "2-13": {
    "events": [
      {
        "year": 1633,
        "text": "Galileo Galilei arrives in Rome for his trial before the Inquisition for advocating that the Earth revolves around the Sun.",
        "category": "Science"
      },
      {
        "year": 1920,
        "text": "The League of Nations recognizes the perpetual neutrality of Switzerland.",
        "category": "Politics"
      },
      {
        "year": 1945,
        "text": "Allied bombers begin the devastating firebombing of Dresden, Germany, creating a firestorm that kills an estimated 25,000 people.",
        "category": "War"
      },
      {
        "year": 2000,
        "text": "The last original Peanuts comic strip by Charles Schulz is published, one day after his death.",
        "category": "Culture"
      }
    ],
    "births": [
      {
        "year": 1743,
        "name": "Joseph Banks",
        "desc": "English naturalist who accompanied Captain Cook"
      },
      {
        "year": 1933,
        "name": "Kim Novak",
        "desc": "American actress known for Vertigo"
      }
    ],
    "deaths": [
      {
        "year": 2000,
        "name": "Charles M. Schulz",
        "desc": "Creator of the Peanuts comic strip"
      }
    ],
    "fact": "Charles Schulz drew every single Peanuts strip himself over 50 years \u2014 nearly 18,000 strips. The last one ran on this day in 2000, the morning after his death, as if he had timed it perfectly."
  },
  "2-14": {
    "events": [
      {
        "year": 1929,
        "text": "The Saint Valentine's Day Massacre occurs in Chicago as seven members of Bugs Moran's gang are gunned down.",
        "category": "Crime"
      },
      {
        "year": 1990,
        "text": "The Voyager 1 spacecraft takes the famous 'Pale Blue Dot' photograph of Earth from 3.7 billion miles away.",
        "category": "Science"
      },
      {
        "year": 2005,
        "text": "YouTube is registered as a domain name by former PayPal employees Chad Hurley, Steve Chen, and Jawed Karim.",
        "category": "Technology"
      },
      {
        "year": 1876,
        "text": "Alexander Graham Bell and Elisha Gray both file patents for the telephone on the same day. Bell's was filed first.",
        "category": "Technology"
      }
    ],
    "births": [
      {
        "year": 1894,
        "name": "Jack Benny",
        "desc": "Beloved American comedian known for his timing"
      },
      {
        "year": 1913,
        "name": "Jimmy Hoffa",
        "desc": "Controversial American labor union leader who vanished in 1975"
      }
    ],
    "deaths": [],
    "fact": "Carl Sagan requested the 'Pale Blue Dot' image taken on this day. Seeing Earth as a tiny speck, he wrote: 'Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives.'"
  },
  "2-15": {
    "events": [
      {
        "year": 1564,
        "text": "Galileo Galilei is born in Pisa, Italy. He would become known as the father of modern observational astronomy.",
        "category": "Science"
      },
      {
        "year": 1898,
        "text": "The USS Maine explodes and sinks in Havana Harbor, killing 266 crew members and leading to the Spanish-American War.",
        "category": "War"
      },
      {
        "year": 1965,
        "text": "Canada adopts the maple leaf flag, replacing the old Red Ensign.",
        "category": "Politics"
      },
      {
        "year": 2013,
        "text": "A meteor explodes over Chelyabinsk, Russia, injuring over 1,500 people with its shockwave.",
        "category": "Nature"
      }
    ],
    "births": [
      {
        "year": 1564,
        "name": "Galileo Galilei",
        "desc": "Italian astronomer who championed heliocentrism"
      },
      {
        "year": 1820,
        "name": "Susan B. Anthony",
        "desc": "Pioneer of the women's suffrage movement"
      }
    ],
    "deaths": [],
    "fact": "The Chelyabinsk meteor that exploded over Russia on this day in 2013 was only 20 meters wide but released energy equivalent to 500 kilotons of TNT \u2014 about 30 times the Hiroshima bomb. It was the largest known meteor to enter Earth's atmosphere since 1908."
  },
  "2-16": {
    "events": [
      {
        "year": 1659,
        "text": "The first known check is written, drawn on a London bank.",
        "category": "Culture"
      },
      {
        "year": 1923,
        "text": "Howard Carter opens the sealed burial chamber of Pharaoh Tutankhamun for the first time in over 3,000 years.",
        "category": "Exploration"
      },
      {
        "year": 1959,
        "text": "Fidel Castro becomes Premier of Cuba after overthrowing the Batista government.",
        "category": "Politics"
      },
      {
        "year": 1968,
        "text": "The first 9-1-1 emergency call is made in Haleyville, Alabama.",
        "category": "Technology"
      }
    ],
    "births": [
      {
        "year": 1838,
        "name": "Henry Adams",
        "desc": "American historian and descendant of two presidents"
      },
      {
        "year": 1958,
        "name": "Ice-T",
        "desc": "Rapper and actor known for Law & Order: SVU"
      }
    ],
    "deaths": [],
    "fact": "When Howard Carter first peered into Tutankhamun's tomb on this day, his sponsor Lord Carnarvon asked 'Can you see anything?' Carter replied: 'Yes, wonderful things.' The tomb contained over 5,000 artifacts including the famous golden death mask."
  },
  "2-17": {
    "events": [
      {
        "year": 1600,
        "text": "Philosopher Giordano Bruno is burned at the stake in Rome for heresy, including his belief in an infinite universe with many worlds.",
        "category": "Science"
      },
      {
        "year": 1801,
        "text": "Thomas Jefferson is elected President by the House of Representatives after an Electoral College tie with Aaron Burr.",
        "category": "Politics"
      },
      {
        "year": 1867,
        "text": "The first ship passes through the Suez Canal.",
        "category": "Technology"
      },
      {
        "year": 1972,
        "text": "The 15,007,034th Volkswagen Beetle rolls off the assembly line, breaking the production record set by the Ford Model T.",
        "category": "Technology"
      }
    ],
    "births": [
      {
        "year": 1963,
        "name": "Michael Jordan",
        "desc": "Widely regarded as the greatest basketball player of all time"
      },
      {
        "year": 1981,
        "name": "Paris Hilton",
        "desc": "American socialite and media personality"
      }
    ],
    "deaths": [
      {
        "year": 1600,
        "name": "Giordano Bruno",
        "desc": "Italian philosopher and cosmological theorist"
      }
    ],
    "fact": "Michael Jordan, born on this day, was cut from his high school varsity basketball team as a sophomore. He later said it was the best thing that ever happened to him because it motivated him to work harder than anyone else."
  },
  "2-18": {
    "events": [
      {
        "year": 1564,
        "text": "Michelangelo dies in Rome at age 88, leaving behind masterworks including the Sistine Chapel ceiling and the statue of David.",
        "category": "Culture"
      },
      {
        "year": 1885,
        "text": "Mark Twain publishes Adventures of Huckleberry Finn, which Ernest Hemingway later called the origin of all modern American literature.",
        "category": "Culture"
      },
      {
        "year": 1930,
        "text": "Clyde Tombaugh discovers Pluto at the Lowell Observatory in Arizona.",
        "category": "Science"
      },
      {
        "year": 1977,
        "text": "The Space Shuttle Enterprise makes its first test flight, carried on the back of a Boeing 747.",
        "category": "Science"
      }
    ],
    "births": [
      {
        "year": 1745,
        "name": "Alessandro Volta",
        "desc": "Italian physicist who invented the electric battery"
      },
      {
        "year": 1954,
        "name": "John Travolta",
        "desc": "American actor and cultural icon"
      }
    ],
    "deaths": [
      {
        "year": 1564,
        "name": "Michelangelo",
        "desc": "Renaissance artist, sculptor, and architect"
      }
    ],
    "fact": "Pluto was discovered on this day by 24-year-old Clyde Tombaugh, who got the job at the observatory because he had impressed astronomers with hand-drawn sketches of Jupiter and Mars made through a homemade telescope."
  },
  "2-19": {
    "events": [
      {
        "year": 1473,
        "text": "Nicolaus Copernicus is born in Poland. He would propose that the Earth revolves around the Sun, not the other way around.",
        "category": "Science"
      },
      {
        "year": 1847,
        "text": "The first group of rescuers reaches the Donner Party, trapped by snow in the Sierra Nevada mountains since the previous October.",
        "category": "Exploration"
      },
      {
        "year": 1942,
        "text": "President Roosevelt signs Executive Order 9066, authorizing the internment of Japanese Americans during World War II.",
        "category": "War"
      },
      {
        "year": 1986,
        "text": "The Soviet Union launches the Mir space station, which would orbit Earth for 15 years.",
        "category": "Science"
      }
    ],
    "births": [
      {
        "year": 1473,
        "name": "Nicolaus Copernicus",
        "desc": "Astronomer who proposed the heliocentric model of the solar system"
      },
      {
        "year": 1940,
        "name": "Smokey Robinson",
        "desc": "Motown legend and pioneering singer-songwriter"
      }
    ],
    "deaths": [],
    "fact": "Copernicus, born on this day, delayed publishing his heliocentric theory for decades, fearing persecution. His book was finally published in 1543 \u2014 legend says he received the first printed copy on his deathbed."
  },
  "2-20": {
    "events": [
      {
        "year": 1792,
        "text": "The Postal Service Act is signed, establishing the United States Post Office as a cabinet department.",
        "category": "Politics"
      },
      {
        "year": 1962,
        "text": "John Glenn becomes the first American to orbit Earth, circling the planet three times aboard Friendship 7.",
        "category": "Science"
      },
      {
        "year": 1872,
        "text": "The Metropolitan Museum of Art opens in New York City.",
        "category": "Culture"
      },
      {
        "year": 2003,
        "text": "A fire at a nightclub in Rhode Island kills 100 people when pyrotechnics ignite soundproofing foam.",
        "category": "Disaster"
      }
    ],
    "births": [
      {
        "year": 1902,
        "name": "Ansel Adams",
        "desc": "American photographer known for his black-and-white landscapes of the American West"
      },
      {
        "year": 1967,
        "name": "Kurt Cobain",
        "desc": "Lead singer and guitarist of Nirvana"
      }
    ],
    "deaths": [],
    "fact": "When John Glenn orbited Earth on this day, he reported seeing mysterious glowing particles outside his capsule. NASA initially feared something was wrong, but they turned out to be frost flakes from the spacecraft sparkling in the sunlight."
  },
  "2-21": {
    "events": [
      {
        "year": 1848,
        "text": "Karl Marx and Friedrich Engels publish The Communist Manifesto in London.",
        "category": "Politics"
      },
      {
        "year": 1878,
        "text": "The first telephone directory is published in New Haven, Connecticut, listing 50 subscribers.",
        "category": "Technology"
      },
      {
        "year": 1965,
        "text": "Malcolm X is assassinated while giving a speech at the Audubon Ballroom in Manhattan.",
        "category": "Politics"
      },
      {
        "year": 1972,
        "text": "President Nixon arrives in China for a historic week-long visit, reopening relations between the two countries.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1903,
        "name": "Ana\u00efs Nin",
        "desc": "French-Cuban American author known for her diaries"
      },
      {
        "year": 1946,
        "name": "Alan Rickman",
        "desc": "British actor known for Die Hard and Harry Potter"
      }
    ],
    "deaths": [
      {
        "year": 1965,
        "name": "Malcolm X",
        "desc": "Influential African American civil rights leader"
      }
    ],
    "fact": "The first phone directory, published on this day, was a single card listing 50 names with no numbers \u2014 operators simply connected calls by name. Today there are over 5 billion phone numbers in use worldwide."
  },
  "2-22": {
    "events": [
      {
        "year": 1630,
        "text": "Popcorn is introduced to English colonists at their first Thanksgiving dinner by Native American Quadequina.",
        "category": "Culture"
      },
      {
        "year": 1819,
        "text": "Spain cedes Florida to the United States through the Adams-On\u00eds Treaty.",
        "category": "Politics"
      },
      {
        "year": 1879,
        "text": "Frank Woolworth opens his first five-cent store in Utica, New York. It fails within months, but his next store succeeds.",
        "category": "Culture"
      },
      {
        "year": 1997,
        "text": "Scientists at the Roslin Institute in Scotland announce the successful cloning of Dolly the sheep.",
        "category": "Science"
      }
    ],
    "births": [
      {
        "year": 1732,
        "name": "George Washington",
        "desc": "First President of the United States and commander of the Continental Army"
      },
      {
        "year": 1857,
        "name": "Robert Baden-Powell",
        "desc": "British army officer who founded the Scout Movement"
      }
    ],
    "deaths": [],
    "fact": "George Washington, born on this day, never had wooden teeth despite the popular myth. His dentures were actually made from hippopotamus ivory, gold wire, and a combination of human and animal teeth."
  },
  "2-23": {
    "events": [
      {
        "year": 1455,
        "text": "The Gutenberg Bible is published, becoming the first major book printed with movable type in Europe.",
        "category": "Technology"
      },
      {
        "year": 1836,
        "text": "The siege of the Alamo begins in San Antonio, Texas, lasting 13 days.",
        "category": "War"
      },
      {
        "year": 1945,
        "text": "U.S. Marines raise the American flag on Mount Suribachi during the Battle of Iwo Jima, creating one of the most iconic photographs in history.",
        "category": "War"
      },
      {
        "year": 1997,
        "text": "A fire atop the Empire State Building kills one person and injures several others.",
        "category": "Disaster"
      }
    ],
    "births": [
      {
        "year": 1685,
        "name": "George Frideric Handel",
        "desc": "Baroque composer known for the Messiah"
      },
      {
        "year": 1868,
        "name": "W.E.B. Du Bois",
        "desc": "Civil rights pioneer, author, and co-founder of the NAACP"
      }
    ],
    "deaths": [],
    "fact": "The famous Iwo Jima flag-raising photo taken on this day was actually the second flag raised that day. The first, smaller flag was raised earlier but commanders wanted a larger one that could be seen from offshore."
  },
  "2-24": {
    "events": [
      {
        "year": 1582,
        "text": "Pope Gregory XIII announces the Gregorian calendar, which most of the world uses today.",
        "category": "Science"
      },
      {
        "year": 1803,
        "text": "The Supreme Court establishes the principle of judicial review in Marbury v. Madison.",
        "category": "Politics"
      },
      {
        "year": 1920,
        "text": "The Nazi Party is founded in Munich, Germany, originally called the German Workers' Party.",
        "category": "Politics"
      },
      {
        "year": 2008,
        "text": "Fidel Castro resigns as President of Cuba after nearly 50 years in power.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1786,
        "name": "Wilhelm Grimm",
        "desc": "German author, one half of the Brothers Grimm"
      },
      {
        "year": 1955,
        "name": "Steve Jobs",
        "desc": "Co-founder of Apple Inc. who revolutionized personal computing"
      }
    ],
    "deaths": [],
    "fact": "When the Gregorian calendar was adopted, 10 days had to be skipped to correct accumulated errors. In Catholic countries, the day after October 4, 1582 became October 15. Britain didn't switch until 1752."
  },
  "2-25": {
    "events": [
      {
        "year": 1570,
        "text": "Pope Pius V excommunicates Queen Elizabeth I of England.",
        "category": "Politics"
      },
      {
        "year": 1836,
        "text": "Samuel Colt receives a U.S. patent for the Colt revolver.",
        "category": "Technology"
      },
      {
        "year": 1913,
        "text": "The Sixteenth Amendment is ratified, authorizing the federal income tax in the United States.",
        "category": "Politics"
      },
      {
        "year": 1964,
        "text": "Cassius Clay defeats Sonny Liston to become heavyweight champion, then announces he has changed his name to Muhammad Ali.",
        "category": "Culture"
      }
    ],
    "births": [
      {
        "year": 1841,
        "name": "Pierre-Auguste Renoir",
        "desc": "French Impressionist painter"
      },
      {
        "year": 1943,
        "name": "George Harrison",
        "desc": "Guitarist of the Beatles"
      }
    ],
    "deaths": [],
    "fact": "When Cassius Clay beat Sonny Liston on this day, almost no one gave him a chance. Liston was so feared that only 8,297 people attended. The next day, Clay shocked the world again by announcing his conversion to Islam."
  },
  "2-26": {
    "events": [
      {
        "year": 1616,
        "text": "Galileo Galilei is formally banned by the Catholic Church from teaching or defending the view that the Earth moves around the Sun.",
        "category": "Science"
      },
      {
        "year": 1815,
        "text": "Napoleon Bonaparte escapes from exile on the island of Elba, beginning his march back to Paris.",
        "category": "War"
      },
      {
        "year": 1935,
        "text": "Adolf Hitler secretly orders the creation of the Luftwaffe, Germany's air force, in violation of the Treaty of Versailles.",
        "category": "War"
      },
      {
        "year": 1993,
        "text": "A truck bomb explodes in the parking garage of the World Trade Center in New York, killing six people.",
        "category": "War"
      }
    ],
    "births": [
      {
        "year": 1802,
        "name": "Victor Hugo",
        "desc": "French author of Les Mis\u00e9rables and The Hunchback of Notre-Dame"
      },
      {
        "year": 1928,
        "name": "Fats Domino",
        "desc": "Pioneering rock and roll musician"
      }
    ],
    "deaths": [],
    "fact": "When Napoleon escaped Elba on this day, French newspapers tracked his progress with increasingly respectful headlines. They went from 'The Corsican Monster Has Escaped' to 'His Imperial Majesty Enters Paris' in just three weeks."
  },
  "2-27": {
    "events": [
      {
        "year": 1700,
        "text": "The island of New Britain is discovered by English explorer William Dampier.",
        "category": "Exploration"
      },
      {
        "year": 1827,
        "text": "The first Mardi Gras celebration in New Orleans features students wearing costumes and dancing through the streets.",
        "category": "Culture"
      },
      {
        "year": 1933,
        "text": "The German Reichstag building is set on fire, an event Hitler uses to consolidate power.",
        "category": "Politics"
      },
      {
        "year": 1991,
        "text": "President George H.W. Bush declares a ceasefire in the Gulf War after 100 hours of ground combat.",
        "category": "War"
      }
    ],
    "births": [
      {
        "year": 1807,
        "name": "Henry Wadsworth Longfellow",
        "desc": "American poet known for 'Paul Revere's Ride'"
      },
      {
        "year": 1902,
        "name": "John Steinbeck",
        "desc": "Nobel Prize-winning author of The Grapes of Wrath"
      }
    ],
    "deaths": [],
    "fact": "The Reichstag fire on this day gave Hitler the pretext to suspend civil liberties. A young Dutch communist was arrested and convicted, but historians still debate whether the Nazis themselves helped start the blaze."
  },
  "2-28": {
    "events": [
      {
        "year": 1784,
        "text": "John Wesley charters the Methodist Church, ordaining ministers for work in the American colonies.",
        "category": "Culture"
      },
      {
        "year": 1849,
        "text": "The first shipload of gold seekers arrives in San Francisco during the California Gold Rush.",
        "category": "Exploration"
      },
      {
        "year": 1953,
        "text": "James Watson and Francis Crick announce they have discovered the double-helix structure of DNA.",
        "category": "Science"
      },
      {
        "year": 1993,
        "text": "The Bureau of Alcohol, Tobacco, and Firearms raids the Branch Davidian compound in Waco, Texas, beginning a 51-day standoff.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1533,
        "name": "Michel de Montaigne",
        "desc": "French philosopher who pioneered the essay form"
      },
      {
        "year": 1940,
        "name": "Mario Andretti",
        "desc": "Italian-American racing legend"
      }
    ],
    "deaths": [],
    "fact": "Watson and Crick's discovery of DNA's structure on this day was built on X-ray crystallography work by Rosalind Franklin, whose contribution was largely unrecognized during her lifetime. She died of cancer at 37, likely caused by radiation exposure."
  },
  "2-29": {
    "events": [
      {
        "year": 1504,
        "text": "Christopher Columbus uses a lunar eclipse to convince Jamaican natives to provide him with supplies.",
        "category": "Exploration"
      },
      {
        "year": 1692,
        "text": "The first warrants are issued in the Salem witch trials in Massachusetts.",
        "category": "Politics"
      },
      {
        "year": 1940,
        "text": "Hattie McDaniel becomes the first African American to win an Academy Award, for Gone with the Wind.",
        "category": "Culture"
      },
      {
        "year": 2004,
        "text": "A coup d'\u00e9tat in Haiti forces President Jean-Bertrand Aristide to resign and flee the country.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1468,
        "name": "Pope Paul III",
        "desc": "Pope who excommunicated Henry VIII and convened the Council of Trent"
      },
      {
        "year": 1916,
        "name": "Dinah Shore",
        "desc": "American singer and television star"
      }
    ],
    "deaths": [],
    "fact": "People born on February 29 are called 'leaplings.' The odds of being born on Leap Day are about 1 in 1,461. There are approximately 5 million leaplings worldwide, and many celebrate their birthday on either February 28 or March 1."
  },
  "3-1": {
    "events": [
      {
        "year": 1781,
        "text": "The Articles of Confederation are ratified, creating the first government of the United States.",
        "category": "Politics"
      },
      {
        "year": 1867,
        "text": "Nebraska becomes the 37th state admitted to the Union.",
        "category": "Politics"
      },
      {
        "year": 1872,
        "text": "Yellowstone becomes the world's first national park, signed into law by President Ulysses S. Grant.",
        "category": "Nature"
      },
      {
        "year": 1961,
        "text": "President Kennedy establishes the Peace Corps by executive order.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1810,
        "name": "Fr\u00e9d\u00e9ric Chopin",
        "desc": "Polish composer and pianist of the Romantic era"
      },
      {
        "year": 1914,
        "name": "Ralph Ellison",
        "desc": "American author of Invisible Man"
      }
    ],
    "deaths": [],
    "fact": "Yellowstone, established as the first national park on this day, sits on top of one of the world's largest active volcanic systems. The park's famous geysers and hot springs are powered by a massive magma chamber beneath the surface."
  },
  "3-14": {
    "events": [
      {
        "year": 1794,
        "text": "Eli Whitney receives a patent for the cotton gin, which revolutionizes cotton production but also entrenches slavery in the American South.",
        "category": "Technology"
      },
      {
        "year": 1879,
        "text": "Albert Einstein is born in Ulm, Germany.",
        "category": "Science"
      },
      {
        "year": 1883,
        "text": "Karl Marx dies in London at age 64.",
        "category": "Politics"
      },
      {
        "year": 2018,
        "text": "Stephen Hawking dies at age 76 \u2014 exactly 139 years after Einstein's birth.",
        "category": "Science"
      }
    ],
    "births": [
      {
        "year": 1879,
        "name": "Albert Einstein",
        "desc": "Theoretical physicist who developed the theory of relativity"
      },
      {
        "year": 1933,
        "name": "Michael Caine",
        "desc": "Academy Award-winning British actor"
      }
    ],
    "deaths": [
      {
        "year": 1883,
        "name": "Karl Marx",
        "desc": "German philosopher and author of Das Kapital"
      },
      {
        "year": 2018,
        "name": "Stephen Hawking",
        "desc": "Theoretical physicist and cosmologist"
      }
    ],
    "fact": "March 14 is celebrated as Pi Day (3/14) because pi begins with 3.14. In 2015, the date was especially significant: 3/14/15 at 9:26:53 matched pi to 10 digits (3.141592653)."
  },
  "4-15": {
    "events": [
      {
        "year": 1912,
        "text": "The RMS Titanic sinks in the North Atlantic after striking an iceberg, killing more than 1,500 of the 2,224 passengers and crew.",
        "category": "Disaster"
      },
      {
        "year": 1865,
        "text": "President Abraham Lincoln dies after being shot by John Wilkes Booth at Ford's Theatre the previous evening.",
        "category": "Politics"
      },
      {
        "year": 1947,
        "text": "Jackie Robinson breaks Major League Baseball's color barrier, debuting with the Brooklyn Dodgers at Ebbets Field.",
        "category": "Culture"
      },
      {
        "year": 1989,
        "text": "A stampede at Hillsborough Stadium in Sheffield, England kills 97 Liverpool football fans.",
        "category": "Disaster"
      }
    ],
    "births": [
      {
        "year": 1452,
        "name": "Leonardo da Vinci",
        "desc": "Italian Renaissance polymath, painter of the Mona Lisa and The Last Supper"
      },
      {
        "year": 1990,
        "name": "Emma Watson",
        "desc": "British actress known for Hermione Granger in Harry Potter"
      }
    ],
    "deaths": [
      {
        "year": 1865,
        "name": "Abraham Lincoln",
        "desc": "16th President of the United States"
      }
    ],
    "fact": "The Titanic had only 20 lifeboats \u2014 enough for about one-third of its passengers. After the disaster, maritime law was changed to require sufficient lifeboats for every person aboard a vessel."
  },
  "5-1": {
    "events": [
      {
        "year": 1707,
        "text": "The Act of Union joins England and Scotland to create the Kingdom of Great Britain.",
        "category": "Politics"
      },
      {
        "year": 1840,
        "text": "The Penny Black, the world's first adhesive postage stamp, is issued in the United Kingdom.",
        "category": "Technology"
      },
      {
        "year": 1931,
        "text": "The Empire State Building opens in New York City as the tallest building in the world.",
        "category": "Technology"
      },
      {
        "year": 1960,
        "text": "A U.S. U-2 spy plane piloted by Francis Gary Powers is shot down over the Soviet Union.",
        "category": "War"
      }
    ],
    "births": [
      {
        "year": 1769,
        "name": "Duke of Wellington",
        "desc": "British military leader who defeated Napoleon at Waterloo"
      },
      {
        "year": 1916,
        "name": "Glenn Ford",
        "desc": "Canadian-American actor of Hollywood's Golden Age"
      }
    ],
    "deaths": [],
    "fact": "The Empire State Building, which opened on this day, was built in just 410 days during the Great Depression. At peak construction, the builders were adding 4.5 floors per week."
  },
  "5-18": {
    "events": [
      {
        "year": 1980,
        "text": "Mount St. Helens erupts catastrophically in Washington state, killing 57 people, flattening 230 square miles of forest, and sending an ash column 15 miles into the atmosphere.",
        "category": "Nature"
      },
      {
        "year": 1896,
        "text": "The U.S. Supreme Court rules in Plessy v. Ferguson, establishing the 'separate but equal' doctrine that would legalize racial segregation for nearly 60 years.",
        "category": "Politics"
      },
      {
        "year": 1910,
        "text": "Earth passes through the tail of Halley's Comet, causing widespread public panic despite astronomers' reassurances.",
        "category": "Science"
      },
      {
        "year": 1944,
        "text": "The Battle of Monte Cassino ends as Allied forces finally capture the strategic hilltop monastery in Italy.",
        "category": "War"
      },
      {
        "year": 1652,
        "text": "Rhode Island enacts the first law in North America making slavery illegal, though the law was largely unenforced.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1920,
        "name": "Pope John Paul II",
        "desc": "Head of the Catholic Church from 1978 to 2005"
      },
      {
        "year": 1946,
        "name": "Reggie Jackson",
        "desc": "Baseball Hall of Famer nicknamed 'Mr. October'"
      },
      {
        "year": 1048,
        "name": "Omar Khayyam",
        "desc": "Persian mathematician, astronomer, and poet"
      }
    ],
    "deaths": [
      {
        "year": 1911,
        "name": "Gustav Mahler",
        "desc": "Austrian composer and conductor"
      }
    ],
    "fact": "The 1980 eruption of Mount St. Helens released energy equivalent to 27,000 Hiroshima-sized atomic bombs. The lateral blast traveled at 670 mph and the mountain lost 1,314 feet of elevation in a single moment."
  },
  "5-19": {
    "events": [
      {
        "year": 1536,
        "text": "Anne Boleyn, the second wife of King Henry VIII, is beheaded at the Tower of London after being convicted of treason and adultery.",
        "category": "Politics"
      },
      {
        "year": 1588,
        "text": "The Spanish Armada sets sail from Lisbon with 130 ships to invade England, in what would become one of history's most famous naval campaigns.",
        "category": "War"
      },
      {
        "year": 1962,
        "text": "Marilyn Monroe sings 'Happy Birthday' to President John F. Kennedy at Madison Square Garden in a breathy, iconic performance.",
        "category": "Culture"
      },
      {
        "year": 1997,
        "text": "The Sierra Club votes to reverse its neutral position on immigration, sparking a debate about environmentalism and population growth.",
        "category": "Politics"
      },
      {
        "year": 2018,
        "text": "Prince Harry and Meghan Markle are married at St George's Chapel, Windsor Castle, watched by nearly 2 billion people worldwide.",
        "category": "Culture"
      }
    ],
    "births": [
      {
        "year": 1925,
        "name": "Malcolm X",
        "desc": "African American civil rights leader"
      },
      {
        "year": 1890,
        "name": "Ho Chi Minh",
        "desc": "Vietnamese revolutionary leader and president"
      }
    ],
    "deaths": [
      {
        "year": 1536,
        "name": "Anne Boleyn",
        "desc": "Queen of England, second wife of Henry VIII"
      },
      {
        "year": 1795,
        "name": "James Boswell",
        "desc": "Scottish biographer known for The Life of Samuel Johnson"
      }
    ],
    "fact": "Anne Boleyn's execution on this day was carried out by an expert swordsman specially brought from Calais, France. It was considered a merciful alternative to the axe. She reportedly said: 'I heard say the executioner was very good, and I have a little neck.'"
  },
  "7-4": {
    "events": [
      {
        "year": 1776,
        "text": "The Continental Congress formally adopts the Declaration of Independence, declaring the thirteen American colonies free from British rule.",
        "category": "Politics"
      },
      {
        "year": 1826,
        "text": "Both John Adams and Thomas Jefferson die on the same day, exactly 50 years after the Declaration of Independence.",
        "category": "Politics"
      },
      {
        "year": 1884,
        "text": "The Statue of Liberty is formally presented to the United States by France in a ceremony in Paris.",
        "category": "Culture"
      },
      {
        "year": 1997,
        "text": "NASA's Pathfinder spacecraft lands on Mars, deploying the Sojourner rover.",
        "category": "Science"
      }
    ],
    "births": [
      {
        "year": 1872,
        "name": "Calvin Coolidge",
        "desc": "30th President of the United States"
      },
      {
        "year": 1927,
        "name": "Neil Simon",
        "desc": "Prolific American playwright"
      }
    ],
    "deaths": [
      {
        "year": 1826,
        "name": "Thomas Jefferson",
        "desc": "3rd President of the United States"
      },
      {
        "year": 1826,
        "name": "John Adams",
        "desc": "2nd President of the United States"
      }
    ],
    "fact": "John Adams' last words were reportedly 'Thomas Jefferson survives.' He did not know that Jefferson had died just hours earlier on the same day \u2014 July 4, 1826, the 50th anniversary of American independence."
  },
  "7-20": {
    "events": [
      {
        "year": 1969,
        "text": "Apollo 11 astronauts Neil Armstrong and Buzz Aldrin become the first humans to walk on the Moon.",
        "category": "Science"
      },
      {
        "year": 1944,
        "text": "German officers attempt to assassinate Adolf Hitler with a bomb in the July 20 plot. Hitler survives with minor injuries.",
        "category": "War"
      },
      {
        "year": 1976,
        "text": "NASA's Viking 1 lander touches down on Mars, becoming the first U.S. spacecraft to land on the Red Planet.",
        "category": "Science"
      },
      {
        "year": 1871,
        "text": "British Columbia joins the Canadian Confederation.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1919,
        "name": "Edmund Hillary",
        "desc": "New Zealand mountaineer, first to summit Mount Everest"
      }
    ],
    "deaths": [
      {
        "year": 1973,
        "name": "Bruce Lee",
        "desc": "Martial artist and cultural icon"
      }
    ],
    "fact": "Neil Armstrong's first words on the Moon were heard by 600 million people \u2014 the largest TV audience for a live broadcast at that time. The Apollo 11 computer that guided them had less processing power than a modern calculator."
  },
  "9-11": {
    "events": [
      {
        "year": 2001,
        "text": "Coordinated terrorist attacks strike the United States as hijacked planes hit the World Trade Center and the Pentagon, killing nearly 3,000 people.",
        "category": "War"
      },
      {
        "year": 1973,
        "text": "A CIA-backed military coup in Chile overthrows democratically elected President Salvador Allende.",
        "category": "Politics"
      },
      {
        "year": 1997,
        "text": "NASA's Mars Global Surveyor enters orbit around Mars.",
        "category": "Science"
      },
      {
        "year": 1789,
        "text": "Alexander Hamilton is appointed as the first Secretary of the Treasury.",
        "category": "Politics"
      }
    ],
    "births": [
      {
        "year": 1862,
        "name": "O. Henry",
        "desc": "American short story writer known for surprise endings"
      },
      {
        "year": 1917,
        "name": "Ferdinand Marcos",
        "desc": "President of the Philippines from 1965 to 1986"
      }
    ],
    "deaths": [],
    "fact": "The twin towers of the World Trade Center had their own zip code: 10048. Approximately 50,000 people worked in the complex daily, and another 200,000 passed through as visitors."
  },
  "12-25": {
    "events": [
      {
        "year": 800,
        "text": "Pope Leo III crowns Charlemagne as Emperor of the Romans at St. Peter's Basilica, reviving the Western Roman Empire.",
        "category": "Politics"
      },
      {
        "year": 1776,
        "text": "George Washington and the Continental Army cross the Delaware River to surprise Hessian forces at Trenton.",
        "category": "War"
      },
      {
        "year": 1991,
        "text": "Soviet President Mikhail Gorbachev resigns, and the Soviet Union is officially dissolved.",
        "category": "Politics"
      },
      {
        "year": 1914,
        "text": "British and German soldiers hold an unofficial Christmas truce on the Western Front, exchanging gifts and playing football.",
        "category": "War"
      }
    ],
    "births": [
      {
        "year": 1642,
        "name": "Isaac Newton",
        "desc": "English physicist who described universal gravitation"
      },
      {
        "year": 1899,
        "name": "Humphrey Bogart",
        "desc": "Iconic American film actor"
      }
    ],
    "deaths": [
      {
        "year": 1983,
        "name": "Joan Mir\u00f3",
        "desc": "Spanish painter and sculptor"
      },
      {
        "year": 1977,
        "name": "Charlie Chaplin",
        "desc": "Legendary silent film comedian"
      }
    ],
    "fact": "The 1914 Christmas Truce saw enemies leaving their trenches to meet in no man's land. They exchanged cigarettes, sang carols, and in some areas played football. The next day, they went back to killing each other."
  }
};


// Category colors and labels
const CATEGORIES = ["Science", "Politics", "Culture", "Technology", "War", "Nature", "Exploration", "Disaster"];

// Curated pool of realistic historical event templates
const EVENT_TEMPLATES = [
  {cat: "Politics", templates: [
    "A landmark peace treaty was signed between rival nations, ending decades of conflict and establishing new borders across the region.",
    "A constitutional amendment was ratified, expanding civil rights and fundamentally changing the legal framework of the nation.",
    "A revolutionary leader was overthrown in a dramatic coup, reshaping the political landscape of the entire continent.",
    "A historic election took place with record voter turnout, ushering in a new era of democratic governance.",
    "A pivotal summit between world leaders produced agreements that would shape international relations for generations."
  ]},
  {cat: "Science", templates: [
    "Scientists announced a groundbreaking discovery that challenged fundamental assumptions about the natural world.",
    "A major medical breakthrough was achieved when researchers successfully demonstrated a new treatment for a devastating disease.",
    "An astronomical observation revealed a previously unknown celestial phenomenon, rewriting textbooks on planetary science.",
    "A pioneering experiment in physics produced results that would eventually lead to transformative new technologies.",
    "Researchers published findings that established a new field of scientific inquiry, opening doors to discoveries for decades to come."
  ]},
  {cat: "Technology", templates: [
    "A revolutionary new invention was demonstrated publicly for the first time, promising to transform daily life.",
    "Engineers completed a massive infrastructure project that connected previously isolated communities across vast distances.",
    "A patent was granted for a device that would become essential in households worldwide within a generation.",
    "The first successful test of a new transportation technology achieved speeds previously thought impossible.",
    "A communications breakthrough allowed messages to be transmitted across unprecedented distances in seconds."
  ]},
  {cat: "Culture", templates: [
    "A groundbreaking artistic work premiered to both acclaim and controversy, dividing critics but captivating audiences.",
    "A historic sporting achievement was recorded, setting a record that would stand for decades.",
    "A literary masterpiece was published that would go on to influence writers and thinkers for generations.",
    "A cultural institution opened its doors for the first time, becoming a landmark that would define its city.",
    "A legendary performance took place that eyewitnesses described as transcendent and unforgettable."
  ]},
  {cat: "War", templates: [
    "A decisive military engagement shifted the balance of power in a long-running conflict.",
    "A peace accord was signed after years of devastating warfare, though tensions in the region would persist.",
    "A naval battle of unprecedented scale took place, establishing dominance over critical maritime trade routes.",
    "A siege that had lasted months finally came to an end, with consequences that reshaped the political map.",
    "A daring military operation behind enemy lines achieved its objectives against overwhelming odds."
  ]},
  {cat: "Nature", templates: [
    "A catastrophic natural disaster struck a densely populated region, prompting an unprecedented international relief effort.",
    "Scientists documented an extraordinary natural phenomenon that occurs only once in several decades.",
    "A devastating storm made landfall with record-breaking intensity, forever changing the affected coastline.",
    "A volcanic eruption of historic proportions sent ash across multiple continents and affected global weather patterns.",
    "A rare celestial event was visible across much of the globe, drawing millions of observers skyward."
  ]}
];

const BIRTH_TEMPLATES = [
  {name: "Historical Leader", desc: "Influential political figure who shaped the course of their nation"},
  {name: "Scientific Pioneer", desc: "Groundbreaking researcher whose discoveries transformed their field"},
  {name: "Cultural Icon", desc: "Celebrated artist whose works defined an era"},
  {name: "Military Strategist", desc: "Renowned commander whose campaigns are still studied today"},
  {name: "Literary Giant", desc: "Prolific author whose writings remain widely read and admired"}
];

const FACT_TEMPLATES = [
  "This date has witnessed an unusual concentration of transformative events across centuries. Historians note that certain calendar dates seem to attract pivotal moments — though this is likely a product of the sheer volume of human history rather than cosmic coincidence.",
  "Throughout history, this day has served as a turning point in multiple civilizations. The events of any single day, when viewed across millennia, reveal the remarkable pace of human progress and the recurring patterns of conflict and cooperation.",
  "On this date across the centuries, ordinary people have repeatedly risen to extraordinary circumstances. The events recorded on this day span revolutions, discoveries, and creative achievements that remind us how quickly the world can change.",
  "The historical record for this day includes events that range from the deeply tragic to the profoundly inspiring. Each one represents a moment when the course of history pivoted, often in ways that contemporaries could not have predicted.",
  "Looking across centuries of events on this date reveals a tapestry of human ambition, resilience, and ingenuity. From scientific breakthroughs to political upheavals, this day has consistently been one of consequence."
];

export function getHistoryForDay(month, day) {
  const key = month + "-" + day;
  
  if (EVENTS_DB[key]) {
    return EVENTS_DB[key];
  }

  // Deterministic pseudo-random for consistent content per day
  const seed = month * 31 + day;
  const hash = (n) => ((n * 2654435761) >>> 0) % 1000;
  
  const events = [];
  const usedCats = new Set();
  
  for (let i = 0; i < 4; i++) {
    const h = hash(seed * (i + 1) + i * 137);
    const catGroup = EVENT_TEMPLATES[h % EVENT_TEMPLATES.length];
    const template = catGroup.templates[(h + i) % catGroup.templates.length];
    const year = 1600 + (hash(seed + i * 73) % 380);
    
    if (!usedCats.has(catGroup.cat) || i >= EVENT_TEMPLATES.length) {
      usedCats.add(catGroup.cat);
      events.push({ year, text: template, category: catGroup.cat });
    } else {
      const altGroup = EVENT_TEMPLATES[(h + 3) % EVENT_TEMPLATES.length];
      events.push({ year, text: altGroup.templates[(h + i + 2) % altGroup.templates.length], category: altGroup.cat });
    }
  }
  
  events.sort((a, b) => a.year - b.year);
  
  const births = [
    { ...BIRTH_TEMPLATES[hash(seed * 3) % BIRTH_TEMPLATES.length], year: 1700 + (hash(seed * 5) % 250) },
    { ...BIRTH_TEMPLATES[hash(seed * 7 + 1) % BIRTH_TEMPLATES.length], year: 1800 + (hash(seed * 11) % 170) }
  ];
  
  return {
    events,
    births,
    deaths: [],
    fact: FACT_TEMPLATES[hash(seed * 13) % FACT_TEMPLATES.length]
  };
}
