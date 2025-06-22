import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import clsx from 'clsx';

const avatars = {
  Happy: "🧝‍♀️ Archivist",
  Sad: "🧛 Shadebinder",
  Excited: "🧞 Dreamforger",
  Angry: "🧙‍♂️ Echo-Walker",
  Curious: "🧝‍♀️ Archivist",
  Brave: "🧞 Dreamforger",
  Lonely: "🧛 Shadebinder",
  Hopeful: "🧙‍♂️ Echo-Walker",
};

const moodThemes = {
  Angry: "from-red-800 to-black",
  Happy: "from-yellow-300 to-pink-400",
  Sad: "from-gray-600 to-blue-800",
  Excited: "from-pink-500 to-orange-600",
  Curious: "from-teal-600 to-emerald-700",
  Brave: "from-orange-700 to-purple-800",
  Lonely: "from-gray-700 to-slate-800",
  Hopeful: "from-green-400 to-sky-600"
};

const avatarBackgrounds = {
  Happy: "happy-lanterns",
  Angry: "angry-destruction",
  Curious: "split-calm-angry",
  Sad: "sad-conversation",
  Hopeful: "zen-nature-nike",
  Brave: "warrior-split",
  Lonely: "sad-conversation",
  Excited: "happy-lanterns"
};

const moodMusic = {
  Angry: "/sounds/angry.mp3",
  Happy: "/sounds/happy.mp3",
  Sad: "/sounds/sad.mp3",
  Excited: "/sounds/excited.mp3",
  Curious: "/sounds/curious.mp3",
  Brave: "/sounds/brave.mp3",
  Lonely: "/sounds/lonely.mp3",
  Hopeful: "/sounds/hopeful.mp3"
};

const moodStories = {
  Angry: [
    "You storm into the enemy camp, fists clenched. Do you (A) yell or (B) sneak in?",
    "You yell! The enemies are alert. Do you (A) charge or (B) throw a barrel?",
    "You charge in with fury! Do you (A) attack the leader or (B) destroy supplies?",
    "Supplies destroyed! Enemies flee. Victory is yours."
  ],
  Happy: [
    "You skip through a sunflower field. Do you (A) pick flowers or (B) chase butterflies?",
    "You pick flowers and make a bouquet. Do you (A) give it to someone or (B) keep it?",
    "You give it to a stranger and brighten their day. Smiles all around!"
  ],
  Sad: [
    "Raindrops patter softly. Do you (A) write a poem or (B) listen to music?",
    "You write a heartfelt poem. Do you (A) share it or (B) keep it private?",
    "You share it. Others relate and send support. You feel lighter."
  ],
  Excited: [
    "You run into a carnival. Do you (A) head to the rollercoaster or (B) play games?",
    "You win a giant plushie! Do you (A) celebrate with friends or (B) give it to a child?",
    "You gift the plushie. The child's joy makes your heart soar."
  ],
  Curious: [
    "A cryptic map appears in your dream. Do you (A) follow it at dawn or (B) wait for a sign?",
    "The trail leads to an ancient library. Do you (A) open the dusty book or (B) explore deeper?",
    "You uncover a riddle. Do you (A) solve it now or (B) bring it back home?"
  ],
  Brave: [
    "The dragon returns to the valley. Do you (A) face it or (B) warn the villagers?",
    "You find a sword in a stone. Do you (A) draw it or (B) use your words instead?",
    "The wind howls on the cliff. Do you (A) leap to save the child or (B) call for help?"
  ],
  Lonely: [
    "You wander a foggy dreamscape. Do you (A) sing or (B) listen?",
    "A figure appears in the mist. Do you (A) approach or (B) stay silent?",
    "You write a message in the sand. Do you (A) wait for a reply or (B) walk away?"
  ],
  Hopeful: [
    "The garden is in ruins. Do you (A) plant a seed or (B) mend the fence first?",
    "A traveler offers a gift. Do you (A) accept it or (B) give something instead?",
    "You find a broken bell. Do you (A) ring it or (B) repair it carefully?"
  ]
};

const moodQuestions = [
  {
    question: "Do you feel like celebrating or reflecting today?",
    options: { A: "Celebrating", B: "Reflecting" }
  },
  {
    question: "Would you rather explore something new or stay comfortable?",
    options: { A: "Explore", B: "Stay" }
  },
  {
    question: "Do you feel more energetic or calm?",
    options: { A: "Energetic", B: "Calm" }
  },
  {
    question: "Do you prefer being in a crowd or alone right now?",
    options: { A: "Crowd", B: "Alone" }
  },
  {
    question: "Would you choose to lead or observe?",
    options: { A: "Lead", B: "Observe" }
  },
  {
    question: "Pick an item you’re drawn to:",
    options: { A: "🗡️ A gleaming blade", B: "📜 An ancient scroll" }
  },
  {
    question: "Choose a setting:",
    options: { A: "🌄 A mountain summit", B: "🌌 A starlit cave" }
  }
];

export default function MoodStoryGame() {
  // ... [rest of the component logic remains unchanged] ...

  return (
    <div className={clsx("relative overflow-hidden flex flex-col items-center justify-center min-h-screen p-4 space-y-6 text-gray-100 font-sans transition-all duration-500 motion-safe:animate-fade-in-slow", mood ? `bg-gradient-to-br ${moodThemes[mood]}` : "bg-gray-900") + " bg-cover bg-center bg-fixed"} style={{ backgroundImage: backgroundImage }}>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent via-black/30 to-black/70 z-0 pointer-events-none backdrop-blur-sm'></div>
      <h1 className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 z-10 relative">Myruh</h1>

      {/* ... [rest of the JSX remains unchanged] ... */}
    </div>
  );
}
