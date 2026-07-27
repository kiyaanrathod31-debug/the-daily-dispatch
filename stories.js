// ============================================================
// THE DAILY DISPATCH — STORY FEED
// ============================================================
// HOW TO ADD A STORY:
//   Copy one block, paste at the TOP of the STORIES array.
//   Write a simple headline and explanation a child can understand.
//   Commit. Site updates automatically.
// ============================================================

const STORIES = [

  // ── INDIA ────────────────────────────────────────────────

  {
    headline: "Students across India protested for 37 days — and the Education Minister had to step down!",
    blurb: "Thousands of young people sat in protest in Delhi for 37 days to demand fairness after questions from an important medical exam were leaked before the test. After weeks of peaceful sitting, marching and demanding to be heard, the government listened — the Education Minister resigned. It is a powerful reminder that when people speak up together, they can make a difference.",
    source: "Tribune India",
    url: "https://www.tribuneindia.com/news/india/this-is-just-the-beginning-cjps-abhijeet-dipke-after-37-day-protest-over-neet-ug-paper-leak/",
    category: "india",
    date: "2026-07-27"
  },
  {
    headline: "Sonam Wangchuk — the man who inspired millions — ended his 26-day hunger strike",
    blurb: "Sonam Wangchuk, a famous inventor and activist from Ladakh, went without food for 26 whole days to support the student protests. He finally sipped soup after the government made some promises. He is known for inspiring the movie 3 Idiots! His bravery encouraged many more young people to speak up.",
    source: "Al Jazeera",
    url: "https://en.wikipedia.org/wiki/2026_Delhi_Jantar_Mantar_protests",
    category: "india",
    date: "2026-07-24"
  },
  {
    headline: "India's fastest warship ever — the 100th ship designed entirely by Indian engineers launched into service!",
    blurb: "A powerful new warship called INS Mahendragiri was officially launched. It was designed and built completely in India by our own engineers and scientists. This is the 100th warship that India has ever built on its own — a huge achievement for 'Make in India'!",
    source: "DD News",
    url: "https://ddnews.gov.in",
    category: "india",
    date: "2026-07-11"
  },
  {
    headline: "PV Sindhu makes history — wins a badminton tournament no Indian has ever won before!",
    blurb: "PV Sindhu, one of the greatest sports stars India has ever produced, won the Japan Open badminton tournament. This is the first time in history that any Indian player has won this competition. Prime Minister Modi congratulated her immediately. What an achievement!",
    source: "Times of India",
    url: "https://timesofindia.indiatimes.com",
    category: "sports",
    date: "2026-07-14"
  },
  {
    headline: "Brave rescue teams save lives after a tunnel accident in Sikkim",
    blurb: "A tunnel being built deep underground in a beautiful state called Sikkim had a serious accident when natural gas exploded inside it. Rescue teams from the army, the police, and disaster response units worked for four whole days without stopping to help. It shows how many brave people work together when something goes terribly wrong.",
    source: "Tribune India",
    url: "https://www.tribuneindia.com/news/india/all-25-workers-killed-in-sikkim-tunnel-collapse-recovered-rescue-operation-ends",
    category: "india",
    date: "2026-07-23"
  },

  // ── WORLD ─────────────────────────────────────────────────

  {
    headline: "India and Australia become even closer friends — they will share clean energy materials!",
    blurb: "Prime Minister Modi visited Australia and met the Australian Prime Minister Anthony Albanese. The two countries signed a special agreement: Australia will give India uranium, which is used to make clean electricity in nuclear power plants. 30,000 Indian-Australians came to watch their leaders shake hands!",
    source: "South Asian Herald",
    url: "https://southasianherald.com/modis-melbourne-visit-puts-india-australia-ties-in-focus/",
    category: "world",
    date: "2026-07-10"
  },
  {
    headline: "Britain has a brand new Prime Minister — meet Andy Burnham!",
    blurb: "The United Kingdom, a country in Europe that was once the ruler of India, has a new leader named Andy Burnham. He used to be the mayor — like a city president — of a big city called Manchester. He loves cricket and has visited India many times. India's Prime Minister Modi called to say congratulations!",
    source: "DNA India",
    url: "https://www.dnaindia.com",
    category: "world",
    date: "2026-07-21"
  },
  {
    headline: "India visits New Zealand for the first time in 40 years — and the two countries become official friends!",
    blurb: "Prime Minister Modi travelled to New Zealand, making history — no Indian PM had visited in four whole decades! The two countries signed an agreement to become closer partners on maritime safety and trade. New Zealand even promised to help India with a special fruit called kiwifruit, which grows there!",
    source: "ANI",
    url: "https://aninews.in/news/world/asia/great-year-for-the-india-new-zealand-partnership-pm-modis-new-zealand-visit-bears-18-outcomes20260711100939/",
    category: "world",
    date: "2026-07-11"
  },
  {
    headline: "150 Japanese companies are coming to build factories in India — thousands of jobs on the way!",
    blurb: "During Prime Minister Modi's visit to Japan, 150 Japanese companies promised to set up factories and businesses in India. This means more work for Indian people! Japan and India will also work together on making computer chips and clean energy batteries. Japan is one of India's most important friends.",
    source: "Hindustan Times",
    url: "https://www.hindustantimes.com",
    category: "world",
    date: "2026-07-02"
  },

  // ── SCIENCE ───────────────────────────────────────────────

  {
    headline: "India tests a shield that can shoot down rockets flying through the sky — our country is getting safer!",
    blurb: "Indian scientists successfully tested a special defence system that can detect and destroy enemy rockets before they reach the ground — like a shield protecting the whole country! It was tested off the coast near a place called Chandipur. This is called a Ballistic Missile Defence system and India is one of only a few countries in the world that has it.",
    source: "India's World",
    url: "https://indiasworld.in/strategic-signals-july-2026/",
    category: "science",
    date: "2026-07-06"
  },
  {
    headline: "ISRO's rocket engine passes its most important test — India is getting closer to sending astronauts to space!",
    blurb: "Scientists at ISRO, India's space agency, successfully tested a super powerful rocket engine that will carry Indian astronauts to space on the Gaganyaan mission. The engine was fired for 25 seconds at full power and worked perfectly. Every test like this brings India one step closer to sending its own people into space for the first time!",
    source: "ISRO",
    url: "https://www.isro.gov.in",
    category: "science",
    date: "2026-07-09"
  },
  {
    headline: "A judge used fake court cases made up by an AI — and India's Supreme Court said this is very dangerous",
    blurb: "A court in India used an AI computer program to help write a legal decision, but the AI invented court cases that do not exist! The Supreme Court warned this is extremely dangerous — just like building a house on a foundation of sand. This is a big lesson: computers can make mistakes, and important decisions must always be checked by real people.",
    source: "The Hindu",
    url: "https://www.thehindu.com",
    category: "science",
    date: "2026-07-03"
  },
  {
    headline: "India's economy is one of the fastest growing in the world — here is what that actually means for us",
    blurb: "India's economy grew by 8.2% last year, which means the country produced much more goods and services than the year before. Think of it like this — if the whole country earned Rs 100 last year, this year it earned Rs 108! More growth usually means more jobs and more things getting built, like roads, hospitals and schools.",
    source: "DD News",
    url: "https://ddnews.gov.in/en/indias-gdp-to-grow-7-in-fy26-crisil-raises-growth-forecast/",
    category: "science",
    date: "2026-07-04"
  },

  // ── NATURE ────────────────────────────────────────────────

  {
    headline: "Mumbai gets so much rain the city shuts down — the monsoon is showing its incredible power!",
    blurb: "Very heavy monsoon rains hit Mumbai, flooding streets and stopping train services. The weather department gave a red alert — its strongest warning. While the rain causes problems in the short term, it also fills rivers, lakes and dams that provide all the water we drink, cook with and bathe in throughout the entire year!",
    source: "NDTV",
    url: "https://www.ndtv.com",
    category: "nature",
    date: "2026-07-06"
  },

  // ── ARTS ──────────────────────────────────────────────────

  {
    headline: "India's greatest Pandavani singer Teejan Bai has passed away — she gave the Mahabharata a voice",
    blurb: "Teejan Bai, who came from Chhattisgarh in central India, was one of the most beloved folk artists our country has ever produced. She performed Pandavani — a very old tradition of singing stories from the Mahabharata — and brought it to stages all over the world. She received the Padma Vibhushan, India's second highest honour. Her voice and her stories will live on forever.",
    source: "NDTV",
    url: "https://www.ndtv.com",
    category: "arts",
    date: "2026-07-06"
  },
  {
    headline: "India's astronaut Shubhanshu Shukla writes a book about going to space — and it sounds amazing!",
    blurb: "Wing Commander Shubhanshu Shukla, the first Indian to ever visit the International Space Station, has written a book called 'The Second Orbit' about his incredible journey. He describes floating in zero gravity, looking down at Earth from hundreds of kilometres above it, and what it feels like to travel at 28,000 kilometres per hour. Imagine reading that on a rainy afternoon!",
    source: "Akashvani News",
    url: "https://newsonair.gov.in",
    category: "arts",
    date: "2026-06-30"
  },

  // ── SPORTS ────────────────────────────────────────────────

  {
    headline: "India and Australia not only talk — they also go to the world's most famous cricket ground together!",
    blurb: "When Prime Minister Modi visited Australia for important meetings, the two leaders also visited the Melbourne Cricket Ground — the most famous cricket stadium in the entire world, which can hold 100,000 people! India and Australia are fierce rivals on the cricket field, but great friends off it. Sports and friendship can go together!",
    source: "South Asian Herald",
    url: "https://southasianherald.com/modis-melbourne-visit-puts-india-australia-ties-in-focus/",
    category: "sports",
    date: "2026-07-10"
  }

];
