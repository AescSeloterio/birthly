// Edit anything in this file to personalize the site.
// Swap the `image` / `video` strings for real files placed in /public later.

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

// HOME — the birthday letter
export const birthdayLetter = {
  cover: "placeholder_cover_photo.jpg",
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
export const albums: Memory[] = [
  {
    id: "album-date-nights",
    title: "Date Nights",
    subtitle: "24 photos",
    image: "placeholder_album_date_nights.jpg",
    text: "Dim lights, shared desserts, and the way you laugh right before the food arrives. Some of my favorite frames live in this one.",
    meta: "Album",
  },
  {
    id: "album-random-snaps",
    title: "Random Snaps",
    subtitle: "58 photos",
    image: "placeholder_album_random_snaps.jpg",
    text: "The blurry, unposed, caught-mid-sentence photos. Somehow these are the ones that feel the most like us.",
    meta: "Album",
  },
  {
    id: "album-trips",
    title: "Little Adventures",
    subtitle: "31 photos",
    image: "placeholder_album_trips.jpg",
    text: "Road trips, wrong turns, and that one sunset we pulled over for. Going anywhere is better with you in the passenger seat.",
    meta: "Album",
  },
  {
    id: "album-lazy-days",
    title: "Lazy Days",
    subtitle: "19 photos",
    image: "placeholder_album_lazy_days.jpg",
    text: "Nowhere to be, nothing to do, just us and too many snacks. Proof that my favorite place is wherever you are.",
    meta: "Album",
  },
  {
    id: "album-us",
    title: "Just Us",
    subtitle: "40 photos",
    image: "placeholder_album_just_us.jpg",
    text: "No occasion needed. This is the album I open when I miss you and you're only in the next room.",
    meta: "Album",
  },
  {
    id: "album-firsts",
    title: "All Our Firsts",
    subtitle: "12 photos",
    image: "placeholder_album_firsts.jpg",
    text: "First coffee, first trip, first 'I love you.' Every first with you turned into a favorite.",
    meta: "Album",
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

// OUR FAVORITE TRACKLIST (inside jokes & memories)
export const tracklist: (Memory & { date: string; category: string; length: string })[] = [
  {
    id: "trk-1",
    title: "The Night We Talked Till 4AM",
    subtitle: "",
    image: "placeholder_track_1.jpg",
    date: "Our very first",
    category: "Core Memory",
    length: "∞",
    text: "Neither of us wanted to hang up. That was the night I knew this was going to be something.",
  },
  {
    id: "trk-2",
    title: "'That's What She Said' — Every Single Time",
    subtitle: "",
    image: "placeholder_track_2.jpg",
    date: "Ongoing",
    category: "Inside Joke",
    length: "5:55",
    text: "You do it at the worst possible moments and I pretend to be annoyed. I am not annoyed. I love it.",
  },
  {
    id: "trk-3",
    title: "The Great Pizza Topping Debate",
    subtitle: "",
    image: "placeholder_track_3.jpg",
    date: "Still unresolved",
    category: "Inside Joke",
    length: "3:21",
    text: "You are wrong about pineapple. I will love you anyway. This is a lifelong commitment.",
  },
  {
    id: "trk-4",
    title: "When You Fell Asleep On My Shoulder",
    subtitle: "",
    image: "placeholder_track_4.jpg",
    date: "A quiet afternoon",
    category: "Core Memory",
    length: "2:08",
    text: "I didn't move for an hour. My arm went numb. Best hour of that whole month, honestly.",
  },
  {
    id: "trk-5",
    title: "Our Terrible, Perfect Karaoke Duet",
    subtitle: "",
    image: "placeholder_track_5.jpg",
    date: "Never forget",
    category: "Chaos",
    length: "4:30",
    text: "We were awful. Everyone left. We stayed. Ten out of ten, would sing off-key with you again.",
  },
  {
    id: "trk-6",
    title: "The Look You Give Me Across A Room",
    subtitle: "",
    image: "placeholder_track_6.jpg",
    date: "Every time",
    category: "Core Memory",
    length: "0:04",
    text: "Four seconds. Every time. It still gets me. Please never stop doing that.",
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
  { id: "time-beginning", date: "The beginning", title: "The day our story started", text: "Replace this with the exact moment you first met, first talked, or first realized something special was happening.", image: "placeholder_timeline_1.jpg" },
  { id: "time-first-date", date: "Our first date", title: "A day I still replay", text: "Add the place, the little details, and the funny thing that happened that only the two of you remember.", image: "placeholder_timeline_2.jpg" },
  { id: "time-favorite", date: "A favorite memory", title: "One of my favorite versions of us", text: "This is where you can tell the story behind one photo that means more than it looks like it should.", image: "placeholder_timeline_3.jpg" },
  { id: "time-today", date: "Today", title: "And somehow, here we are", text: "The best part isn't one memory. It's getting to keep making them with you.", image: "placeholder_timeline_4.jpg" },
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
