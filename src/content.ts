/**
 * ====================================================================
 * SCRAPBOOK CONTENT CONFIGURATION
 * ====================================================================
 * Easily replace texts, names, photo URLs, and letter content here!
 */

export interface PolaroidPhoto {
  id: string;
  url: string;
  caption: string;
  date?: string;
  rotation: string; // e.g. "-rotate-2", "rotate-3"
  tapeColor: string;
}

export interface ScrapbookContent {
  recipientName: string; // e.g., "My love" or replace with her name
  startScreen: {
    headline: string;
    subheadline?: string;
    yesButtonText: string;
    notYetButtonText: string;
    notYetGentleMessage: string;
  };
  section1: {
    heading: string;
    text: string;
    continueButtonText: string;
  };
  section2: {
    heading: string;
    photos: PolaroidPhoto[];
    message: string;
  };
  section3: {
    heading: string;
    notes: string[];
    footerNote: string;
  };
  section4: {
    mainText: string;
    subNote: string;
    labels: {
      clock: string;
      hangingCharm: string;
      window: string;
      plushBear: string;
      paperHeart: string;
    };
  };
  section5: {
    letterTitle: string;
    letterDate: string;
    letterGreeting: string;
    paragraphs: string[];
    closing: string;
    signature: string;
  };
  section6: {
    heading: string;
    promises: string[];
  };
  section7: {
    heading: string;
    text: string;
    heartButton: string;
    thankYouMessage: string;
  };
}

export const scrapbookContent: ScrapbookContent = {
  // Replace with her nickname or keep "My love"
  recipientName: "My love",

  // ----------------------------------------------------
  // START SCREEN
  // ----------------------------------------------------
  startScreen: {
    headline: "I'm sorry, my love.\nWill you please hear me out?",
    subheadline: "A quiet space I made for you.",
    yesButtonText: "YES",
    notYetButtonText: "NOT YET",
    notYetGentleMessage: "That’s okay. You don’t owe me an answer right now.\nTake all the time you need. 🤍",
  },

  // ----------------------------------------------------
  // SECTION 1 — INTRODUCTION
  // ----------------------------------------------------
  section1: {
    heading: "I made this for you.",
    text: "I know a website cannot undo what happened.\nI just wanted somewhere quiet where I could say what I mean properly without overwhelming you or expecting you to immediately respond.",
    continueButtonText: "Continue reading",
  },

  // ----------------------------------------------------
  // SECTION 2 — THE WEEKEND (PHOTO SCRAPBOOK)
  // * Replace the image URLs with your own photos *
  // ----------------------------------------------------
  section2: {
    heading: "I don't want one bad moment to erase an amazing weekend.",
    photos: [
      {
        id: "photo-1",
        // EDIT: Replace with your photo URL or use the interactive photo replacer in the preview
        url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
        caption: "One of my favourite moments.",
        date: "Weekend memories",
        rotation: "-rotate-2",
        tapeColor: "bg-[#e8d5c4]/80",
      },
      {
        id: "photo-2",
        url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
        caption: "You made me feel incredibly special.",
        date: "The quiet warmth",
        rotation: "rotate-2",
        tapeColor: "bg-[#d8e2dc]/80",
      },
      {
        id: "photo-3",
        url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
        caption: "I really did notice everything you did.",
        date: "So much thought",
        rotation: "-rotate-1",
        tapeColor: "bg-[#f5e1da]/80",
      },
      {
        id: "photo-4",
        url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
        caption: "This weekend meant more to me than I managed to show.",
        date: "Holding close",
        rotation: "rotate-3",
        tapeColor: "bg-[#e2ece9]/80",
      },
    ],
    message: "You put so much effort into making my birthday and our weekend special.\nI had an amazing time with you.\nWhat happened afterwards does not erase that.\nI am grateful for every bit of effort, thought and love you put into it.",
  },

  // ----------------------------------------------------
  // SECTION 3 — WHAT I DID WRONG (NOTES)
  // ----------------------------------------------------
  section3: {
    heading: "Things I should have done differently.",
    notes: [
      "I should have asked you directly instead of going through your phone.",
      "I should have respected your privacy.",
      "I should never have taken a screenshot of a private conversation.",
      "I should have waited until we were both awake and calm before talking.",
      "I should have listened more instead of letting fear take control.",
      "I should not have made my anxiety something you felt responsible for fixing.",
    ],
    footerNote: "I was hurt and scared by what I saw, but being scared does not make the way I handled it right.",
  },

  // ----------------------------------------------------
  // SECTION 4 — WHAT I WANT YOU TO KNOW
  // ----------------------------------------------------
  section4: {
    mainText: "I trust that there are things we still need to talk about.\nBut I understand now that trust also means respecting your privacy and talking to you directly when something scares me.",
    subNote: "I don't expect this website to magically fix anything.\nI just want my actions after this to show you that I understood.",
    labels: {
      clock: "Giving you all the time you need",
      hangingCharm: "Wishing you peace and gentleness",
      window: "A clear, quiet sky outside",
      plushBear: "Holding kindness and care for you",
      paperHeart: "Genuine sincerity, no pressure",
    },
  },

  // ----------------------------------------------------
  // SECTION 5 — MY APOLOGY LETTER
  // ----------------------------------------------------
  section5: {
    letterTitle: "A Letter From My Heart",
    letterDate: "Written with genuine care",
    letterGreeting: "My love,",
    paragraphs: [
      "I am genuinely sorry for going through your phone while you were asleep.",
      "I understand why that hurt you and why it made you feel like I did not trust you. Taking a screenshot made it even worse, and I should not have done that.",
      "You spent so much time making sure I had a beautiful birthday and weekend. I saw the effort. I felt it. I appreciated it.",
      "I hate that my actions at the end made you feel as though everything you did was reduced to one argument.",
      "There were things I saw that scared me, and I still think there are things we should eventually talk about. But I should have spoken to you directly instead of invading your privacy.",
      "I also understand what you meant when you said that when I became anxious and started shaking, it felt like you had to feel bad for me even though you were the one who was hurt.",
      "That isn't fair to you.",
      "I don't want my apology to become another thing that asks you to comfort me.",
      "You are allowed to be angry.\nYou are allowed to be disappointed.\nYou are allowed to need space.",
      "I cannot change what I did, but I can learn from it.",
      "I want to become someone who can feel afraid or insecure without letting those emotions make decisions for me.",
      "Thank you for everything you did for my birthday.\nThank you for the beautiful parts of our weekend.\nAnd I am sorry for the way I handled the part that hurt.",
      "You don't need to answer this immediately.",
      "Take whatever time you need.",
    ],
    closing: "Always,",
    signature: "I love you.",
  },

  // ----------------------------------------------------
  // SECTION 6 — SMALL PROMISES
  // ----------------------------------------------------
  section6: {
    heading: "What I want to do better.",
    promises: [
      "Ask instead of investigate.",
      "Respect your privacy.",
      "Listen before reacting.",
      "Handle my anxiety without making it your responsibility.",
      "Give difficult conversations the time they deserve.",
      "Let actions prove the apology.",
    ],
  },

  // ----------------------------------------------------
  // SECTION 7 — FINAL SCREEN
  // ----------------------------------------------------
  section7: {
    heading: "No pressure. Just something I needed to say.",
    text: "You don't need to forgive me today.\nYou don't need to respond immediately.\nI just wanted you to know that I heard you.",
    heartButton: "🤍",
    thankYouMessage: "Thank you for reading.",
  },
};
