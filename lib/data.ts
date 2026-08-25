// Edit anything in this file to personalize the site.
// All image/video paths are relative to /public.

export const HER_NAME = "Lang!"

export type ViewId = "home" | "pictures" | "greetings" | "tracklist" | "letters" | "timeline"

export type Memory = {
  id: string
  title: string
  subtitle: string
  image: string
  text: string
  meta?: string
}

export type Album = Memory & {
  photos: string[]
}

// HOME — the birthday letter
export const birthdayLetter = {
  cover: "/albums/her/Messenger_creation_2918094B-4B8F-458F-88D9-7D3E5BDB6B18.jpeg",
  tag: "Verified Birthday Girl",
  title: `Happy Birthday, ${HER_NAME}`,
  listeners: "18 naka pwede naka madakpan",
  paragraphs: [
    `Gihimoan tika ug website kay akong gamiton akong pagka programmer; and you deserve efforts sad.`,
    `Ang mga naa diri kay ang atoang memory, kabuang, reasons nga grateful ko kay naa ka. Pamislit lang diha bisan asa. Pislita nang sidebar. Pislita nang shuffle button naay mga wordings nako diha para nimo.`,
    `Ikaw ang bugtong itik nga gakapa-kapa sa malapukon kong dughan, ug ikaw ang tingting nga nagabagting sa akong kasingkasing. Saksi ang mga unggoy nga galangoy-langoy kilid sa hagunoy sa akong gugma nga ikaw ra ang gi-ila.`,
    `Happy birthday langga, ikaw akong favorite person. Another year napud natong duha.`,
  ],
  signature: "— Imong palalabs",
}

