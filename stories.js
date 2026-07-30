// ============================================================
// THE DAILY DISPATCH — STORY FEED
// Last updated: 30 July 2026
// ============================================================

const STORIES = [

  // ── SPORTS — WORLD CUP ───────────────────────────────────

  {
    headline: "Spain wins the FIFA World Cup 2026! They beat Argentina 1-0 in extra time — Ferran Torres is the hero!",
    blurb: "In one of the most exciting World Cup finals ever, Spain defeated reigning champions Argentina 1-0 in extra time. A player named Ferran Torres scored the only goal in the 106th minute — that means he scored with just 14 minutes left in extra time! Argentina, led by the legendary Lionel Messi, were trying to win the World Cup back-to-back. Spain won! It is only their second World Cup title ever.",
    source: "CBS Sports",
    url: "https://www.cbssports.com/soccer/world-cup/",
    category: "sports",
    date: "2026-07-30"
  },
  {
    headline: "What is the FIFA World Cup and why is the whole world watching it?",
    blurb: "The FIFA World Cup is the biggest football tournament on Earth! It happens once every four years and this year, a record 48 countries from every continent competed. Teams play matches to qualify for months before the tournament even begins. The 2026 World Cup was held across three countries — the United States of America, Canada and Mexico — with 104 matches played in total. The team that wins the most matches through rounds and knockout games becomes World Champion!",
    source: "Olympics.com",
    url: "https://www.olympics.com/en/news/fifa-world-cup-2026-schedule-results-scores-standings-list",
    category: "sports",
    date: "2026-07-30"
  },
  {
    headline: "What is football and why do billions of people love it?",
    blurb: "Football — called 'soccer' in some countries — is the most popular sport in the world, played by over 250 million people! Two teams of 11 players try to kick a round ball into the other team's goal. The team with the most goals wins. It is so loved because all you need is a ball and a field — you can play it anywhere. In India, football is very popular in states like Goa, West Bengal and Kerala, and the Indian national team is working hard to qualify for future World Cups!",
    source: "FIFA",
    url: "https://www.fifa.com",
    category: "sports",
    date: "2026-07-30"
  },
  {
    headline: "France beat England 6-4 in the World Cup third place match — the most goals in any World Cup game this tournament!",
    blurb: "The 2026 World Cup third place match was described as one of the most thrilling games in football history! France and England scored 10 goals between them — France won 6-4. England had beaten France in previous tournaments, so this was extra special for the French fans. These are two of the biggest football nations in Europe and both had fantastic tournaments.",
    source: "CBS Sports",
    url: "https://www.cbssports.com/soccer/world-cup/",
    category: "sports",
    date: "2026-07-28"
  },
  {
    headline: "The host countries — USA, Canada and Mexico — all got knocked out in the same round! Here is what happened",
    blurb: "In a surprising twist, all three countries that hosted the 2026 World Cup were eliminated in the same round — the Round of 16! Canada lost to Morocco, Mexico lost to England, and the USA lost to Belgium. It was a big shock because when a country hosts the World Cup, their fans are very excited and cheer them on loudly. But in football, the best team on the day always wins — no matter where they are playing!",
    source: "Yahoo Sports",
    url: "https://sports.yahoo.com/soccer/article/2026-world-cup-results-standings-and-schedule-live-scores-group-stage-updates-and-how-to-watch-050724193.html",
    category: "sports",
    date: "2026-07-25"
  },

  // ── INDIA ────────────────────────────────────────────────

  {
    headline: "Parliament passes a new law to stop exam cheating — fast-track courts and big fines for paper leaks!",
    blurb: "After students across India protested for 37 days because exam questions were leaked, Parliament debated a new law called the Public Examinations Amendment Bill 2026. This law means that anyone caught leaking exam papers will face very serious punishments — huge fines and fast court cases. This is a big win for millions of students who want fair examinations!",
    source: "ETV Bharat",
    url: "https://www.etvbharat.com/en/bharat/live-blog--parliament-monsoon-session-live-updates-july-28-lok-sabha-rajya-sabha-pm-modi-rahul-gandhi-bjp-congress-anti-paper-leak-bill-ram-mandir-delhi-protest-enn26072801117",
    category: "india",
    date: "2026-07-30"
  },
  {
    headline: "Students won! India's Education Minister resigned after young people protested for 37 whole days",
    blurb: "Thousands of young people sat in protest in Delhi for 37 days demanding fairness after important medical exam questions were leaked before the test. After weeks of peaceful protests, the government finally listened — the Education Minister resigned. It is a powerful reminder that when people come together and speak up peacefully, they can make a real difference!",
    source: "Tribune India",
    url: "https://www.tribuneindia.com/news/india/this-is-just-the-beginning-cjps-abhijeet-dipke-after-37-day-protest-over-neet-ug-paper-leak/",
    category: "india",
    date: "2026-07-27"
  },
  {
    headline: "India's Parliament — what it is, how it works, and why it matters to every Indian",
    blurb: "Parliament is the place where India makes its laws. It has two parts — the Lok Sabha (House of the People) where 543 elected MPs represent different areas of India, and the Rajya Sabha (Council of States) which represents the states. Think of Parliament like a school debate where important decisions about the whole country are discussed and voted on. When Parliament passes a new law, it applies to all 1.4 billion Indians!",
    source: "PRS India",
    url: "https://prsindia.org/sessiontrack/monsoon-session-2026/session-alert",
    category: "india",
    date: "2026-07-28"
  },
  {
    headline: "PV Sindhu makes history — wins a badminton tournament that no Indian has ever won before!",
    blurb: "PV Sindhu, one of the greatest sports stars India has ever produced, won the Japan Open badminton tournament. This is the first time in history that any Indian player has ever won this competition. Prime Minister Modi congratulated her on social media right away. She has already won Olympic medals — now she keeps adding to her amazing record!",
    source: "Times of India",
    url: "https://timesofindia.indiatimes.com",
    category: "sports",
    date: "2026-07-14"
  },

  // ── SCIENCE ───────────────────────────────────────────────

  {
    headline: "India is getting closer to sending astronauts to space — a key rocket engine passes its biggest test!",
    blurb: "Scientists at ISRO, India's space agency, successfully tested a powerful rocket engine that will carry Indian astronauts into space on the Gaganyaan mission. The engine was fired for 25 seconds at full power and worked perfectly. Every test like this brings India one step closer to becoming only the fourth country in history to send its own people into space!",
    source: "ISRO",
    url: "https://www.isro.gov.in",
    category: "science",
    date: "2026-07-09"
  },
  {
    headline: "India's 100th self-designed warship launched — built entirely by Indian engineers!",
    blurb: "A powerful new warship called INS Mahendragiri was officially launched into service. It was designed and built completely in India — the 100th warship our engineers have created entirely on their own! This is part of 'Make in India', a plan to build more things in our own country. The ship is also very advanced — it uses the latest technology to stay hidden from enemy radar!",
    source: "DD News",
    url: "https://ddnews.gov.in",
    category: "science",
    date: "2026-07-11"
  },

  // ── WORLD ─────────────────────────────────────────────────

  {
    headline: "Britain has a brand new Prime Minister — meet Andy Burnham!",
    blurb: "The United Kingdom, a country in Europe, has a new leader named Andy Burnham. He used to be the head of a big city called Manchester. He loves cricket and has visited India many times — he is a great friend of India. India's Prime Minister Modi phoned him to say congratulations on his very first day as Prime Minister!",
    source: "DNA India",
    url: "https://www.dnaindia.com",
    category: "world",
    date: "2026-07-21"
  },
  {
    headline: "India and Australia sign a big clean energy agreement — what does uranium have to do with electricity?",
    blurb: "When Prime Minister Modi visited Australia, the two countries signed an agreement for Australia to supply India with uranium. Uranium is a special material used in nuclear power plants to generate electricity — and the best part is it does not create smoke or pollution! Nuclear power could help India produce much more clean electricity as our country keeps growing.",
    source: "South Asian Herald",
    url: "https://southasianherald.com/modis-melbourne-visit-puts-india-australia-ties-in-focus/",
    category: "world",
    date: "2026-07-10"
  },

  // ── NATURE ────────────────────────────────────────────────

  {
    headline: "Mumbai gets so much rain it shuts down — but did you know the monsoon is actually a lifesaver?",
    blurb: "Very heavy monsoon rains hit Mumbai, flooding streets and stopping trains. While this is difficult for people in the short term, the monsoon is actually incredibly important for India — it fills our rivers, lakes and dams with the water we need to grow food all year long. About 60% of India's farmland depends on monsoon rain. Without the monsoon, India would face a very serious food shortage!",
    source: "NDTV",
    url: "https://www.ndtv.com",
    category: "nature",
    date: "2026-07-06"
  },

  // ── ARTS ──────────────────────────────────────────────────

  {
    headline: "India's greatest folk singer Teejan Bai has passed away — she made the Mahabharata come alive through song",
    blurb: "Teejan Bai, from Chhattisgarh in central India, was one of the most beloved folk artists our country has ever produced. She sang Pandavani — a very old tradition of singing stories from the Mahabharata — and performed it on stages around the whole world. She received the Padma Vibhushan, India's second highest honour for art. Her incredible voice and stories will be remembered forever.",
    source: "NDTV",
    url: "https://www.ndtv.com",
    category: "arts",
    date: "2026-07-06"
  }

];
