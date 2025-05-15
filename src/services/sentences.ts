import { ISentenceItemData } from '../interfaces/ISentenceItemData';

const sentencesData = [
  {
    imgPath: 'p69',
    header: 'Uazdao:',
    footer: '',
    text: '... 15. Even calm and smart people swear in the garage. Without these “magic words”, you can’t unscrew anything. It’s tested.',
  },
  {
    imgPath: 'p67',
    header: 'Uazdao:',
    footer: '',
    text: 'Don’t be afraid to do what you don’t know. Remember, an amateur built the Ark. Professionals built the Titanic.',
  },
  {
    imgPath: 'p41',
    header: 'Uazdao:',
    footer: '',
    text: 'Don’t be afraid of hard things. Every hard thing is made of many simple things. If you are not afraid to unscrew a wheel nut, why be afraid of the gearbox? Unscrew one nut after another, and later you will see — it was simple. Because: “There is no easy or hard. You just need to get used to it.”',
  },
  {
    imgPath: 'p119',
    header: 'For it is said:',
    footer: '',
    text: 'Don’t use a tool before using your head. Or you will be afraid to look at what you did. Some people take an angle grinder without thinking — and even welding can’t help after that...',
  },
  {
    imgPath: 'p255',
    header: 'For it is said:',
    footer: '',
    text: 'A real master is not the one who fixes the UAZ on the road, but the one who drives it to the garage without stopping.',
  },
  {
    imgPath: 'p128',
    header: 'For it is said:',
    footer: '',
    text: 'Every road leads somewhere. Even if there is no road, it still leads somewhere.',
  },
  {
    imgPath: 'p128',
    header: 'For it is said:',
    footer: '',
    text: 'A true Master does not make many plans and does not let plans control him.',
  },
  {
    imgPath: 'p130',
    header: 'For it is said:',
    footer: '',
    text: 'The future came yesterday at 7:30 p.m. Don’t wait — everything that had to happen already happened.',
  },
  {
    imgPath: 'p6',
    header: 'Uazdao:',
    footer: '',
    text: 'But in everyday life, you should try not to swear. Don’t use strong words for nothing. Don’t mix the important with the usual. Don’t lose the real meaning.',
  },
  {
    imgPath: 'p23',
    header: 'For it is said:',
    footer: '',
    text: 'Respect the Rule, but also use your Head. Not every “black” wire in the diagram is really black, and not every “white” one is truly white. Remember — the ways of the Factory are strange. The Repair Manual is important, but must be understood like a metaphor.',
  },
  {
    imgPath: 'p24',
    header: 'For it is said:',
    footer: '',
    text: 'Don’t try to do everything at once. Remember — every part must be fixed, but not all parts need to be fixed right now.',
  },
  {
    imgPath: 'p41',
    header: 'For it is said:',
    footer: '',
    text: 'What is done right — looks good. If you don’t like how it looks, it won’t work well. Weld it again, drill again, cut again, put a new one — or at least paint it. Or take a bigger hammer and hit better. Because: “Beauty is great power! That means it’s mass times strong acceleration…”',
  },
  {
    imgPath: 'p50',
    header: 'For it is said:',
    footer: '',
    text: 'If you are not sure — redo it! Unscrew it again, file it, oil it, tighten it, paint it, and change the gasket. You can’t reach perfection, but you must try.',
  },
  {
    imgPath: 'p62',
    header: 'For it is said:',
    footer: '',
    text: 'Sometimes I feel sad: the nut doesn’t move, the client doesn’t know what they want, there’s too much boring work and little fun, my eyes hurt from welding, and my fingers hurt from tools… Then I remember the Man Who Points Left With a Stick. And I feel better. Maybe this story will help you too. After all, you don’t have to wake up every day and point left with a stick, right? And if you do — remember: you don’t have to do it your whole life...',
  },
  {
    imgPath: 'p67',
    header: '',
    footer: '(quote)',
    text: `Information overeating is even worse than food overeating. 
  Too much food makes your bottom fat, too much information makes your brain fat. 
  When we don’t think but just read everything, thinking becomes less important. Why think, if Google gives the answer? 
  But the problem is not just how much information we have. Most of it is useless. 
  Really — when we can know anything, we often read gossip about a three-legged goat. And now there are many such goats — just for one second of surprise and a “like” button. Even goats now have inflation…`,
  },
  {
    imgPath: 'p69',
    header: '',
    footer: '(quote)',
    text: `Only information that changes your future actions is important. But this real information is hidden behind endless noise from three-legged goats. 
  For example, some famous person doing something silly changes nothing in your life. (Unless, of course, you are her husband — which is unlikely.)
  Really, we don’t need to care about Somali pirates, global warming, the ozone layer, oil prices, or even — damn it — the dollar rate.
  People who make money from your attention will say these things are very important. But here’s how to check:
  1. Will this thing change my life?
  2. Can I do something about it?
  3. Do I need to do something about it?
  If the answer is “yes” to ALL THREE — this is real information. If not — it’s just useless noise.
  Can you change oil prices or the dollar rate with your actions? If yes — go and do it. If no — forget it and focus on your own life. Let the people who can change it take care of it.`,
  },
  {
    imgPath: 'p70',
    header: '',
    footer: '(quote)',
    text: `Rich people buy expensive things to give money back into the economy. 
  But if you’re not rich, buying expensive things just gives you fewer options.
  Is expensive food more healthy? 
  Oh please! Our ancestors lived outside, worked a lot, ate good natural food full of fiber — and still, a person who lived to fifty was a miracle.
  Think about that.`,
  },
  {
    imgPath: 'p121',
    header: '',
    footer: '(quote from books by P.S. Ievlev)',
    text: `I watched the branch float away. 
  A frog looked at me with disapproval.
  Maybe she is a princess inside… but it’s better not to try.
  If you try, you just get a very rude toad.`,
  },
  {
    imgPath: 'p128',
    header: '',
    footer: '(quote from books by P.S. Ievlev)',
    text: `– ...Stubbornness Day! Stubbornness means thinking there is only one right way, one method, one answer. For every problem. 
  It replaces the joy of reaching a goal!`,
  },
];

export const sentences: ISentenceItemData[] = sentencesData.map(
  (item, index) => ({
    id: index,
    imgPath: `images/book/${item.imgPath}.webp`,
    header: item.header,
    footer: item.footer,
    text: item.text,
  }),
);