// PICTURES OF US
// Each album uses a real folder from /public/albums.
// image = the cover shown on the album card.
// photos = every photo that appears inside the album.
export const albums: Album[] = [
  {
    id: "album-date-nights",
    title: "Date Nights",
    subtitle: "6 photos",
    image: "/albums/date/IMG20260621201915.jpg",
    text: "The food, the walks, the random little stops, and the moments that made an ordinary laag feel like ours.",
    meta: "Photo Album",
    photos: [
      "/albums/date/8fa44ed5-44e4-4db8-8f89-19112406a07e.jpeg",
      "/albums/date/ba91b65a-f7f5-4e5f-b0de-646d91ee3926.jpeg",
      "/albums/date/IMG20260621200714.jpg",
      "/albums/date/IMG20260621201915.jpg",
      "/albums/date/IMG20260621201916.jpg",
    ],
  },
  {
    id: "album-random-snaps",
    title: "Random Snaps",
    subtitle: "15 photos",
    image: "/albums/random/IMG20260720193659.jpg",
    text: "The blurry, unplanned, caught-mid-sentence photos. Somehow these are the ones that feel the most like us.",
    meta: "Photo Album",
    photos: [
      "/albums/random/IMG20260720193659.jpg",
      "/albums/random/IMG20260720193700.jpg",
      "/albums/random/IMG20260720193703.jpg",
      "/albums/random/IMG20260720193705.jpg",
      "/albums/random/IMG20260720193708.jpg",
      "/albums/random/Messenger_creation_0FF375F7-24A3-4AD5-8F56-365CFFEBBEFF.jpeg",
      "/albums/random/Messenger_creation_12447C76-1813-4922-9DA4-E52F5F4FEB4D.jpeg",
      "/albums/random/Messenger_creation_2951F05B-AE1E-494F-835B-E2E835DBAE2C.jpeg",
      "/albums/random/Messenger_creation_3E47B1EC-6474-4D03-99DF-D7AD2F5D6F69.jpeg",
      "/albums/random/Messenger_creation_6BED2424-FEC3-42E8-B816-54C91E7A6211.jpeg",
      "/albums/random/Messenger_creation_B3C2513D-E948-424F-9BF4-347A97205AEB.jpeg",
      "/albums/random/Messenger_creation_D44F68C3-58CD-4EA9-B2E7-CB5424C57AD7.jpeg",
      "/albums/random/Messenger_creation_F0C2F985-D51D-4319-A5D0-2EFA8C23642B.jpeg",
      "/albums/random/Messenger_creation_FA1F45C1-B533-42AB-9EB5-F3CDF4F77AB8.jpeg",
    ],
  },
  {
    id: "album-trips",
    title: "Kita Duha",
    subtitle: "7 photos",
    image: "/albums/us/Messenger_creation_54AFB004-F0A4-4DB4-AC40-0BAFE75F6518.jpeg",
    text: "Small trips, school days, walks, and the random places that became part of our story just because we were together.",
    meta: "Photo Album",
    photos: [
      "/albums/us/Messenger_creation_50BBF9D9-986A-49E9-9F86-143AA51A5C0B.jpeg",
      "/albums/us/Messenger_creation_54AFB004-F0A4-4DB4-AC40-0BAFE75F6518.jpeg",
      "/albums/us/Messenger_creation_884D6E1C-8FA8-480B-9CA2-E1EE2CD7771F.jpeg",
      "/albums/us/Messenger_creation_8A4F1245-CFFB-4960-A09F-ABEBA26AA669.jpeg",
      "/albums/us/Messenger_creation_91C28CD2-9353-4EF8-843F-9A2E3EB3108F.jpeg",
      "/albums/us/Messenger_creation_18FAA8C1-2708-43AA-AAEB-4BA40666094D.jpeg",
      "/albums/us/Messenger_creation_9A3D9E94-FBA9-4848-908D-0EA7CC0CEC4D.jpeg",
      "/albums/date/Messenger_creation_6CE9C9DC-F244-4402-8022-24243696EABC.jpeg",
    ],
  },
  {
    id: "album-lazy-days",
    title: "Ikaw",
    subtitle: "27 photos",
    image: "/albums/her/Messenger_creation_330653F4-940D-4C6B-8AD2-C886158C0D20.jpeg",
    text: "The soft, unplanned pictures of you. No special occasion required — apparently you can make a photo album out of simply being you.",
    meta: "Photo Album",
    photos: [
      "/albums/her/Messenger_creation_10E4E30A-1C8D-4213-B539-B8A22F229455.png",
      "/albums/her/Messenger_creation_20276058-31FE-4EFF-8D9A-C26939955AA2.png",
      "/albums/her/Messenger_creation_21D7A5B1-0B93-42D9-B2BF-38662DC4C89C.jpeg",
      "/albums/her/Messenger_creation_25F705B9-EE65-4BD3-BBB6-A14EAAE2D679.png",
      "/albums/her/Messenger_creation_2918094B-4B8F-458F-88D9-7D3E5BDB6B18.jpeg",
      "/albums/her/Messenger_creation_330653F4-940D-4C6B-8AD2-C886158C0D20.jpeg",
      "/albums/her/Messenger_creation_42D6CFAE-2954-4C52-AB13-30A8E87596F2.jpeg",
      "/albums/her/Messenger_creation_4DCC471A-59C6-42B8-9AE9-A04D11FAC54D.jpeg",
      "/albums/her/Messenger_creation_57411BD4-3AF6-4BD1-852F-9A536A4DE036.jpeg",
      "/albums/her/Messenger_creation_5C8AD3C3-E522-437D-A94E-9028EA46C846.jpeg",
      "/albums/her/Messenger_creation_62EDF4E5-A7A4-44DA-9554-13E1F197565A.png",
      "/albums/her/Messenger_creation_648D581F-A3B2-4115-87C9-9DC49F5DF6DB.png",
      "/albums/her/Messenger_creation_841AD292-EFAE-4892-A155-8AACA57DBA78.jpeg",
      "/albums/her/Messenger_creation_8DB432AB-AC83-466A-A6AA-FEAC9332E3FA.jpeg",
      "/albums/her/Messenger_creation_93023AC7-8FDB-42B4-8C38-B38DE1A86900.png",
      "/albums/her/Messenger_creation_ABFEB899-CFFF-45BB-97B8-7BCBFE22CC61.jpeg",
      "/albums/her/Messenger_creation_AF2730EF-03BB-431D-99D2-EEB622E12D13.jpeg",
      "/albums/her/Messenger_creation_B3DA9DDD-0AD5-4DFC-AF61-2E21BDB784EE.jpeg",
      "/albums/her/Messenger_creation_B426047C-339B-4B61-A928-6965AD9C489E.jpeg",
      "/albums/her/Messenger_creation_BEA5873C-A25C-40D2-8FBC-E496311438D1.jpeg",
      "/albums/her/Messenger_creation_CB569A90-C1CC-493E-B537-071D4DFDD450.jpeg",
      "/albums/her/Messenger_creation_CCC0C081-9819-4BB7-B223-665496C72200.png",
      "/albums/her/Messenger_creation_DA5B9B61-238C-46E6-9201-BB0BC329D220.jpeg",
      "/albums/her/Messenger_creation_DED33119-5368-499C-A782-620D8947B1B9.jpeg",
      "/albums/her/Messenger_creation_DF9D7C77-EC5F-4C85-B5BC-6C5575028DCC.jpeg",
      "/albums/her/Messenger_creation_EF46DD31-B9A2-47C2-A81F-9DBE8AB875AD.jpeg",
      "/albums/her/Messenger_creation_F63903DD-5F52-4532-B79D-0665A44CA298.png",
    ],
  },
  {
    id: "album-us",
    title: "Ibog ka ani?",
    subtitle: "4 photos",
    image: "/albums/ako/IMG20260824165313.jpg",
    text: "A few pictures from the 'ako' folder that feel like the little behind-the-scenes pieces of our story — the person on the other side of these memories.",
    meta: "Photo Album",
    photos: [
      "/albums/ako/IMG20260802170556.jpg",
      "/albums/ako/IMG20260805182837.jpg",
      "/albums/ako/IMG20260824165313.jpg",
      "/albums/ako/Messenger_creation_582992BA-63AE-413E-8759-CD142054EC2A.jpeg",
    ],
  },
  {
    id: "album-firsts",
    title: "All Our Firsts",
    subtitle: "8 photos",
    image: "/albums/prom/Messenger_creation_15A51E2B-C9AD-4799-A833-D7F875713BBD.jpeg",
    text: "The milestone pictures — birthdays, prom, and the moments that deserve a permanent little place in our story.",
    meta: "Photo Album",
    photos: [
      "/albums/birthday/Messenger_creation_6ECFB8AC-BDCB-4C0D-8241-6C2A97BD4985.jpeg",
      "/albums/birthday/Messenger_creation_ACE63557-A703-4A37-85A5-E01AB60F738E.jpeg",
      "/albums/birthday/Messenger_creation_EA809FD4-8192-4655-963C-9CC80A6831E4.jpeg",
      "/albums/prom/f0e2d418-d118-439c-9cf0-68e093f6a114.jpeg",
      "/albums/prom/Messenger_creation_15A51E2B-C9AD-4799-A833-D7F875713BBD.jpeg",
      "/albums/prom/Messenger_creation_436C4B0F-E025-4E3B-94C9-13118DAD6864.png",
      "/albums/prom/Messenger_creation_85BB3EE0-1F58-4BAA-8AFD-20636D5B934A.png",
      "/albums/prom/Messenger_creation_AAACAA5A-7495-450B-8B1B-B3DEC86A9033.jpeg",
    ],
  },
]

