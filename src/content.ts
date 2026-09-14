/**
 * Scrapbook content configuration.
 * Keep personal text and photo URLs here so the presentation components stay clean.
 */

export interface PolaroidPhoto {
  id: string;
  url: string;
  caption: string;
  date?: string;
  rotation: string;
  tapeColor: string;
}

export interface ScrapbookContent {
  recipientName: string;
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
  recipientName: "My love",

  startScreen: {
    headline: "I made something for you.",
    subheadline: "There are a few things I wanted to say properly.",
    yesButtonText: "Read it 🤍",
    notYetButtonText: "Maybe later",
    notYetGentleMessage:
      "That’s okay. You don’t owe me an answer right now.\nTake all the time you need. 🤍",
  },

  section1: {
    heading: "I wanted to say this properly.",
    text:
      "A website can’t undo what happened, and I’m not expecting it to.\nI just wanted to make something quiet and thoughtful so I could take responsibility without turning the conversation into another moment where you have to look after my feelings.",
    continueButtonText: "Keep reading",
  },

  section2: {
    heading: "This weekend meant more to me than I managed to show.",
    photos: [
      {
        id: "photo-1",
        url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
        caption: "One of my favourite moments 🤍",
        date: "Weekend memories",
        rotation: "-rotate-2",
        tapeColor: "bg-[#e8d5c4]/80",
      },
      {
        id: "photo-2",
        url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
        caption: "You really made this birthday special.",
        date: "A day I’ll remember",
        rotation: "rotate-2",
        tapeColor: "bg-[#d8e2dc]/80",
      },
      {
        id: "photo-3",
        url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
        caption: "I noticed the little things too.",
        date: "So much thought",
        rotation: "-rotate-1",
        tapeColor: "bg-[#f5e1da]/80",
      },
      {
        id: "photo-4",
        url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
        caption: "A weekend I don’t want one mistake to erase.",
        date: "Holding onto the good",
        rotation: "rotate-3",
        tapeColor: "bg-[#e2ece9]/80",
      },
    ],
    message:
      "You put so much effort into making sure I had a beautiful birthday and weekend.\n\nI saw the planning. I saw the effort. I noticed the little things, and I felt how much you cared.\n\nI genuinely had an amazing time with you. What happened afterwards does not erase those memories for me, and I don’t want my mistake to make you feel like everything you did meant nothing.\n\nIt meant a lot to me. Thank you.",
  },

  section3: {
    heading: "What I should have done differently.",
    notes: [
      "I should have asked you directly instead of going through your phone.",
      "I should have respected your privacy.",
      "I should not have taken a screenshot of a private conversation.",
      "I should have waited until we were both awake and calm before bringing it up.",
      "I should have listened more instead of letting fear decide what I did next.",
      "I should not have made my anxiety feel like something you had to carry for me.",
    ],
    footerNote:
      "What I saw scared and hurt me, but that does not make the way I handled it right.",
  },

  section4: {
    mainText:
      "There are still things I think we should talk about when we’re both ready. But I understand that trust is not only about believing someone — it is also about respecting their privacy and speaking to them directly when something feels wrong.",
    subNote:
      "I don’t expect this page to fix anything. I want what I do after this to show that I actually understood what you were telling me.",
    labels: {
      clock: "No rushing you",
      hangingCharm: "A little gentleness",
      window: "Room to breathe",
      plushBear: "Care without pressure",
      paperHeart: "Something sincere",
    },
  },

  section5: {
    letterTitle: "What I really wanted to say",
    letterDate: "From me, properly",
    letterGreeting: "My love,",
    paragraphs: [
      "I’m sorry for going through your phone while you were asleep. I understand why that shocked you and why it made you feel like I didn’t trust you.",
      "Taking a screenshot made that invasion of privacy worse. I shouldn’t have done it.",
      "You had spent so much time and effort making sure I had a beautiful birthday and weekend. I saw that effort, I felt it, and I appreciated it. I hate that the way I handled things afterwards made it feel as though all of that was reduced to one painful argument.",
      "There were things I saw that genuinely scared me, and I still think some of them deserve an honest conversation eventually. But I should have spoken to you directly instead of searching for answers on your phone.",
      "I also heard what you said about my anxiety afterwards. You were already hurt, and then it felt like you had to worry about me too. I don’t want an apology from me to become another situation where you have to comfort me.",
      "You are allowed to be upset with me. You are allowed to be disappointed. And if you need space, I will respect that.",
      "I can’t change what I did. What I can do is learn from it: ask instead of investigate, listen before reacting, and handle fear without letting it make my decisions for me.",
      "Thank you for everything you did for my birthday and for all the genuinely beautiful parts of our weekend.",
      "I’m sorry for the part I got wrong.",
    ],
    closing: "With love,",
    signature: "Me 🤍",
  },

  section6: {
    heading: "What I want to do better.",
    promises: [
      "Ask instead of investigate.",
      "Respect your privacy.",
      "Listen before reacting.",
      "Take responsibility for my own anxiety.",
      "Give hard conversations the right time and space.",
      "Let my actions make the apology real.",
    ],
  },

  section7: {
    heading: "That’s all I wanted to say.",
    text:
      "You don’t need to answer this immediately.\nYou don’t need to make me feel better about it.\nI just wanted you to know that I heard you.",
    heartButton: "🤍",
    thankYouMessage: "Thank you for reading this.",
  },
};
