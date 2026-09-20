/**
 * ============================================================
 *  SITE CONTENT · armeetnarang.com
 *  Edit everything here. The HTML reads from this file.
 * ============================================================
 */

const SITE = {

  /* ── Meta / SEO ─────────────────────────────────────────── */
  meta: {
    siteUrl:     "https://armeetnarang.com",
    title:       "Armeet Narang | Psychologist & Psychotherapist in Pune",
    description: "Armeet Narang is a psychologist and psychotherapist in Pune working with anxiety, depression, OCD, trauma, relationships, and queer-affirmative care. Book via WhatsApp.",
    keywords:    "therapist in Pune, psychologist Pune, psychotherapy Pune, anxiety therapy Pune, depression counselling Pune, queer affirmative therapy Pune, CBT Pune, online therapy India, Armeet Narang",
    author:      "Armeet Narang",
    ogImage:     "images/og-image.png",
    twitterCard: "summary_large_image",
  },

  /* ── Google Analytics ────────────────────────────────────── */
  // GA4 Measurement ID (looks like G-XXXXXXXXXX). Used by both index.html and links.html.
  // Find it at: analytics.google.com → Admin → Data Streams → your stream
  googleAnalyticsId: "G-M1SVSG0MVQ",

  /* ── Schema / Business Info ──────────────────────────────── */
  schema: {
    name:        "Armeet Narang – Psychologist & Psychotherapist",
    telephone:   "+918793318765",
    description: "Psychologist and psychotherapist in Pune offering evidence-based therapy for anxiety, depression, OCD, trauma, and queer-affirmative care.",
    address: {
      street:  "Clover Park, Viman Nagar Rd",
      city:    "Pune",
      state:   "Maharashtra",
      pin:     "411014",
      country: "IN",
    },
    priceRange: "₹₹",
    social: [
      "https://www.linkedin.com/in/armeet/",
      "https://www.instagram.com/armeetyourtherapist",
    ],
  },

  /* ── Contact ─────────────────────────────────────────────── */
  whatsapp: "918793318765",
  email:    "armeet@mindworkscounselling.com",

  /* ══════════════════════════════════════════════════════════
     CRISIS BANNER
     Shown as a warm strip at the very top of every page.
  ══════════════════════════════════════════════════════════ */
  crisis: {
    message:   "If you're having a really hard time right now, please know you don't have to get through it alone.",
    linkLabel: "See helplines →",
    linkHref:  "#footer-helplines-section",
  },

  /* ══════════════════════════════════════════════════════════
     HERO SECTION
  ══════════════════════════════════════════════════════════ */
  hero: {
    label:    "Psychologist & Psychotherapist · Pune",
    headline: "A space to think\nthings <em>through.</em>",
    subtext:  "Something's been off, and you've been sitting with it long enough. Let's actually figure out what's going on.",

    ctaPrimary:   { label: "Book an Appointment", whatsappText: "Hi. I want to book an appointment" },
    ctaSecondary: { label: "Free Discovery Call",  whatsappText: "Hi. I want a free discovery call"  },

    badge: { number: "5+", label: "Years of Practice" },
  },

  /* ══════════════════════════════════════════════════════════
     ABOUT SECTION
  ══════════════════════════════════════════════════════════ */
  about: {
    tag:       "About Armeet",
    pullQuote: "A friend once suggested I'd make a good therapist. I didn't take it seriously at first. Then I couldn't stop thinking about it. So I did something about it.",

    credentials: [
      { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`, title: "M.A. Clinical Psychology", subtitle: "IGNOU, 2021" },
      { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`, title: "CBT and REBT Trained", subtitle: "from Beck Institute and In-Vivo" },
      { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`, title: "Queer-Affirmative Practitioner", subtitle: "QueerKey Community Facilitator" },
    ],

    body: [
      "My training is in CBT, including specialised work with anxiety disorders and personality disorders through the Beck Institute, alongside REBT, ACT, and DBT. These aren't interchangeable. What we use depends on what you're actually dealing with and how you tend to think.",
      "Most people who come to me have already spent a long time trying to work things out on their own. That effort matters. What therapy adds is a structured way of looking at patterns that are hard to see from inside them, and tools you actually get to use, not just understand in theory.",
      "A lot of what people carry has roots in their history. Not because the past defines you, but because it shapes the stories you tell about yourself. I hold that in mind without making it the whole conversation.",
      "I work quite a bit with identity, relationships, and the specific weight that comes with being queer in spaces that weren't built with you in mind. You won't need to explain yourself here.",
      "If you're unsure whether any of this would help, one conversation usually tells you more than reading about it does. That's what the free discovery call is for.",
    ],

    approaches: ["CBT", "REBT", "ACT", "DBT", "Mindfulness-Based", "Queer-Affirmative"],

    links: {
      practo: "https://www.practo.com/pune/therapist/armeet-narang-psychologist/recommended",
      google: "https://g.co/kgs/BqJddrB",
    },
  },

  /* ══════════════════════════════════════════════════════════
     SPECIALTIES SECTION
  ══════════════════════════════════════════════════════════ */
  specialties: {
    heading: "What I can help with",
    subtext: "If yours isn't on the list, reach out anyway. These are just starting points.",

    items: [
      {
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>`,
        title: "Anxiety & OCD",
        body: "Generalised anxiety, social anxiety, health anxiety, panic attacks, OCD, PTSD. When your nervous system won't settle, the goal is to actually change that. Not just manage it.",
      },
      {
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4M12 16h.01"/></svg>`,
        title: "Trauma & PTSD",
        body: "Past experiences that still show up in the present: in how you react, what you avoid, how safe you feel. We work with what happened without making you relive it more than necessary.",
      },
      {
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/><circle cx="12" cy="12" r="4"/></svg>`,
        title: "Depression & Low Mood",
        body: "Persistent low mood, burnout, emotional numbness, hopelessness. When it's been going on long enough that it's started changing how you move through the world.",
      },
      {
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        title: "Relationships",
        body: "Couples, families, friendships. Communication that keeps going in circles, attachment patterns, trust, boundaries. I work with both individuals and couples.",
      },
      {
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.335 4.068 1 7.5 1c1.977 0 4.23 1.044 5.5 2.5 1.27-1.456 3.523-2.5 5.5-2.5C21.932 1 25 3.335 25 7.191"/><path d="M3 7h4m4 0h4m4 0h4M5 11h14M7 15h10M9 19h6"/></svg>`,
        title: "Queer-Affirmative Therapy",
        body: "Identity, coming out, navigating family, queer relationships, the mental load of being in spaces that weren't built with you in mind. You won't need to explain yourself here.",
      },
      {
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M12 14v8M8 18h8"/></svg>`,
        title: "Self-Esteem & Identity",
        body: "Chronic self-doubt, the inner critic, figuring out who you actually are outside of what you do or what people expect of you.",
      },
      {
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
        title: "Work Stress & Perfectionism",
        body: "Career pressure, people-pleasing at work, the kind of perfectionism that isn't helping you anymore. Just making everything heavier.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     LOCATIONS SECTION
  ══════════════════════════════════════════════════════════ */
  locations: {
    heading: "Clinic Locations",
    tag:     "Where We Meet",
    note:    "All sessions are by prior appointment only. Walk-ins aren't available. This keeps each session uninterrupted and focused. Please book in advance.",

    items: [
      {
        type: "In-Person", name: "Viman Nagar",
        address: "109, 10BIZ Park, Next to Symbiosis Law School, Viman Nagar, Pune 411014",
        whatsappText: "Hi. I want to book an appointment for Viman Nagar",
      },
      {
        type: "In-Person", name: "Salunkhe Vihar",
        address: "Girme Towers, 101/102, Salunke Vihar Rd, Oxford Village, Pune 411004",
        whatsappText: "Hi. I want to book an appointment for Salunkhe Vihar",
      },
      {
        type: "In-Person", name: "Law College Road",
        address: "Flat No 4, Sunlit Apartment, Prabhat Film Rd, Erandwane, Pune 411004",
        mapsUrl: "https://maps.app.goo.gl/UZN3J1hjnh2tcHQW7",   // optional; if omitted, links.html builds a Google Maps search from the address
        whatsappText: "Hi. I want to book an appointment for Law College Road",
      },
      {
        type: "In-Person", name: "Camp",
        address: "Usha Nursing Home, MG Road, Pune Cantonment, Pune 411001",
        whatsappText: "Hi. I want to book an appointment for Camp",
      },
      {
        type: "Online", name: "Online via Google Meet",
        address: "Video sessions from anywhere in India or abroad. A quiet space and a stable connection is all you need.",
        whatsappText: "Hi. I want to book an online appointment",
        wide: true,
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     FEES SECTION
  ══════════════════════════════════════════════════════════ */
  fees: {
    tag:     "Session Fees",
    heading: "Straightforward pricing.",
    subtext: "No packages, no hidden costs. You pay per session.",

    items: [
      {
        label:     "Individual Session",
        sublabel:  "Clients in India",
        amount:    "₹2,000",
        note:      "Per session. In-person or online.",
        highlight: true,
      },
      {
        label:     "Individual Session",
        sublabel:  "Clients outside India",
        amount:    "₹3,000",
        note:      "Per session. Online via Google Meet.",
        highlight: false,
      },
      {
        label:     "Couples Session",
        sublabel:  "In India or online",
        amount:    "₹3,500",
        note:      "Per 60-minute session. Both partners attend.",
        highlight: false,
      },
    ],

    note:         "Payment is accepted via UPI, bank transfer, or card.",
    ctaLabel:     "Ask about fees",
    ctaWhatsapp:  "Hi. I have a question about session fees.",
  },

  /* ══════════════════════════════════════════════════════════
     REVIEWS SECTION
     REPLACE placeholder reviews with real ones from your
     Google and Practo profiles when ready.
  ══════════════════════════════════════════════════════════ */
  reviews: {
    heading: "What clients say",
    subtext: "From Google and Practo.",

    items: [
      {
        source: "google", reviewer: "Varad", rating: 5,
        text: "I would really like to recommend Mr. Narang. He goes about his client's problems with a lot of care and patience, in a very systematic, structured and empirical way. And most importantly I always felt safe sharing my deepest feelings and emotions, and felt like I am in the right therapist's hands.",
      },
      {
        source: "google", reviewer: "Aishwarya", rating: 5,
        text: "Being referred to Armeet Narang for therapy has been a turning point in my life. My previous experiences with therapy were not great, but his approach towards dealing with anxiety and panic disorders has given me a whole new perspective. All my negative biases about therapy vanished the first time I spoke to him. The journey required a lot of intentional effort from my side, but the right guidance matters just as much, and Armeet is hands down the best you have out there.",
      },
      {
        source: "google", reviewer: "Riya", rating: 5,
        text: "I have been taking therapy for my anxiety for months with Armeet sir. He has been a really calm and understanding person who patiently listens and helps me out. I truly recommend him for all those struggling with anxiety.",
      },
      {
        source: "google", reviewer: "Jyoti", rating: 5,
        text: "A special shout out to Armeet Narang, who has been instrumental in helping me navigate through challenging times. With his guidance, I have gained valuable insights and tools to manage my struggles. Each session has left me feeling more empowered and hopeful. He is compassionate, non-judgmental, and truly invested in his clients' growth. If you are seeking a safe and supportive space to discover a stronger, more resilient version of yourself, look no further.",
      },
      {
        source: "practo", reviewer: "Anonymous", rating: 5,
        text: "In just a few months of therapy, Armeet helped me not only process what I was going through but also connect with myself in a deeper, kinder way. With his RECBT approach, he taught me how to untangle my thoughts, challenge patterns that were not serving me, and respond to life with more clarity and compassion. Even now, I still use the tools he shared with me. If you are feeling lost, overwhelmed, or stuck, I could not recommend Armeet enough.",
      },
      {
        source: "practo", reviewer: "Anonymous", rating: 5,
        text: "It has been only 6 months and I already feel like a whole different version of myself, which I am liking a lot better. He has listened to all of my problems without any judgement and suggested ways to work through them. I have taken decisions and done things out of my comfort zone that I never thought I would. These months have been truly life changing, and it has only been better with every session.",
      },
    ],

    links: {
      google: "https://g.co/kgs/BqJddrB",
      practo: "https://www.practo.com/pune/therapist/armeet-narang-psychologist/recommended",
    },
  },

  /* ══════════════════════════════════════════════════════════
     QUEERKEY SECTION
  ══════════════════════════════════════════════════════════ */
  queerkey: {
    tag:     "Community Initiative",
    heading: "QueerKey",
    desc:    "A monthly offline support group for the LGBTQIA+ community in Pune, co-facilitated by Armeet. A space to talk about mental health, share what's actually useful, and be around people who get it. No explaining yourself required.",

    features: [
      { icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, title: "Safe & Affirming",   body: "Co-facilitated by a queer-affirmative mental health professional. No judgement, no assumptions."   },
      { icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`, title: "Monthly, In-Person", body: "Offline group meetings held in Pune once a month. Prior registration is required."                              },
      { icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, title: "Community-Centred",  body: "Peer connection, shared experiences, and collective support. More than just professional guidance."    },
    ],

    ctaRegister: { label: "Register Interest", whatsappText: "Hi. I want to know more about QueerKey" },
    ctaInfo:     { label: "Find Out More",      whatsappText: "Hi. Tell me more about QueerKey"       },
  },

  /* ══════════════════════════════════════════════════════════
     INSTAGRAM SECTION
     The post grid itself is a Behold widget (feed-id is set in index.html).
     Manage which posts appear at behold.so.
  ══════════════════════════════════════════════════════════ */
  instagram: {
    tag:        "On Instagram",
    heading:    "Things worth thinking about.",
    subtext:    "Occasional posts on psychology, mental health, and the stuff that's harder to say out loud.",
    handle:     "@armeetyourtherapist",
    profileUrl: "https://www.instagram.com/armeetyourtherapist",
  },

  /* ══════════════════════════════════════════════════════════
     FAQ SECTION
     answer: use \n\n for paragraph breaks within an answer.
  ══════════════════════════════════════════════════════════ */
  faq: {
    tag:     "Common Questions",
    heading: "Things people usually want to know.",

    items: [
      {
        question: "How do I know if I actually need therapy, or if I'm just going through something?",
        answer:   "There's no threshold you have to hit. A useful question to ask yourself is: is this affecting how I function, how I feel about myself, or how I relate to people around me? If the answer is yes, even sometimes, therapy can help. You don't need to be in crisis for it to be worth your time.\n\nA lot of the most useful work happens before things get that far.",
      },
      {
        question: "What's the free discovery call, and what happens on it?",
        answer:   "It's a short conversation, usually around 15 minutes. You can ask questions about how therapy works, what to expect, whether my approach sounds like a fit for you. Nothing gets assessed or analysed. It's just a chance to talk before committing to anything.",
      },
      {
        question: "What actually happens in the first two sessions?",
        answer:   "The first two sessions are about understanding you, not jumping straight into solutions. I'll ask about what's brought you in, some background, and what you're hoping to get out of this. You don't need to have it all figured out before we start.\n\nBy the end of those two sessions, we'll both have a clearer sense of what we're working on and how.",
      },
      {
        question: "How long will therapy take?",
        answer:   "It depends on what you're bringing in. Some people come with something specific and feel significantly better in 8 to 12 sessions. Others are working through something more layered, or just want an ongoing space to think things through. That's fine too.\n\nWe check in regularly on how things are going. I don't push people to continue beyond what's actually useful.",
      },
      {
        question: "Is what I share confidential?",
        answer:   "Yes. Everything stays between us. The exceptions are narrow: if there's a serious and credible risk of harm to you or someone else, I may need to act. I'll be clear about that from the start.\n\nYour sessions, your name, and anything you share are not disclosed to anyone.",
      },
      {
        question: "Can I do sessions online if I'm outside Pune or outside India?",
        answer:   "Yes. Online sessions are available to anyone in India, and to clients outside India too. We use Google Meet. The fee for clients outside India is ₹3,000 per session.\n\nAll you need is a private space and a stable internet connection.",
      },
      {
        question: "Will you judge me for what I share?",
        answer:   "No. That's not a reassurance. It's just how therapy works. My job is to understand what's going on for you, not evaluate whether you should feel the way you do.\n\nPeople often come in braced to be told they're overreacting, or that their problems aren't serious enough. That doesn't happen here. You can say the thing you haven't said to anyone else.",
      },
      {
        question: "How is talking to a therapist different from talking to a close friend?",
        answer:   "A good friend listens and cares, and that genuinely matters. Therapy is a different kind of conversation. It's structured, confidential, and one-directional in a way that makes it easier to be fully honest. You don't have to think about how I'm receiving what you say.\n\nA therapist also brings a framework: ways of understanding patterns, and tools for working with them. The two aren't in competition. They're just different things.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     BOOKING / CTA SECTION
  ══════════════════════════════════════════════════════════ */
  booking: {
    tag:     "Ready to start?",
    heading: "Here's how it works.",
    subtext: "Simple process, no waiting lists.",

    steps: [
      {
        title: "Send a WhatsApp message",
        body:  "Drop me a message with your name and a brief note on what you'd like to work on. I'll get back to you, usually the same day.",
      },
      {
        title: "Fill out the intake form",
        body:  "I'll send a short intake form. It helps me understand a bit of your background before we meet, so we can use the time well from the start.",
      },
      {
        title: "We schedule your first session",
        body:  "Once I've received your form, we'll find a time that works. The first two sessions are about understanding what you're bringing in.",
      },
    ],

    note: "Not ready to book yet? The free discovery call is a separate 15-minute conversation. No commitment. Just a chance to ask questions and get a sense of whether this feels right.",

    // Small line under the buttons for returning / already-booked clients.
    existing: { text: "Already booked?", label: "Intake form, payment and cancellation policy", href: "/links" },

    ctas: [
      { label: "Book an Appointment", whatsappText: "Hi. I want to book an appointment", style: "primary" },
      { label: "Free Discovery Call", whatsappText: "Hi. I want a free discovery call",  style: "outline" },
      { label: "Email Instead",       href: "mailto:armeet@mindworkscounselling.com",     style: "outline" },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     LINKS PAGE  ·  armeetnarang.com/links
     Everything the "book, pay, policies" page shows. Edit here.
     Fees, locations, helplines and social links are re-used from
     the sections above, so you only maintain them once.
  ══════════════════════════════════════════════════════════ */
  links: {
    meta: {
      title:       "Book, pay & policies | Armeet Narang",
      description: "Intake form, payment details, cancellation policy and clinic addresses for sessions with Armeet Narang, psychologist and psychotherapist in Pune.",
    },

    tagline: "Psychologist & Psychotherapist · Pune",
    intro:   "Everything you need before and after booking a session, in one place.",

    /* Step 1 */
    intake: {
      heading:    "Fill in the intake form",
      note:       "It takes a few minutes and helps me prepare for our first session.",
      buttonLabel: "Open intake form",
      url:        "https://forms.gle/1FXUTaa4MQxsue7NA",
    },

    /* Step 2
       upiId    : shown with a copy button. Leave "" to hide.
       upiName  : payee name shown under the UPI ID. Leave "" to hide.
       qrImage  : path to your UPI QR screenshot in /public/images/. "" hides it.
       bank     : bank-transfer details, shown in a collapsible block with copy
                  buttons. Set bank: null to hide the whole block.               */
    payment: {
      heading:  "Confirm with payment",
      note:     "Your session is confirmed once payment is received, at least 24 hours before your appointment.",
      qrNote:   "Scan the QR with any UPI app, or copy the UPI ID.",   // only shown when qrImage is set
      upiId:    "narangarmeet-4@okicici",
      upiName:  "Armeet Narang",
      qrImage:  "images/payment-qr.png",
      qrWidth:  800,    // pixel size of the image file (keeps the layout from jumping while it loads)
      qrHeight: 1111,

      bank: {
        heading: "Pay by bank transfer",
        holder:  "ARMEET HARPALSINGH NARANG",
        account: "06331000020790",
        ifsc:    "HDFC0000633",
        branch:  "NANA PETH",
        type:    "Savings Account",
      },
      afterPay: "After paying, please send a screenshot on WhatsApp so I can confirm your slot.",
      afterPayWhatsapp: "Hi. I've made the payment. Sharing the screenshot to confirm my slot.",
      // Shown INSTEAD of the QR/UPI block while both qrImage and upiId are empty:
      detailsLabel:    "Get payment details",
      detailsWhatsapp: "Hi. Could you share the payment details for my session?",
      // Shown under the QR/UPI block:
      otherMethods: "Prefer to pay by card?",
      otherMethodsWhatsapp: "Hi. I'd like to pay by card. Could you share the details?",
    },

    /* Cancellation policy. "share" is the refund percentage shown large. */
    policy: {
      heading: "Cancellation policy",
      tiers: [
        { share: "100%", when: "Cancel 24 or more hours before",  outcome: "Full refund, or full credit towards rescheduling." },
        { share: "75%",  when: "Cancel within 24 hours",           outcome: "75% refund, or partial credit." },
        { share: "0%",   when: "Cancel within 2 hours, or no‑show", outcome: "No refund." },
      ],
      rules: [
        "Late arrival shortens your session. More than 15 minutes late without notice counts as a no-show.",
        "If I need to cancel, you'll get a full refund or a reschedule at no extra cost.",
      ],
    },

    helplineIntro: "If you're in crisis or need someone to talk to right now, please reach out.",

    /* Buttons at the very top */
    primaryActions: [
      { label: "Book on WhatsApp",    whatsappText: "Hi. I want to book an appointment", style: "primary", icon: "whatsapp" },
      { label: "Free discovery call", whatsappText: "Hi. I want a free discovery call",  style: "outline" },
    ],

    /* "Elsewhere" list. Use href for anything; icon is optional. */
    elsewhere: [
      { label: "Website",           sub: "armeetnarang.com",                href: "/" },
      { label: "Instagram",         sub: "@armeetyourtherapist",             href: "https://www.instagram.com/armeetyourtherapist", external: true },
      { label: "Google reviews",    sub: "Read what clients say",            href: "https://g.co/kgs/BqJddrB", external: true },
      { label: "Practo profile",    sub: "Reviews and booking",              href: "https://www.practo.com/pune/therapist/armeet-narang-psychologist/recommended", external: true },
      { label: "LinkedIn",          sub: "Background and training",          href: "https://www.linkedin.com/in/armeet/", external: true },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     FOOTER
  ══════════════════════════════════════════════════════════ */
  footer: {
    tagline:   "Psychologist & Psychotherapist in Pune.",
    copyright: "© 2026 Armeet Narang. All rights reserved.",

    nav: [
      { label: "Home",        href: "#hero"        },
      { label: "About",       href: "#about"       },
      { label: "Specialties", href: "#specialties" },
      { label: "Locations",   href: "#locations"   },
      { label: "Fees",        href: "#fees"        },
      { label: "Reviews",     href: "#reviews"     },
      { label: "QueerKey",    href: "#queerkey"    },
      { label: "FAQ",         href: "#faq"         },
      { label: "Instagram",   href: "#instagram"   },
    ],

    connect: [
      { label: "WhatsApp",  href: "https://api.whatsapp.com/send?phone=918793318765",                             external: true  },
      { label: "Instagram", href: "https://www.instagram.com/armeetyourtherapist",                                external: true  },
      { label: "LinkedIn",  href: "https://www.linkedin.com/in/armeet/",                                          external: true  },
      { label: "Practo",    href: "https://www.practo.com/pune/therapist/armeet-narang-psychologist/recommended", external: true  },
      { label: "Intake & Payment", href: "/links",                                                          external: false },
      { label: "Email",     href: "mailto:armeet@mindworkscounselling.com",                                       external: false },
    ],

    disclaimer: "This website is not a crisis helpline. If you are experiencing severe symptoms or thoughts of self-harm, please seek immediate medical assistance.",
    helplines:  "KIRAN (Govt. of India): 1800-599-0019  |  iCALL (TISS): 022-25521111  |  Vandrevala Foundation: 9999-666-555  |  AASRA: 91-9820466726",
  },

}; // end SITE