// VIDEO GREETINGS
export const greetings: (Memory & { video: string; duration: string })[] = [
  {
    id: "vid-me",
    title: "A Message From Me",
    subtitle: "The one I recorded three times because I got emotional",
    image: "placeholder_video_me.jpg",
    video: "placeholder_video_me.mp4",
    duration: "2:14",
    text: "Press play. I said everything I'm bad at saying out loud. Happy birthday — I mean every word of it.",
    meta: "Episode 1",
  },
  {
    id: "vid-family",
    title: "Family & Cousins",
    subtitle: "The whole crew wanted in on this",
    image: "placeholder_video_family.jpg",
    video: "placeholder_video_family.mp4",
    duration: "3:47",
    text: "Everyone got together to send their love. Warning: at least two people cry, and one person definitely goes off-script.",
    meta: "Episode 2",
  },
  {
    id: "vid-besties",
    title: "The Besties Squad",
    subtitle: "Your favorite chaos, assembled",
    image: "placeholder_video_besties.jpg",
    video: "placeholder_video_besties.mp4",
    duration: "4:02",
    text: "Your best friends have things to say — some sweet, some absolutely unhinged. You've been warned. We love you.",
    meta: "Episode 3",
  },
]

// OUR FAVORITE TRACKLIST
export type Track = Memory & {
  chapter: string
  vibe: string
}

