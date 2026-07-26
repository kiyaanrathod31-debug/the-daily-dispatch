// ============================================================
// THE DAILY DISPATCH — STORY FEED
// ============================================================
// HOW TO ADD A STORY:
//   Copy one block, paste at the TOP of the STORIES array.
//   Write a simple headline and explanation a child can understand.
//   Commit. Site updates automatically.
//
// FIELDS:
//   headline - short, clear, exciting headline
//   blurb    - 2-3 simple sentences explaining what happened
//   source   - where the news comes from
//   url      - link to the article
//   category - india / world / sports / science / nature / arts
//   date     - "YYYY-MM-DD"
// ============================================================

const STORIES = [

  // ── INDIA ────────────────────────────────────────────────

  {
    headline: "India's fastest badminton player PV Sindhu wins a tournament that no Indian has ever won before!",
    blurb: "PV Sindhu, one of India's greatest sports stars, won the Japan Open badminton tournament. This is the first time any Indian player has ever won this competition. Prime Minister Modi congratulated her right away on social media.",
    source: "Times of India",
    url: "https://timesofindia.indiatimes.com",
    category: "sports",
    date: "2026-07-14"
  },
  {
    headline: "India launches its biggest ever warship — the 100th ship ever designed by Indians, for Indians",
    blurb: "A giant new naval warship called INS Mahendragiri was launched into service. It was designed and built entirely in India, and it is the 100th warship that Indian engineers have created on their own. This is a big moment for 'Make in India'!",
    source: "DD News",
    url: "https://ddnews.gov.in",
    category: "india",
    date: "2026-07-11"
  },
  {
    headline: "India's space mission gets a huge boost — a rocket engine passes its biggest test yet!",
    blurb: "Scientists at ISRO, India's space agency, successfully tested a powerful rocket engine that will carry Indian astronauts to space on the Gaganyaan mission. The engine was fired for 25 seconds and worked perfectly. India is getting closer to sending its first astronauts into space!",
    source: "ISRO",
    url: "https://www.isro.gov.in",
    category: "science",
    date: "2026-07-09"
  },
  {
    headline: "Brave rescue workers saved lives after a tunnel collapsed in Sikkim",
    blurb: "A tunnel being built in Sikkim had an accident when natural gas suddenly exploded underground. Rescue teams from across India — including soldiers, firefighters and disaster experts — worked for four days non-stop to help. It shows how many people work together when something goes wrong.",
    source: "Tribune India",
    url: "https://www.tribuneindia.com/news/india/all-25-workers-killed-in-sikkim-tunnel-collapse-recovered-rescue-operation-ends",
    category: "india",
    date: "2026-07-23"
  },
  {
    headline: "India's Prime Minister visits New Zealand for the first time in 40 years!",
    blurb: "Prime Minister Narendra Modi travelled to New Zealand, making history — no Indian PM had visited in four decades! The two countries agreed to become closer friends, work together on keeping the sea safe, and set a goal to trade more goods with each other.",
    source: "ANI",
    url: "https://aninews.in/news/world/asia/great-year-for-the-india-new-zealand-partnership-pm-modis-new-zealand-visit-bears-18-outcomes20260711100939/",
    category: "world",
    date: "2026-07-11"
  },
  {
    headline: "Students all across India are protesting — here is what they are asking for",
    blurb: "Millions of students in India are upset because questions from an important medical entrance exam were leaked before the test, giving some students an unfair advantage. Young people gathered in Delhi to demand that this never happens again and that those responsible face consequences. When young people speak up, the whole country listens.",
    source: "India TV News",
    url: "https://www.indiatvnews.com",
    category: "india",
    date: "2026-07-20"
  },

  // ── WORLD ────────────────────────────────────────────────

  {
    headline: "Britain has a brand new Prime Minister — meet Andy Burnham!",
    blurb: "The United Kingdom, the country that was once our ruler, has a new leader. Andy Burnham, who was previously the mayor of a big city called Manchester, has become the UK's Prime Minister. He has many Indian friends and has visited India several times. India's PM Modi called to congratulate him.",
    source: "DNA India",
    url: "https://www.dnaindia.com",
    category: "world",
    date: "2026-07-21"
  },
  {
    headline: "India and Australia become even closer friends — they agreed to share uranium for clean energy",
    blurb: "India and Australia signed a special agreement during PM Modi's visit to Melbourne. Australia will supply India with uranium, which is used to make electricity in nuclear power plants — a clean source of energy that does not create smoke or pollution. 30,000 Indian-Australians came to watch their leaders meet!",
    source: "South Asian Herald",
    url: "https://southasianherald.com/modis-melbourne-visit-puts-india-australia-ties-in-focus/",
    category: "world",
    date: "2026-07-10"
  },
  {
    headline: "Japan and India are teaming up — 150 Japanese companies will build factories in India!",
    blurb: "During PM Modi's visit to Japan, 150 Japanese companies promised to set up factories and businesses in India. This means more jobs for Indians! Japan and India will also work together on making computer chips, clean energy batteries, and keeping important minerals safe.",
    source: "Hindustan Times",
    url: "https://www.hindustantimes.com",
    category: "world",
    date: "2026-07-02"
  },

  // ── SCIENCE ──────────────────────────────────────────────

  {
    headline: "India's military can now shoot down missiles flying through the sky — a shield for the whole country!",
    blurb: "Indian scientists successfully tested a Ballistic Missile Defence system — imagine a shield that can shoot down enemy rockets before they land. It was tested off the coast of Chandipur and worked perfectly. This technology keeps India and its people safe.",
    source: "India's World",
    url: "https://indiasworld.in/strategic-signals-july-2026/",
    category: "science",
    date: "2026-07-06"
  },
  {
    headline: "A judge used fake court cases that an AI made up — and the Supreme Court said this is very dangerous",
    blurb: "A court in India used an AI computer program to help write a judgment, but the AI invented cases that do not exist! The Supreme Court said this is like building a house on sand — the whole thing can collapse. This is a big warning about using computers carelessly in important decisions.",
    source: "The Hindu",
    url: "https://www.thehindu.com",
    category: "science",
    date: "2026-07-03"
  },
  {
    headline: "India's fastest growing sector is now technology — and young people are leading the way",
    blurb: "India's economy grew at 8.2% this year, one of the fastest in the world. A big reason is technology — software, apps, and digital services made by Indian engineers and young coders are being used all over the world. India is becoming a technology superpower!",
    source: "DD News",
    url: "https://ddnews.gov.in/en/indias-gdp-to-grow-7-in-fy26-crisil-raises-growth-forecast/",
    category: "science",
    date: "2026-07-04"
  },

  // ── NATURE ───────────────────────────────────────────────

  {
    headline: "Mumbai gets so much rain it shuts down — monsoon shows its power!",
    blurb: "The monsoon brought extremely heavy rain to Mumbai, flooding streets and stopping train services. The India Meteorological Department issued a red alert. While the rain causes problems for people, it also fills up rivers and lakes that give us the water we drink all year long.",
    source: "NDTV",
    url: "https://www.ndtv.com",
    category: "nature",
    date: "2026-07-06"
  },
  {
    headline: "Oil prices around the world are going up because of a conflict in West Asia — and it affects us too",
    blurb: "There is a conflict happening in a region called West Asia (or the Middle East), where much of the world's oil comes from. When there is trouble there, oil becomes more expensive for everyone, including India. This is why petrol prices change — and why events far away matter to us at home.",
    source: "Business Standard",
    url: "https://www.business-standard.com",
    category: "world",
    date: "2026-07-05"
  },

  // ── ARTS ─────────────────────────────────────────────────

  {
    headline: "India's greatest Pandavani singer Teejan Bai has passed away — her voice told the story of the Mahabharata",
    blurb: "Teejan Bai, who was from Chhattisgarh, was one of India's most treasured folk artists. She performed Pandavani — an ancient storytelling tradition from the Mahabharata — and took it to stages all over the world. She received India's second highest civilian honour, the Padma Vibhushan. Her voice will never be forgotten.",
    source: "NDTV",
    url: "https://www.ndtv.com",
    category: "arts",
    date: "2026-07-06"
  },
  {
    headline: "A boy from space! Indian astronaut Shubhanshu Shukla writes a book about his journey to the International Space Station",
    blurb: "Wing Commander Shubhanshu Shukla, the first Indian to visit the International Space Station, has written a book called 'The Second Orbit' about his experience in space. He describes floating in zero gravity, seeing Earth from above, and what it feels like to be so far from home. What a story!",
    source: "Akashvani News",
    url: "https://newsonair.gov.in",
    category: "arts",
    date: "2026-06-30"
  },

  // ── SPORTS ───────────────────────────────────────────────

  {
    headline: "India and Australia play cricket AND talk about being friends — Modi visits the MCG!",
    blurb: "When PM Modi visited Australia for official talks, the two leaders also went to the Melbourne Cricket Ground — the most famous cricket stadium in the world! India and Australia are big cricket rivals, but off the field they are great friends who work together on many important things.",
    source: "South Asian Herald",
    url: "https://southasianherald.com/modis-melbourne-visit-puts-india-australia-ties-in-focus/",
    category: "sports",
    date: "2026-07-10"
  },
  {
    headline: "India's defence exports reach a record — Indian-made weapons are now used in 80 countries!",
    blurb: "India now sells weapons and defence equipment worth Rs 38,000 crore to over 80 countries around the world. This includes the famous BrahMos missile, which is one of the fastest in the world. India is becoming a major manufacturer — not just of software and tea, but of advanced technology too.",
    source: "India's World",
    url: "https://indiasworld.in/strategic-signals-july-2026/",
    category: "india",
    date: "2026-07-08"
  }

];