export const tracklist: Track[] = [
  {
    id: "trk-1",
    title: "Our Love Song",
    subtitle: "My Boo",
    image: "/Usher_-_Confessions_album_cover.png",
    chapter: "The song",
    vibe: "∞",
    text: "Ang love song natong duha nga ang lyric kay murag para sa atoa nga naa diri gikan ang atoang call sign sauna.",
    meta: "Our soundtrack",
  },
  {
    id: "trk-2",
    title: "Late Night",
    subtitle: "Date",
    image: "/albums/date/IMG20260621201915.jpg",
    chapter: "Date nights",
    vibe: "No budget",
    text: "Mga laag nga naay kwarta ug walay kwarta. Bahala nag walay kwarta kung mo laag, salig nalang tas atoang tiil kung asa ta dal-on.",
    meta: "Our soundtrack",
  },
  {
    id: "trk-3",
    title: "17th Birthday",
    subtitle: "Happy birthday ate",
    image: "/albums/birthday/Messenger_creation_ACE63557-A703-4A37-85A5-E01AB60F738E.jpeg",
    chapter: "Milestone",
    vibe: "Sheesh",
    text: "17th birthday nimo nga akoa gi tiguman para maka palit ug cake para imohang birthday kay happy. Yehey.",
    meta: "Our soundtrack",
  },
  {
    id: "trk-4",
    title: "Sigma",
    subtitle: "Sigma",
    image: "/albums/random/IMG20260720193708.jpg",
    chapter: "Inside joke",
    vibe: "Sigma",
    text: "Sigma.",
    meta: "Our soundtrack",
  },
  {
    id: "trk-5",
    title: "Natug",
    subtitle: "Giduka",
    image: "/albums/us/Messenger_creation_9A3D9E94-FBA9-4848-908D-0EA7CC0CEC4D.jpeg",
    chapter: "Sleepy us",
    vibe: "ZzZ",
    text: "Gi duka ta duha nya gipicturan ta. One of my favorite pictures nato duha. Naka matching surname pagid.",
    meta: "Our soundtrack",
  },
  {
    id: "trk-6",
    title: "Prom",
    subtitle: "2/2",
    image: "/albums/prom/Messenger_creation_15A51E2B-C9AD-4799-A833-D7F875713BBD.jpeg",
    chapter: "Big night",
    vibe: "2/2",
    text: "Grade 11 ug Grade 12 ikaw ra ang na partner sa prom. Hakot tanan prom sa senior high school nga ikaw ra ang partner.",
    meta: "Our soundtrack",
  },
]

// OPEN WHEN LETTERS
export const letters: Memory[] = [
  {
    id: "letter-miss",
    title: "Open when you miss me",
    subtitle: "For the far-apart days",
    image: "placeholder_letter_miss.jpg",
    meta: "Sealed",
    text: `Hey you. If you're reading this, the distance is winning today — so let me shrink it.\n\nClose your eyes. I'm there: same terrible jokes, same arm around you. Missing me means we built something worth missing, and I'd choose that ache over never having you a thousand times over.\n\nI'm counting down to the next time. Until then, this letter is a hug you can keep in your pocket.`,
  },
  {
    id: "letter-stressed",
    title: "Open when you're stressed",
    subtitle: "For the too-much days",
    image: "placeholder_letter_stressed.jpg",
    meta: "Sealed",
    text: `Breathe. Seriously — one slow one, right now, with me.\n\nYou do not have to carry all of it at once. You are allowed to put things down. You are allowed to be tired. None of it makes you any less incredible.\n\nYou have survived every hard day so far, a perfect record. This one's no different. I believe in you, completely and loudly. Now go get some water, you.`,
  },
  {
    id: "letter-happy",
    title: "Open when you're happy",
    subtitle: "For the good days",
    image: "placeholder_letter_happy.jpg",
    meta: "Sealed",
    text: `Yes! This is my favorite version of you — the one that's glowing.\n\nWhatever it is, celebrate it fully. You deserve the good stuff, the wins, the easy days. Text me. Let me be happy with you; it's genuinely my favorite thing to do.\n\nHold onto this feeling. And remember I'm always in your corner cheering the loudest.`,
  },
  {
    id: "letter-birthday",
    title: "Open on your birthday",
    subtitle: "For today, specifically",
    image: "placeholder_letter_birthday.jpg",
    meta: "Sealed",
    text: `Happy birthday, my favorite human.\n\nThe world got a little better the day you showed up in it, and it's been getting better ever since. Thank you for your laugh, your heart, and every ordinary moment you turn into a good one.\n\nMake a wish. If it's already come true, well — that's just me hoping we're thinking about the same thing. I love you. Let's make this year the best one yet.`,
  },
]

// OUR STORY — visual relationship timeline
export const timeline = [
  {
    id: "time-beginning",
    date: "The beginning",
    title: "The day our story started",
    text: "It all started back when we were in Grade 10. It was our very first time being in a relationship, and we were both still figuring things out as we went—and that's where our story officially began.",
    image: "/albums/us/Messenger_creation_50BBF9D9-986A-49E9-9F86-143AA51A5C0B.jpeg",
  },
  {
    id: "time-rewind",
    date: "Rewind",
    title: "Everything felt right again after this day",
    text: "Taking time apart was hard, but choosing to come back together was easily the best call we made.",
    image: "/albums/date/8fa44ed5-44e4-4db8-8f89-19112406a07e.jpeg",
  },
  {
    id: "time-prom",
    date: "A favorite memory",
    title: "Our Prom",
    text: "Our prom. Our dance. Still one of my favorite days with you.",
    image: "/albums/prom/Messenger_creation_15A51E2B-C9AD-4799-A833-D7F875713BBD.jpeg",
  },
  {
    id: "time-today",
    date: "Today",
    title: "Us now",
    text: "The best part isn't one memory. It's getting to keep making them with you.",
    image: "/albums/us/Messenger_creation_884D6E1C-8FA8-480B-9CA2-E1EE2CD7771F.jpeg",
  },
]

// SHUFFLE — random reasons
export const reasons: string[] = [
  "The way you scrunch your nose when you laugh really hard.",
  "You remember the tiny things I mention once and never expect you to.",
  "Your terrible sense of direction that somehow always leads somewhere fun.",
  "How safe I feel just being near you.",
  "You make even grocery runs feel like a little adventure.",
  "The way you defend your favorite snacks like they're family.",
  "You listen — really listen — like what I'm saying matters.",
  "Your playlists. Chaotic, perfect, unmistakably you.",
  "How you steal my hoodies and somehow make them look better.",
  "You make me want to be a slightly better person, gently.",
]
