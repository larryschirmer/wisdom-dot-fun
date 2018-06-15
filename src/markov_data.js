const MarkovChain = require('markovchain');

const lines = `
Today it's up to you to create the peacefulness you long for.
A friend asks only for your time not your money.
If you refuse to accept anything but the best, you very often get it.
A smile is your passport into the hearts of others.
A good way to keep healthy is to eat more Chinese food.
Your high-minded principles spell success.
Hard work pays off in the future, laziness pays off now.
Change can hurt, but it leads a path to something better.
Enjoy the good luck a companion brings you.
People are naturally attracted to you.
Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.
A chance meeting opens new doors to success and friendship.
You learn from your mistakes... You will learn a lot today.
If you have something good in your life, don't let it go!
What ever you're goal is in life, embrace it visualize it, and for it will be yours.
Your shoes will make you happy today.
You cannot love life until you live the life you love.
Be on the lookout for coming events; They cast their shadows beforehand.
Land is always on the mind of a flying bird.
The man or woman you desire feels the same about you.
Meeting adversity well is the source of your strength.
A dream you have will come true.
Our deeds determine us, as much as we determine our deeds.
Never give up. You're not a failure if you don't give up.
You will become great if you believe in yourself.
There is no greater pleasure than seeing your loved ones prosper.
You will marry your lover.
A very attractive person has a message for you.
You already know the answer to the questions lingering inside your head.
It is now, and in this world, that we must live.
You must try, or hate yourself for not trying.
You can make your own happiness.
The greatest risk is not taking one.
The love of your life is stepping into your planet this summer.
Love can last a lifetime, if you want it to.
Adversity is the parent of virtue.
Serious trouble will bypass you.
A short stranger will soon enter your life with blessings to share.
Now is the time to try something new.
Wealth awaits you very soon.
If you feel you are right, stand firmly by your convictions.
If winter comes, can spring be far behind?
Keep your eye out for someone special.
You are very talented in many ways.
A stranger, is a friend you have not spoken to yet.
A new voyage will fill your life with untold memories.
You will travel to many exotic places in your lifetime.
Your ability for accomplishment will follow with success.
Nothing astonishes men so much as common sense and plain dealing.
Its amazing how much good you can do if you dont care who gets the credit.
Everyone agrees. You are the best.
LIFE CONSIST NOT IN HOLDING GOOD CARDS, BUT IN PLAYING THOSE YOU HOLD WELL.
Jealousy doesn't open doors, it closes them!
It's better to be alone sometimes.
When fear hurts you, conquer it and defeat it!
Let the deeds speak.
You will be called in to fulfill a position of high honor and responsibility.
The man on the top of the mountain did not fall there.
You will conquer obstacles to achieve success.
Joys are often the shadows, cast by sorrows.
Fortune favors the brave.
An upward movement initiated in time can counteract fate.
A journey of a thousand miles begins with a single step.
Sometimes you just need to lay on the floor.
Never give up. Always find a reason to keep trying.
If you have something worth fighting for, then fight for it.
Stop wishing. Start doing.
Accept your past without regrets. Handle your present with confidence. Face your future without fear.
Stay true to those who would do the same for you.
Ask yourself if what you are doing today is getting you closer to where you want to be tomorrow.
Happiness is an activity.
Help is always needed but not always appreciated. Stay true to your heart and help those in need weather they appreciate it or not.
Hone your competitive instincts.
Finish your work on hand don't be greedy.
For success today, look first to yourself.
Your fortune is as sweet as a cookie.
Integrity is the essence of everything successful.
If you're happy, you're successful.
You will always be surrounded by true friends
Believing that you are beautiful will make you appear beautiful to others around you.
Happinees comes from a good life.
Before trying to please others think of what makes you happy.
When hungry, order more Chinese food.
Your golden opportunity is coming shortly.
For hate is never conquered by hate. Hate is conquered by love .
You will make many changes before settling down happily.
A man is born to live and not prepare to live.
You cannot become rich except by enriching others.
Don't pursue happiness - create it.
You will be successful in love.
All your fingers can't be of the same length.
Wise sayings often fall on barren ground, but a kind word is never thrown away.
A lifetime of happiness is in store for you.
It is very possible that you will achieve greatness in your lifetime.
Be tactful; overlook your own opportunity.
You are the controller of your destiny.
Everything happens for a reson.
How can you have a beutiful ending without making beautiful mistakes.
You can open doors with your charm and patience.
Welcome the change coming into your life.
There will be a happy romance for you shortly.
Your fondest dream will come true within this year.
You have a deep interest in all that is artistic.
Your emotional nature is strong and sensitive.
A letter of great importance may reach you any day now.
Good health will be yours for a long time.
You will become better acquainted with a coworker.
To be old and wise, you must first be young and stupid.
Failure is only the opportunity to begin again more intelligently.
Integrity is doing the right thing, even if nobody is watching.
Conquer your fears or they will conquer you.
You are a lover of words; One day you will write a book.
In this life it is not what we take up, but what we give up, that makes us rich.
Fear can keep us up all night long, but faith makes one fine pillow.
Seek out the significance of your problem at this time. Try to understand.
Never upset the driver of the car you're in; they're the master of your destiny until you get home.
He who slithers among the ground is not always a foe.
You learn from your mistakes, you will learn a lot today.
You only need look to your own reflection for inspiration. Because you are Beautiful!
You are not judged by your efforts you put in; you are judged on your performance.
Rivers need springs.
Good news from afar may bring you a welcome visitor.
When all else seems to fail, smile for today and just love someone.
Patience is a virtue, unless its against a brick wall.
When you look down, all you see is dirt, so keep looking up.
If you are afraid to shake the dice, you will never throw a six.
Even if the person who appears most wrong, is also quite often right.
A single conversation with a wise man is better than ten years of study.
Happiness is often a rebound from hard work. (1 comment)
The world may be your oyster, but that doesn't mean you'll get it's pearl.
Your life will be filled with magical moments.
You're true love will show himself to you under the moonlight. (1 comment)
Do not follow where the path may lead. Go where there is no path...and leave a trail
Do not fear what you don't know
The object of your desire comes closer.
You have a flair for adding a fanciful dimension to any story.
If you wish to know the mind of a man, listen to his words
The most useless energy is trying to change what and who God so carefully created.
Do not be covered in sadness or be fooled in happiness they both must exist
You will have unexpected great good luck.
You will have a pleasant surprise
All progress occurs because people dare to be different.
Your ability for accomplishment will be followed by success.
The world is always ready to receive talent with open arms.
Things may come to those who wait, but only the things left by those who hustle.
We can't help everyone. But everyone can help someone.
Every day is a new day. But tomorrow is never promised.
Express yourself: Don't hold back!
It is not necessary to show others you have change; the change will be obvious.
You have a deep appreciation of the arts and music.

If your desires are not extravagant, they will be rewarded.
You try hard, never to fail. You don't, never to win.
Never give up on someone that you don't go a day without thinking about.
It never pays to kick a skunk.
In case of fire, keep calm, pay bill and run.
Next full moon brings an enchanting evening.
Not all closed eye is sleeping nor open eye is seeing.
Impossible is a word only to be found in the dictionary of fools.
You will soon witness a miracle.
The time is alway right to do what is right.
Love is as necessary to human beings as food and shelter.
You will make heads turn.
You are extremely loved. Don't worry :)
If you are never patient, you will never get anything done. If you believe you can do it, you will be rewarded with success.
You will soon embark on a business venture.
You believe in the goodness of man kind.
You will have a long and wealthy life.
You will take a pleasant journey to a place far away.
You are a person of culture.
Keep it simple. The more you say, the less people remember.
Life is like a dogsled team. If you ain't the lead dog, the scenery never changes.
Prosperity makes friends and adversity tries them.
Nothing seems impossible to you.
Patience is bitter, but its fruit is sweet.
The only certainty is that nothing is certain.
Success is the sum of my unique visions realized by the sweat of perseverance.
When you expect your opponent to yield, you also should avoid hurting him.
Human evolution: “wider freeway" but narrower viewpoints.
Intelligence is the door to freedom and alert attention is the mother of intelligence.
Back away from individuals who are impulsive.
Enjoyed the meal? Buy one to go too.
You believe in the goodness of mankind.
A big fortune will descend upon you this year. (3 comments)
Now these three remain, faith, hope, and love. The greatest of these is love.
For success today look first to yourself.
Determination is the wake-up call to the human will.
There are no limitations to the mind except those we aknowledge.
A merry heart does good like a medicine.
Whenever possible, keep it simple.
Your dearest wish will come true. (3 comments)
Poverty is no disgrace.
If you don’t do it excellently, don’t do it at all.
You have an unusual equipment for success, use it properly.
Emotion is energy in motion.
You will soon be honored by someone you respect.
Punctuality is the politeness of kings and the duty of gentle people everywhere.
Your happiness is intertwined with your outlook on life.
Elegant surroundings will soon be yours.
If you feel you are right, stand firmly by your convictions.
Your smile brings happiness to everyone you meet. 
Instead of worrying and agonizing, move ahead constructively.
Do you believe? Endurance and persistence will be rewarded. (2 comments)
A new business venture is on the horizon.
Never underestimate the power of the human touch.
Hold on to the past but eventually, let the times go and keep the memories into the present.
Truth is an unpopular subject. Because it is unquestionably correct.
The most important thing in communication is to hear what isn’t being said.
You are broad minded and socially active.
Your dearest dream is coming true. God looks after you especially. (1 comment)
You will recieve some high prize or award.
Your present question marks are going to succeed.
You have a fine capacity for the enjoyment of life.
You will live long and enjoy life.
An admirer is concealing his/her affection for you.
A wish is what makes life happen when you dream of rose petals.
Love can turn cottage into a golden palace. (1 comment)
Lend your money and lose your freind.
You will kiss your crush ohhh lalahh
You will be rewarded for being a good listener in the next week.
If you never give up on love, It will never give up on you. (1 comment)
Unleash your life force. (1 comment)
Your wish will come true.
There is a prospect of a thrilling time ahead for you.
No distance is too far, if two hearts are tied together. (4 comments)
Land is always in the mind of the flying birds.
Try? No! Do or do not, there is no try.
Do not worry, you will have great peace.
It's about time you asked that special someone on a date.
You create your own stage ... the audience is waiting.
It is never too late. Just as it is never too early.
Discover the power within yourself. (3 comments)
Good things take time. (1 comment)
Stop thinking about the road not taken and pave over the one you did.
Put your unhappiness aside. Life is beautiful, be happy.
You can still love what you can not have in life.
Make a wise choice everyday.
Circumstance does not make the man; it reveals him to himself.
The man who waits till tomorrow, misses the opportunities of today.
Life does not get better by chance. It gets better by change.
If you never expect anything you can never be disappointed.
People in your surroundings will be more cooperative than usual.
True wisdom is found in happiness.
Ones always regrets what could have done. Remember for next time.
Follow your bliss and the Universe will open doors where there were once only walls.
Find a peaceful place where you can make plans for the future. (1 comment)
All the water in the world can't sink a ship unless it gets inside.
The earth is a school learn in it.
In music, one must think with his heart and feel with his brain.
If you speak honestly, everyone will listen.
Ganerosity will repay itself sooner than you imagine.
good things take time
Do what is right, not what you should. (1 comment)
To effect the quality of the day is no small achievement.
Simplicity and clearity should be the theme in your dress.
Virtuous find joy while Wrongdoers find grieve in their actions.
Not all closed eye is sleeping, nor open eye is seeing. (1 comment)
Bread today is better than cake tomorrow.
In evrything there is a piece of truth.But a piece.
A feeling is an idea with roots.
Man is born to live and not prepare to live (1 comment)
It's all right to have butterflies in your stomach. Just get them to fly in formation. (1 comment)
If you don t give something, you will not get anything
The harder you try to not be like your parents, the more likely you will become them
Someday everything will all make perfect sense
you will think for yourself when you stop letting others think for you
Everything will be ok. Don't obsess. Time will prove you right, you must stay where you are.
Let's finish this up now, someone is waiting for you on that
The finest men like the finest steels have been tempered in the hottest furnace.
A dream you have will come true (3 comments)
The worst of friends may become the best of enemies, but you will always find yourself hanging on. (2 comments)
I think, you ate your fortune while you were eating your cookie
If u love someone keep fighting for them (4 comments)
Do what you want, when you want, and you will be rewarded
Let your fantasies unwind... (1 comment)
The cooler you think you are the dumber you look
Expect great things and great things will come (1 comment)
The Wheel of Good Fortune is finally turning in your direction!
Don't lead if you won't lead.
You will always be successful in your professional career (1 comment)
Share your hapiness with others today.
It's up to you to clearify.
Your future will be happy and productive.
Seize every second of your life and savor it.
Those who walk in other's tracks leave no footprints.
Failure is the mother of all success. (1 comment)
Difficulty at the beginning useually means ease at the end.
Do not seek so much to find the answer as much as to understand the question better. (3 comments)
Your way of doing what other people do their way is what makes you special.
A beautiful, smart, and loving person will be coming into your life. (4 comments)
Friendship is an ocean that you cannot see bottom.
Your life does not get better by chance, it gets better by change. (2 comments)
Our duty,as men and women,is to proceed as if limits to our ability did not exist.
A pleasant expeience is ahead:don't pass it by. (1 comment)
Our perception and attitude toward any situation will determine the outcome
They say you are stubborn; you call it persistence.
Two small jumps are sometimes better than one big leap.
A new wardrobe brings great joy and change to your life.
The cure for grief is motion.
It's a good thing that life is not as serious as it seems to the waiter
I hear and I forget. I see and I remember. I do and I understand.
I have a dream....Time to go to bed.
Ideas you believe are absurd ultimately lead to success! (1 comment)
A human being is a deciding being.
Today is an ideal time to water your parsonal garden.
Some men dream of fortunes, others dream of cookies.
Things are never quite the way they seem.
the project on your mind will soon gain momentum
YOUR FAILURES WILL LEAD YOU TO YOUR SUCCESS.
IN ORDER TO GET THE RAINBOW, YOU MUST ENDURE THE RAIN. (1 comment)
Beauty is simply beauty. originality is magical.
Your dream will come true when you least expect it.
Let not your hand be stretched out to receive and shut when you should repay.
Don't worry, half the people you know are below average. (1 comment)
Vision is the art of seeing what is invisible to others.
You don't need talent to gain experience.
A focused mind is one of the most powerful forces in the universe.
Today you shed your last tear. Tomorrow fortune knocks at your door.
Be patient! The Great Wall didn't got build in one day. (1 comment)
Think you can. Think you can't. Either way, you'll be right.
Wisdom is on her way to you. (3 comments)
Digital circuits are made from analog parts. (2 comments)
If you eat a box of fortune cookies, anything is possible.
The best is yet to come. (2 comments)
I'm with you. (5 comments)
Be direct,usually one can accomplish more that way. (1 comment)
A single kind work will keep one warm for years. (2 comments)
Ask a friend to join you on your next voyage.
In God we trust.
Love is free. Lust will cost you everything you have. (2 comments)
Stop searching forever, happiness is just next to you. (2 comments)
You don't need the answers to all of life's questions. Just ask your father what to do.
Jealousy is a useless emotion. (2 comments)
You are not a ghost. (2 comments)
There is someone rather annoying in your life that you need to listen to.
You will plant the smallest seed and it will become the greatest and most mighty tree in the world.
The dream you've been dreaming all your life isn't worth it. Find a new dream, and once you're sure you've found it, fight for it.
See if you can learn anything from the children.
It's Never Too Late For Good Things To Happen!
A clear conscience is usually the sign of a bad memory.
Aim high, time flies.
One is not sleeping, does not mean they are awake.
A great pleasure in life is doing what others say you can't.
Isn't there something else you should be working on right now? (2 comments)
Your father still loves and is in always with you. Remember that.
Before you can be reborn you must die.
It better to be the hammer than the nail. (1 comment)
You are admired by everyone for your talent and ability. (2 comments)
Save the whales. Collect the whole set. (1 comment)
You will soon discover a major truth about the one you love most. (1 comment)
Your life will prosper only if you acknowledge your faults and work to reduce them.
IT IS NOT GOOD TO BE A USER BLESSINGS COME FROM BEING A GIVER NOT A TAKER.
Cookie says, "You crack me up" (1 comment)
You will prosper in the field of wacky inventions.
Your tongue is your ambassador.
The cure for grief is movement. (1 comment)
Love Is At Your Hands Be Glad And Hold On To It. (1 comment)
You are often asked if it is in yet.
Life to you is a bold and dashing responsibility. (2 comments)
Patience is a key to joy. (1 comment)
A bargain is something you don't need at a price you can't resist.
Today is going to be a disasterous day, be prepared!
Stay to your inner-self, you will benefit in many ways. (1 comment)
Rarely do great beauty and great virtue dwell together as they do in you.
You are talented in many ways.
You are the master of every situation.
Your problem just got bigger. Think, what have you done. (3 comments)
If your cookie still in one piece, buy lotto.
Go with the flow will make your transition ever so much easier. (2 comments)
Tomorrow Morning,Take a Left Turn As Soon As You Leave Home (3 comments)
A metaphor could save your life. (1 comment)
Don't wait for your ship to come in, swim out to it (1 comment)
There are lessons to be learned by listening to others.
If you want the rainbow, you have to tolerate the rain. (1 comment)
Volition, Strength, Languages, Freedom and Power rests in you.
TOO MANY PEOPLE VOLUNTEER TO CARRY THE STOOL WHEN ITS TIME TO MOVE THE PIANO (1 comment)
It takes more than a good memory to have good memories. (1 comment)
You are what you are; understand yourself before you react
Word to the wise: Don't play leapfrog with a unicorn.........
Forgive your enemies, but never forget them.
Everything will now come your way (1 comment)
Don't worry about the stock market. Invest in family.
Your fortune is as sweet as a cookie. (1 comment)
It is much easier to look for the bad, than it is to find the good
If a person who has caused you pain and suffering has brought you, reconsider that person's value in your life (1 comment)
You are worth loving, you are also worth the effort it takes to love you (3 comments)
Never trouble trouble till trouble troubles you. (1 comment)
Get off to a new start - come out of your shell. (1 comment)
Life is a dancefloor,you are the DJ!
Cooperate with those who have both know how and integrith.
Minor aches today are likely to pay off handsomely tomorrow.
You are about to become $8.95 poorer. ($6.95 if you had the buffet) (2 comments)
Your mouth may be moving, but nobody is listening.
Focus in on the color yellow tomorrow for good luck! (1 comment)
The problem with resisting temptation is that it may never come again.
All your sorrows will vanish. (2 comments)
About time I got out of that cookie.
Love will lead the way.
The ads revenge is massive success
It is best to act with confidence, no matter how little right you have to it.
What breaks in a moment may take years to mend.
Someone stole your fortune and replaced it with this one. Your luck sucks. Have a good day!
Take control of your life rather than letting things happen just like that! (1 comment)
You will be rewarded for your patience and understanding. (1 comment)
You will achieve all your desires and pleasures. (4 comments)
Never miss a chance to keep your mouth shut. (1 comment)
Nothing Shows A Man's Character More Than What He Laughs At.
Never regret anything that made you smile. (2 comments)
Love Takes Pratice. (5 comments)
Don't take yourself so seriously, no one else does. (1 comment)
You've got what it takes, but it will take everything you've got!
At this very moment you can change the rest of your life. (5 comments)
Become who you are. (1 comment)
All comes at the proper time to him who knows how to wait.
The energy is within you. Money is Coming!
The quotes that you do not understand, are not meant for you.
You have an important new business development shaping up.
if love someone a lot tell it before it's too late (1 comment)
Birds are entangled by their feet and men by their tongues. (2 comments)
Benefit by doing things that others give up on.
Rest has a peaceful effect on your physical and emotional health.
One of the best ways to persuade others is with your ears--by listening to them. (1 comment)
Plan your work and work your plan.
Over self-confidence is equal to being blind. (1 comment)
Those who bring sunshine to the lives of others cannot keep it from themselves. (1 comment)
Love or money, or neither? (1 comment)
Before the beginning of great brilliance, there must be chaos.
Old friends make best friends. (1 comment)
Stop searching forever. Happiness is just next to you. (1 comment)
Accept something that you cannot change, and you will feel better.
Kiss is not a kiss without the heart. (2 comments)
Enhance your karma by engaging in various charitable activities. (1 comment)
You will have good luck and overcome many hardships. (3 comments)
You never hesitate to tackle the most difficult problems.
Hope is like food. You will starve without it.
WHEN FIRE AND WATER GO TO WAR WATER ALWAYS WINS. (2 comments)
An angry man opens his mouth and shuts up his eyes.
Make the system work for you, not the other way around. (1 comment)
You will be hungry soon, order takeout now.
Be prepared for extra energy.
An unexpected relationship will become permanent. (2 comments)
The love of your life is sitting across from you. (3 comments)
Better be the head of a chicken than the tail of an ox.
To forgive others one more time is to create one more blessing for yourself.
Enjoy yourself while you can. (2 comments)
The ultimate test of a relationship is to disagree but to hold hands.
Excellence is the difference between what I do and what I am capable of.
Do not let what you do not have prevent you from using what you do have.
What ends on hope does not end at all.
People enjoy having you around. Appreciate this.
You are admired for your adventuous ways.
It's never crowded along the "extra mile"
You are blessed, today is the day to bless others.
The Greatest War Sometimes Isn't On The Battlefield But Against Oneself.
People in your background will be more co-operative than usual.
A good way to stay healthy is to eat more Chinese food. (1 comment)
Anyone who dares to be, can never be weak.
Affirm it, visualize it, believe it, and it will actualize itself.
The measure of time to your next goal is the measure of your discipline.
Help, I'm prisoner in a Chinese bakery!!! (1 comment)
Take a minute and let it ride, then take a minute to let it breeze. (3 comments)
We are here to love each other, serve each other and uplift each other. (1 comment)
If everybody is a worm you should be a glow worm
To affirm is to make firm. (2 comments)
Remember this: duct tape can fix anything, so don't worry about messing things up.
You broke my cookie! (2 comments)
Failure is not defeat until you stop trying. (2 comments)
The days that make us happy make us wise.
Men do not fail... they give up trying.
Time may fly by. But Memories don't.
You will win success in whatever you adopt.
You will outdistance all your competitors. (1 comment)
You have a great capability to break cookies - use it wisely! (1 comment)
AT TIMES IT IS BETTER TO KNOW WHEN EXIT THAN ENTER (3 comments)
Money will come to you when you are doing the right thing. (1 comment)
When you get something for nothing, you just haven't been billed for it yet.
You will discover your hidden talents. (2 comments)
You'll advance for with your abilities.
When you can't naturally feel upbeat it can sometimes help you to act as if you did.
You will overcome difficult times. (1 comment)
Your problem just became your stepping stone. Catch the moment.
I am a fortune. You just broke my little house. Where will i live now? (6 comments)
The majority of the word "can't" is can. (1 comment)
The secret of getting ahead is getting started. (1 comment)
Be most affectionate today. (1 comment)
Change your thoughts and you change the world.
Sing and rejoice, fortune is smiling on you. (1 comment)
All the preparation you've done will finally be paying off! (1 comment)
A truly great person never puts away the simplicity of a child.
Customer service is like taking a bath you have to keep doing it.
The expanse of your intelligence is a void no universe could ever fill.
Those grapes you cannot taste are always sour.
An unexpected aquaintance will resurface.
If you want the rainbow, then you have to tolerate the rain.
You don't get harmony when everyone sings the same note. (1 comment)
The race is not always to the swift, but to those who keep on running.
The early bird gets the worm, but the second mouse gets the cheese. (1 comment)
The best things in life aren't things.
Don't bother looking for fault. The reward for finding it is low.
Everything has beauty but not everyone sees it.
Nothing is as good or bad as it appears.
Never cut what you can untie.
Meet your opponent half way. You need the exercise.
Laughter is the shortest distance between two people.
We cannot change the direction of the wind, but we can adjust our sails.
We could learn a lot from crayons: Some of are sharp, some are pretty, some have weird names, and all are different colors. But they all have to learn to live in the same box. (2 comments)
Use your instincts now. (1 comment)
If you take a single step to your journey, you'll succeed; it's not best to fail.
In the eyes of lovers, everything is beautiful. (1 comment)
Warning, do not eat your fortune. (3 comments)
Demonstrate refinement in everything you do. (2 comments)
Impossible standards just make life difficult.
A different world cannot be build by indifferent people.
Q. What is H2O? A. Caring, 2 parts Hug and 1 part Open-mind. (5 comments)
All troubles you have can pass away very quickly.
Integrity is the essense of everything successful. (1 comment)
For true love? Send real roses preserved in 24kt gold! (1 comment)
Sometimes the object of the journey is not the end, but the journey itself. (1 comment)
Fear is just excitement in need of an attitude adjustment. (2 comments)
The food here taste so good, even a cave man likes it. (2 comments)
Perhaps you've been focusing too much on spending.
Happiness isn't something you remember, it's something you experience. (1 comment)
Oops... Wrong cookie. (6 comments)
The dream is within you.
Love is on its way. (2 comments)
Be direct, usually one can accomplish more that way.
Use your talents. That's what they are intended for. (3 comments)
The troubles you have now will pass away quickly. (4 comments)
See the light at the end of the tunnel.
Your dream will come true when you least expect it. (1 comment)
Don't 'face' reality, let it be the place from which you leap. (2 comments)
Fortune smiles upon you today. (3 comments)
Believing is doing.
Your dynamic eyes have attracted a secret admirer. (3 comments)
You know where you are going and how to get there. (2 comments)
Go confidently in the direction of your dreams. (1 comment)
Your ability to pick a winner will bring you success. (2 comments)
Humor usually works at the moment of awkwardness. (2 comments)
A good time to finish up old tasks. (1 comment)
Stop procrastinating - starting tomorrow (1 comment)
Enthusiastic leadership gets you a promotion when you least expect it.
You love Chinese food. (4 comments)
You are far more influential than you think. (1 comment)
Adjust finances, make budgets, to improve your standing.
Happiness is not the absence of conflict, but the ability to cope with it.
An understanding heart warms all that are graced with it's presense. (1 comment)
Your co-workers take pleasure in your great sense of creativity.
You are one of the people who "goes places in life."
Others enjoy your company. (2 comments)
A cheerful message is on its way to you. (1 comment)
A pleasant surprise is in store for you tonight. (4 comments)
you cant go down the right path with out first discovering the path to go down
To courageously shoulder the responsibility of one's mistake is character. (2 comments)
The joyful energy of the day will have a positive affect on you.
You have a strong desire for a home and your family interests come first. (1 comment)
Dogs have owners, cats have staff. (1 comment)
Be patient: in time, even an egg will walk. (5 comments)
You are not a person who can be ignored. (1 comment)
You always know the right times to be assertive or to simply wait.
Reading to the mind is what exercise is to the body. (1 comment)
Eat something you never tried before.
Your life becomes more and more of an adventure! (1 comment)
You need to live authentically, and you can't ignore that.
Make all you can, save all you can, give all you can. (1 comment)
A well-aimed spear is worth three.
To build a better world, start in your community.
When you can't naturally feel upbeat, it can sometimes help to act a if you did.
May you have great luck. (2 comments)
A kind word will keep someone warm for years.
Nothing in the world is accomplished without passion.
Human invented language to satisfy the need to complain.
Accept what comes to you each day.
A small lucky package is on its way to you soon. (2 comments)
In human endeavor, chance favors the prepared mind.
Do not upset the penguin today. (2 comments)
Don't cry. (1 comment)
The best way to give credit is to give it away. (1 comment)
Anything you do, do it well. The last thing you want is to be sorry for what you didn't do.
It takes more then good memory to have good memories. (1 comment)
Grant yourself a wish this year only you can do it. (1 comment)
love thy neighbour, just don't get caught (3 comments)
You will be selected for a promotion because of your accomplishments. (2 comments)
There are many new opportunities that are being presented to you. (1 comment)
You will inherit a large sum of money. (2 comments)
You will recieve a gift from someone that cares about you.
You are not illiterate. (1 comment)
Love because it is the only true adventure.
You are contemplating some action which will bring credit upon you
Keep true to the dreams of your youth.
Treasure what you have. (1 comment)
The greatest precept is continual awareness. (1 comment)
A new friend helps you break out of an old routine.
I have a dream.... Time to go to bed. (1 comment)
Your skill will accomplish what the force of many cannot.
You will soon be surrounded by good friends and laughter. (2 comments)
The best is yet to come.
It is better to be the hammer then the anvil.
He who climbs a ladder must begin at the first step.
Action speaks nothing, without the Motive. (1 comment)
A cheerful message is on its way to you. (1 comment)
A pleasant surprise is in store for you tonight. (4 comments)
you cant go down the right path with out first discovering the path to go down
To courageously shoulder the responsibility of one's mistake is character. (2 comments)
The joyful energy of the day will have a positive affect on you.
You have a strong desire for a home and your family interests come first. (1 comment)
Dogs have owners, cats have staff. (1 comment)
Be patient: in time, even an egg will walk. (5 comments)
You are not a person who can be ignored. (1 comment)
You always know the right times to be assertive or to simply wait.
Reading to the mind is what exercise is to the body. (1 comment)
Eat something you never tried before.
Your life becomes more and more of an adventure! (1 comment)
You need to live authentically, and you can't ignore that.
Make all you can, save all you can, give all you can. (1 comment)
A well-aimed spear is worth three.
To build a better world, start in your community.
When you can't naturally feel upbeat, it can sometimes help to act a if you did.
May you have great luck. (2 comments)
A kind word will keep someone warm for years.
Nothing in the world is accomplished without passion.
Human invented language to satisfy the need to complain.
Accept what comes to you each day.
A small lucky package is on its way to you soon. (2 comments)
In human endeavor, chance favors the prepared mind.
Do not upset the penguin today. (2 comments)
Don't cry. (1 comment)
The best way to give credit is to give it away. (1 comment)
Anything you do, do it well. The last thing you want is to be sorry for what you didn't do.
It takes more then good memory to have good memories. (1 comment)
Grant yourself a wish this year only you can do it. (1 comment)
love thy neighbour, just don't get caught (3 comments)
You will be selected for a promotion because of your accomplishments. (2 comments)
There are many new opportunities that are being presented to you. (1 comment)
You will inherit a large sum of money. (2 comments)
You will recieve a gift from someone that cares about you.
You are not illiterate. (1 comment)
Love because it is the only true adventure.
You are contemplating some action which will bring credit upon you
Keep true to the dreams of your youth.
Treasure what you have. (1 comment)
The greatest precept is continual awareness. (1 comment)
A new friend helps you break out of an old routine.
I have a dream.... Time to go to bed. (1 comment)
Your skill will accomplish what the force of many cannot.
You will soon be surrounded by good friends and laughter. (2 comments)
The best is yet to come.
It is better to be the hammer then the anvil.
He who climbs a ladder must begin at the first step.
Action speaks nothing, without the Motive. (1 comment)
Give yourself some peace and quiet for at least a few hours. (1 comment)
Live each day well and wisely (1 comment)
Old dreams never die they just get filed away.
You can fix it with a little extra energy and a positive attitude.
Life is a verb
A man without aim is like a clock without hands, as useless if it turns as if it stands. (3 comments)
Many folks are about as happy as they make up their minds to be.
It's kind of fun to do the impossible (1 comment)
Wow! A secret message from you teeth! (1 comment)
You should be able to make money and hold on to it. (1 comment)
The human spirit is stronger than anything that can happen to it. (2 comments)
Your succeess will astonish everyone.
It is better to have a hen tomorrow than an egg today.
Judge each day not by the harvest you reap but by the seeds you plant. (1 comment)
You like Chinese food. (1 comment)
Your hard work will get payoff today. (1 comment)
Today is the tomorrow we worried about yesterday
There are no shortcuts to any place worth going
No matter what your past has been, you have a spotless future.
Your secret desire to completely change your life will manifest. (1 comment)
Soon you will be sitting on top of the world. (1 comment)
You are never selfish with your advice or your help.
A thrilling time is in store for you. (1 comment)
It's tough to be fascinating. (1 comment)
Soon life will become more interesting
Luck sometimes visits a fool, but it never sits down with him.
Keep your plans secret for now. (1 comment)
Aren't you glad you just had a great meal?
Traveling this year will bring your life into greater perspective. (1 comment)
Only talent people get help from others.
Constant grinding can turn an iron nod into a needle.
You will be successful in your work
you will spend old age in confort and material wealth
When you're about to turn your heart into a stone remember: you do not walk alone.
I am a bad luck person since I was born (1 comment)
You are vigorous in words and action. (3 comments)
The one who snores will always fall asleep first. (2 comments)
An alien of some sort will be appearing to you shortly! (1 comment)
Rest is a good thing, but boredom is its brother.
Do not be overly judgemental of your loved one's intentions or actions.
Think of how you can assist on a problem, not who to blame.
The life of every woman or man - the heart of it - is pure and holy joy.
Take it easy (2 comments)
Trust your intuition. The universe is guiding your life. (3 comments)
Use your head, but live in your heart. (2 comments)
Don't find fault, find a remedy
It may be those who do most, dream most (1 comment)
Your passions sweep you away.
Listen to yourself more often (1 comment)
Think of mother's exhortations more.
The gambler is like the fisherman both have beginners luck.
You are given the chance to take part in an exciting adventure. (1 comment)
The simplest answer is to act. (1 comment)
You will always be surrounded by true friends. (1 comment)
Keep your feet on the ground even though friends flatter you. (1 comment)
You are the man of righteousness and integrity.
He who seeks will find. (1 comment)
The smart thing to do is to begin trusting your intuitions.
Your many hidden talents will become obvious to those around you.
Pick a path with heart.
The human spirit is stronger then anything that can happen to it.
It takes more than good memory to have good memories.
Face facts with dignity. (1 comment)
Be calm when confronting an emergency crisis.
Do you believe? Endurance and persistence will be rewarded. (1 comment)
A new wardrobe brings great joy and change in your life. (1 comment)
Everyone agrees you are the best. (4 comments)
A new outlook brightens your image and brings new friends. (1 comment)
Everything will now come your way.
You will be called to fill a position of high honor and responsibility.
The eyes believe themselves; the ears believe other people.
Good beginning is half done. (1 comment)
Some pursue happiness; you create it. (1 comment)
It's the worst of times, you need to summon your optimism.
You are cautious in showing your true self to others. (2 comments)
Your ability to accomplish tasks will follow with success. (1 comment)
We all have extraordinary coded within us, waiting to be released. (1 comment)
You will have a bright future. (3 comments)
Compassion is a way of being.
You will always have good luck in your personal affairs. (1 comment)
The pleasure of what we enjoy is lost by wanting more
Did you remember to order your take out also?
Perhaps you've been focusing too much on that one thing.. (2 comments)
Right now there's an energy pushing you in a new direction. (1 comment)
Everybody feels lucky for having you as a friend.
When the moment comes, take the top one. (1 comment)
Sometimes travel to new places leads to great transformation.
There is always a way - if you are committed.
Life is too short to waste time hating anyone.
All the world may not love a lover but they will be watching him. (2 comments)
Don't just spend time, invest it.
Life always gets harder near the summit.
Take the chance while you still have the choice. (3 comments)
It is much easier to be cirtical than to be correct. (1 comment)
Enjoy life! It is better to be happy than wise. (1 comment)
To make the cart go, you must grease the wheels.
You are contemplating some action which will bring credit upon you.
Before you wonder "Am I doing things right," ask "Am I doing the right things?" (1 comment)
You may be disappointed if you fail, but you are doomed if you don't try. (1 comment)
You will always get what you want through your charm and personality.
"Be a generous friend and a fair enemy"
Never quit! (3 comments)
Old friends, old wines and old gold are best (1 comment)
If your desires are not extravagant, they will be granted (2 comments)
Every Friend Joys in your Success (2 comments)
You should be able to undertake and complete anything
You will enjoy good health, you will be surrounded by luxury
You are a person of strong sense of duty
Dream lofty dreams, and as you dream, so shall you become.
You have a quiet and unobtrusive nature.
Great thoughts come from the heart.
You love peace
Judge not according to the appearance.
One who admires you greatly is hidden before your eyes. (3 comments)
Traveling more often is important for your health and happiness.
You will be sharing great news with all people you love (2 comments)
You have a reputation for being straightforward and honest.
You are always welcome in any gathering.
You will be traveling and coming into a fortune. (1 comment)
Open up your heart - it can always be closed again.
Being happy is not always being perfect.
Next time you have the opportunity, go on a rollercoaster.
Try everything once, even the things you don't think you will like.
Life is too short to hold grudges.
Dream your dream and your dream will dream of you. (1 comment)
Being alone and being lonely are two different things. (2 comments)
Don't worry about things in the past, there is nothing you can do about them now. Don't worry about things that are happening now, make the best of a bad situation. Don't worry about things in the future, they may never happen. (4 comments)
Tomorrow, take a moment to do something just for yourself.
Someone close to you is waiting for you to call.
A virtual fortune cookie will not satisfy your hunger like that of a home made one. (1 comment)
Smile. Tomorrow is another day.
You can never been certain of success, but you can be certain of failure if you never try. (1 comment)
It takes ten times as many muscles to frown as it does to smile.
Shoot for the moon! If you miss you will still be amongst the stars. (4 comments)
Keep your eyes open. You never know what you might see. (1 comment)
Tell them what you really think. Otherwise, nothing will change. (1 comment)
Let your heart make your decisions - it does not get as confused as your head. (1 comment)
Working hard will make you live a happy life.
A pleasant surprise is waiting for you. (2 comments)
The big issues are work, career, or status right now.
Your emotional currents are flowing powerfully now.
Any decision you have to make tomorrow is a good decsion. (1 comment)
Consume less. Share more. Enjoy life.
The secret of staying young is good health and lying about your age.
Spring has sprung. Life is blooming.
Go ask your mom. (5 comments)
The possibility of a career change is near.
The important thing is to never stop questioning.
Compassion will cure more then condemnation.
Excuses are easy to manufacture, and hard to sell. (1 comment)
Put your mind into planning today. Look into the future.
Listen to life, and you will hear the voice of life crying, Be! (1 comment)
Broke is only temporaryl poor is a state of mind.
Here we go. "Moo Shu Cereal" for breakfast with duck sauce.
Teamwork: the fuel that allows common people attain uncommon results.
Hard words break no bones, fine words butter no parsnips.
We cannot direct the wind but we can adjust the sails. (1 comment)
You are offered the dream of a lifetime. Say yes! (1 comment)
Working out the kinks today will make for a better tomorrow.
You have a curious smile and a mysterious nature. (1 comment)
Questions provide the key to unlocking our unlimited potential. (1 comment)
You will enjoy razon-sharp spiritual vision today.
The wise are aware of their treasure, while fools follow their vanity
Well-arranged time is the surest sign of a well-arranged mind.
Never bring unhappy feelings into your home. (1 comment)
This is really a lovely day. Congratulations!
Bad luck and ill misfortune will infest your pathetic soul for all eternity. (3 comments)
A golden egg of opportunity falls into your lap this month. (5 comments)
You are very grateful for the small pleasures of life. (1 comment)
today you should be a passenger. Stay close to a driver for a day.
For hate is never conquered by hate. Hate is conquered by love.
Service is the rent we pay for the privilege of living on this planet.
Good clothes open many doors. Go shopping. (3 comments)
The leader seeks to communicate his vision to his followers. (1 comment)
Great works are performed not by strength, but by perseverance. (1 comment)
People who are late are often happier than those who have to wait for them (2 comments)
Present your best ideas today to an eager and welcoming audience.
Friends long absent are coming back to you. (1 comment)
The time is right to make new friends.
Life to you is a dashing and bold adventure
You may be hungry soon: order a takeout now. (1 comment)
Do not hesitate to look for help, an extra hand should always be welcomed.
How can you have a beautiful ending without making beautiful mistakes? (1 comment)
Humor is an affirmation of dignity
He who climbs a ladder must begin at the first step
What's vice today may be virtue tomorow.
You have an unusually magnetic personality.
You will travel to many places. (1 comment)
"Accept yourself" (1 comment)
Jake: Ha-ha-ha. Okay, now make him look angrier!
Finn: Alright, give me a second.
[Finn draws angry-looking eyebrows on Ice King]
Jake: Nope, not funny anymore. Sorry, dude—you ruined it.
Finn: Man, I don't have patience for this animation junk. Whoever does this must have no life whatsoev—
[Finn punches himself.]
Finn: Oof... Why did I do that?
[A brick is thrown through the window, and Jake approaches it using his stretchy powers.]
Jake: Yo Finn, did you order a brick?
Finn: Hm, I don't think so.
Jake: [Reads the floppy disk that is taped to the brick. It says, "Email to Finn + Jake."] False alarm; it's just an email.
Finn: Who's it from?
Jake: Looks like Ice King's handwriting.
[Jake inserts the disk into the computer. A video of a girl eating her hair and gagging immediately starts playing. Finn and Jake watch it, paralyzed with disgust.]
Finn and Jake: Eeeww!
Finn: Escape, Jake! Escape!
Jake: Alright, alright, hold on. [Jake presses ESC repeatedly on the keyboard.] Oh man! Thing must've had a computer worm in it!
[The computer displays a red screen and spikes emerge from it, and the computer becomes triangles.]
Finn: Whaa? Aaaah!
[Finn and Jake run scared from the computer. Scene changes to the Candy Kingdom , where Princess Bubblegum is watering flowers and the Ice King appears flying.]
Ice King: Hey, Princess!
Princess Bubblegum: What now, Ice King?
Ice King: Remember that time last summer when you said you'd only go out on a date with me if I was the last guy on Ooo?
Princess Bubblegum: I doubt I said that.
[Finn and Jake come running and screaming hysterically.]
Finn and Jake: P-bubs! P-bubs, P-bubs!
Finn: The computer went...
Jake: Open video and...
Finn: The email...
Jake: Potato trampoline...
Finn: Brick window with the plastic...
Jake: Then crashment!
Finn: Banana hummingbird...
Jake: 47 grapes!
Ice King: [cleans throat] Anyone having any... [robotic voice] computer problems? [A laugh track plays and stops once Ice King turns off the recorder he is holding.]
Finn: How do we stop the computer worm, you pile of goo?!
Ice King: E-ha-ha-ha-ha! My worm exists beyond your comprehension within the universal source code...
Finn: STOP TALKING LIKE A NERD AND GIVE IT TO US STRAIGHT!!!
Ice King: Once the glitch does its work, the whole world will be deleted! Except for me and my "Bubblygums." [Attempts to kiss Princess Bubblegum, who moves him away with a stick and then throws it at his face.] Ow!! Well, see y'all! I'm gonna prepare for my... date. Ahaha! [Teleports away.]
Donut Guy: [Crashes out of the door of a house with a glitchy face, running in circles.] AAAAAHH! MY BEAUTIFUL FACE!! MY HOPES AND DREAMS—RUINED!!! [Emits beeps and runs away]
Finn: Don't worry, Princess, we'll take care of this thing.
Princess Bubblegum: Oh, me too. [Loads her candy horse tranquilizer] I'm gonna take care of it, too. [Slowly walks away]
Finn: Okay! [Runs away with Jake]
[The scene changes to a street within the Kingdom with a glitchy transition. The Candy People are seen suffering and screaming from the glitches.]
Finn: [Grabs Mr. Cupcake] Don't worry, guy! I got you! [Mr. Cupcake disappears.] YEOW! JAKE, HELP ME!!!
Jake: [talking to Chocoberry] Okay, shh, you're safe! [Chocoberry's arms and legs fell apart then disappeared.]
Finn: Come here, guy!
Sugar Cube: No... Stay away from me!
Finn: I'm trying to help you, yo!
Sugar Cube: I saw what happened when you picked up Todd. [Fades away]
Finn: But... No!! Jake, this isn't working! We need a plan.
[Jake immediately falls asleep. 52 seconds later, almost the whole Kingdom has disappeared, including the ground and the sky. Finn slaps Jake's face, which wakes him up.]
Jake: Aw, man. Okay, here is my dream plan. You were wearin' tights made of green feathers. These tiny green feathers. And I was this wisecracking coelacanth that only ate popcorn. Anyway, we were in this—
Finn: THAT PLAN'S NOT GOOD!
[Finn panics and displays some emoticons on his face while Jake is talking.]
Jake: Hold on, I'm almost done. So we were trapped inside this huge egg, and after a while you started dancing in this kind of sign language. And then Ice King's glitchy stuff started eatin' my dream up. I peed in my pants, but you went up and talked to it. You just... talked to it.
Finn: Then talk to it I will. [Grabs a bit of glitch static from the ground.] Hey man, tell me the haps.
Jake: Yeah, tell us your feelings! Get deep.
[The static makes computerized noises. Subtitles appear on the screen saying "I can't help you, goofballs," which happens to be in front of Finn and Jake. It appears in inverse, confusing Finn and Jake.]
Jake: "Sllabfoog uoy pleh tnac I..."
Donut Guy: [running and screaming] OH, SWEET LORD, MY FACE! MY PERFECT...!!
Jake: Slaw frog yokel snacky. Snacky slaw frog yokel. Sea salt yack let a snacky. Yeah, that sounds good!
Donut Guy: AAAAAAAAAAH...!!!
Finn: [Digging in the static.] Jake, I think I found a way in!
Jake: No, wait, dude. I think I cracked the code!
Finn: There's no time! [Grabs Jake and enters a portal.]
Jake: AAAAAAH!!!
Finn: AAAAH... AAH!!!
[After a transition effect, Finn and Jake are teleported to the universal source code.]
Jake: This must be the universal source code!
[Finn floats to an ice crystal that contains the coding for Ice King and Princess Bubblegum.]
Finn: Huh? Ice King and Bubblegum?
[Jake is looking at the hexagons of code for a spider and a snake. The scene goes back to Ooo, where a snake and giant spider are seen facing each other. Back at the source code, Jake grabs the snake hexagon and connects it to the spider hexagon. In Ooo, it is shown the snake and the spider had been conjoined, creating a hybrid.]
Finn: Jake! Don't touch anything!
Jake: Huh?
Finn: I think the shiny things are the building blocks of the universe, man! They store every single thing that is a thing back on thing!
Jake: Okay, enough exploring already. Where is this glitch guy? I'm gonna smash his jimmies. [Looks to the front and cringes in fear]
Finn: Jake, what is it?
[Jake curls up into a ball in fear and points to a glitch monster with Ice King's face. The glitch grabs the hexagon of a chair and eats it. Back in the Candy Kingdom, Princess Bubblegum is in her castle loading her candy gun when her chair and her other things start disappearing and she falls down.]
Ice King: Oh, Princess Bubblegum? Guess who? Can you guess? Can you? I'll give you 3 chances.
Princess Bubblegum: No.
Ice King: OK, four chances. [Imitates rimshot]
Princess Bubblegum: [Stands up] Ice King, give me the anti-virus, or I'll shoot you with my candy horse tranquilizer!
Ice King: But sugar, look what I brought you! A box of chocos! [Eats a chocolate] Hm... Still good. [Box disappears] Argh. Look, I can't prove it, but... [Bubblegum shoots him.] ...you made a promise we'd have at least one date if... [PB shots him twice, and he starts speaking slowly.] ...if I was the last person on Ooo... [Ice King is shot several times in the face.] You promised... [The tranquilizer darts disappears and so does the gun, making Ice King healthy again.]
Princess Bubblegum: Okay, well, even if I did promised, you're not the last person on Ooo, because I'm still here. [PB starts kissing her left palm.]
Ice King: Well, uh... Ooh, I-I have a hand too, y'know? I can lend you one... [Ice King starts shaking his hand and a gross closeup of it is shown.] Check out my cool hand! [The camera zooms in on Ice King's ugly hand.]
Princess Bubblegum: Oh, that's disgusting.
Ice King: Grrrr!!!
[Scene changes to Finn grabbing Jake by his arm in the source code.]
Finn: Come on, Jake, pull it together, man.
[The glitch grabs a piece from Jake's coding which happens to be his right arm. Finn is shown with a realistic face and notices Jake's arm had unattached from his body.]
Finn: Jake?
Jake: Oh, no, my arm! [grabs arm.] We had so many great times together...
[A flashback of Jake "flying" his arm as if it was a kite is shown.]
Jake: Dooby, dooby, dooby, dooby, skeebily, skeebily, dapdy doo...
[Flashback changes to Jake in a bathroom with his arm tapping on his left shoulder behind his back.]
Jake: Huh? Who's that? [Sees it was Righty] Awww.
[Flashback changes to Jake lifting proudly a portrait of he with his right arm, and then the flashback ends]
Jake: [confidently] Let's do this... for Righty!
Finn: That's the spirit! [Grabs sword.] ADVENTURE TI--!!! [Finn's legs starts fading.] Oh, my gams!! Hold up, dude, my body's changing!
[Scene changes to Ooo, almost completely deserted. Princess Bubblegum is still making out with her hand, while a sad Ice King is building ice statues of himself.]
Princess Bubblegum: [Kisses her hand several times, and then licks it, after that, she pushes it away.] ...No. [Continues kissing the hand.]
Ice King: Oh, come on, woman, I'm trying to be nice! Can't you at least make the best out of this? [PB walks to Ice King and kneels in front of him.] Are you praying to me? I'm into this. [Bubblegum lifts his tunic, covering his head as if it were a bag.] ...I'm still into this. [The princess pushes him, making him to fall down.] Still into it.
Princess Bubblegum: [Stomping Ice King's head.] GIVE ME THE ANTI-VIRUS!
Ice King: I can't, monkey peeps, I didn't make one! The glitch will delete everything until we're all that's last!
Princess Bubblegum: You mean, forever?!
Ice King: Well, yeah! I mean, you say that like it's a bad thing.
Princess Bubblegum: Come on, Finn and Jake....
[Scene changes to Finn and Jake in the source code. Jake is stretched as a giant floating worm and Finn is only a head, with his sword in his mouth.]
Jake: So, hey, Finn, how do you plan on taking this guy out?
Finn: [voice is muffled by the sword]
Jake: Okay, I guess it's worth trying.
[A "One Second Later" transition is shown, which lasts exactly 20 seconds. After that, Finn and Jake get close to the glitch. Jake launches Finn with his tail, and Finn's sword cuts make a teeth-like formation that eats his sword. Jake goes back to normal, showing that he's also only a head now. The screen is shown to be glitchy, with lots of lag effects.]
Jake: Aah! What we do now?
Finn: We gotta get those things... outta his stomach.
[A glitchy image of the gross video of the girl is shown in the background.]
Jake: Hey, Finn! Remember that gross video Ice King sent?
Finn: [disgusted] Ugh, yeah. [confidently] Yeah!!
[Jake floats to Finn's hat and takes it away with his mouth, showing his enormous hair. Finn bites a bit of hair.]
Jake: Let's double team these locks! [Bites Finn's hair and starts swallowing it along with Finn. The glitch gets more glitchy. As the glitch roars and starts coughing, it pukes out all of the things it ate from the universal source code. Weird, random stuff starts to happen, it loads and the land of Ooo starts reloading with the candy people. By a pond, Finn and Jake come back still biting Finn's hair.]
Finn and Jake: We did it! [They high-five and start coughing.]
Jake: You should wash your hair!
Finn: You should wash your mouth! [They start walking as Ice King is seeing the land of Ooo reloading.]
Ice King: Huh? No way! Impossible! [Makes noises and when he moves, the house he was in reloads. His head was already outside of the house, so his head gets stuck in the wall.] Uh...
Jake: Everything back to normal, huh?
Finn: Seems like it.
Donut Guy: [running] Aah! My face!! My beautiful face is back to normal!!! Aaah!!!! [Runs around Finn and Jake, Finn stops him.]
Finn: Hey, have you seen the princess anywhere?
Donut Guy: Yes, she's in the Ice King's castle. AUGGH! [Starts running again.]
Princess Bubblegum: [Destroying Ice King's holographic computer with a baseball bat] Useless-- [Hits it with the baseball bat.] Ugh! --computer! You sassa-frassin-- Nu!! --hammer-slammin-- Ruh! --wamma-jammin... [Stomps on the computer.] Ugh! [elbow drops on it as the table collapses.] Ugh! [Hits the computer twice.] Ah-ya-ya-ya-ya! [Hits it hard. She sees Finn and Jake.] Finn and Jake! [Throws the baseball bat away.] My heroes! [Picks them up and hugs them.]
Jake: Yeah, no big deal. Geez... [PB and Jake make faces on their hand and elbow.]
Princess Bubblegum's hand: I missed you!
Jake's elbow: I missed you, too! [They kiss.] Whoa, you taste different, baby! You been playin' basketball in someone else's hockey rink?
Finn: Ahem... Hey, Bubs, where's the Ice King? I wanna kick his boingloings!
Jake: Yeah. Where is he? I wanna kick his boingloings, too!
Ice King: Uh... guys? Hello? Princess. Uh... Let's forget all about this... [the snake-spider hybrid wanders onscreen and bites Ice King several times.] Ugh get off of me, you creep! Ow ow ow ow ow ow ow ow ow ow ow ow ow ow ow ow ow ow!
Finn: Hey, Jake, do you think you should date someone just like you or someone who’s like your opposite?
Jake: I don’t know. I’m the "first come first serve" kinda guy. Get in line, ladies! This Rainicorn thing can’t last forever! [chuckles] [Magic Man peeks out from under a strip of grass, unnoticed by Finn and Jake] I didn’t mean that. Don’t spread that around.
Finn: So it’s not good to weigh someone’s qualities against your own?
Jake: Well, no. I mean, if you feel something, you feel something! [Jake’s head turns into a graph and his hand an upward moving arrow] It’s not about personality matrixals and charts, it’s all about the bu-bumps in your heart! [His head is a heart shape that beats every time he say “bumps” or “pumps”. He gets extremely close to Finn and his eyes are bugging out] You can’t stop the pumps and bumps! Pumps and bumps! Pumps and bumps! [Finn chuckles, as does Magic Man]
Finn: Alright, well, what about BMO and Ice King?
Jake: What about them? [Looks confused]
Finn: Would they make a good couple?
Jake: Whoa! Wait! Did BMO say something to you?
Finn: No no!
Jake: Oh, I see. You’re being weird.
[Magic man reaches down into his hole and pulls out a bag]
Finn: It’s not that weird! Come on!
Magic Man [quietly]: Do what thoust will be the whole piece of Law.
Jake: BMO and Ice King?
[Magic man puts the bag on the outside of Finn’s pants]
Finn: Yeah!
Magic Man [quietly]: I’m not coming back. [Retreats into his hole]
Jake: You’re creepin’ me out. [Gets up]
Finn: I’m just thinkin’ out loud. [Jake starts walking away and Finn bends forward so he can see Jake between his legs] What, can’t think out loud?
[Finn is walking back home with Jake]
Jake: Oh, is that what you’re doing?
Finn: Yeah man! Pffft, jeez don’t be judgy.
Jake: I’m not!
Finn: Yeah, you are!
Jake: How could you know that?
Finn: I can hear it in your tone.
Jake: You can? [in a mocking tone]
Finn: Yeah, wise-guy.
Jake: [Pointing to the bag] Hey, what’s that in your pants?
Finn: [Looking at the back of his pants] What?! Not again! [Finn sees the bag on the other side] Oh. I don’t know. [Finn grabs the bag] Whoa, look.
Jake: Crazy. [Finn opens the bag and reaches in] Careful, dude.
Finn: What the--? [Finn pulls out his hand with Princess Bubblegum, Lumpy Space Princess, BMO, Jake, and himself]
Jake: What the heck?! Are they alive?! [They are now moving around aimlessly]
Finn: Hey, are you guys alive? [BMO starts to fall off, but Jake catches him] I don’t know, man, I think they’re some kind of magic toy.
Jake: Maybe it’s black magic. Maybe we shouldn’t mess with them.
Finn: No, man, look! That’s you! [Jake is playing the viola with Lumpy Space Princess on his back and Finn and BMO are dancing to the music] You’re totally shedding on the viola.
Jake: Yeah, that’s good. How many more thingies are in there?
Finn: [Looks in the bag] Dude. Like a lot. Come on! Let’s check this out at the house. [They run towards the house]
Jake: I’ll make a special spagot [spaghetti] with a new sauce.
[Finn is at the table while Jake is cooking the spaghetti. He dumps out some of the little people onto the table]
Finn: Sheesh. So many. PB, you hang out with Lady. [Picks up Princess Bubblegum and moves her towards Lady] C-listers, go back in the bag. [Pushes Xergiok, Donny, Tiffany, Lemongrab, one of the Gumdrop lasses, and'Turtle Princess]
Jake: [stirring the noodles] Who’s in the C-list? [Adds something, possibly wine, from a bottle, then dumps some spaghetti onto each plate]
Finn: Tiffany, Donny. [To himself] Well, he’s okay. [Out loud] Xergiok... a bunch o' these guys!
Jake: That’s not very nice. [Turns off the stove and brings the food to the table]
Finn: Don’t worry, man. They’ll get involved eventually.
Jake: Involved with what? [Sits down and gives Finn his food]
Finn: I don’t know. Involved. Check out Lady and Princess Bubblegum!
Jake: [Stretches to get forks. Lady and Princess Bubblegum are having a conversation. It looks as though Princess Bubblegum is asking Lady questions] What are they talkin’ about?
Finn: It’s hard to say, but I think it’s got something to do with Lady being preggos [pregnant].
Jake: Whoa! What kinda narrative are you trying to create here?!
Finn: That’s your narrative, buddy.
Jake: Alright, well, what else ya got goin’ on?
Finn: Hmm. Not much really. I got Ice King over here. [Points to Ice King]
Jake: Ice King? He’s not C-list?
Finn: [Looking through the bag to find Ice King's drum kit] Yeah, well, I saw his drum kit in here. Here we go. [Puts it in front of Ice King] Okay, jam out, little Ice King. [Ice King starts playing]
Jake: [Little Jake sees the Ice King playing and runs over to him to join in] No. Don’t play with that hack. Aww, man. Hmm. [Jake looks surprised] They’ve got good chemistry. Who’d have guessed?
Finn: Chemistry...
[Finn looks as though he just had a good idea. He looks at several groups of toy people. Ice King and Jake playing together. Marceline and Hunson Abadeer in the background with Finn stealing Lemongrab’s Lemon Camel in the foreground. Mr. Cupcake exercising. Flame Princess and Lumpy Space Princess playing cards]
Jake: Hey, Finn, eat the food before it gets cold. [Pops up from behind Flame Princess and Lumpy Space Princess] I made a new sauce! Umm, earth to Finn, are you okay?
Finn: Yeees.
[Later on, Finn is now awake, but in bed with Jake fast asleep. Finn looks over at Jake to make sure he’s asleep. Confident that he’s asleep, he grabs the bag from under his pillow and retreats into his sleeping bag. He takes the lens off a flashlight and puts it in front of him. Then he takes Mr. Cupcake and Lumpy Space Princess out. Mr. Cupcake starts flexing and Lumpy Space Princess is impressed. Finn chuckles. Lumpy Space Princess looks enamored and begins working her lumps. Mr. Cupcake and Lumpy Space Princess start kissing]
Finn: Whoooooa.
[Finn looks curious and takes away Lumpy Space Princess. Mr. Cupcake looks surprised. Finn looks and the bag and then mixes it. Finn grabs Lady and then checks to make sure Jake is still asleep. He then puts Lady next to Mr. Cupcake. Mr. Cupcake starts flexing, but Lady ignores him and grazes a piece of Finn’s sleeping bag. When he sees nothing is happening, he pushes Lady into Mr. Cupcakes arms. Mr. Cupcake wiggles his eyebrows and Lady laughs.]
[Finn then grabs Jake and contemplates what he’s about to do. He looks a bit concerned. Lady and Mr. Cupcake are kissing and Finn puts Jake right in front of them. Jake doesn’t notice, but Finn moves his head around to see them. Then Jake starts yelling “wah”. Mr. Cupcake drops Lady and she acts with indignation towards Jake. Jake argues back and then Mr. Cupcake starts yelling at Jake. Jake pushes him and Lady pleads that they not fight. Finn looks towards the bag and then looks back with realization. He empties out the bag. The scene ends.]
Jake: [Jake wakes up and heads down stairs. Finn is sitting at the dinner table with a multitude of Jay T. Doggzone books arranged into a little town] You’re up early.
Finn: I didn’t sleep. [Very blunt and tired]
Jake: [Comes back to the table with a drink in a mug] You stay up all night readin’ trash books? [Finn makes a weak “meh” sound.] I told you, man. Those datin’ books. [Sips drink] That stuff is mess you up. [Drinks again]
Finn: I’m not reading. I’m playing with the little wees.
Jake: Oh, let me see little me. [Stretches his head to find little Jake is sitting by himself next to an open book] Me look so lonely. Hey, Finn, pass me little Lady.
Finn: Uh, you guys broke up.
Jake: [Confused] Wha?
Finn: She’s with someone else now.
Jake: [Angry] Who?!
Finn: He’s a cool guy, don’t worry about it.
Jake: [Hears Lady laughing and goes to the source. He finds little Finn in Lady’s lap kissing under a book teepee] Ahhhhhh! [Slams his fists on the table] What the ball, man?!
Finn: [Laughs and shrugs; he doesn’t sound as worn out as before] What?
Jake: What? What do ya think “what”?!
Finn: Come on, they’re not real, they’re like toys. These guys here, they’re goin’ out. [Points the Marceline and Peppermint Butler in a tea cup. Marceline licks the red off of Peppermint Butler’s side.] Pretty serious. And look at Choose Goose and Lollipop Girl. They’re still testing the waters. [Choose Goose and Lollipop Girl are dancing and are joined by Abracadaniel] But I think things are gonna work out. Check out Xergiok and Turtle P. [Turtle Princess is seen lightly spanking Xergiok. Finn laughs.] Weird. But cool. Right, Jake?
Jake: [slowly backs towards the exit] I don’t like where you’re going with this. It ain’t wholesome. I’m gonna go to Lady’s for a few days. To clear my head. [Leaves]
Finn: Okay. Whatever whatevs. [Goes over to little Finn and Lady and chuckles] Weird. [Grabs little Finn and Flame Princess] Huh?
[Finn puts both of them near each other, but nothing happens. Finn breaks off part of a cookie and puts in on little Finn’s head. He grabs it and Flame Princess yawns. Finn uses a pencil to move little Finn’s legs to walk towards Flame Princess. Flame Princess is pleasantly surprised to see little Finn and giggles. Little Finn breaks part of the cookie crumb off and gives it to Flame Princess. They then start to eat each end of what’s left. Lady comes out of her teepee to see little Finn and Flame Princess and starts crying hysterically]
[Finn then drops Princess Bubblegum in between Flame Princess and little Finn. At first they awkwardly stand around, but Finn moves Princess Bubblegum’s hand onto little Finn’s shoulder. She begins massaging his shoulders and he likes it. Real Finn looks around nervously to make sure no one can see what he’s doing. Then they kiss and Flame Princess is outraged. She begins yelling at Princess Bubblegum and Princess Bubblegum yells back. Little Finn tries to diffuse the situation, but Flame Princess leaps onto Princess Bubblegum. Princess Bubblegum’s dress catches on fire so she runs away into Lady’s teepee. Using Lady as a kind of hose, the water being her tears, Princess Bubblegum partially extinguishes Flame Princess. They begin fighting and real Finn is astonished and begins blushing.]
[A card that reads "16 WEEKS LATER" comes up.]
Jake: I’m back! I got over all that messed up stuff you did. [The tree house is covered in trash and Finn looks awful] Yeesh. You okay, man?
Finn: I don’t know.
[Little Finn is standing on top of a book staring into the distance]
Jake: What’s little Finn doing?
Finn: He’s... thinking.
Jake: [Looks concerned] He looks sad. What’s he thinking about?
Finn: I don’t know. Probably lots of stuff.
Jake: Where’s little Rainicorn?
Finn: Probably still crying.
Jake: Wha?
Finn: She’s not handling the break-up very well.
Jake: [sees Lady still crying in her teepee] Aww.
Finn: PB's good, though. [Princess Bubblegum is on a weight bench lifting weights and she has become very toned. She looks very angry.] After little Finn dumped her, she started working out. Looks like she’s really into it.
Jake: This is messed up, dude. You’ve crossed the line from weird curiosity to some dark messed up stuff.
Finn: [Looks perturbed] I know!
Jake: [Marceline has licked away half of Peppermint Butler] The destruction! [Xergiok looks like he’s in pain and Turtle Princess is furiously spanking him] The depravity! [Choose Goose, Abracadaniel, and Lollipop Girl are all tangled up together] The wrongness of it all! I’m taking that bag back to the cliff where we found it. [Tries to grab them but Finn grabs his arms.]
Finn: No, man! I gotta fix this mess! Look at me, man! I’m staring into the shadow of my darkest mind hole! I gotta help him!
Jake: You can’t! Just let them do their own biz, man!
Finn: I junked them up too hard though! I gotta step in!
Jake: How would ya do that?
Finn: [Lets go of his arms and Jake steps back] I’m gonna talk to him.
Jake: But he can’t hear you.
Finn: Yeah, why is that?
Jake: Hmm. Maybe we’re on different dimensional planes and the border between our planes is like a two way mirror. So we can see him, but he can’t see us.
Finn: [Gets really close to little Finn] Lemme try this. Finn! Can you hear me? [Sticks his tongue out while talking and pokes little Finn a few times] We’re connected! FINN!
[Little Finn is shown standing as the same cliff shown in the beginning of the episode and talks as though he’s depressed]
Jake: Try shakin’ him.
Finn: Why?
Jake: Maybe we’re vibrating on different intervals. Try shakin’ him at different speeds and see if he responds.
Finn: [Grabs him and starts shaking] Okay. Fiiiiiiinn! Fiiiiiiiiiinn!
Jake: Now go faster!
Finn: FIIIIIIIIIIIIIIIIINN!
[In the Little People's world, some clouds begin to form a crude Finn head.]
Jake: Faster!
Finn: [The cloud Finn says this in the Little People's world] FIIIIIIIIIIIIIIIIINN! [The clouds dissipate and little Finn looks surprised]
Jake: Go slower, he saw you!
Finn: Okay. [In the Little People’s world] Fiiiinn. Can you hear me?
Little Finn: Wah wah wah.
Jake: Whoa! Neat!
Finn: I made you do those crummy things. I’m why yous guys is fighting. I’m the big you. I came to apologize. I will never interfere with your lives again. [Little Finn asks a question] Don’t worry I will take care of it. [The clouds dissipate and then reassemble] Sorry, my arm got tired. [Little Finn is confused by this.] Never mind. It’ll be fine. Goodbye, little Finn! I’m not coming back!
Jake: Now what?
Finn: [shaking Lady, Princess Bubblegum, and Flame Princess at the same time and they all see the cloud] Hey, ladies! This is big Finn! I caused all the problems! It wasn’t anyone’s fault! Don’t be mad at each other! Have a… dance party! Okay, goodbye! I’m not coming back! [Finn pulls a stereo out of the bag and starts the music. The three of them begin dancing and with the others.]
Jake: Is that gonna do it? [The little people join the party and start dancing] Get the C-listers out. [They begin dancing as well] Good party. Oh, flip! [BMO and the Ice King are dancing] Look who’s hittin’ it off with the Ice King! [Chuckles]
Princess Bubblegum: What the... [she breaks the seal on the letter and reads it aloud] "mmmmn Princess Bubblegum, we are starving, immediately send us all of your candy. How dare you, ours, Lemon Grabs." [stops reading] Bull gunk! I left them a lifetime supply of candy!
[She swivels her chair to the window and looks out at Jake and Cinnamon Bun having a picnic, with Finn watching in the bushes.]
Princess Bubblegum: Hey Finn! Hey Jake! Can you come up here? I have a job for you!
Finn: Okay!
Jake: [getting up] Sorry CB, we'll finish this up later.
[Scene changes to inside Princess Bubblegum's lab. Princess Bubblegum is loading small, colorful spheres into a case.]
Finn: [entering room] Hey, Preebs.
Princess Bubblegum: Hey, guys. I got a letter from the earls of Lemongrab. They've gone through all the food that I've sent them. [gestures to case] This case contains precious candy seeds for the Lemongrabs to grow new food. [closes case] So, I need you two to deliver these seeds to Lemon Castle. [hands case to Jake]
Finn: For sure. We'll do it.
Princess Bubblegum: [saluting] Good luck, gentlemen!
[Finn jumps on Jake who jumps out the window and stretches his ears into wings.]
Cinnamon Bun: [waving] Bye, girlfriend! [laughs]
[Finn and Jake make their way to Castle Lemongrab and open the gate.]
Jake: Hey, Lemongrabs! You home?
Finn: Holy--!
[They see various Lemon creatures, who start advancing toward them and touching them.]
Finn: [worried] Jake? Jake, Jake, Jake, Jake!
Jake: [smacking a Lemon spider off his arm] Kiss it!
[Finn and Jake start backing away from the creatures through the courtyard.]
Finn: Aah! Sorry, dudes--got no food! No... food! [Lemon goat bites Finn's hand] Hey!
Jake: Hey! Weirdos! [stretches his hand into a slice of cake] Get the birthday cake!
[Jake pretends to throw it, and the Lemon people run over to where they think it landed. Finn and Jake give each other a thumbs up and go through another gate. On the opposite wall is a giant Lemon creature's face.]
Lemonjon: Are you lemon?
Finn and Jake: Whoa!
Jake: What the thing is up with this guy?
Lemonjon: Does your head come to a nub?
Jake: What?
Lemonjon: You are un-lemon.
Finn: Yeah. Cool, man. Hey, do you know where--?
Lemonjon: I am Lemonjon. I see you made it past our Lemon mmmmmmmeringerie!
Finn: Wait, what?
Lemonjon: They're quite hungry.
Finn: Yeah. What the heck's going on here?
Lemonjon: There is no food, only Lemons--Lemons with bellies empty but for lemon lusts!
Finn: Whatever, Lemonjon. We've gotta give those dumb-butts these seeds.
Jake: Where should we go?
Lemonjon: Mmmmmmmy senses tell me that they're in the dungeon. They've been there for three weeks. Three weeks, dungeon.
Jake: I wonder who put them in there.
Finn: I don't know, but we gotta bust them out! Which way to the dungeon, Lemonjon?
[Lemonjon picks up a rock with his lips and throws it at the wall, making a hole.]
Jake: Oh, cool!
Finn: [running to hole] Thanks, man!
Jake: [going through hole] Yeah, thanks, man!
[Finn and Jake make their way down a poorly lit corridor. Something skitters across the screen behind them.]
Jake: [turns around] Hmmm.
[A brick in the ceiling falls down and shatters. Jake clears his throat and he and Finn walk along the wall past it. Finn opens a door and looks inside. He sees a gigantic heart that isn't pumping and a large pipe dumping yellow liquid through a grate. Finn closes the door.]
Jake: Hmmm.
[They continue down some stairs and come to a door.]
Finn: [opening door] Yo, Lemon-wipes!
[Past the door are more gigantic organs, swelling and wriggling.]
Jake: Yech.
[They close the door and walk down a different hallway.]
Jake: Um, maybe we should hands... for safety.
Finn: [taking Jake's hand] Yeah, sure!
Jake: So, where'd you want to look ne--[looks at what he's holding, which turns out to be a green Lemon creature that starts licking his hand.] Eeeh! [yanks hand away] Uh, Finn?!
Finn: [down the hall] Oh, sorry dude.
[Creature runs away and Jake catches up to Finn, who is by a door.]
Finn: [opening door] Stay close to me.
[Inside is a giant pair of kidneys and a small Lemon creature, wailing loudly. It turns to them and its face peels.]
Jake: [closes door] Nope!
[Jake hurriedly picks up Finn and kicks open an air duct. He throws Finn inside and follows him in. They fall out the other end into another hallway, at the end of which is a door with bars.]
Jake: [running to door] I think this is it.
Finn: [ratting handle] All locked up! [looks through bars] There they are! Hey, Lemongrabs, we're here! We're gonna get you out, just hold tight!
Lemongrab: Go away.
Lemongrab 2: No food here.
Jake: Maybe the kidnapper's in there, too, coercing them.
Finn: Probably the grossest one of all, too--beet red skin, barf, poopin' all its junk-sculpture.
Jake: Ah, stop, man! You're just makin' it worse! [makes fist huge] Let's just get this over with. [punches down door]
Finn: Lemongrabs, you're free!
Lemongrab: They broke the door! The door is broken now!
Lemongrab 2: FIX THE DOOR!
Jake: Fix the door? What?! What? Fix the door? Fix--what? What's goin' on here? Fix the door. Finn, what's goin' on? Fix the door.
Lemongrab: It doesn't matter anymore.
Lemongrab 2: There is no more candy to hoard. Let them keep what crumbs they find, for there are no crumbs.
Lemongrabs: [Half screaming, half singing] NO CRUMBS!
Finn: Are you saying you locked yourselves down here with all the food so you could eat it yourselves?
Jake: You know there's guys starvin' up there?!
Lemongrab: Hmm. No, no. You do not understand. It is not us for whom they starve, but them...
Lemongrab 2: ...for whom they starve.
Lemongrab: Mm! Yes, yes! For the candy food was not consumed--no, no--but was given life!
Finn: Wha--?
Lemongrab: You see, Finn, [starts pacing] when Mother Princess last visited Lemongrab...
Lemongrab 2: ...when she saw fit to create me, Lemongrab...
Lemongrab: [holds up formula]...she left behind a little something-something: the secret formula for creating candy life! She must have meant for us to have it, to keep making more family.
Lemongrab 2: Yes, yes! All her fault!
Lemongrab: What? What'd you say?
Lemongrab 2: I said, "all her fault."
Lemongrab: Oh, indeed! For once we had commenced, how could we desist?
Lemongrab 2: I looked deep in myself and found that I'm a guy who can't stop making candy life from the food he needs.
Lemongrab: Me, too.
Lemongrab 2: It just felt so pretty okay inside, greeting each new placid face...
Lemongrab: ...and hearing each new piercing song!
Plop-Top: [screams]
Lemongrab 2: We used the last of the food to make Plop-Top, here.
Lemongrab: Mm. I thought we said Dump-Dome.
Lemongrab 2: [screams] Who cares anyway? They've brought no food! We're all going to die!
Finn: Look. We brought these seeds. [opens case] They're special candy seeds.
Jake: You can grow new food now.
Lemongrab: [walks over] Oh, yes. [taking seeds] Hmm, mm-hmm, mmhm. Yes. [pushes Plop-Top off of table, squishes seeds together]
Lemongrab 2: Yes, yes. There we go! [pours formula onto wad]
[Wad of seeds comes to life and immediately throws up the excess formula.]
Lemongrab: Ha-haaa! We'll call you Seed-Wad!
Lemongrab 2: [admiringly] Ooh!
Jake: You really are gonna die.
Finn: ...and all your boys, too!
Lemongrab: Our... boys?
Finn: Come on. We'll take you to see Princess Bubblegum. She knows more about candy than anyone; she built a whole kingdom out of candy!
Lemongrab: Yes. Okay.
Lemongrab 2: For our boys.
Lemongrab: But first we will notify the children of our impending departure...
Lemongrabs: ...so they won't worry about us while we're away.
[Scene changes to room with Lemonjon, where all the Lemon people have gathered.]
Lemongrab: Okay, yes. The hard times are over!
[Lemon people cheer.]
Lemongrab 2: Mmmm, here's the plan...
Lemongrab: We will go to the Candy Kingdom and take all their candy from them! Then we will give that candy precious life and build a candy army so we may then go forth and pillage candy for all to eat!
Lemongrab 2: Now go, young Lemonjon!
Lemongrab: Go! Go!
[Lemongrabs chant 'go' while Lemonjon begins standing up. The castle shakes and pieces of the ceiling start raining down.]
Finn: What's going on, Lemongrabs?!
Lemongrab: It's all [points finger at Finn] your fault!
Lemongrab 2: [points finger at Finn] All your fault!
Lemongrab: We warned you!
Lemongrab 2: We warned you about us!
[Finn and Jake run out of the room. Lemonjon stands up, tipping Finn and Jake out of the castle. Finn grabs on to the ledge and Jake grabs Finn's other hand.]
Finn: Yaaaah! [pants, looks down at Lemonjon's leg] What the--?
Finn and Jake: [as Lemonjon starts walking] Whoaaaaaa!
Finn: Jake! Are you alright?
Jake: Yeah, but look! [points] He's heading right for the Candy Kingdom!
Finn: [gasps] And he's too big to duke it out with! Unless...
Jake: Giant poison candy aspirin! [holds up large pill] I've got this one, but it might be too small.
Finn: No. We'll kick him in his heart 'til he's history. Those must have been Lemonjon's guts we saw before. His heart is his weak spot.
Jake: Yeah, but we'll never find it again in time... unless that's it there [points] with the juice coming out. Remember all that juice, from before?
Finn: Oh yeah, that's probably it. [Jake stretches them over to the grate] Whoaaa! [Finn opens grate and climbs in, retches as liquid drenches him] Oh, man!
Jake: [climbing in] Tastes like vitamins.
Finn: [grunting and punching the heart]
Jake: Are you sure this is it? It's not even doing anything.
Finn: Just smash it already, grandma.
Jake: Right. [grows hands and hits the heart hard]
[Heart starts pumping. Finn and Jake are thrown across the room.]
Finn: [sarcastically] Oh, nice one, Jake.
Lemonjon: [stops walking] Whoa, hold the phone! What is this powerful new juice coursing fromst my core source? [groans] The juice aches. Is this the rumored ache of feeling? The feeling of caring unknown to Lemons? New thoughts emerge! If I act, the Candy People will suffer. If I don't, the Lemon people will suffer. The greater good demands but one course only: that I dissolve the bonds uniting me and become component to all!
[Lemonjon strains and dissolves into millions of small, lemon-shaped candies. Finn, Jake, and the Lemon people fall to the ground.]
Finn: Whoa, dang! [picks up some candies] That Lemonjon turned himself all up into lemon candy! Man, that Lemonjon's all right.
[Scene changes to Princess Bubblegum's lab, where she is using a pencil to erase some words from the Lemongrabs' exposed brains.]
Princess Bubblegum: [erasing] ...and... there... we... go. [blows on Lemongrab's brain] All done! The last trace of the candy life formula is out of their heads!
Finn: ...and I snatched this [holds up formula] out of the Lemon castle, boyee!
Princess Bubblegum: Now we all just have to keep a closer eye on those two so they don't get in to any more trouble.
Jake: But how come we don't just fix their hearts like we did with Lemonjon so they're more selfless and less selfish?
Princess Bubblegum: Oh, no, no. Their hearts are fine. They're just like this.
Lemongrabs: [smiling] Hmm!
Pen: Jake! Jake! Good mornin'! Whatcha doin', buddy?
Jake: Meditating.
Pen: What are you meditating about, dude?
Jake: Wait, dude. I'm connecting to the internet with my mind.
[Dial-up connection sound]
Pen: Ha ha! Beep boop boop boop beep boop.
[Jake descends to the ground.]
Jake: Check it out—I downloaded a little dance. [Begins to dance]
Pen: Huh, I like it. Yeeoow! [Starts to dance, too]
[Continue dancing until Lady Rainicorn comes flying by]
Pen: Whoa! Algebraic!
Jake: Look! It's Princess Bubblegum's rainicorn! She looked like she was crying.
Pen: Well, let's go cheer her up. To the max!
Jake: Yeah! Yeah, let's do it!
[They begin to run.]
Pen: Woo hoo!
Jake: [Grows huge] Rrrrroar!
[Chase after Lady Rainicorn]
Lady Raincorn: [Crying]
Pen: Hey! What's wrong!?
Lady Rainicorn: [Still crying]
Pen: Wanna hear a funny joke!?
Lady Rainicorn: [Cries even louder]
Pen: Knock-knock!
Lady Rainicorn: [Cries frantically]
Pen: Who's there?
Lady Rainicorn: [Cries even more]
Pen: Woowoowoowoowoowoowoowoowoowoo, who?
Lady Rainicorn: [Cries and flies away]
Pen: Man, that wasn't very funny.
Jake: She's flying into the Ice Kingdom.
Pen: Aw, the Ice King is an oxymoron.
Jake: Seriously... but what are we gonna do?
Pen: Survey the situation.
[Pulls out binoculars and looks at Ice King's castle. Ice King is shooting ice lightning at Lady Rainicorn. Pen sighs.]
Jake: What's up?
Pen: The Ice King is throwing frozen lightning bolts at the Rainicorn.
Jake: [Puts on the binoculars] That guy is a total patoot.
Pen: He's like 50 patoots!
[Ice King continues to shoot frozen lightning at Lady Rainicorn; Princess Bubblegum is behind him.]
Jake: Whoa! And there's Princess Bubblegum!
Pen: [sigh] The Ice King is always stealing princesses. We're going in turbo time! [puts on a sweater] You want your booties?
Jake: Yes, please. [Jumps in the air] Howop! [Booties are thrown up into Jake's feet and he comes down] Let's do it!
Pen: What time is it?
Pen & Jake: Adventure time!
[Jump into the Ice Kingdom]
Pen: Penguins!
[Fall into a horde of penguins and use them to skate down a mountain]
Pen: Mathematical!
Jake: That was totally math!
Pen: Rhombus! Iceclops!
Iceclops: Did somebody say my name?
[Pen and Jake scream and jump in a ditch.]
Pen: That was close!
Jake: Oh, my goodness!
[Pen grabs snow, turns it into snowballs and has Jake carry it.]
Pen: Let's rock and roll!
Iceclops: [Roars]
Pen: Ice to meet you! [Throws snowballs at it]
Iceclops: Hey, cut it out!
Pen: Snow Golem!
Snow Golem: [Baby sounds]
[Pen throws snowballs in its eyes and it cries.]
Pen: Elemental!
Fire Elemental: I'm lost. Can you direct me towards the sun?
Pen: That way.
Fire Elemental: What? Oh, geez, duh! Thanks.
Pen: Snow problem! [Throw snowballs at him]
Fire Elemental: [moans] Oh, real nice! How old are you?
Pen: I'm 12 years old!
Jake: I'm 28!
[Ice King cackles.]
Pen: Hey, Ice King! Stop it!
[Jake extends his legs, taking him and Pen to the Ice King's window.]
Ice King: Heh? Stop meddling, boy! You and your magical dog can't harm me.
Pen: He's not my dog! He's my friend! [Jumpkicks Ice King in the face]
[They fall into the Ice King's castle and begin to fight; Jake begins to talk to Lady Rainicorn.]
Jake: Hey, how's it goin'? My name's Jake.
Lady Rainicorn: [Coos like a pigeon]
Pen: Why are you always stealing ladies?
Ice King: I'm going to make one marry me! [Cackles]
Pen: That's... stupid!
Ice King: Your hat is stupid!
Pen: My hat is awesome! [Jumpkicks him again] Where's Jake?
Jake: [To Lady Rainicorn] Are you kidding? I play the viola too.
Lady Rainicorn: [Coos]
Jake: You are crazy. You are so crazy.
Ice King: [With ice lightning in his hands] Now I've got you, boy! [Freezes Pen]
[Scene shifts to Mars.]
Pen: What's going on? Ab...Abraham Lincoln?
Lincoln: Pen, your mind has been transported back in time... and to Mars.
Pen: What?
Lincoln: It doesn't matter, but what does matter is you need to believe in yourself.
[Scene switches back to the Ice Kingdom.]
Pen: [Breaking out of the ice] Never!
[Ice King is laughing and carries Princess Bubblegum to the window.]
Princess Bubblegum: Pen!
[Ice King flies out the window.]
Pen: Princess!
Jake: Let's go!
[Pen, Jake and Lady Rainicorn go after Ice King and Princess Bubblegum; when they catch up, Pen jumps at them in slow motion and grabs Princess Bubblegum]
Ice King: Heh?
[They fall and Lady Rainicorn catches them.]
Pen & Princess Bubblegum: Yay!
Ice King: Nwah. How dare they trifle with me. They can't possibly think they can win!
Jake: Hey, sloppy milkshake!
Ice King: Wha?
Jake: Why don't you pick on someone your own size?
Ice King: Fool! Your powers are no match for my magical crown!
[Jake punches off the crown.]
Ice King: [falling] My powers! Foul and noisome whelp! You've not seen the last of my wintery fangs! I'll cleave the warmth from your bones and stop still your beating heart with my claaaaws...
[Back on the ground]
Pen: There you go, Princess. You are free.
Princess Bubblegum: Oh, thank you, brave knight.
Pen: Oh, I'm not a knight. I'm a boy.
Princess Bubblegum: Well, then, thank you, brave boy. [Kisses Pen on the forehead and he blushes]
Pen: Ha ha ha ha ha!
Jake: Whoa, what is going on?
Pen: Uh, nothing.
Princess Bubblegum: [Giggles]
Pen: [Pushes Jake along] We got to go, okay, bye, Princess. Bye.
Jake: Go where, dude? We don't have anything to do.
Pen: Heh, heh, yeah we do, buddy. Adventure awaits.
Jake: I don't see any adventures going on anywhere. I think we're good to just sit here for a while and just talk about our feelings.
Pen: Heh, uh, look! Those ninjas are stealing that Old Man's diamonds!
[Ninjas are running off with an old man's diamonds.]
Old man: Give me back my diamonds!
Pen: Later, Princess! I have to attend to this!
Princess Bubblegum: Fair thee well, Pen and Jake.
Pen: Jake!
Jake: What time is it?
Pen & Jake: Adventure time!
[They run after the ninjas.]
Cuber: [Talking to the viewers] Oh, hello. [laughing] Here for more graybles, I presume. Well you've come to the right computer-fable. Feast your eyes-mabel, on my holo-pyramid viewer and— [A bird passes by him singing] Huh? What's that? Not in the mood for graybles, you say? Oh dear. You okay? Did something fatlabel happen to you? [A bird sits on Cuber's head and takes the floating cube from his hat] Oh, I see. You'd rather watch me buh-blabel a bird-house in my workshop. [The screen is seen moving up and down, implying the viewer is nodding their head] Hm. More of a grayble man by trade. But okay! Come on! [Cuber is seen exploding]
[The scene cuts to Cuber's workshop filled with tools floating in the air. Cuber is seen hitting the bird-house with hammers]
Cuber: Oh, hello again! As you can see, the bird-house is nearly complete! All that's left is where the door hole goes. But I can't remember. [Starts scratching his head with a hammer] Hm. Door hole. Wait! I just remembered! My door hole solution lies in one of tonight's scheduled graybles! Would you mind I look through them to find it? [The screen is seen shaking in negation] OK! [laughing] Yeey! Here we go!
[The scene cuts to the Tree Fort, where Jake Jr. is seen drinking juice and exclaiming]
Jake: [Sits next to Jake Jr.] Hey, Jake Jr. [Pokes her by the shoulder] You having fun at daddy's?
Jake Jr.: Hm? Oh. Sure dad.
Jake: OK. You seem kind of dump trucks.
Jake Jr.: What?
Jake: You know, "in the dumps."
Jake Jr.: Oh, sorry. It's cool. I'm just thinking about the future, I guess. We're on, like, the bleeding edge of history. Everything ahead of us is totally unknown and there's no guarantee that things are going to be all right. It's exciting, but it's also pretty scary. You know?
Jake: [Looking weirdly at Jake Jr.] [cynically laughing] Sounds like my little baby girl wanna build a time machine!
Finn: Ooooh!
Jake Jr.: Guys, I don't—
Jake: No, no, no. Leave it up to your daddy and uncle Finn! [Kisses Jake Jr.] Yup.
Jake Jr.: OK, you guys have fun! I'm gonna get some more juice. [Walks toward a table] Mom has some weird taste in men. [Cleans table using her hair, takes the juice box and puts some in her glass]
Finn: [whispering] Pssst. She's going back!
Jake: [Driving a fake bike he made shape-shifting] Ding-ding! [Stops] Scre-e-e-ech! [Walks up to a fake door he made shape-shifting and presses the ring after which a farting sound is heard]
Finn: [Dressed up as a lady, Finn opens the fake door] [feminine voice] Hello? Oh! Is that the machine part that I ordered?
Jake: [exclaims] You just gotta sign for it, to prove you accepted delivery. [Hands out his clipboard-shaped hand]
Finn: [Writing on the clipboard using a dust-cleaner] Ac-cept-tance.
[Finn and Jake stand up before Jake Jr.]
Jake Jr.: Guys, I'm basically thirty. I'm not a little kid anymore!
[The scene cuts to the Candy Kingdom]
Princess Bubblegum: [holding a night-light in form of Jake] You're not a little kid anymore!
Cinnamon Bun: [screaming] WHY-Y-Y-Y!?
Princess Bubblegum: Cinnamon Bun, you can't sleep with a night-light anymore. You're basically thirty—it's starting to bum everyone out.
Cinnamon Bun: [screaming] I can't handle this denial of light!!!
Princess Bubblegum: Yeah, well—
Cinnamon Bun: [screaming] No-o-o-o-o-o-o-o-o! [normal voice] Too dark. [Turns the lights on] No! It's too bright! [Pushes the lamb which breaks] Ah! It's too dark! [A fire starts] Oh. A-ha. OK. This is nice.
[Outside of Cinnamon Bun's home, a pair of firemen Banana Guards are seen trying to extinguish the fire]
Banana Guards: [imitating siren] [Pour water inside of Cinnamon Bun's home]
Cinnamon Bun: Ah! Too dark! [Goes to the window]
Banana Guard: [Waving his hand] Hey, Cinnabun!
Cinnamon Bun: I—need—soft—light! [Throws himself out of the window] Yeeargh!!
[The scene cuts to the Ice Kingdom]
Ice King: [Opens fridge] Yeeargh! How long has this been in here? I don't even remember buying this. Oh well—easy come, easy go. [Throws "Yeeargh!" in the trash can. Then, he gathers other products and throws them as well] Goodbye! Well, that wasn't so bad. [humming] [Pulls out a marker and a piece of paper out of his beard] Hm. [It's shown the paper is actually a to-do list with five check mark boxes]
☐ Clean
☐ out
☐ the
☐ fridg
☐ e.
[Ice King x-es all the boxes and then draws a big X over the entire paper]
Ice King: Ah! Nothing like a hard day's work to get them spirits a-lifted! [laughing]
[At one point, Ice King stands next to window, where the viewer can see the Candy Kingdom burning]
Ice King: Great news, fellas! I finished all my chores, so we can start movie night early. Take your sits and will reveal the nominees. We got "Baby Ballet," "Blimby's "WHO GOTS DA ABC'S"," "Airplanes Taking Off," — [gasp] Oh, wait! What's this one? "Basic Mortality: Season 1"!? Isn't this that show that everyone is talking about? I heard that this show is really good for penguins. Wow, that's really lucky for you guys, I'm a little jealous. Well anyway, good luck to all our nominees! OK, all in favor of "Blimby's "WHO GOTS DA ABC'S""—raise your hands.
[The penguins are being silent]
Ice King: OK, all in favor of "Baby Ballet"—raise your hands.
[All of the penguins raise their hands]
Ice King: OK, all in favor of Air—What!? "Baby Ballet"? Come on! Ugh! I should have never given you penguins the right to vote. Well, you may have numbers on your side, but I still have one trick up my sleeve. Bargaining. Whereby, you let me watch "Basic Mortality," and I in return will do anything you want in the whole world. How 'bout it?
[The penguins are having a discussion for a time]
Middle Penguin: Wenk.
Ice King: Algebraic!
[The scene cuts to Ice King dressed up as a baby ballerina and dancing ballet while watching "Basic Mortality"]
Man: I know he was your partner.
Woman: Enough! Alan is not the super-murderer!
Ice King: I don't know about this show though—
Man: This, captain, is the most lamentable super-murder I've ever seen—and I've seen plenty.
Ice King: —might be a touch too dark.
[The scene cuts to Cinnamon Bun running in the woods]
Cinnamon Bun: [screaming loudly] Too dark! [Climbs on a small hill and falls down from it. He falls before a light made by a window near by a castle] [screaming loudly] Too bright! [A lemon falls on his head]
Lemongrab 2: [Peaking from a window] Eat on it! [Slams the window closed]
Lemongrab: [Inside the castle] Hm-m-m.
Lemongrab 2: [Inside the castle] Hm.
[Both enter a room and close the door. They turn on the light, revealing the brothers before a toy set]
Lemongrab 2: Oh, little Lemon-Sweets, our son. [Takes the toy's hand and makes it wave] So precious. You enjoy sitting in your chair? [Takes the toy's head and makes it shake in agreement] What would you like to do now? [talking in a soft, squeaky voice] Go to bed.
Lemongrab: No, he wants to dance! [Takes the toy from his brother's hands and makes it dance]
Lemongrab 2: [hesitantly] Dearest brother, I really think Lemon-Sweets would rather go to bed. [Tries to grab the toy]
[The brothers start fighting over the toy until Lemongrab 2 manages to take it]
Lemongrab 2: [Puts the toy in its little bed] I'll fetch our son a sleeping bonnet. [Opens a lock filled with little hats and takes a little bonnet] Beautiful. [Turns around and sees Lemongrab making the toy dance] [gasps] [screaming] Brother, stop that!!
Lemongrab: [Shakes head in disagreement] [talking in a soft, squeaky voice] We hate you.
Lemongrab 2: [Hits his brother, causing the toy to fall and break]
[The brothers look at each other]
Lemongrab: [screaming] O-O-Only O-O-O-ONE!!! [Grabs his brother and proceeds to swallow him whole]
Lemongrab 2: [screaming] The end! My end!
[The scene cuts to Mr. Fox in a small house]
Mr. Fox: My end... table, my love seat, yeah. Gee but it's great to be back home. It's always a blast visiting my cousin, city-Fox, at his future palace, but you just can't beat that old country steez. City-Fox's digs be mad sterile. Look a this. This was my grandpa's rug. Some bums let him have it 'cause it was so ugly. [He comes near a heating machine] [loudly] And check out these classic stylings. They don't make 'em like this anymore! [Nearly gets hit by hot water] Wow! Haha! Almost got me right in my both eyes! [Goes away from the heating machine] Look at my bugs. [Comes near two old, ugly, bugs talking about something] Man, I always did have the ugliest bugs. What are they doing? Selling each other houses?
Mr. Fox: [Goes near the bed] Yes, siree, there's some things money can't buy. [Looks at a a sleeping-hole in the bed] You see that depression? You can't buy that, you gotta earn it. Boy, it's like I can almost see myself sleeping in there. [An imaginary figure of himself appears before his eyes in the sleeping-hole] [screaming] Wha—? [He sees himself standing up and going toward the table. His imaginary self starts writing something on a piece of paper] "Dear conscious self, I know where some buried treasure is. I'll draw you a map. Love, subconscious self." Oh my gosh, I'm gonna be rich! [laughing] [His sub-conscious self starts drawing a map]
[Someone knocks on the door]
Mr Fox: What the—? [Mr. Fox's sub-conscious self disappears] Oh, no! My riches!
Cinnamon Bun: [Knocks hard on the door] [grunting] Let me in! [wild music plays] [Rips of light] It's too—bright! [gasp] Too dark! [Flips the bed and runs through the wall, breaking it] [screaming]
Mr. Fox: Cinnamon Bun, you! Did a great job, on this hole wall. It's very rustic. [gasps]
Sub-conscious Mr. Fox: M-m-m-m, what a jerk.
[The scene cuts to the Tree Fort]
Finn: What, a jerk?
Jake: Yeah, just give it a little jerk.
Finn: [Changes an engine's position inside a suitcase]
Jake: [Closes the suitcase]
[Finn and Jake stand up before a pile of ordinary, everyday objects]
Finn: Now that's a time machine.
Jake: Hey, sweetie! Sweetie, look! Your time machine's all ready!
Jake Jr.: Aw yeah, you havin' fun, dad?
Jake: Aw, anything for my baby pup.
Jake Jr.: OK. As long as you're having fun.
Jake: [laughing] Time machine! [Presses a button, when suddenly the entire room gets covered in a red light]
Finn and Jake: [screaming]
Jake Jr.: [shouting in Korean]
[Everything suddenly stops]
Cuber: Ha-ha! There it is! You see? The birdhouse door—it's right above the peg thingy. Why didn't I think of that? [laughing] Well, I guess that's it for this week. I'll see you crimpy glimmers on the—what? What's that? You want to finish the grayble? [The screen is seen moving up and down, implying the viewer is shaking his head in confirmation] You want to see if you can still guess the theme? [The screen is seen left and right, implying the viewer is shaking his head in negation] You just want to see how it ends. [The screen is seen moving up and down, implying the viewer is shaking his head in confirmation] Well, let's get right to it, then. Ha-ha.
[The scene cuts to the Tree Fort]
BMO: Stranger! Stranger! Stranger! Stranger! Stranger! [Pointing toward Cinnamon Bun trying to take the night-light in form of Jake]
Cinnamon Bun: [Putting his finger before his lips, telling BMO to hush]
Jake Jr.: [Walks up to BMO and types "ITS OK," making BMO disarm the alarm]
BMO: Excuse me.
Jake Jr.: [Puts BMO down and turns toward Cinnamon Bun] HEY, why are you trying to steal my dad's stuff!?!
Cinnamon Bun: Hey, I need a night-light because I'm so scared!
Jake Jr.: Man, you can't steal, dummy.
Cinnamon Bun: [Starts crying]
Jake Jr.: Fine! [Uses hair to get the night-light and gives to Cinnamon Bun] Here. NOW GET LOST!
Cinnamon Bun: [gasps] [laughing] Yes! Take that, Princess Bubblegum! [Leaves the Tree Fort]
Jake Jr.: [Closes the door]
BMO: Jake Jr., I'm sorry for messing up your time travel.
Jake Jr.: Aw, that's OK. [pets Beemo, making it smile] It was just make-believe, anyways.
Finn: O-ho-ho, was it? Then how do you explain tomorrow's newspaper?
[Jake is holding up newspaper with the headlines "Tomorrow's newspaper. JAKE JR. REAL COOL KID!"]
Head Clown Nurse: Who wants a cookie? [She moves it around, making airplane sounds.] Milk-dipped chocolate chip cookie?
Finn: No thanks.
Head Clown Nurse: Now, come on, Finn. You have to eat. Open Sesame...
Finn: Uh, Jake, can't we get rid of these Clown Nurses? They make me feel ridiculous.
[The camera cuts to Jake. He, too, is sitting in bed, with his right foot bandaged. A big Clown Nurse is standing near him.]
Jake: No way, man.
[Finn groans in disgust.]
Jake: Well, now you know we can't jump off of birds. [The fat Clown Nurse waves a cookie around, mimicking airplane sounds and plops it into Jake's mouth.] I paid them up front. They don't leave until the job's done. Besides... [He honks the big Clown Nurse's nose.] They're funny. [He honks the big Clown Nurse's nose again, and she farts this time.] [laughs] Look, she just farted.
Head Clown Nurse: Time for our love therapy.
Finn: Wait, what are they doing? [The Clown Nurse starts smooching Finn's bandaged foot.] Whoa! Stop!
Head Clown Nurse: [gasps] Oh my! Did that hurt, dear?
Finn: NO!! I just don't want you kissing my toe!
Head Clown Nurse: Now, now, honey, you gotta understand. This is the only way to "foo-foo" your boo-boo.
Finn: What does that even mean??
Jake: I don't know... but I'm feeling better already. Ah. That tickles.
Big Clown Nurse: You want me to stop?
Jake: No, keep going. [The big Clown Nurse continues smooching Jake's toes.]
Finn: [Beat] You're gross, man. [He notices a page in the Enchiridion.] Look! Deep in the forest of trees, there's a Cyclops whose magical tears can heal any wound. See? See?
[The head Clown Nurse takes the book from him.]
Head Clown Nurse: Maybe you should leave the medical decisions to the medical professionals, and my professional prescription is... your toe needs crazy smooches! It's the only way! [laughs]
[The Clown Nurses all gather around and start holding Finn down.]
Finn: Huh? Wha?
[The head Clown Nurse gets near Finn's bandaged foot.]
Finn: Wait! Wait! Wait! There's another way! There's my way! Let me show you my way!
[The head Clown Nurse starts smooching Finn's bandaged foot.]
Finn: Ahh! Let me go! [The head Clown Nurse is still smooching Finn's foot. He screams and then blacks out. Finn starts having a crazy nightmare about running from Clown Nurses. He trips and sees the head of the head Clown Nurse.]
Head Clown Nurse: It's the only way! [laughs]
[The head rises up and floats in front of him. Finn screams and runs in panic, but ends up falling into the mouth of the Clown Nurse's head.]
Head Clown Nurse: [softly] It's the only way!
[Finn wakes up. The Head Clown Nurse is rapidly smooching Finn's foot. Finn gets up and the Clown nurses back off.]
Finn: MY WAY!!
[He runs out of the house and into the forest, screaming. He finally comes to a stop. He's staring at a tree stump with a sign. The road splits up into two paths.]
Finn: Hmmm...
Tree Stump: Ring, ring! Look, there's only two choices, bro. Take your pick. There's the path on the left, Hair Fall-Out Path. No more hair again, ever! Or the path on the right, Smelly Path. Makes you smelly forever. Hoohoo, you won't believe it.
Finn: Isn't there another way?
Tree Stump: Nope.
Finn: But what if I just went—
Tree Stump: No, that's it! You have to choose! There's no other way! Choosing is the only way. Choosing—is the only—way.
[The camera zooms in on Finn's face. A thought of the head Clown Nurse crosses his mind.]
Head Clown Nurse: It's the only way! [laughs]
[Finn suddenly screams and confronts the tree stump.]
Tree Stump: Hey, listen man, the Smelly Path's not actually that bad!
Finn: NO! I choose MY WAY!! [He kicks the sign off of her head.] My way.
[Finn runs right through the prickly bushes, screaming all the way. He comes out on the other side, all scratched and covered in thorns. He then comes across a river an walks up to the bank. A bush is on the bank nearby.]
Bush: Ring ring. Hello, dummy police? Yes, there's a strange dummy lurking around my house. Okay, yes. Thank you. Goodbye.
Finn: Wha...? [Beats] I need to cross the river. The Cyclops is over there.
Bush: You can't cross this river. It's impossible! Look! The current is so fast, it'll turn your butt inside-out for real, doofus. And the water's so acidic it'll crump your boat in half. It's like orange juice. It's gross. There's a bridge, but it's a trap! Plus, the water's jamming with electric eels. Wow, so weird. Anyway, that's it, there's no other way around, you dummy.
[While the bush speaks, the camera shows the river's current flowing, and the steaming hull of a boat that was corroded away. The bridge nearby is shown, then two pairs of eyes and shadowy arms pop out. Two electric eels are swimming under the water, their bodies surging with electricity.]
Finn: But I need to get across.
Bush: Listen what I'm telling you. There's no way. ...Ugly tramp.
[Another thought of a Clown Nurse crosses Finn's mind. He advances on the bush.]
Finn: Glob, Glob it, Glob it, Glob it...
Bush: Huh? What are you saying? "Globbit, Globbit"? Who's Globbit?
[Finn snatches the bush and uproots him.]
Finn: MY WAY!!
[A screaming Finn then charges head-on into the river, using the bush to sweep the water off of the ground beneath. The bush is screaming in pain all the while. Then some electric eels jump out of the water and wrap themselves around Finn, shocking him and singing off the bush's leaves. Finn finally stops on a rock and the eels come off of him. Finn spits out a glob of vomit into the water.]
Bush: Glibby glob, man! You're crazy! We're not even half way across! You gotta go back, man! It's the only way, you ugly fat-smelling fat-head!
Finn: NO, MY WAY!! [Frustrated, Finn tosses the now-barren bush all the way across the river. Then he dives in. He emerges from the river, screaming and steaming from the pineapple juice-like water. He then happens upon a strange little man standing next to a wagon with watermelons in it.]
Finn: [panting] MY WAY! [He quenches the acid by smashing one of the melons over his head.] Oh, Glob, oh, Glob, oh, Glob, oh, Glob.
Pan: Uhh, excuse me, friend. [Finn blabbers his lips together.] You're pretty tall, can you reach up there and get my wheel for me? Gotta get these melons home to my wife. You know how it is.
[Still frustrated as ever, Finn pushes Pan aside and picks up the wagon.]
Finn: [panting] MY WAY! [He hurls the wagon down the hill. The wagon shatters as it hits the ground, and the melons tumble down the hill.]
Pan: Watch out, Rainy!
[Rainy realizes too late. She avoids the first one, which rolls over the wigwam house, but the others roll over her, injuring her. Rainy groans in pain.]
Pan: [gasps] Rainy!
Finn: Whoops. Uh... man, I'm real sorry.
Pan: Yeah? [sobs] No doy... friend.
Finn: But... I can still help. I'll fix your house for you.
Pan: Just get out of here! Leave us alone!
Finn: Uh... wh... I... [sighs]
Pan: Psycho fink.
[Finn walks uphill to a cliff overlooking the valley below. He realizes his plan didn't go as well as he had hoped. He takes off his hat and breaks out in song.]
Finn: ♫ I was wrong. Was I wrong? No. Yes... Yes... I was wrong. How could it be? I trusted in my guts, but ended up all nuts. I was wrong. How could it be? Listened to my brain, but ended up insane. The melons rolled...over that lady. I went too far. How could it be? [Finn puts his hat back on.] How did I go... too far? ♫
[As Finn finishes his song, the camera zooms out to reveal a little beneath the cliff. A giant eye opens up, looks up, and blinks. Suddenly something hunches up from the cliff. It's the Cyclops Finn has been seeking.]
Forest Cyclops: Hey! I know you're here for my magical tears, but you won't have any, because I never cry.
Finn: I don't want 'em anymore.
Forest Cyclops: What? Stop lying. You're here for my tears, aren't you?
Finn: No. I hurt a small, hairy man's wife. I just wanna go home.
Forest Cyclops: You're just trying to make me feel sad so you can steal my tears when I cry... but I've got a heart of stone, buddy. I'm EVIL!
Finn: Dude! What's wrong with you? I said I don't want your tears!
Forest Cyclops: YOU'RE LYING!
Finn: I'M NOT LYING!!!
Forest Cyclops: [Beat] You stink at lying.
Finn: Fine. Whatever, man. Have it your way.
Forest Cyclops: Okay... I WILL HAVE IT MY WAY!!
Finn: Huh? [The Cyclops pounds him into the ground.]
Forest Cyclops: Beg for mercy, or I'll kill you!
[Finn glances up at the Cyclops' eye. He notices water forming up in the big, round eye.]
Finn: [mutters]
Forest Cyclops: Whuh... What?
Finn: [mutters]
Forest Cyclops: What? I can't hear you.
Finn: I said... MY WAY!!
[Finn punches the Cyclops in the eye. The Cyclops starts crying as he screams in pain. Some of the tears fall onto Finn. His clothes are made anew.]
Finn: Magical tear drops. [He pulls off the bandage. His foot has been healed completely. He wiggles his toes.] My way can still work! Yeah!
[Finn pulls off the Cyclops' head. Finn first goes to Pan, who is still sobbing. Finn pours the Cyclops' tears over Rainy, who is restored.]
Rainy: Huh? I'm okay.
Pan: Yay!
[Finn runs off. He then goes to the bare bush and pours the Cyclops' tears over him.]
Bush: Huh? [The bush takes root, and all his leaves regrow.] Whoa!
[The stump is sobbing in pain from having her sign knocked off. Finn pours the Cyclops' tears over her, and a flower grows where the sign was.]
Tree Stump: Huh? Whoo-hoo.
[Finally, Finn pours Cyclops' tears over a ham sandwich at a picnic, bringing it to life.]
Ham Sandwich: Yeah!
[The scene cuts back to the Tree Fort, where the Clown Nurses are still doing their so-called duties. The big Clown Nurse is still kissing Jake's bandaged foot.]
Jake: Oh, yeah. Huh?
[The door suddenly slams open. Everyone gasps in shock. Finn walks in, still carrying the Cyclops' head.]
Head Clown Nurse: Have you come crying back for your proper treatment, Babylips?
[Finn throws the Cyclops' head. It lands in front of the head Clown Nurse, who gasps.]
Finn: Kiss that!
Head Clown Nurse: Oh, my! You look horribly injured! My kisses will make heal you. [She smooches the Cyclops' eye.] Now how does that feel?
Forest Cyclops: Bittersweet.
[Finn walks over to Jake, carrying a bottle of Cyclops' tears.]
Finn: Hey, man. You want me to heal your toe with my magical goo?
Jake: Ah, no thanks. I think the kisses work better. [To nurse] Excuse me, don't stop, keep going, please. [The big Clown Nurse resumes smooching Jake's foot.]
Finn: You're gross.
Jake: Hey! We all have our own ways.
Finn: [realizing] You know what? You're... right.
[Jake's eyes twinkle. The episode ends.]
Jake: [sets table] Finn, lunch is ready!
Finn: [holds nose] Ugh, what are you cooking?
Jake: It's good! I learned it from Rainicorn.
Finn: I'm not eatin' that. It smells funny.
Jake: Dude, this took me, like—
Finn: Let's go over to Tree Trunks's and get some apple pie! Apple pie! Apple Pie! Apple Pie! Apple Pie! Apple Pie! Let's go! [grabs Jake's arm]
Jake: Whoa! [grabs a shrimp from his plate before he leaves] Eh.
[Scene changes to Tree Trunks' house.]
Finn: [knocking on door] Tree Trunks! [opens door and walks in with Jake] [gasps]
[Tree Trunks is lying on the floor next to a broken table, motionless.]
Finn: [running over to her] Tree Trunks! Tree Trunks?
Tree Trunks: [mumbling] Apples... my apples...
Jake: Apples?
Tree Trunks: You! [jumps at Jake] You took my apples! [starts hitting Jake]
Finn: Whoa, whoa! [grabs Tree Trunks] Tree Trunks, it's us, Finn and Jake!
Tree Trunks: Finn... and, and Jake?
Finn: It's okay, Tree Trunks. We're here to help you. Just tell us what happened.
Tree Trunks: [tearing up] They took 'em. They took all of 'em.
Jake: All of what?
Tree Trunks: Apples. My apples that I raised with love from, from mere seedlings. Without my special apples, I won't be able to bake any more apple pies.
Finn & Jake: NOOOOOOOO!
Finn: Don't you worry, Tree Trunks. We'll find those thieves and bring them to justice.
Tree Trunks: Let me show you the crime scene. [leads them outside] You see, boys: scads of apple trees but, but no apples.
Finn: Hmm. Is anything else missing, Tree Trunks?
Tree Trunks: No, Finn, they didn't touch my rocks, or my birds, or my flowers, or, or nothing.
Finn: Hm. Well, I don't see any footprints. What'cha got, Jake?
Jake: [patting the air] No ghost doodies. Oh. Oh, wait. [feeling something invisible] Oh, no. No.
Finn: Hm. Tree Trunks, is there anyone you can think of who might want to crunk you up?
Tree Trunks: Oh, no, Finn. I take great care to assure that-that I'm loved by even the most heinous cretins—
Jake: Hey, guys, I found something! Look!
[Finn and Tree Trunks join Jake at the edge of a hole.]
Tree Trunks: Uh!
Raggedy Princess: Oh, heheh, hey, Finn. Heheh.
Finn: Oh, hey, Raggedy Princess. Have you seen anything fishy going on?
Raggedy Princess: Um, no, heheh. I've been kinda down in this hole for a long time. [laughs nervously] I got knocked down here by some ne'er-do-wells. It was terrible. I was so scared.
Tree Trunks: Ne'er-do-wells? They stole my apples. [flapping ears] I'm gonna sass those boys up nasty!
Finn: [laughs] Awesome. Where do we find these guys?
Jake: Oh, the Candy Tavern, man. I used to hang out there back when I used to snatch old ladies' purses.
Finn: [jaw drops with "brring" sound effect]
Jake: Don't worry, I stopped doing that a long time ago. I didn't know it was wrong.
Finn: [jaw still hanging, with higher "brring" sound effect]
Tree Trunks: Okay, you two, let's get going.
[Scene changes to outside the Candy Tavern. Someone gets thrown out of the window.]
Candy Tavern Person: Whoa!
Tree Trunks: [gasps] Oh, my!
[The three enter the tavern. A Candy Person at the bar repeatedly stabs his hand with a spoon, and an angry cookie shakes.]
Finn: Uh, does Princess Bubblegum know about this place?
Jake: Be cool, man. You're gonna queer the deal.
Finn: Oh, yeah. Try not to act suspicious, Tree Trunks.
Tree Trunks: Okay, I won't.
[The three walk up to the Candy Tavern Bartender.]
Finn & Tree Trunks: Where—?
Finn: Oh. [motions for Tree Trunks to continue]
Tree Trunks: Where's my dang apples?
Finn: Oh, [laughs] Tree Trunks, you're so silly. But, but listen, you wouldn't happen to have seen any—I don't know—apples around, have you?
Bartender: "Seen any apples?" Y'all ask a lot of dumb-butt questions... almost like you're trying to solve somethin'.
Finn: What? Oh, no-no-no-no-no-no.
Bartender: Mmm... clean, too. Almost like some [pounds bar] do-gooders!
Jake: Hold on, we gotta go potty.
[The three enter the bathroom and rub dirt all over their bodies.]
Finn: Dang. They almost got us, but I think we blend in pretty well now.
Tree Trunks: [licking toilet paper] This, this toilet paper's drying my mouth all up.
Finn: Uh, Tree Trunks, don't eat that. [sighs] Here. [holds her up to the mirror] [whispers to Jake] You gotta watch her, man!
Tree Trunks: Oh, I look just like an army brat!
[The three return to the bartender.]
Bartender: What can I do for you?
Finn: [pouring drink onto bar] You know where a guy might maybe score some apples? [drops mug onto the floor, shattering it]
Bartender: Well, when you put it like that.... A couple of buddies I know have some apples for sale. I'll show you.
[He leads them to a back door and opens it to a tall gingerbread man and an upside-down ice cream cone.]
Bartender: Hey, fellas, these folks been askin' 'bout your... apples?
Jaybird: [scratches chin] Okay, show 'em the apples, Smudge.
[Smudge picks up a trash can and puts it over Jake.]
Jaybird: Grab 'em!
[The bartender grabs Finn and Tree Trunks.]
Jaybird: You go back, and you tell your boss to stop looking for those apples 'cause they're ours now!
Finn: Wha-what boss?
Jaybird: Your boss! Dr. J?
Finn: We don't know any Dr. J.
Jaybird: [punches Finn's forehead] Liars! Come on, Smudge [walks off] [mumbling] ...gonna take my apples.
[The bartender drops Finn and Tree Trunks and closes the door. Jake takes the trash can off.]
Jake: What just happened?
Finn: I guess these guys who stole Tree Trunks' apples also stole Dr. J's apples, and they thought we were workin' for him!
Tree Trunks: Finn? Finn.
Finn: Hm?
Tree Trunks: This could be dangerous, a-and if you want to go back home, I understand, but I need to do this.
Finn: Yeah, Tree Trunks, me too.
Jake: Hey, Finn.
Finn: Hm?
Jake: [pointing to mark] What's that on your face, buddy?
Finn: Oh, that guy bopped me one. Must've had a ring on.
Jake: Y'know, I think I seen that symbol somewhere before. Yeah, right next door to where I used to hawk stolen bikes.
Finn: What?!
Jake: I didn't know it was wrong.
[Scene changes to the outskirts of the Candy Kingdom.]
Jake: [points to a building with the mark] Yeah, you see? That guy must work here or somethin'.
[The three walk up to the building.]
Finn: [knocks on the door] Hello?
Wormo: [through door] Who's the heck happening? What?
Finn: Uh, we're here about the apples?
Wormo: Oh, okay. Let's see your ring.
Finn: Um...
Jake: Here. [forms a ring on his finger and shows it to Wormo]
Wormo: [opens door] Come on in. Follow this guy. [leads them in]
[Before the door closes, someone stops it with their foot.]
Wormo: [leading them downstairs] My boss is gonna be real psyched I found someone to buy his apples. A whole crate. [shows them a crate of diamonds]
Finn: What the?
Wormo: What's wrong, guy?
Finn: These aren't apples.
Wormo: Oh, ya didn't mean diamonds? All ne'er-do-wells call diamonds "apples." Like calling money "bread" or rock-knockers "butter-slaps."
Jaybird: [opening door] Hey, Wormo, we're back—what the?! [points to Finn, Jake, and Tree Trunks] What are they doing here?
Wormo: They're here for the apples.
Jaybird: That's the dang Dr. J gang, Wormo! Grab 'em!
[Finn, Jake, and Tree Trunks are tied up.]
Tree Trunks: Um, sir? [laughs nervously] I promise if you let us go, we won't tell no one about your apples.
Wormo: Feed 'em to the pig.
Smudge: Yeah, the pig.
Jaybird: Heheh, yeah, all right. [walks offscreen and returns carrying Mr. Pig]
Mr. Pig: Uh, I'm sorry, y'all. They're makin' me do this. I-I'll try to make it quick.
Dr. J: Hold it!
[Dr. J and his gang appear.]
Jaybird: Dr. J! [drops pig]
Dr. J: Yeah, yeah, and I want my apples back.
Jaybird & Dr. J: [in unison] Get 'em, boys!
[While the gangs fight, Finn, Jake, and Tree Trunks free themselves from the rope, and Jake brings the pig with them to Tree Trunks' house.]
Tree Trunks: [starts sobbing]
Finn: Aw, don't cry, Tree Trunks.
Tree Trunks: But we're never gonna find those apples.
Mr. Pig: Apples? You guys looking for apples?
Jake: Uh, yeah, why?
Mr. Pig: 'Cause I can hear a bunch of apples in this room.
Jake: Wait, you mean "apples" as "diamonds"?
Mr. Pig: No.
Jake: "Apples" as "apples"?
Mr. Pig: Yep.
Finn: You mean apples that we eat?
Mr. Pig: Yes.
Tree Trunks: With all due respect, Mr. Pig, sir, my apples were stolen by a dirty, rotten criminal who needs to be put in jail.
Mr. Pig: I'm just telling you the facts, ma'am. What I hear is a whole pigload of apples inside that closet. [points to wardrobe] They sound scared.
Tree Trunks: Well, I hate to tell you this, boys, but there's no apples in this closet. [sticks tail into keyhole] You see, uh, I'm the only one who knows how to open this closet. [opens it]
[Dozens of apples spill out.]
Finn & Jake: [gasp]
Tree Trunks: Oh, so I was the apple thief after all.
Finn: No, Tree Trunks, that's preposterous.
Tree Trunks: No, Finn, I'm a criminal, [picks up phone and dials 911] and I need to pay the price.
Banana Guard [over phone]: Banana Guard speaking.
Tree Trunks: Uh, this is Tree Trunks. I've done somethin' horrible, and I want you to come over and arrest me.
[Finn and Jake exchange sad looks.]
[Scene changes to outside the house, with Tree Trunks in handcuffs and two Banana Guards standing by.]
Finn: Tree Trunks, you don't need to do this.
Tree Trunks: Thank you, Finn and Jake, but I won't let myself slip away from such a terrible crime. Goodbye.
Finn: Tree Trunks.
Banana Guard: Ah, this is hard to watch. I'm gonna look away.
[Several crows fly out of the forest.]
Banana Guard: This place could use a scarecrow.
Finn: Huh? Wait, what'd you say?
Banana Guard: Uh, I-I said this place could use a scarecrow.
Finn: A scarecrow, no footprints, all those magpies on the roof, Raggedy Princess in the ditch, and all the apples in Tree Trunks's closet.
Banana Guard [in Finn's memory]: Boy, this place could use a scarecrow.
Finn: That's it! [climbs onto Tree Trunks' house's roof] I knew it!
[A nest is next to a hole in the roof. A magpie brings an apple to its chicks, but the apple falls into the hole.]
Finn: The magpies have been stealing the apples and accidentally dropping them in this hole!
Jake: And that's why there weren't any footprints around the tree!
Finn: Yes. And the magpies were able to steal the apples because Raggedy Princess wasn't sitting on the fence post to scare them off!
Tree Trunks: Does this mean I'm innocent?
Jake: As innocent as a baby's butt cheek!
Finn: [jumps off roof] [laughs] Awesome! This calls for a celebration! You know what that means, Tree Trunks!
Tree Trunks: I'ma bake you the biggest and the tastiest apple pie you boys ever tasted. [strains and breaks the handcuffs]
Banana Guards: Whoa.
Tree Trunks: [to Banana Guards] Uh, you boys better stick around if you want a bite of my apple pie. [slaps Banana Guard]
Banana Guard: She slapped my butt!
[The other Banana Guard gives a thumbs up.]
Tree Trunks: [laughs]
Princess Bubblegum: Cinnamon Bun, what the heck are you doing out in the woods?! I asked you twenty minutes ago to take these drinks around for us.
Cinnamon Bun: Oh, oh, "around for us". I thought you said "walk to the zoo and back"!
Princess Bubblegum: Gob. [smacks forehead]
[Cinnamon Bun walks away and Princess Bubblegum sighs and follows him to Finn.]
Princess Bubblegum: Finn, Cinnamon Bun's gonna attend your juice bar now. I have a special job for you.
[Finn walks out.]
Princess Bubblegum: As Ooo's greatest champion, I'm relying on you to keep Lumpy Space Princess from crashing this wedding. I went ahead and deputized you. [hands a badge to Finn] So, you know, no holds barred, got it?
Finn: [giggles] Yeah. Oh, what about Jake?
Princess Bubblegum: Well, honestly I haven't seen Jake this happy in a while.
[Jake is being tickled by 5 baby pigs.]
Princess Bubblegum: I kinda don't want squash his groove.
[Princess Bubblegum opens a door.]
Princess Bubblegum: Knock, knock. Hey, Tree Trunks.
Tree Trunks: Oh, hey, Princess. Wow, you look prettier than a sippy cup in a snowbank.
Princess Bubblegum: [giggles and closes the door behind her] Thanks, Tree Trunks. Now listen, I don't want you to worry about a thing. I've got Finn on LSP Deputy, and we're keeping your ex-husbands, Randy, Danny and Wyatt, a hundred feet apart at all times - at least until it's time for me to perform the ceremony.
Tree Trunks: Oh, well, uh, Princess, I appreciate your generosity going to all this trouble to hijack my wedding and all, but you can't perform the ceremony.
Princess Bubblegum: What?! Why not?
Tree Trunks: Uh, well, I'm sorry, but I just don't recognize your quote unquote "authority" on such matters. I can only be married by His Holiness, the One True King of Ooo.
Princess Bubblegum: WHAT? That fraud?!
Tree Trunks: Now I know...
Princess Bubblegum: That fraud is here?!
Tree Trunks: Why, yes, but...
[Princess Bubblegum leaves and slams the door.]
Tree Trunks: Oh, dear. Mama, I'm afraid I've offended the Princess.
Tree Trunks' mother: Oh, nonsense, baby. She's probably jealous 'cause you're about to marry a handsome, fine, saucy man. Oh, but he is a saucy, fine bologna factory. Mmmhmm, tell you what: I'd like to open up that hood, see how the bologna gets made!
Tree Trunks: Mama, please! Please don't call him a saucy fine bologna factory!
Tree Trunks' mother: Bologna factory, bologna factory, bologna factory!
Tree Trunks: Oh, my perfect day. What else could go wrong?
[Meanwhile, His Holiness, the King of Ooo, is outside with Mr. Pig's relatives.]
King of Ooo: Please, go on. Describe the next thought form.
Mr. Pig's relative: Um... I see, like, reddish-green blotches.
King of Ooo: Ah... Ahaha! [taps the relative with his wand] One year good luck.
[Mr. Pig's relatives are all amused. Meanwhile, Princess Bubblegum is hiding by a bush and is spying on the King of Ooo.]
Princess Bubblegum: I've waited a long time for this King of Ooo, and now I'm gonna expose you in front of everyone for what you really are!
[BMO laughs while spinning on the chair.]
BMO: Yay! [giggles]
Wyatt: Hey, uh, barkeep, can I have another one of these ciders?
Cinnamon Bun: Sure! [takes out the bottle of apple cider and tries to do a trick but has difficulty taking the cork out.]
Wyatt: Hey, little robot. How ya doing?
BMO: I am the best! I love weddings, I love flowers! I love LOVE!
Wyatt: Hey, did you know I used to be married to Tree Trunks?
BMO: No!
Wyatt: Heh, yeah... it's just me and TT. We had some wild times back in the day. Did you know I once taught her to play tennis?
BMO: No...
Wyatt: Yep, tennis! I took her to one of those... uh... paddles... or whatever, you know!
BMO: No.
Wyatt: Yeah, she left me. She said I was stifling her spirit... I mean hehe... You know, what? Not enough tennis for ya?
BMO: No.
[Mr Pig's relative runs and pushes another guest down.]
Mr. Pig's relative: It's starting! The ceremony is starting! [snorts]
[The scene moves to the wedding ceremony.]
[King of Ooo signals Jake to start playing music. Jake prepares to play his viola and his toe presses the play button of the radio. He plays the viola and the pig throws flower petals from her basket. All the guests turn to Tree Trunks, who is holding a bouquet of flowers. Mr. Pig sheds a tear.]
BMO: [gasp] Oh no! I'm missing the love! [gets off her stool]
Wyatt: No! Uh, please stay here! This is cathartic. You're a good listener.
BMO: [sadly]Oh, okay... [sits down again]
[Tree Trunks walk to Mr. Pig]
Mr Pig: Psst, Sweetie, you look so nice.
Tree Trunks: Shh...
[Finn is watching from afar.]
Finn: Sounds really sweet.
[Finn hears some rustling from the bushes and gets up.]
Finn: Lumpy Space Princess? Is that you?
Lumpy Space Princess: Let me go to this party...
[A crow flies out, frightening Finn.]
Finn: It's not your party, LSP. [tries to find Lumpy Space Princess.]
Lumpy Space Princess: Poor Finn. Don't you know? [flies up from an old well. The wind blows the picnic mat off Lumpy Space Princess, revealing her in a wedding dress. After all, no wedding's complete without wedding crashers...] Every party is my party.
[Finn grunts and walks towards Lumpy Space Princess. Meanwhile, Jake is "playing" the viola, with the 5 baby pigs sleeping around his feet. The scene then moves on to Princess Bubblegum climbing a ladder to the King's blimp.]
Princess Bubblegum: I'm just gonna look in this guy's blimp. [gets on the top of the ladder and turns the door knob] Make sure everything's in accordance... [breaks open the window with her shoe and opens the door] with the laws.
Mr. Pig: Psst... sweetie, what are ya doing?
[Tree Trunks is walking back, and far away are Finn and Lumpy Space Princess continuing their scuffle. Finn tries to block Lumpy Space Princess's way.]
Lumpy Space Princess: Get out of my way, Finn. [pushes Finn] Oh my glob, you're touching my woman body!
[Tree Trunks walks to the stage.]
King of Ooo: Okay, dear, now up you come.
Tree Trunks: [whispers] Don't hurry this. [she slowly takes a step on the stage and King of Ooo lifts her up and brings her on stage.]
King of Ooo: There you go!
[Mr Pig and Tree Trunks kiss for a while but King of Ooo push them back.]
King of Ooo: Whoa, whoa, kids! Gotta finish the ceremony first. Keep the baby in the basket!
[Lumpy Space Princess tries to get to the ceremony as Finn is pulling her by the dress.]
Lumpy Space Princess: Everyone at the party get ready! 'Cause here comes the hot bunch of grapes!
["Finn grunts and his foot meets a rock and flings her to a tent.]
Lumpy Space Princess: Ahhhh... oh my gaaaah...
King of Ooo: We've gathered here on this beautiful day, under my life-giving sun, to celebrate the enjoinment of Mr. Pig and Tree Trunks, the little elephant. These two weird animals...
[BMO is still watching from afar.]
BMO: I bet some cute weddings are happening over there.
[Cinnamon Bun still struggles to take the cork out.]
Wyatt: [sighs] BMO, you're so nice.
BMO: Those flowers look really cold.
Wyatt: I've had a hard life. People seem cute. They seem nice. And then when you can't stop crying because they beat you in tennis that one time, they call you a baby.
BMO: Yeah, cute nice babies.
Wyatt: BMO?
BMO: Mm-hmm?
Wyatt: BMO, would you move in with me?
[BMO gasps loudly as its eyes widen and runs into the forest.]
King of Ooo: Do you, Mr Pig, take Tree Trunks to be your ever-wedded wife, forever following the teachings of me the true King of Ooo?
[Cinnamon Bun is seen shaking the bottle of cider.]
Mr. Pig: I do.
[Princess Bubblegum grumbles, steers the blimp and pulls down a lever while stepping on the pedal.]
King of Ooo: Do you, Tree Trunks, do you promise to love Mr. Pig forever, and spend the next 5 years with me and my serenity compound, performing simple household repairs, [Mr. Pig puts the ring around Tree Trunk's paw] to have and to hold the in sickness and in health, in my gated mountain compound?
Tree Trunks: I...
Lumpy Space Princess: Everybody get ready... [ as she crawls to the ceremony, still with Finn pulling her] to pay attention to me...
Tree Trunks: I...
[Cinnamon Bun is still shaking the bottle of cider faster]
Tree Trunks: do... oh [looks over to Finn and Lumpy Space Princess right behind the guests, struggling to get closer. The blimp is also getting closer to the stage]
Lumpy Space Princess: Everybody, hey! I'm here! Look at my bouq- [gets knocked by the blimp.]
[Princess Bubblegum gets off the blimp before it literally crashes the ceremony. Mr. Pig's mother is seen crying profusely and shaking her head. Cinnamon Bun shakes the bottle of cider and the cork is finally out.]
Cinnamon Bun: Ah... [pours the cider into Wyatt's glass.]
King of Ooo: My zep!
Princess Bubblegum: Everybody! This wedding is a farce! A criminal farce!
King of Ooo: Hey, just what are you egging at here?
Princess Bubblegum: I'll tell you what I'm egging at! I'm egging at this outdated wedding officiant license!
King of Ooo: Oh, is that what this is about? You must've found that in my back records! I have the up-to-date paperwork right here!
Tree Trunks: Oh!
Princess Bubblegum: What? Uh...
King of Ooo: Hey, wait, how did you get that? I could've swore it was locked in my zep.
Princess Bubblegum: No... shhh... no... nope nope, stop talking, go to jail! [handcuffs King of Ooo] Yeah!
Tree Trunks: Princess Bubblegum, you have gone too far. We stand together against your tyranny.
[Finn walks while grabbing a knocked out Lumpy Space Princess]
Finn: Hey, everybody.
Tree Trunks: Your prison may hold one of us, but it may not hold all of us.
[All the guests are imprisoned. You and your big mouth, Tree Trunks.]
Tree Trunks: Oh, poor Tree Trunks. Wait, where's my mama? Has anyone seen my... oh!
[Tree Trunk's mother and Wyatt are seen kissing.]
Tree Trunks: No, Mama. Well I guess this is it, sweetie. [telepathic signals enter her head] Oh, oh no, the elephant graveyard is calling me now. Okay, hold your horses, I'm coming!
Mr Pig: Wait, Tree Trunks. Look around: everyone we care about is all here together. Finn, Uncle Donald, Banana Guard Number 1, Jake, Jake Junior, everybody. We can have the ceremony right here.
Tree Trunks: Hey yeah! King of Ooo, will you do the honors?
[King of Ooo is seen biting the candy bars.]
King of Ooo: Are you crazy? That loopy bird is gonna string me up sideways. You can perform your own dang ceremony. Kingofooo.com! [escapes]
Tree Trunks: Oh, dear.
Mr Pig: Oh, my gosh. Tree Trunks, did you hear?
Tree Trunks: Huh?
Mr Pig: The King said you can perform your own dang ceremony!
Tree Trunks: Yeah, that really stunk.
Mr Pig: But...
Tree Trunks: But... the King's word is law. I can perform my own dang ceremony?
Jake: Are you up to it, TT?
Tree Trunks: I'll try. I guess it's time. A-are you ready?
[Mr Pig nods]
Tree Trunks: Oh. Okay, um... do you Mr Pig take me, Tree Trunks, to be your beautiful wedded wife?
Mr Pig: I do.
Tree Trunks: And do I, Mr Pig, take him to be your lawful wedded husband, Tree Trunks?
Mr Pig: I do.
Tree Trunks: Then you... you may kiss the bride!
[They kiss and Princess Bubblegum cry while watching them at the security camera.]
Princess Bubblegum: Aww, geez, let them all go, Banana Guard Number 3.
Banana Guard Number 3: Uh... what?
Princess Bubblegum: I just can't stay mad at something so cute.
Banana Guard: Did she just say let everyone go?
[Banana Guard Number 3 shrugs and the Banana Guard presses a button and the prison cell doors open and everyone including other criminals run out except for Tree Trunks and Mr. Pig.]
Tree Trunks: Looks like we got the whole place to ourselves... if you know what I'm saying.
[Princess Bubblegum cries while sipping her drink and watching them.]
Mr Pig: Wait, d-don't you think there might be cameras down here?
Tree Trunks: I hope so...
[Princess Bubblegum grimaces with an upraised eyebrow.]
Finn: Jake, so I just had this weird thought.
Jake: Well, that's normal; people always have weird thoughts around campfires.
Finn: Well, I don't know. Isn't is sort of strange that we keep pets? We kind of make them worship us.
Jake: What?! Nah. [tosses stick into fire]
Finn: No, seriously, think about it. We're their only source of food and water and, like, tummy rubs. They basically have to love us.
Jake: [turns towards Finn] What's wrong with tummy rubs?
Finn: Yeah, tummy rubs are pretty great. [sighing he points upward towards a bright pulsating light] That one star is so crazy, looks like it's vibrating. [Finn's eyes pulsate pulsate the same] It's so cool. Wonder what it is, a planet? Do people live there? Are they friendly? Do they keep pets?
Jake: Alright buddy, [pulls his skin over himself] that's a little too much campfire. Time for bed. [extinguishes the fire with a large hand]
[Finn's eyes are still on the light. The light shifts into comet-like form. Back at the campsite a sleeping Finn finds himself astral project away from his body.]
Finn: Whoa... holy. [seems himself and Jake] Oh, dang. [he playfully flicks Jake's nose, but it simply phases through him.] [Laughs] Uh, okay. [He feels himself being pulled away and floating above the treeline] Man, this is screwy. Maybe it's the can of beans we had for dinner. [He floats towards a small square house] Looks- uh- homey. Wuh-oh! Whoa-Aah! [He tumbles mid-air into the wall and inside] Oh- right.
[Inside the house is a sleeping Mr. Fox.]
Mr. Fox: [Mumbles in his sleep] Mmm, Boobafinna, just pay me back when you can.
Finn: Aww.
Astral Mr. Fox: Hello? [Sitting on a chair doing a sudoku puzzle]
Finn: Oh! Hey, you can see me?!
Astral Mr. Fox: See you...? But if I didn't see you... Wait, what did you originally ask me?
Finn: Oh, forget it, it's cool.
Astral Mr. Fox: Do you, want a drink or something? I think I only have water anyway. [Sees Finn floating upward through the ceiling].
Finn: Whoop, here I go! Bye!
Astral Mr. Fox: Oh, that was sort of rude. I hope he comes back. [Goes back to his puzzle]
Finn: [Above and way from the Fox's house] That guy seemed lonely, not a lot of foxes up at this hour. [Floating higher] Guess you get a lot of work done though.

[The scene changes to show Bounce House Princess and giggling from inside of her. She looks at her watch.]

Bounce House Princess: Quittin' time! [She ejects the bouncing children outside] You don't have to go home but ya', oh, you know how it goes! [Bounces away]
Finn: Bounce House Princess. [His body follows her up towards her home]. I didn't know B.H.P lived in a cave. [He floats inside. Bounce House Princess is at her vanity getting ready for the night] Hey, this place is pretty nice.
Bounce House Princess: [Slathers cream on her face]
Finn: [Blushes] Whoa!
Bounce House Princess: [Brushing her hair] Forty-one, forty-two, forty-three, forty-four, forty-five. forty-six, four-seven, fourth-eight, forty-nine... fifty! [Finn is exasperated by this point]. Fifty-one, fifty-two [A noise startles her and she looks towards the front door]. Who's there?!
[A porcupine has entered the house through a door flap. It looks around and heads towards the kitchen area]
Bounce House Princess: [Loudly gasps] Oh my glob, oh my glob, oh my glob, oh my glob! [She runs to a far wall and rips the wallpaper, revealing a "Panic Room" door] [She quickly inputs the code] six four three two one! [She looks behind her to see the porcupine licking a cracker].
Finn: [Floats towards the panic room. He annoyingly looks at the porcupine] Dude, what's your deal? [The porcupine not hearing Finn simply continues to eat crackers.]
Bounce House Princess: [Inside the room she nervously eats a jar of preserved 'Froot Salad' ] Everything's okay now.
Finn: Aww, geez, poor Bounce House Princess.
Bounce House Princess: [Her expression changes to panic as she sees the porcupine making its way towards the panic room's closed door.]
Finn: [Looks at the monitor] Wha?
[The porcupine rubs up against the door and gradually moves over to the punch pad, its quills hit the correct code and the door opens. Bounce House Princess drops her jar of fruit and stands frozen. The porcupine walks in a laps up the dropped fruit. Bounce House Princess weeps in fear]
Bounce House Princess: [Stops and toughens up] Bounce House Princess, you listen to me! Are you gonna' shut yourself off from other people forever?! I mean he or she could be really nice and- okay, mm, maybe if I just say very still, it'll just- it will just go away. [Finn's body is pulled upwards towards the ceiling a loud pop is heard]
Finn: [Now floating above the princess's cave] Gosh, I hope BHP's okay, I feel bad for just splittin' like that. Maybe they sorted it out, they could have stuff in common. You never know until you speak to the person. [Floating around the clouds, he sees flashing lights and hears music] Oh, hey, Cloud Kingdom.
Finn: [Floating above the party goers he spots the Ice King] What the? Ice King?
Ice King: [Creates a giant ice ball and breaks it into ice cubes. He is seen leaning against a wall speaking with a Cloud Woman named Lauren] Yeah, I guess there's some cool people here, musics a little loud but the but the punch is top-drawer.
Lauren: Mm hmm
Ice King: Hey, you should come to one of my parties sometime; I'm friends with some pretty cool people too you know?
Lauren: Uh huh, who are your friends?
Ice King: Oh, uh- like that guy, Finn.
Lauren: [Suddenly takes interest] Finn?!
Ice King: Yeah, Finn and I are pretty tight!
Finn: [Watching the scene gasps at the idea and growls in frustration]
Lauren: Hmmm
Cloud Woman 2: [Holding a cup] Oh, hi, are you the ice-dude?
Ice King: [Zaps her an ice cube] That's me, ice-dude. [Back to the other Cloud Woman]. Hey, have you ever seen the inside of an ice bear cave?
Lauren: Did you say you know Finn the Human?
Cloud Man 1: [Holding a cup] Hey, buddy, buddy! Care to freshen me up?! [Ice King zaps him an ice cube]
Ice King: Yeah, yeah, now scram.
Lauren: Hey, is Finn seeing anyone right now? Could you introduce us? [Gasp] Oh my glob! Is he here now?! [Looks around]
Ice King: So I guess you're more into the 'little brother-type'? Huh.
Cloud Man 2: [Holding a cup] Hey Lauren, I heard your grandpa's given out ice! [Chuckles]
Ice King: [Growls angrily] Ice?! I'll give you ice! [He unleashes his powers zapping the group of partiers, one passes through Finn who is unharmed] Oh, looks like I put this party- on ice. Oh wait, you want ice? You, oh, you got iced! [Turns back to Lauren who is now a block of ice] Anyway, oh, don't look at me like that Lauren. [He watches as he and the other Cloud People slip through the clouds and fall towards the grown]. Eh, this party was weak anyway.
Finn: [Floating higher above the clouds] Poor Simon. Poor Simon, I guess? Poor Simon... sort-of? It's like some part of him wants to be a sad wong-lord. [Floating higher] But why would anyone want that? Is there some... incentive? [A strumming of a guitar is heard. Finn spots Marceline who is floating in the air playing the guitar and singing to herself]

[Now above Marceline and continuing upwards towards the stratosphere]

Finn: Sheesh, I wonder if being a sad loner gives you more raw material to form song ideas. Is that where creativity comes from? From sad-biz? [Floating above the earth] I am so high up now. I am so high up, there is no "high up". It's all just... [looks up to see blue creatures circling in space] Whoa! What the--? Whoooa! [Floats in the middle of the circle] Space Lards! Ah man, Jake would be flipping out; trying to get that super-rare milk. Make a sick flan with that milk. Oh, well.
[The Space Lards stop circling and sit up right]
Finn: Whoa! What's going on? You can't see me, right? [The Space Lards open up, their mouths and eyes begin to glow. They concentrate their beams into the center where Finn is. Out of this concentration is summoned a larger Space Lard with four eyes - the Mother Lard.]
Finn: [Gasp] I'm in the Mother Lard! [A newborn space lard exits its egg sac, greeting the human boy's astral form with a "Fiiiiinnnnnn", and phases outside the flesh walls of its mother]. What? Space birth! [A shot of the comet and Finn is pulled upward out of the giant lard] Okay, here we go! Whoa! [Exiting out the top of the lard's head] Bye, guys. Oh, that was creative and it wasn't sad either so maybe birth is the greatest statement in all the universe. [The space lard new-born floats under Finn] Hey, baby, ya' gonna give me a boost? [It does so, sending Finn quickly further away from Earth, past the moon into fields of floating food]. Here comes Mars. What the heck is going on though? [He sees a fleet of EVAC ships leaving the planet] Everybody's leaving!

[The scene changes to being on Mars. Grob Gob Glob Grod is there along with a man, Star Man, sitting at a large machine. The machine is aimed at the pulsating light, the comet Finn saw before]

Grob Gob Glob Grod: Fire defense missiles!
[The Martian defense missiles launch from their defense silos. Target: the Catalyst Comet.]
Star Man: Missiles away! Impact with Catalyst Comet in 5, 4, 3, 2, 1!
[IMPACT! The missiles hit the Comet!]
Grob Gob Glob Grod: Yes! Do you think it worked, Star Man?
Star Man: [Shrugs] Uh, yeah, probably, right? [The comet appears through the missiles' dust cloud without getting so much as even a dent] Shoot! No effect! It's still coming right at us!
Grob Gob Glob Grod: Was that all of our missiles?
Star Man: Uh, yeah, I'm surprised we even had those ones. Like who would we shoot a missile at? Who'd we shoot at?!
Grob Gob Glob Grod: [Altogether] I'm thinking, Star Man!
Star Man: [Covers his mouth] Rooot!
Grob Gob Glob Grod: Grob. Assessment.
Grob Gob Glob Grod: We're sunk, bro. This whole place is gonna be a stinkin' molten dump in a minute.
Grob Gob Glob Grod: It doesn't make sense. Every 1,000 years, the Catalyst Comet mysteriously reincarnates itself and collides with Earth, bringing with it an agent of change. But the comet has never been so off schedule - and it's never freakin' hit Mars!
Grob Gob Glob Grod: What do you think, Finn the Human?
Finn: Wha? Who, me? You can see me too?
Grob Gob Glob Grod: Yes, I am Glob.
Finn: Oh yeah. Hey, do you ever say "Oh my Glob?"
Grob Gob Glob Grod: No, but sometimes Gob does. [They all smile and so does Finn, who laughs] You're dreaming so far from home, it must be comet related.
Finn: Yeah, but, I gotta question.
Grob Gob Glob Grod: What's that?
Finn: Well, if just being born is the greatest act of creation. [shot of Space Lards] Then what are you suppose to do after that? [shot of Mr. Fox looking at the sky] Isn't everything that comes next just sort of a disappointment? [shot of Ice King standing in an empty Cloud Kingdom] Slowly entropy-ing until we deflate into a pile of mush? [shot of Bounce House Princess, now deflated in her panic room with the porcupine continuing to eat]
Grob Gob Glob Grod: Well, it’s not enough to have created something amazing, right? What if I just let my Martian supersociety go to butt?
Finn: But what's it worth if we're all gonna get blowed up right now? [Grob Gob Glob Grod suddenly takes off into space]
Star Man: Whoa! What are you doing?! [looking through the machine's scope] [Grob Gob Glob Grod head straight at the Comet screaming and crashes into it, sacrificing their synthetic lives for the Red Planet in a blaze of cosmic glory. The impact is so powerful, Finn is blown away by it and falls back to Earth and back into his body.]
Finn: Ahhh! [Gasps and wakes up] Oh my bod!
Jake: [Wakes up] What is it, boyi?!
Finn: ...Glob is dead.

[Above Mars, the fleet of ships saw the explosion]

Evacuation Man: [On a walkie-talkie] Hello, Star Man, this is Evacuation Man, what's the sitch, can we go back yet?
Star Man: [On walkie-talkie] Yes! Gob Glob Grod Grob diverted the comet, it's back on its normal path to Earth.
Evacuation Man: And what about the G-Man?
Star Man: No sign of Glob.
Evacuation Man: [Takes off his hat and lowers it in respect] [The comet passes by]

[As it appears, the "comet" is really a star cruiser... and inside this ship's bridge is Finn's father, Martin.]

Martin: Ahh! Computer! What did we hit?! [No good - the computer spouts gibberish then explodes, no doubt from the heavy damage inflicted by Grob Gob Glob Grod's sacrifice.] Oh, blobs... [recovers and looks out the window] oh, for real blobs... [He is quickly approaching Earth]
Finn: [to Jake] Hey, I think Bounce House Princess needs our help.
Jake: [thumbs up] Let's do it!
- Greg, were you smoking cigarettes? - No, Dad.
He's lying.
There's no doubt about that.
Greg, I'm afraid your punishment will be four hours in the snakepit.
That'll give you time to think about what you did.
Man! That'll teach him.
Jan, I'm afraid you've earned a day in the fire chamber for tattling on your brother.
Smoking.
How does a boy like that go so wrong? - They live in a crummy neighborhood.
- The Bradys? Yeah.
They got robbers, thugs, drug dealers.
You name it.
You folks want some pancakes? PETER: No, thanks.
See, that's the worst we got is Jemima's Witnesses.
LOIS: [Singing] "It seems today that all you see "is violence in movies and sex on TV "But where are those good, old-fashioned values "on which we used to rely? "Lucky there's a family guy "Lucky there's a man who'll positively tell you "all the things that make us "laugh 'n' cry "He's a family guy" [Cheery instrumental music] MEG: Mom, my lips are too thin.
Can I please get collagen injections? Meg, you don't need to change the way you look.
You know, most of the world's problems stem from poor self-image.
[Polka music playing in gym] [Man and women laughing] [Growling] Excellent! The mind-control device is nearing completion! LOIS: Stewie, I said no toys at the table.
Damn you, vile woman! You've impeded my work since the day I escaped from your wretched womb.
Don't pout, honey.
When you were born the doctor said you were the happiest looking baby he'd ever seen.
But, of course.
That was my victory day.
The fruition of my deeply-laid plans to escape from that cursed ovarian bastille! Return the device, woman! No toys, Stewie.
Very well, then.
Mark my words, when you least expect it, your uppance will come! [Suspenseful instrumental music] Mom, can I turn the heat up? Don't touch the thermostat, Meg.
Your father gets upset.
Come on.
This thing goes up to 90.
Who touched the thermostat? God, how does he always know? Brain implant, Meg.
Every father's got one.
Tells you when the kids mess with the dial.
GUY: My thing went off! Your thermostat okay? - Yeah, it's all right.
- Is my kid over here? Forget it! False alarm! BRIAN: Ass ahoy.
Peter, it's 7:00 and you've still got your pants on.
What's the occasion? He's going to a stag party.
Lois, I work hard all week to provide for this family.
I am the man of the house.
As the man, I order you to give me permission to go to this party.
Look, at least promise me you won't drink.
Alcohol always leads to trouble.
Come on.
You're worrying about nothing.
Remember when you got drunk off the Communion wine at church? And so the Lord God smote poor Job with festering boils all over his body.
Man, I hate it when he tells this story.
PRIEST: Yet, miraculously, Job was still able to retain his dignity.
- Is that really the blood of Christ? - Yes.
Man, that guy must've been wasted And then there was that time at the ice cream store.
Butter Rum's my favorite.
Remember you had an Irish coffee the day we went to see Philadelphia? [Audience crying] I got it.
That's the guy from Big.
Tom Hanks, that's it.
Funny guy, Tom Hanks.
Everything he says is a stitch.
I have AIDS.
- Promise me, Peter.
- Lois, honey, I promise.
Not a drop of alcohol is gonna touch these lips tonight.
Who wants to play Drink The Beer? Right here.
- You win.
- All right.
What do I win? Another beer! I'm going for the high score! Actually, Charlie's got the high score.
Man.
Your clock won't flush.
I feel kind of bad, guys.
I promised my wife I wouldn't drink.
- Don't feel bad, Peter.
- Gee.
I never thought of it like that.
Did you bring the porno? Did I bring the porno? You're gonna love it.
It's a classic.
Listen, Ilsa.
If I take this thing out and you're not on it, you'll regret it.
Not today or tomorrow.
RICK: But soon, and for the rest of your life.
Come on, llsa! Get on it! [Funky music on TV] NARRATOR: The statue was a gift from France.
What is this? Man.
My kid must've taped over this for history class.
[Groans] The Statue of Liberty? What are we gonna do? - Boys, we're gonna drink till she's hot.
- That's just crazy enough to work.
Meg, finish your pancakes.
- Chris, elbows off your father.
- Thanks, son.
a great example for the kids, Peter.
Yeah.
A new family record.
Way to raise the bar, Dad.
Chris, you're 13.
Don't talk like that.
Kids, Daddy only drank so the Statue of Liberty would take her clothes off.
- What did you promise me last night? - I wouldn't drink at the stag party.
- And what did you do? - Drank at the stag I almost walked right into that one.
God! Feels like accountants are cranking adding machines in my head.
[Machines whirring] Dick, you ever wonder what's outside those walls? That's dangerous thinking, Paul.
You best stick to your work.
Okay.
You see? A hangover is nature's way of telling you I was right.
I mean MEG: Mom, are you all right? LOIS: My goodness.
This chair leg was loose.
Isn't that silly? I could've broken my neck.
Damn! [Suspenseful instrumental music] Honey.
I took a cab home, I slept on the table so I wouldn't wake you up.
Nothing bad happened.
I guess you're right.
Apology accepted.
All right, I'm going to work.
Somebody's gotta put food on this table.
How are you coming, Johnson? Mr.
Weed, I've been working on the new G.
I.
Jew line.
And as you can see, they look great.
You call these bagels? I'm glad he's on our side! [Snoring] MR.
WEED: Peter! PETER: What? Are you sleeping on the job? No.
There's a bug in my eye and I'm trying to suffocate him.
Peter, I like you.
But I need you to be more than just eye candy around here.
It's your job to watch for toys that could be hazardous to kids.
- Now, look sharp! - Yes, sir! [Snoring] [Foreboding instrumental music] And now back to Action News 5.
Our top story tonight, "When Toys Attack.
" Quite a situation we've got here, Tom.
Quite a situation we've got here, Tom, indeed, Diane.
The Happy-Go-Lucky Toy Company of Quahog, Rhode Island has released highly unsafe products into the retail market.
Come on, Timmy! Throw the Silly Ball! Boy! A Pound Poochie! Come on, Baby Heimlich, spit it out.
Peter, I'm appalled.
Your negligence has damaged this company's reputation.
You're fired! Jeez.
For how long? [Sad instrumental music] My God! You got fired? - Way to go, Dad! Fight the machine! - How do you know about the machine? PETER: Don't worry.
I'll still put food on this table.
Just not as much.
So it might get a little competitive.
Who cares about food? Now we'll never be able to afford my lip injections! BRIAN: Can we put her out in the yard for a while? LOIS: Okay, who's hungry? Jeez.
How the hell am I gonna break this to Lois? If she finds out I got fired for drinking, she's gonna blame me! DEVIL: Lie to her.
It's okay to lie to women.
They're not people like us.
I don't know.
Hey, where's the other guy? [Cars honking] Come on, you bastard! I'm late for work.
This is perfect! Look, I don't want your mom to worry, all right? When she worries, she says, "I told you so" and: "Stop doing that.
I'm asleep.
" So I'm just gonna tell a little lie, okay? Not a word to your mom about me getting canned.
LOIS: What's that, Peter? - Nothing.
The lost-my-job smells great.
- What? Meg, honey, can you pass the fired-my-ass-for-negligence? LOIS: Peter, are you feeling okay? I feel great! I haven't got a job in the world.
All right, then let's eat.
I know you all hate eggplant, but What on earth was that? What the deuce are you staring at? It's tuna fish and nothing else.
[Suspenseful instrumental music] How's your job search going? It sucks, Brian.
I've already been through two jobs this week.
I got fired off of that commercial.
DIRECTOR: Try it again.
PETER: "I'm caca for Cocoa Puffs.
" DIRECTOR: No, damn it! Take 26! Then I had that job as the sneeze guard for that restaurant's salad bar.
Take it outside, lady.
I thought I could win money in that talent show.
EMCEE: And the prize goes to The von Trapp Family Singers! That is bull [Loud applause] Peter, I know it's a dangerous precedent but you might want to tell Lois the truth.
What? That I can't provide for my family? That she's always right? That I didn't stand up to a tank in Tiananmen Square? Screw this! I just came over to buy some fireworks! You can't keep lying to her about losing your job.
Eventually, she'll find out where you're going every day.
Yeah.
[Bells and music on TV] Yeah, you're right.
Okay, I'll tell her tonight.
[Crickets chirping] [Suspenseful instrumental music] [Mellow instrumental music] Victory is mine! LOIS: I'll need the checkbook in the morning.
I'm going to Stop 'N Shop for some sweet corn.
You're spending money on food again? Lois, we just had dinner.
I enjoyed it so much, I thought we'd eat again tomorrow.
Since when are you so concerned about our food budget? I just Lois, this is really hard for me to say, but What is it, Peter? - You're getting kind of fat.
- What? It's just It's not healthy.
Peter, I do my Jane Fonda workout tape three times a week.
When was the last time you saw your toes? I thought you people were supposed to be jolly.
Peter, what the hell is the matter with you? Honey, if there's something wrong, you can tell me.
- Sorry, man.
Am I late? What did I miss? - Thank God you're here.
What do I do? Tell him to keep quiet.
He's in too deep.
I don't know.
Where's the other guy? [Cars honking] This is unbelievable! I promise you, everything's fine.
You got nothing to worry about.
STEWIE: Well, well, Mother! We meet again! Stewie, I thought I tucked you in an hour ago.
Not tightly enough it would seem.
And now you contemptible harpy I shall end your reign of matriarchal tyranny.
LOIS: You can play tomorrow, honey.
Right now it's bedtime.
Blast you and your estrogenical treachery! PETER: Sweet dreams, kiddo.
You have the power to end this! How'd she take it? I told her she was fat.
No.
I hate lying to Lois.
It's just It's the best way to keep her from the truth.
You have no choice.
Your unemployment will dry up soon.
She'll probably sense something's amiss when they repossess your house.
You really oughta think of your family's welfare.
Jeez, Brian! That's a great idea! Okay, do you have any disabilities, past injuries, physical anomalies? I didn't have gas for the first time until I was 30.
[Breaks wind] What the hell was that? PETER: Guys, our money problems are over! We're officially on welfare.
Come on, help me scatter car parts on the front lawn.
How much are we getting? Let's see.
$150 a week.
Wait.
That's a comma, not a decimal.
[Uplifting instrumental music] Whoops.
No, I haven't seen Peter all afternoon.
I was giving a piano lesson.
Stewie, why don't you play in the other room? Why don't you burn in hell? No dessert for you, young man.
Who would've thought getting drunk would get me $150,000 a week from the government? This is why I don't vote.
Maybe somebody down there was drinking, too.
Mr.
President, why do you think the public supports you during these impeachment proceedings? Probably because you're so fat.
Peter, you might want to call the Welfare Commission.
That check is obviously an oversight.
Not necessarily.
Maybe I'm like their one millionth customer.
BRIAN: What? You're gonna spend $150,000 a week? - Yeah.
- On what? LOIS: Oh, my God! Peter, you bought the statue of David? No.
I just rented it.
But they're gonna be ticked.
The penis broke off while I was loading it into the car.
I shall call you "Eduardo.
" Peter, how can we afford this? You won't believe it, Mom! Dad's getting A big raise! Peter, that's wonderful! But, Dad, I thought The kind of raise that'll allow me to give my kids a big allowance just for keeping their big mouths shut.
Come on, guys.
I'll buy us the most expensive meal we've ever had.
Yeah.
I'd like 6,000 chicken fa-ji-tas, please.
CLERK: I beg your pardon? And a "So-sage" McBiscuit, please.
Peter, what's the big surprise? You know how I always said you should be treated like a queen? I got you your own jester.
JESTER: Good to be here in New England.
And what's the deal with "New" England anyway? It's over 200 years old! Last time I checked, that's not that new.
This is great.
I can finally afford to give my little girl the lips she's always dreamed of.
MEG: Thank you, Daddy! [Kisses Peter] I don't know, Peter.
Lips are one thing.
But did you have to buy breast implants for Chris? It makes him happy.
These are cool.
MAILWOMAN: When did you get a pool? It's a moat.
I know it's silly but my husband thinks our family needs extra protection now that we're rich.
Does it work? It does keep the Black Knight at bay.
[Horse sputtering] Congratulations in all your success.
Here's your welfare check.
What the [Foghorn blowing] Hi, honey.
What? PETER: I know what I did was wrong.
But I only did it for you and the kids.
Except for the jukebox in the bathroom.
That was for Peter.
Yeah, from the American taxpayers.
I am so mad I can't see straight.
No problem.
We got money to get that fixed with enough left for us to buy our way out of any trouble our kids might get into.
Just like the Kennedys.
LOIS: I feel like I don't even know you anymore, Peter.
The man I married would never think he could fix a problem just by spending money! Boy, she's pretty pissed.
Who thought fraud would be one of her buttons? Why have a jukebox in the john if your wife's mad at you? Peter, you may have to return that money to the taxpayers.
But I gotta make sure Lois knows I'm doing it.
I need an event with thousands of people.
Something that everybody cares about.
We might have to leave Rhode Island for this.
ANNOUNCER: The air is electric here at Super Bowl XXXIII tonight! Pat, it's safe to say that all these fans came out here to watch a game of football! John, we're in commercial.
Yeah, I know.
I'm just making conversation.
Come on.
Football! Amazing.
You can barely drive a car.
Yet you were allowed to fly a blimp? Yeah, America's great, isn't it? Except for the South.
Boy, I hope Lois is watching.
Okay, taxpayers, here you go! PAT: Looks like we're getting some rain here tonight, John.
Yeah.
Hey, wait a second! This is no ordinary rain! It's some kind of crazy money rain! I'm being told it's a man and his dog throwing cash out of a blimp.
Man.
I hope this works.
Otherwise, I'm gonna have to start dropping these.
[People cheering] JOHN: The crowd is storming the field! This is pandemonium! Have you ever seen anything like this, Pat? Just once.
The 1975 Cotton Bowl.
This is the old "trying to make amends "for spending $150,000 a week in misappropriated welfare funds" play.
I don't care what it is! That guy's ruining a perfectly good game of football! - Madden to Fox Security.
- Go ahead.
JOHN: Take them down! GUARD: Yes, sir.
How was your shower? I tell you, all of the rumors about dropping the soap are true.
Really? You can't hold onto that thing to save your life.
It was slipping everywhere.
Guys were laughing.
GUY: There's the guy that couldn't hold the soap.
That was classic.
Boy.
I really let Lois down this time.
Do you think she'll wait for me? If every woman dumped her husband for crashing a blimp, no one would be married.
Yeah, you're right.
Okay, I got the top bunk.
My collagen is wearing off.
Honey, sagging lips are just nature's way of telling you you shouldn't cover for your father's lie.
What does it mean when your armpits cry stinky tears? It means you're becoming a man.
But hopefully not the kind who stays out all day and doesn't call like your father who shall remain nameless.
STEWIE: Hello, Mother.
LOIS: Hi there, sweetie.
You know, Mother, life is like a box of chocolates.
You never know what you're going to get.
Your life, however, is more like a box of active grenades! [Dramatic instrumental music] STEWIE: Now, I offer one last chance for deliverance.
Return my mind-control device or be destroyed.
You just want your toy back.
Okay, here you go, honey.
Yes Well, victory is mine! [Explosion] STEWIE: Damn you all! [Phone ringing] [Phone ringing] Hello? Oh, my God! Lois, am I glad to see you.
I have nothing to say to you, Peter.
I gave the money back.
Why are you still steamed? Peter, you lied to me, you betrayed my trust.
Compared to that, welfare fraud doesn't even matter.
Really? Let's hope the judge feels that way.
This court will come to order.
I figured the sooner I cashed the check the sooner they'd catch their mistake.
Why are we making a federal case out of this? Don't you think you should have alerted the government of such a gross overpayment? I was gonna call them.
But my favorite episode of Different Strokes was on.
The one where Arnold and Dudley get sexually molested by the bike shop owner? All right.
Now I want you boys to scream real loud at my ass.
And everybody learns a valuable lesson.
Mr.
Griffin, have you learned a lesson? Yes.
Stay the hell away from that bike shop.
[People murmuring] Okay, everybody, I feel really bad about what I did.
I just I don't know.
I saw the one chance l'd ever have to give my family the things they deserve.
I guess I screwed it up.
I cheated the government.
And worst of all, I lied to my wife.
And she deserves better.
I'm sorry, honey.
Mr.
Griffin, I think your words have touched us all.
I'm sentencing you to 24 months in prison.
No! - No! - No! No! Yeah! [Rock music] [Rock music stops abruptly] LOIS: Excuse me, Your Honor? JUDGE: Yes? Look, my husband may be a bit thoughtless at times.
He may even be downright stupid.
But I know he only accepted that money because he wanted to be a good husband and father.
But what he needs to remember is that we love him.
And no matter what, I'll always stand by him.
I love you too, honey.
That was very moving, Mrs.
Griffin.
Okay, you can go to jail with him! What? Intolerable as it may be l'm completely dependent upon those wretched drones for sustenance.
Let us see how the constitution of American justice fares against the device! [Device pulsates] Is that your boy? What? Yeah.
That's Stewie.
Gosh.
I can't separate a kid that young from his father.
It's unjudgmenly.
- Hell, you've learned your lesson, right? - Yeah.
- All right.
You're free.
- Wow! Can you give me my job back? No.
- Yes.
- All right! [Cheery instrumental music] [Man laughing on TV] ED: That was a crazy one, Dick.
DICK: It sure was.
In this next blooper from Joanie Loves Chachi watch what happens when Scott Baio tries to say: "She sells seashells down by the seashore.
" What does your mom do? She sells seashells down by the That is kind of a tongue twister.
It's good to have you home, Peter.
Honey, I knew everything would turn out okay.
I sure am gonna miss being rich.
PETER: Don't worry.
I got a way to get money.
Not another welfare scam? No.
Minority scholarship.
[Giggles] [Jazzy instrumental music] LOIS AND BRIAN: No.
STEWIE: Are you insane? Okay, I mean sexual harassment suit.
[Giggles] BRIAN: No.
LOIS: Don't think so.
STEWIE: Absolutely outrageous.
Okay, disability claim.
Isn't he adorable playing with his Sesame Street phone? Put me through to the Pentagon.
ERNIE: What sound does a cow make? STEWIE: Don't toy with me! I've already dispatched with Mr.
Hooper.
I've six armed men outside Big Bird's nest.
And as for Linda? It's difficult for a deaf woman to hear an assassin approach, isn't it? ERNIE: Can you count to three? STEWIE: Indeed I can.
One! Two! Three! Can I count to three? For God's sake, I'm already shooting at a fifth-grade level.
LOIS: [Singing] "It seems today that all you see "is violence in movies and sex on TV "But where are those good, old-fashioned values "on which we used to rely? "Lucky there's a family guy "Lucky there's a man who'll positively tell you "all the things that make us "laugh 'n' cry "He's a family guy" Come on, Stewie.
You can't leave the table until you finish your vegetables.
Then I shall sit here until one of us expires.
You've got a good 40 years on me, woman! Sweetie, it's broccoli.
It's good for you.
Now open up for the airplane.
[Makes airplane noise] Never! Damn the broccoli! Damn you! And damn the Wright Brothers! My, aren't we fussy tonight.
Okay.
No broccoli.
Very well then.
L Who the hell do you think you are? Honey, it's not gonna go away just because you don't like it.
Well, then.
My goal becomes clear.
The broccoli must die.
[Sinister instrumental music] Mom, will you take me out to practice driving? I'm teaching a piano lesson in half an hour.
Maybe your father can take you.
Sorry, Meg.
Daddy loves you.
But Daddy also loves Star Trek.
And, in all fairness, Star Trek was here first.
KIRK: Captain's log, Stardate 8169.
7.
The Enterprise has just discovered a strange new planet in the Gamma Faloppia star system.
Mr.
Sulu, ahead Warp 9.
LOIS: For God's sake, Peter.
You've been in front of the TV since you got home from work.
Why don't you spend some time with your family? I will, during the commercials.
And if that's wrong, maybe I'm missing the point of having commercials.
[Sighs] Please.
My road test is tomorrow and you haven't taught me anything.
You may want to find a better teacher than Peter.
What are you talking about? I'm a great driver.
Remember your trip to the Southwest? [Road Runner meep-meeping] - Jeez.
Did I just hit that ostrich? - No.
- Are you sure? - He's fine.
Keep going.
Don't believe that.
I always keep my eyes on the road.
PETER: I don't miss a thing.
TV: We now return to Star Trek.
Holy crap.
Uhura's black? All right, Meg.
Now here's your first lesson.
You always want to be aware of other cars on the road.
If you catch eyes with the guy next to you at a red light, you gotta race him.
- This guy's asking for it.
- But Dad I don't make the rules, honey.
Now rev your engine twice.
Okay.
[Engine revving twice] [Horse sputtering twice] Go! [Fast-paced instrumental music] [Screaming] [Dramatic instrumental music] PETER: You forgot to flip him off.
But other than that, nice job.
You're back already? That wasn't much of a lesson.
I didn't want to overload her on her first time out.
Besides CHiPs is about to start.
So let's sit back and get lost in a world of California Highway Patrol fantasy! [Police siren] [Funky instrumental music] - What's the charge, Officer? - Driving without my phone number.
[Gunshots firing] Or maybe I should arrest you for being too beautiful.
[Teeth sparkling] So, broccoli, Mother says you're very good for me.
I'm afraid I'm no good for you! The first rule of war is know thine enemy.
And I know this! Cold kills broccoli! It's so simple.
All I need to do is build a machine to control the global environment.
Forecast for tomorrow, a few sprinkles of genius with a chance of doom! [Sinister instrumental music] PETER: This is taking forever! Come on.
Let's go.
Fox is running one of those new reality shows at 8:00.
Fast Animals, Slow Children.
[African instrumental music] Come on, guys.
Wait up.
[African music continues] Dang.
I got honey all over my legs.
Dad, we can't leave now.
My entire life depends on getting my license.
If I can't drive, I'll never have a boyfriend, never get married and then I'll have to adopt a kid like Rosie O'Donnell.
Are you implying that Rosie O'Donnell can't drive? I'm so nervous.
You're gonna do great.
Remember everything I taught you.
- Let's start by going down Main Street.
- Okay.
[Engine revving twice] [Police siren] - What are you doing? - I'm driving.
[Screaming] Are you gonna mark me down for not flipping him off? God, my life is over.
I am the biggest loser I know! I know how you feel, pumpkin.
I've had my share of disappointments, too.
DOCTOR: It's a girl! Can you check again? You just have to remember that life has its little ups and Jeez! We're gonna miss the beginning of my show.
There it is.
MEG: Dad, watch out! [Horn blaring] PETER: Meg, honey, are you okay? MEG: Yeah, I think so.
PETER: The Quahog Cable Television Transmitter.
[Citizens grumbling] You just knocked out cable TV for the whole town! Boy! Look.
There's Bigfoot! Whoa.
This isn't about me.
This is about you.
At least I bought us some time.
- She did it.
- What? Dad, you were the one driving! I was teaching her to drive and she lost control of the car.
Come on, we all did stupid stuff when we were kids, right? I remember when I tried to sneak into an R-rated movie.
- Come on.
Give the kid a break, huh? - Why should we? She got her arm shot off in Vietnam.
[Murmuring] GUY: Poor kid.
MAN: What a senseless war.
I can't believe you just sold out your own daughter.
I know what I did was wrong.
And I know it's not the first time I've embarrassed you.
And if you add the measure of the angles of a right triangle, the sum Meg, clean out the shower the next time you shave your legs.
It's like a carpet in there.
I hate to see you so upset.
I know.
Let's play a little game called Taking the Fall for Daddy.
If you win, I'll buy you a convertible when you get your license.
Really? Daddy! Now I love you again! You're gonna make some Jewish guy a great wife.
[Metallic clanking] Because of an accident at the Quahog Cable Company television transmission will be out for an undetermined amount of time.
Of course, no one can see this news program so it doesn't really matter what we say.
I'm the Lord Jesus Christ.
Think I'll go get drunk and beat up midgets.
How about you? Tom, I just plain don't like black people.
You guys, we're still on in Boston.
Excellent.
The weather machine is nearly completed.
What do you say to that, broccoli? Stop mocking me! What's this? It appears the witless provider has finally brought me something of value.
I can use that crude device to amplify my deadly signal.
Victory shall yet be mine.
Guess what, Mom? Dad crashed the car into the city cable transmitter.
- What? - It's okay.
If I take the blame, he'll buy me a convertible when I get my license.
Meg, it's not exactly taking the blame if you go around telling everyone.
Peter, you're bribing your daughter with a car? Come on, Lois.
Isn't "bribe" just another word for "love"? You wanted me and Meg to bond.
That's what we're doing.
CHRIS: Dad, I was in a chat room on America Online and Doomie 22 told me some idiot knocked out the cable.
We could be without TV for weeks! Now, Chris, now let's not panic.
We can manage just fine without TV.
[Brian scoffs] - What's that supposed to mean? - Face it, you're addicted to television.
You're not exactly Mr.
Cold Turkey.
Remember when you gave up candy? I'll ask you one more time.
You didn't eat anything in my factory? No.
- I'm just asking - Are you calling me a liar? - I'm just saying - Shut up, Wonka.
Yeah.
That was different.
I'll be fine.
- Are you sure, honey? - For God's sake, you guys.
You think I'm some simp who can't live without TV? Give me a break.
- What's happening now? - Sipowicz is finding who stabbed the super.
Are you gonna tell me, or am I gonna have to show you my ass? I ain't saying nothing! All right, it was Jimmy the Hat! Forget it, Mike.
Without actually seeing his ass, this is just radio.
Class, we were scheduled to watch a PBS program on the mating rituals of the nude large-breasted Weewok tribe of New Guinea.
Unfortunately, Megan Griffin ruined TV.
So instead, we're having a surprise test.
WONDER YEARS VOICE: Suddenly I was public enemy number one.
It was time to tell the truth.
Wait! I didn't drive into the satellite dish! And who did? WONDER YEARS VOICE: I was just a 15-year-old girl.
But at that moment, I realized I had a whole lifetime to make new friends.
But only one chance to get a new car.
And I had to take it.
Okay, I did it.
PETER: I don't know how much longer I can last.
It's been a whole week since I seen a TV show.
I wonder what Scooby and the gang are up to now.
NARRATOR: We now return to The Scooby Doo Murder Files.
Gee whiz, gang.
The killer gutted the victim, strangled him with his own intestines and then dumped the body in the river! - Jinkies! What a mystery! [Moaning] You're right, Scoob.
We're dealing with one sick son of a bitch.
You just need to find something to fill the void that's left in your life.
Lois has knitting, Chris has video games, Meg's learning how to drive.
And me, I like the sauce.
Whose leg do you have to hump to get a dry martini around here? [Moaning] Can't live without TV.
Must see TV.
[Frightful instrumental music] [Whimsical instrumental music] [Sinister instrumental music] [Dramatic instrumental music] [Sighs] Stewie, I expect you to finish off your vegetables.
Rest assured, you relentless harridan, I expect I shall finish them all off! And you as well! Brian, I'm a little worried about Peter.
Last night I woke up and he was channel surfing through static.
I'm sure he'll find a way to cope.
- Morning, Lois.
- And you were worried.
- Peter, what the hell is that? - It's my favorite TV family, the Griffins.
Peter, you're scaring me.
I'm beginning to think you're losing your grip on reality.
PETER: Boring.
I'll go see what else is on.
LOIS: Peter! Keep an eye on Stewie.
Don't move! [Making ridiculous noises] [Screams] STEWIE: A little help? PETER: It's Glen Quagmire, the wacky next-door neighbor.
PETER: What's he up to this time? QUAGMIRE: I'm going to work! Him and his crazy get-rich-quick schemes.
We have to find your father, Chris.
He's not well.
I never knew anyone who went crazy before except my invisible friend Col.
Schwartz! I get all the channels on this thing.
Lifetime.
CBS.
Hey, UPN.
All right.
90210.
- Dad? - Meg, what are you doing at West Beverly? They're really reaching for guest stars in the 10th season.
Dad, what are you doing? Get out of here! I'm already a total outcast because of you! You're just upset because you wrecked the cable transmitter.
I did not! Forget it.
What good is a car if I have no friends? I didn't wreck TV! My dad did! - What? - What'd she say? - Peter Griffin ruined TV? - And blamed his daughter? That's the lowest thing I've ever heard.
Peter, take that thing off and come home.
Hey, Lois.
You're just in time for the exciting conclusion.
Looks like some boob's about to get lynched.
Let's watch.
There they are.
[Suspenseful instrumental music] That's the guy who ruined our cable.
Let's get him! Stop! What is wrong with you people? Okay, yes.
My husband is responsible for knocking out TV.
But we should be thanking him.
He's broken television's hypnotic spell over us.
Now we can see the world for what it is a beautiful place full of wonderful things just waiting to be experienced.
Another chick flick.
She's right.
All the hours we've wasted on that damn idiot box.
- I'm gonna paint my house! - I'll build a ship in a bottle.
I'm gonna push a hoop with a stick down a dirt road.
LOIS: I'll take you home, honey.
I can't believe I let Meg take the blame.
You were right, Lois.
TV is evil.
I hear that Manson guy watches it in jail all day long.
If I haven't seen it, it's new to me.
You just went a little overboard.
You need a little balance in your life.
There are other things to appreciate besides television.
- You mean like this lamp? - Yeah.
Okay.
- The lamp gives us light.
- I get it.
And your family gives you love.
You should spend some time with our kids, Peter.
And with me.
What could me and you do together? [Naughty laugh] Lois! You've got a sick mind! Peter, I'm talking about making love.
I thought you wanted us to murder the children and harvest their organs for beer money.
[Amorous giggling] What a gorgeous day.
Isn't it a gorgeous day, Mr.
Sun? It's always a nice day with two scoops of raisins, Peter.
[Car alarm blaring] - Top of the morning, everybody.
- Excellent! Thus completes the penultimate adjustment to my weather control device! Victory is Release me at once! Your mother was right.
It'd be a crime to sit around and wait for the TV.
- Great.
You can teach me how to drive.
- There'll be time to drive when you're dead.
There's a world out there waiting for us to grab it by the short hairs! - Damn! - Let's go.
[Cheery instrumental music] I'm so tired.
This morning's fly-fishing really wore me out.
Wake up! You promised you'd get this hook out of my mouth.
[Screams] Thank you.
Now, kids, your father's just trying to spend time with his family.
Or kill us.
I'm not sure which.
TOM: The Chinese sure like to spit, don't they? Diane, that last report was so good, I think you deserve a spanking.
I don't think your wife would appreciate that.
That frigid old cow lives in Quahog.
She can't hear a word I'm saying.
Actually, we're back on the air in Quahog.
STEWIE: Thank God! Their puerile minds are once again distracted by that flickering box.
Time to be bad! PETER: Come on, everyone.
We're late for the Bavarian Folk Festival.
You know those Germans.
You don't join their party, they come get you.
But Dad, the TV's back on.
What do you know? Okay, let's go.
Peter, I'm thrilled that you want to spend so much time with the family.
But we're exhausted.
Maybe we could just sit and watch some TV together? We're too busy living life to the fullest.
Come on, let's go.
- I'm sick of life.
- Yeah.
My dogs are barking.
- But I thought we were having fun.
- We were.
But now it might be nice to watch other people have fun or get killed.
- You know, whatever's on.
- Look, Peter.
It's your favorite show.
This is a dangerous mission.
And it's likely one of us will be killed.
The landing party will consist of myself, Mr.
Spock, Dr.
McCoy, and Ensign Rickey.
Crap.
Sorry, Lois.
There's only one show I want to see.
It's called Make Every Day Count, starring Peter Griffin as himself.
LOIS: Come on, Peter.
Don't you miss TV just a little? The familiar stories, the broadly drawn characters, the convenient plot turns that bring a character around at exactly the right moment? Hi.
I'm William Shatner.
My car broke down on my way to give a speech on how TV keeps families together.
Would you like to hear it? No, I don't want to miss the all-you-can-eat schnitzel bar.
Wait a minute! I love schnitzel! Come along.
I bet you could squeeze into Lois' lederhosen.
I'll change in the car.
If I had a nickel for every time one of my parents walked out instead of teaching me how to drive, I'd be one rich little Let's go, Meg.
[Sinister instrumental music] Fare thee well, broccoli! [Band playing German folk music] I don't know.
I can't imagine choosing life over television.
I'm telling you, it's great, Bill.
The only thing that would make this perfect day better is if my family was here.
My God! It was sunny a moment ago, but now it's pouring! Let's take off our shoes and run home barefoot! Griffin, you're a madman! Barefoot, you say? LOIS: This is not safe.
I'll teach you how to drive some other time.
Pull over.
Mom, I can't even tell where "over" is.
[Giddy laughter] You were right, Peter.
I've never felt so alive.
Victory is mine! [Screams] STEWIE: God damn it.
[Giddy laughter] My God.
[Car colliding] My God.
I hit William Shatner.
Light growing dimmer.
Can't breathe.
Beam me up, God.
I did not see that coming.
Daddy, I'm sorry I ran you over and killed Mr.
Shatner.
Don't worry.
Once I'm of this body cast, I'll do enough living for me and Bill.
Honey, can't we go back to the way things used to be? There's a big dent in that couch that nobody else can fill.
Haven't you guys learned anything? TV took over my life once.
I'm never gonna let that happen again.
My God.
We've lost him.
If you help me out of here, I know a meadow where the blueberries are begging to be picked.
Look, buddy.
Just go in the pan.
And don't call me unless you're flatlining.
PETER: Turn that TV off.
Nurse? ANNOUNCER: What would you do for a Klondike Bar? ANNOUNCER: Would you stand on one leg? MAN: Sure.
ANNOUNCER: Would you act like a monkey? ANNOUNCER: Would you kill a man? [Gunshot] Daddy, now that I've finally passed my driver's test can I still get a convertible? No.
But I'm proud of you for getting your license, sweetheart.
And I'm proud of you, Peter.
You taught us all a valuable lesson.
It's not what you do that defines the quality of your life it's who you do it with, and your family It's on.
I know you don't like broccoli, Stewie, but you'll thank me when you grow up big and strong like your father.
A compelling argument.
You've swayed me, woman.
That is good.
I feel stronger already.
It's good tasting and good for you.
Nice try.
- Quadruped.
- Mutant.
"It seems today that all you see "is violence in movies and sex on TV "But where are those good, old-fashioned values "on which we used to rely? "Lucky there's a family guy "Lucky there's a man who'll positively tell you "all the things that make us "laugh 'n' cry "He's a family guy" [Cheery instrumental music] LOIS: Everything's all set for Stewie's birthday party.
I can't believe he's almost a year old.
Yeah.
I'll never forget the day he was born.
DOCTOR: One more push, Lois.
DOCTOR: This is a miracle, Mr.
Griffin.
Would you like to see? PETER: Yeah, I've never actually seen a baby being Oh, God! DOCTOR: Congratulations.
It's a boy.
DOCTOR: Wait a minute.
I don't think we're through.
Oh, my God! Is it twins? DOCTOR: No.
It's a map of Europe.
[Sinister instrumental music] I confirmed everything with the birthday party planner at Cheesie Charlie's.
- Why Cheesie Charlie's? - It's cool, Dad.
They have this game where you put in a dollar and you win four quarters! I win every time! I get to go, right? Why can't we have the same kind of party we always do? Peter, this could be our last first birthday ever.
When Meg and Chris turned one, I had so much to do, I missed everything.
[Kids chattering] [Sighs] PETER: Lois, you won't believe this! Meg just said "Da-Da!" Her first words? Then she stood up by herself and started walking! - Her first steps? - Yeah.
What the hell are you doing in here anyway? [Drums playing] PETER: All right! Her first drum solo.
[Applause] Thanks to Cheesie Charlie l'm not gonna miss a moment of Stewie's party.
I say, am I to spend the entire day wallowing around in my own feces? A little service here! Hey, Stinky.
Have we got some big plans for you.
Plans? What the devil are you talking about? It's your birthday, dude.
Saturday's gonna be real special, honey.
I've hired a professional to make sure everything goes just right.
A professional? There's treachery afoot! [Crying] Meg, you're home late.
I stayed after school to try out for cheerleading.
Don't keep me in suspense.
How'd you do? I'll give you a hint.
I S-U-C-K-E-D! Sucked! Yay! I mean, sorry, honey.
MEG: God, I hate high school.
I don't fit in with anyone.
Boy.
Do I know that feeling.
[Suspenseful, jazzy instrumental music] Okay, man.
Okay.
You are really throwing me off.
It's step-kick, step-twirl.
Got it? I thought we were gonna rumble with those greasy Sharks.
Not without seven years of ballet and two of jazz tap, we're not.
From the top, people! Why don't you just hang back and stretch? I don't get it.
The more I try to make friends, the more people hate me.
Listen.
You're a one-of-a-kind girl with a mind of her own.
- Now, see, that's what people hate.
- Really? I'm telling you, just be the girl you think everyone else wants you to be.
Wow, it's so obvious.
Thanks, Daddy.
MEG: Hi, Mom.
Bye, Mom.
LOIS: I haven't seen Meg this happy since that bus broke down in front of our house.
Hi.
Can we use your phone? Holy crap! It's The Children of the Corn! - Meg and I had a little father-daughter talk.
- It seems to have worked.
I wasn't just blowing smoke when I bought this T-shirt.
Well, you're the number-one husband, too.
I know.
That's why I bought this T-shirt.
STEWIE: "Dear Diary "It seems the domestic overseers are plotting against me.
"Their plans somehow relate to the anniversary of my escape from the womb.
"I'm still haunted by the memories of how I was incarcerated "in that amniotic Attica.
[Epic instrumental music] "As I recall, it was every potential man for himself.
[Whooshing] "I alone had reached the target objective, thanks to the intrepidity "I developed at testicular boot camp.
But it was a trap! "I was imprisoned in that uterine gulag for nine grueling months.
" Day 171.
I've sprouted another finger, counting the one from yesterday.
I'm up to 11.
"As the months of solitude passed, I began to go insane.
"It seemed my prison cell was getting smaller and smaller.
"I was quite sure that soon I would be dead.
"But then, a miracle! There was a light at the end of the tunnel.
"I rushed to freedom, but suddenly I was ambushed by a mysterious man in white!" The man in white.
Of course.
He must be the hired professional of whom they spoke.
He failed to thwart my escape into the outside world.
And now, one year hence, he's returning to rectify his mistake and put me back in the womb! [Dramatic instrumental music] Boy, it sure is great being thin and popular.
GIRL 1: Let's throw up.
GIRL 2: Sure! GIRL 3: Good idea! I love throwing up.
[Laughing] [Sighs] Hi.
I'm Jennifer.
I'm Meg.
My God.
Your hair is so beautiful.
I just want to brush it.
Really? You want to go throw up? [Western instrumental music] Hey, Dad, let's go whack some moles! Now, Chris, we're not here for fun.
[Children giggling] Now your mom is counting on us to drop off the deposit.
So let's just deliver the check and PETER: Hong Kong Phooey! Yeah! Come on! Go, yeah! Eat my dust! PETER: Come on, move it! Oh, man! Chris, this place is great.
Pull over, you bastard! Pull over, you bastard! Man.
CHRIS: Hey, Dad, they even got games in the bathroom.
Look, I won a balloon! Yeah, way to go, Chris.
Where's my watch? All right.
I won a watch.
What's The Dukes of Hazzard? That's mine.
Come on.
Come on, give that back! - Give it! - Come on! UNCLE JESSE: Folks in Hazzard County hadn't seen a watch fight in a long time.
Them boys rassled for a full five minutes before the manager stepped in.
Come on! Hands off, fatty! Sir, I'm going to have to ask you to leave.
I'm a paying customer.
I got a deposit check for my kid's party right here.
Mr.
Griffin.
I am terribly sorry.
We're really looking forward to Stewie's special day.
Now I don't know, after the emotional trauma I've endured on your premises, I think I deserve a little discount.
Sir, our prices are set by the corporate office.
Then maybe I'll just take my business elsewhere.
Good luck filling our spot by this Saturday.
MAN: I got cash! WOMAN: I'll take it! Suit yourself.
Wait.
I was just bluffing.
My wife has her heart set on this place.
[Peter yells after him] Chris, this is a big day for you.
The day you become the man of the house.
Because when we get home, your mother is going to kill me.
So the man in white is coming to put me back in the womb, is he? If I'm to defeat him, I shall require professional forces.
STEWIE: Here we are.
"Come to Managua, the Mecca of mercenaries.
" I must prepare for my journey.
Let's see.
Grenades, mace, baggy full of Cheerios - So, are we all set at Cheesie Charlie's? - Actually, I canceled the reservation.
What? - How could you? - Lois, I got a very good reason.
Wait a second.
These are always classic.
Lois, that Cheesie Charlie's is no good.
See, it happened like this.
[Spooky instrumental music] [Screaming] Welcome to Cheesie Charlie's.
Heil, Hitler! Actually, the name's Griffin.
I was sent by my smart, beautiful, and still sexually appealing wife, Lois.
Yes.
We're all set for your little boy's party.
I understand we're getting a terrific bargain here.
Absolutely.
The children get to play our games.
And if they win enough tickets, they get a prize.
I have 13 tickets now.
Is that enough? Sorry, Timmy.
But you need 15 tickets to live.
[Screaming] They also get food, cake, and your choice of ice-cream flavors vanilla, strawberry, chocolate, or people.
- What was that? - Chocolate.
Give me the check.
Hold it! Lois may have had her heart set on this place but I love my family too much to risk their lives.
- Come on, Chris.
We're leaving.
- No, you're not! Please don't make me angry, pal.
You wouldn't like me when I'm angry.
[Eerie instrumental music] LOIS: All right, Peter.
That's enough! Bravo, Peter.
You are the Spalding Gray of crap.
Do you know how hard it was to get a reservation at Cheesie Charlie's? I had to book it the day of my ultrasound.
We'll never find another place in time! For once, it was all gonna be so perfect! Come on, Lois.
It'll still be perfect.
We'll give him the best birthday ever right here in the safety and comfort of our own home.
- Peter, we've been over this.
- Honey, you won't have to lift a finger.
I got us a clown, a cake, a petting zoo, a big-ass piñata, the works! - You got all those things? - You bet I did.
LOIS: Wow.
Even Cheesie Charlie's doesn't have a petting zoo.
Okay, I'll call the parents and let them know the party's here.
- You don't have any of those things.
- How do you know? Face it.
You're a terrible liar.
[Sniffing] It was you.
Clowns and petting zoos book months in advance.
You're gonna have a tough time finding a Hold on.
DRIVER: Ya! Ya! [Horses neighing] Some day.
Hey there, little boy.
Are you lost? STEWIE: Now, listen to me, Jolene.
I've got an army to raise, and I must get to Nicaragua.
I require a window seat and an in-flight Happy Meal.
And no pickles! - God help you if I find pickles.
- Henry, I have a lost little boy.
Hey there, little fella.
Why don't you come with me? STEWIE: Damn you! You're one of them, aren't you? What are they paying you? I'll double it! I'll give you whatever you want! Money! Women! Men? Dad, what are we doing here again? Pigs, Chris.
We're getting pigs for Stewie's petting zoo.
[Blower starting] [Pig squealing] [Pigs squealing] [Motor stopping] Crafty swine.
UPS.
Little bastards ain't as smart as Hi, Mom.
This is Jennifer.
She gave me a ride home.
Meg, you made a friend.
JENNIFER: What a lovely house, Mrs.
G.
Meg, you didn't tell me your mother was just like Martha Stewart.
Oh, no.
Once you get to know me, I'm really very nice.
You know what's nice? Having a friend like Meg.
And kittens.
It was super swell meeting you.
Bye, Meg.
Friends forever.
Forever and ever.
[Giddy laughter] Wow! What a great yard! Guess what, Mom? Jennifer invited me to a party on Saturday.
This Saturday? Meg, you can't miss Stewie's first birthday.
MEG: But Mom Meg, our entire family is going to be here for Stewie's party.
And that includes you.
Understood? I can't believe you'd put your family before your own daughter! She's a whiny little runt, isn't she? I said "runt.
" I don't think I'm in the right place.
I'm looking for a guy to entertain the kids at my son's birthday.
Sure.
I can do that.
You do children's parties? Yeah.
I can do, like, a handstand, and some somersaults maybe.
I can make pretend like the children are little bugs in my web.
Do you know your phone number, son? The only way you'll get me to talk is through slow, painful torture.
And I don't think you've got the grapes! It sounds like you don't want to go home.
Are you running away? Stewart Gilligan Griffin runs from nothing! You know, son, running away never solves anything.
You're getting to be a big boy now.
And part of growing up means facing your problems head on.
The ruptured capillaries in your nose belie the clarity of your wisdom.
You're saying I must return to face this man in white myself.
So be it.
As for you, kind sage, I only hope my heartfelt thanks will keep you warm as you spend the next 10 years in frozen carbonite! Peter, you've only got a couple of hours left.
If you pull a party out of your ass, you'll want to stand up.
My friend Jennifer invited me to hang out with her friends.
Can I go? I won't fall for this trick.
Did you ask your mother? Yes.
Okay, then.
Have fun, sweetheart.
Thanks, Daddy! Brian, Stewie's birthday is gonna suck.
The only stuff I could get on such short notice was a cake and that big-ass piñata.
I sure hope candy comes out of that.
Face it, Brian.
I'm a bad father, a lousy husband, and a snappy dresser.
I'll never be able to face Lois.
The circus is in town.
Maybe you could run away and join it.
The circus! [Marching band playing] [Elephant trumpeting] Hi.
This is the right day, isn't it? Oh, yes.
Peter should be back any minute and then we can start the party, I hope.
Hey, Lois, look.
The two symbols of the Republican party an elephant and a big fat white guy who's threatened by change.
LOIS: Peter, this is the most wonderful celebration I could have imagined.
PETER: Yeah.
Where's Stewie? He's upstairs, resting up for his big day.
[Oriental instrumental music] I'll get him.
If you see Meg, tell her to take plenty of pictures.
Meg's not here.
She went to a friend's house.
What? She's gonna miss Stewie's birthday.
I dropped her off an hour ago.
Boy, is she gonna be sorry, or what? Peter.
How could you let her go? What's the big deal? So Meg's with her new friends.
They seemed like some nice kids.
JENNIFER: I'm glad you could join us.
We're gonna have a great time on our trip.
A trip? Like to the beach? Because I didn't bring my swimsuit.
You won't need anything where we're going.
Excuse me.
I've gotta go mix the punch.
[Whimsical music playing] [Whimsical music playing] CHRIS: Birthday dude? Do you want some ice cream? Yes.
But no sprinkles! For every sprinkle I find, I shall kill you! Come on, Lois.
I hate to see you so upset.
We got animals.
We got clowns.
I mean, a party couldn't be any better if Jesus himself showed up.
Okay, everybody.
For my next miracle, I'm gonna turn water into funk.
[Disco music playing] Peter, the circus is terrific.
But it's not just Stewie's birthday.
We're also celebrating the day our family became whole.
Today means nothing if Meg isn't here.
Meg, you seem sad.
Today's a happy day.
I know.
It's just that I really like that guy over there.
But he doesn't even know I exist.
He must think I'm a total dog.
That is so not true.
Then what is it? - He's a eunuch.
- Really? Sure.
All the guys here have been castrated.
It's cool.
- Do you think that girl is hot? - No.
Me neither.
[Elephant trumpeting] Hey, you.
Hit me.
There.
Now, if I can just find a midget with some gin, I'll be in business.
Where are you off to? I gotta make things right for Lois and get this monkey off my back.
PETER: Ow! Knock it off! All right, men, the man in white is coming to put me back in the womb.
Today he comes for me, but tomorrow it could be you or you! I offer you the opportunity to join me in glorious battle.
I know that for some of you, your motor skills are not developed.
Sadly, you will be used as decoys.
Sadly, you will be used as decoys.
But your children's children will know that you fell for a noble cause.
Now, who's with me? Duckie? Useless, every one of you! Fine.
I'll defend myself, and the hell with all of you! There, I've gone and soiled myself.
Are you happy now? [Gong goes off] Our leader is here to take us on our journey! My children, rejoice.
The hour of transformation is close at hand.
Who are you? This is Meg, wise one.
Can she come with us? Perhaps.
Do you have a mind that seeks enlightenment and a heart that seeks purity? Not really.
Okay.
Are you a confused adolescent desperately seeking acceptance from an undifferentiated ego mass that demands conformity? Wow, that sort of sounds more like me.
Great! Then all you need is a dark-blue jogging suit.
Let's see what we have in stock.
What are you? About a 9? No.
A 6.
Right.
Dispense the refreshments.
Meg, there you are.
Dad, what are you doing here? I'm so embarrassed, I could die! GUY: Not before the rest of us! Meg, your mother wants the family together today.
It's just Stewie's birthday.
So what if I'm not there? Who's gonna remember? Your mom will, trust me.
She remembers everything.
In fact, she always says the best memories she has are when you kids were born.
Meg, that's it.
This day is more for your mom than it is for Stewie.
With all she's given us, she oughta get whatever she wants.
And, Meg, today she wants you to be with the family.
Really? Daddy, you must think I'm the worst daughter ever.
No you're not, honey.
What about that fat girl from the Judds? I'm sorry I've been so selfish.
TEEN 1: I miss my mom.
TEEN 2: Me, too.
I also miss my nads.
Mr.
Griffin, can we come to Stewie's party, too? Sure.
The more the merrier.
Meg, you have the coolest family.
She sure does.
Here's to family! To family! Jeez, look at the time! Come on.
Come on, kids.
Let's get going.
[Bodies falling over] Sorry, Meg.
It's another bunch of people that'd rather fake death than go to a party with you.
Children, the time of ascension has arrived.
For the love of God.
Haven't any of you ever been in a cult before? Damn it! I can't achieve transcendence by myself.
That would just make me some kind of lone nut.
Somebody's got to die with me.
Come back, Meg! Whoops.
Can't forget my ceremonial white robe.
I guess there's nothing left but the birthday cake.
MEG: Right here! Meg! I'm sorry, Mom.
Thank you, Peter.
No problem.
I cannot wait to taste this cake.
The guy who sold it to me said it was delicious and erotic.
Peter, there's a naked man on this cake.
There were only two left.
And trust me, you did not want the one of Al Roker with the Hershey Kiss nipples.
LOIS: Gather round, everyone.
It's time for Stewie's big moment.
[Knocking] LEADER: Hello? Is anybody home? STEWIE: Greetings, man in white.
I've been expecting you.
Who said that? STEWIE: Peek-a-boo! I see you! You're getting warmer.
Where are you? What do you want? STEWIE: Freedom! What do you want? I want to get the hell out of here! STEWIE: I'm sorry.
We're fresh out of that.
I'm afraid all that's left is untimely death.
[Dramatic instrumental music] What the hell is this? It's a boy! [Energy pulsing] Anybody seen Stewie? Yeah.
Where is the birthday boy? Victory is mine! Yes.
And this cake is yours, too.
Stewie, make a wish.
If you blow out the candle, it'll come true.
That's right, little buddy.
What do you want most in the whole world? In the whole world, you say? [Bombs whistling] [Troops marching] [Bombs exploding] What the hell.
[Cheery singing from TV] SINGERS: "When life is getting to you "put some fresh in your life Let Mintos freshen up your life "Life is just a breeze when you stay fresh and cool "Because Mintos puts the fresh in life "Taste that freshness Just can't beat it "Mintos freshness Let Mintos freshen your life" Mintos, the Freshmaker.
These commercials are stupid.
They certainly don't make me want a Minto.
Totally ineffective.
Must kill Lincoln.
LOIS: [Singing] "It seems today that all you see "is violence in movies and sex on TV "But where are those good, old-fashioned values "on which we used to rely? "Lucky there's a family guy "Lucky there's a man who'll positively tell you "all the things that make us "laugh 'n' cry "He's a family guy" [Lois playing classical piano music] [Stops playing] [Cheering and applause] [Blows kiss] [Lois cries out in pain] STEWIE: Blast you, woman! Awake from your damnable reverie! Honey, I'm doing the dishes.
A thousand pardons for disrupting your flatware sanitation ritual.
But you see, I'm in searing pain! You're just teething, Stewie.
It's a normal part of a baby's life.
Very well then, I order you to kill me at once! Honey, I know you're hurting.
But Mommy has to clean up the house, all right? No, it's not all right! For the love of God, shake me! Shake me like a British nanny! Oh, man.
This is the life.
Hand me another one of them Pawtucket Patriots.
Guys, I want to say a toast to you, Quagmire, Cleveland Brian.
Yeah.
If you guys were beers, I would drink every one of you.
And I wish you were because we're out.
[Giggling] That's funny.
That's even more humorous than that joke you told us last night.
Okay, so a Jewish guy and a Chinese guy walk into a bar, right? Wait a second.
Jewish guy and a Chinese guy walk into a bar.
And there's a naked priest sitting there.
And he Oh, sorry, Father.
No, I've heard them all.
Look at the time.
I promised Loretta I was gonna trim the hedges and be tender with her.
Believe me, Cleveland.
Our wives need some time off as much as we do.
This is when Lois does all those little things that women like to do.
[Grunting] [Car honking, Lois sighs] I'll be on your bed.
No calls.
PETER: Hey, Lois.
You've been busy all day.
So I took care of dinner.
Really? All you gotta do is gut it, clean it, scale it, and cook it.
LOIS: I spent all morning cleaning up the house.
And in five seconds, you turn it into low tide at the pier.
Jeez.
I'm sorry, honey.
I'd help you clean it up.
But you know how lousy I am with housework.
Remember when I tried doing the laundry? Let's see.
Shirts, pants I'm missing another sock.
Welcome to Narnia.
I'm Mr.
Tumnus.
Give me back my sock, you goat bastard! PETER: Hey! You're right.
It's better if I do it.
STEWIE: Damn it to the bowels of bloody hell! The baby's up.
Can you get him? Okay.
I hope he doesn't need changing.
I'm a little gun-shy after what happened last time.
No, you imbecile! That's not talc! That's paprika! Take that! All right, I'll do that, too! Can you at least take Chris to his game? Jeez, Lois.
I spent all morning on a boat drinking beer, telling jokes, and screwing around.
How about a little me time? Honey, I'm begging you.
Drop Chris off at his soccer game and come right home.
I need you to look after Stewie while I'm teaching piano lessons, please! All right! You know I spoil you.
CHRIS: Thanks for the ride, Dad.
All right.
Have fun, Chris.
Hey, Petey! Quagmire? What are you doing here? Soccer moms! [Soccer moms giggle] All right.
I'd like to hang around with you.
But Lois needs me at home.
I got beer.
PETER: Boo, Lois! Yay, beer! [Playing classical music] [Lois shushing] It's okay, Stewie.
Where the hell's Peter? That was good, Reuben.
Now play Brahms' Lullaby.
[Sings] "Lullaby and good night" Enough! The only thing worse than the wretched pain in my mouth is the excrement spewing from yours! I wish I could make the pain go away sooner.
But I can't turn time forward.
Oh, no! Perhaps I can! Of course! I'll simply build a machine that can move time! I shall call it a time machine.
E-flat, Salieri! E-flat! PETER: Go, Chris! Daddy loves you! I mean in a platonic way.
I'm married.
[Whistle] Hand ball! Penalty kick, blue! That's the 10th time today! Nice grab, orca.
Get Moby Dick off the field before he burps up a license plate! Easy, fella.
That's my kid.
Now apologize.
Okay.
I'm sorry your kid's a brain dead stinking blue cheese feta! That's it! Way to go, Dad! You hit my mom! No, I hit your dad.
Stand back.
Give her some air.
You mean, "Give him some air.
" Call an ambulance.
She's going into labor.
You mean, "He's going into labor.
" [Baby crying] Whoops.
PETER: I can't believe I punched a woman.
A pregnant woman.
I just hope she accepts my peace offering.
I sent her a little something for the baby.
[Melodic strumming from box] I would've brought it over myself if I wasn't under house arrest.
You're just fortunate this is your first offense, Peter.
Could've been a lot worse if the cops knew about the other times I broke the law.
And there was that time I took a whiz in public.
And that time I snuck into Wimbledon.
And that time I snuck into Wimbledon.
Me and Cleveland are gonna "amscray.
" Wait.
You guys can't leave me here alone.
Why don't you come with us? I can't leave the premises.
They're monitoring my every move.
[Electronic beeping] PETER: I gotta get out of here! There's my little house husband.
It's been so wonderful having you home all week.
Thanks, honey.
But I don't know how you stand it here all day.
I mean, I'm so bored, I can't even watch TV anymore.
All the shows are starting to run together.
NARRATOR: This contains adult content and is brought to you by the letter "H".
[Phone ringing] BERT: Hello? Son of a bitch.
I'm on my way.
Some poor bastard got his head blown off down at a place called Hooper's.
Bert, I wish you wouldn't drink so much, Bert.
Well, Ernie, I wish you wouldn't eat cookies in the damn bed! Bert, you're shouting again, Bert! [Comedic instrumental music] I know you can't understand what I'm going through.
All the stuff that makes you happy like cooking and cleaning, is right in the house just waiting for you.
- You are one lucky - Stop now.
Peter, I don't do those things because I enjoy them.
I do them because I love my family.
[Giggling] Lois loves her family.
Lois loves her family.
"Lois and the family sitting in a tree" See, Lois, the guys would've found that hilarious.
Why don't I go buy some groceries and make us a nice romantic dinner? Like when we were dating.
That oughta take your mind off the guys.
It already has.
I wonder what the guys are up to? That's nasty.
Where's the damn pull string? [Yells] You never know what you're gonna find down here.
[Dog barking, Peter yells] PATRIOT: Peter! PETER: You're the Pawtucket Patriot.
Verily.
Come hither and give heed.
Whoa.
I don't swing that way, pal.
Look, I got a date with my female wife.
I just came down to get some beers.
PATRIOT: Why spend time with your wife? If you build a bar in this basement and stock it with plenty of frosty Pawtucket Patriots your friends will come down here for a beer as well.
Build a bar! That's a great idea.
Wait.
One last question.
If I walk through you, does that mean, like, we've done it? PATRIOT: Jeez.
What's with you and the gay jokes? [Cheerful instrumental music] [Snoring] [Lnstrumental music slows down] [Sighs] [Door opening] LOIS: Where the hell have you been? We had a date.
Sorry, honey.
I must've lost track of the time.
What do you say? You think the guys will like it? This is why you missed our dinner? To make a bar for your friends? Yeah, isn't it great? Oh, boy, I feel just like Tim Allen.
I build stuff and I have a criminal record.
[Macho grunting] [Sniffing] [Guys laughing] Okay, guys.
I got another one.
What's the difference between pornography and art? [Chuckling] Here it comes.
A government grant.
Peter, you are in the zone.
You know those little clam cakes you make whenever we have company? I need about a dozen.
Actually, better make it like 600.
That's it, Peter! I'm not a servant.
And I'm through taking care of you and your bar buddies! Jeez.
Where the hell did that come from? LOIS: Watch the kids.
I'm taking a hot bath.
Put me down, you blunderbuss! He's a little cranky from teething.
I can fix that.
[Mumbling] Good God, man! One can only imagine what foul regions that finger has erstwhile probed! There you go.
My mother used to use whiskey whenever I had a toothache.
My tooth hurts! PETER: There.
How's that feel? It's delightful.
[Bathwater running] [Applause] Thank you.
Thank you very much.
Lois, you are a wonderful woman.
Words cannot express the depth of my appreciation and love for you.
Peter! You must be Lois.
No, not silicone.
Silicon.
And the design of the device is quite ingenious if I do say so myself, Misty.
What a delightful moniker.
You see, Misty [Stewie giggles] my time manipulator employs axioms from the quantum theory of molecular propulsion.
I've broken my pencil! I have a Barney pen in my purse.
You are spectacular! Chris, what are you doing here? Sorry, Mom.
I'm gonna need to see some ID.
Chris, go to your room! Hello, Mother.
Care to partake in one of your oh-so-exhilarating games of peekaboo? Oh, my God! My baby is drunk! PETER: No, I'm not! Him? Yeah.
He's a real lightweight.
Meg, take Stewie upstairs.
[Sings] "Show me the way to go home" Everybody! "I'm tired and I want to go to bed" Just the women! Peter, in the 17 years that we've been married I have never been as angry as I What is my piano doing down here? It was supposed to be a clam cake buffet, but Never mind.
That does it, Peter.
Either this bar goes or I do! PETER: I haven't even told you the other reason your piano's down here.
I wanted you to play it.
Like it was an instrument.
I'm telling you the truth.
Right, guys? Come on! I couldn't.
Come on! Maybe one song.
Pretend you like it no matter how bad it stinks.
[Lois chuckles] [Starts playing piano] [Sings] "You'll never know just how much "I love you "You'll never know just how much I care" Yeah! "And if I try, I still "couldn't hide my love for you "You oughta know for haven't I told you so?" Okay, guys.
Thank you.
You can stop pretending now.
GUY: All right! "If there is some other way to prove that I love you "I swear I don't know how" MAN: Sing it.
Something troubling you, Peter? Nothing.
Just all my friends are eye-humping my wife.
"You'll never know if you don't know now" [Applause] GUYS: Wonderful! Wow! [Cheery instrumental music] It was absolutely amazing.
The second that spotlight hit me, I became a whole different person! Silence, you contemptible shrew! I bet your gums are still sore.
You're so observant, aren't you? Are you a detective? Yes, my gums are sore! Enough of this! I must complete my time machine, move time forward, and end this agony! CHRIS: Hey, Dad.
Mom says she was really on last night.
Yeah.
About that.
Lois, see, the guys were just being polite.
They thought your singing was too I was just nervous.
Tonight'll be better.
Tonight? Honey, I don't think anyone's gonna come back tonight.
LOIS: [Sings] "Gimme, gimme, gimme what I cry for "You know you got the brand of kisses "that I die for" This one takes me back.
Now that's a woman! That's a house.
That's a fish.
That's a bee! "You know you made me love you" I love you.
Thank you.
Thank you.
Johnny Muldoon, ladies and gentlemen.
[Band strikes up] I was born in a little town called Quahog.
FAN: We love you, Lois! [Lois laughs] Let me finish the story, fellas.
You don't want to be up all night.
Or do you? "Or do you?" She's a smokin' little pistol, isn't she? Are you a woman? No.
My house arrest is over, Brian.
Round up the guys.
Now that I'm a free man, we can do anything we want.
The guys only want to do one thing.
And that's ogle your wife.
If Lois were my woman, I'd keep an eye on her.
Then again, I'm the jealous type.
Wow! Lois Griffin! I love your act.
Nice melons.
Listen, pal Peter, I'm holding melons.
And her hooters ain't bad either! Now hang on a second there! Peter, I'm holding hooters.
Sorry.
No problem.
Your wife's hot! PETER: That's it! Your singing days are over.
If I wanted to marry Lola Falana, I would have.
Look, Lola.
This whole thing is just going way too fast for me.
For the last time, I'm not Lola! I'm Leslie Uggams! Peter, having me sing was your idea in the first place.
I just wanted to keep my bar.
I built that thing so my friends would come to see me, not you.
Is that so? Let me tell you something.
I love singing! And I will continue to sing! How dare you upset me this close to showtime! Lois.
Watch where you're going, buddy.
Griffin, I got a bone to pick with you.
Listen, I don't want any more trouble.
Thanks to your wife my husband hasn't been home all week! That singing hussy is destroying our marriages! [Women murmuring] Yeah, then do something about it.
Come to my basement tonight and drag your husbands out of there.
Maybe we will.
Yeah! Jeez, fella.
Can't you take that outside? LOIS: This next number is dedicated to my very supportive husband, Peter.
Hit it! [Sings] "Don't tell me not to fly I've simply gotta "If someone takes a spill it's me and not you "Don't bring around a cloud to rain on my parade" Oh, boy.
Lois is pretty pissed, huh? Yes, your judgment lately has been rather You have crappy judgment anyway.
STEWIE: This is intolerable! This foolishness is preventing me from completing work on Egads! The blueprints for my time machine! Those are for my eyes only! Thank you.
Look everyone, Stewie drew a picture for his mommy.
No! [Fan whistling] Hold up the picture.
Let's see.
No! Nothing to see here.
GUY: How cute.
It's a time machine! No! It's a Blast, what the devil do children draw? It's a pheasant! A time machine.
Sure.
Here's where the flux capacitor goes.
I can't wait to build one of these of my own.
I'll not stand idly by while you abrogate my plans.
You shall rue this day.
Go on! Start ruing! Bye-bye, Stewie.
Mommy will be upstairs to kiss you good night.
Burn in hell! Hell.
Hell has fire.
And you know what else? [Sings] "It's got steam heat "I got steam heat "But I need your love to keep away the cold I got" ANGRY PARENT: All right, break it up! What's going on here? Your little peep show is over! We're taking back our men! Peep show? I just do this for fun.
Look, all day long I scrub and cook and take care of my kids.
And nobody cheers.
No one even says thank you.
But when the band starts playing and the music's flowing through me, I feel, I don't know, special.
I guess you all think that's pretty silly.
Not at all.
You didn't tell us that part! Peter, you're behind all this? Yes.
And you'll never catch me! [Giggles maniacally] [Screams repeatedly] I bet he also didn't tell you he never helps me around the house.
Or takes me out to dinner.
Or notices when I get my hair done.
- Oh, no, that's just - My husband's the same way.
So's mine.
[People chattering] Wow, this place is full of dead pigeons.
I'm gonna go grab some ozone.
Peter! There's a king in the cards! They saw my blueprints! What a grievous breach of security! Damn! What do to? Wait for it Yes! Instead of moving time forward to bypass this wretched teething it might just be possible to reverse time's heady flow and undo ever having drawn those damnable blueprints.
- You'll never get away with this! - Silence! Lois, you make it sound like I don't appreciate you at all.
Peter, when was the last time you told me you love me? You know I do.
I want to hear it! Is that what this is all about? Run for your lives! Holy crap! Hot! [Explosion] [Screaming] LOIS: There's no way out! At last! My time device is complete! Just one final adjustment.
There.
Now I shall negate ever having drawn those damnable blueprints.
Blast! Jeez.
We're screwed! Look, I promise if we get out of this alive l'm gonna help out around the house and say "I love you" every day.
You mean it? I'm a changed man, Lois.
A better man.
And to think, if I hadn't taken Chris to his soccer game I never would've learned this valuable lesson.
[People talking backwards] [Mystical instrumental music] [Backwards speech slowing] Honey, I'm begging you.
Drop Chris off at his soccer game and come right home.
I need you to look after Stewie while I'm teaching piano lessons, please! All right! You know I spoil you.
My foot! I can't walk! I guess you'll have to take Chris yourself.
[Giggles] - My device! My teeth! - I'm free! Free! I claim this mouth in the name of Incisor! I think not! Bicuspid! We meet again.
- Have at you! - En garde! Shall we bite the tongue then? On three.
One, two [Screams] [Theme music] 
[Cheery instrumental music] Machiavelli! You've told me nothing I don't already know! Sun Tzu's The Art of War.
LOIS: Stewie, those books aren't for babies.
Here.
Watch the Teletubbies.
How dare you! That book may hold the key to my enslaving of all mankind.
Fuzzy.
[Giddy laughter] Tickle.
God.
The more I resist, the more intriguing they become! I can't look away! TELETUBBIES: Again! Again! Yes! Yes! Again! Again! Dear God, please once more! PETER: Sorry, Stewie.
A&E Biography is doing the life of the other guy from Wham.
I'm free! Free from the spell of those diabolical Teletubbies! Thank you.
When the world is mine, your death shall be quick and painless.
LOIS: [Singing] "It seems today that all you see "is violence in movies and sex on TV "But where are those good, old-fashioned values "on which we used to rely? "Lucky there's a family guy "Lucky there's a man who'll positively tell you "all the things that make us "laugh 'n' cry "He's a family guy" Attention, please.
Tomorrow is softball practice.
We have a lot of work to do for Saturday's game.
Don't forget how badly we were humiliated last year by Pawtucket Joke and Novelties.
[Raucous laughter] [Peter giggles] Look at those morons and their stupid glasses.
Oh, man.
I hate those guys.
More than I hate spinach, traffic jams, and the last few years of M* A*S*H.
When Alan Alda took over behind the camera and the show got all dramatic and preachy? Am I right? Who's with me? This year we will defeat those Pranksters with our secret weapon Guillermo.
[Screaming] Bravo! I hired Guillermo because I believe he'll be an asset to our company on and off the field.
MR.
WEED: You have impeccable credentials.
I'm sure I can find a position for you somewhere.
Back to work, people.
PETER: Mr.
Weed, I got a great idea for a new line of TV action figures.
Facts of Life Transformers, huh? Watch the transformation.
Cute as a button fat as a cow radioactive scorpion.
Watch out, Mrs.
Garrett.
Here comes Blair.
- I'll consider it.
- He'll consider it! I got another one where Natalie's one of those spittin' lizards from Jurassic Park.
[Applause on TV] Pat, I would like to solve the puzzle.
"Go tuck yourself in.
" PAT: You got it.
Well, you were close, Dad.
Yeah.
I still can't believe we missed the phrase, "My hairy aunt.
" Come on, Brian.
I gotta get to softball practice.
Practice? I thought we'd go next door and welcome our new neighbors.
No.
I don't want anything to do with neighbors.
Last guy who lived next door borrowed my toaster.
Never saw it again.
If that slut wants full custody of the kids, she's got it.
[Short-circuiting] Peter, they might be very nice people.
"Very nice people.
" Yeah, that's what they always say.
Then you open up the septic tank and Skeleton city! [Panting] Pervert! Don't flatter yourself, honey.
I don't have any sweat glands.
MR.
WEED: Okay, time for batting practice, my Happy-Go-Lucky Toy Boys.
Guillermo, you're up.
Unfortunately Johnson isn't here to pitch today.
His wife is in labor.
Oh, what? Is the baby coming out of him? Jeez, I'll pitch.
I don't know what's more questionable, your pitching arm or Bill Clinton's integrity.
Oh, how hard [Laugh track] Oh, how hard can it be to pitch? - Okay.
Take your base.
- Somebody call 911.
Tell them he is allergic to penicillin and white zinfandel! Idiot! If you don't find a ringer to replace Guillermo, you're fired! Man.
What'll I do if I get fired? I'll have to go back to my old job as a Calvin Klein model.
FEMALE VOICE 1: I don't wanna be like everyone else.
MALE: But I don't want to be different.
FEMALE VOICE 2: I just want to be.
PETER: What was the name of the bad guy from Tron? This is gonna drive me nuts! LOIS: Moving is never easy on a family.
Well, we are gonna miss the go-go-go pace of Providence.
But with number two on the way, Joe thought it was time to move.
And I can't say no to Joe.
Ever.
Quahog can be pretty exciting, too.
Last week, someone lost an eye at Bingo.
l-17.
Darn it.
[Screams] I haven't played Bingo in years! Silence! Ever since you two met, you've done nothing but wax idiotic! I must escape this infernal babble! [Chuckles] What a little explorer.
Yes.
He's so full of wonder.
To be the Lindbergh baby right about now.
BONNIE: Joe, you have to meet our new neighbor, Lois Griffin.
It's a pleasure, Lois.
Who's the little guy? This is Stewie.
Honey, say hi to Mr.
Swanson.
You will bow to me.
MEG: Hi.
I'm Meg.
I live next door.
I know.
I've admired you in the garden from afar.
- Will you go out with me? - I'd love to.
[Romantic instrumental music] CHRIS: Oh, he's gay.
MEG: You wish! Get out of here, you mouth breather! PETER: I'm as good as fired.
Where the hell am I gonna find a guy as strong as Guillermo? One time I walked into the locker room, I swear he was bench-pressing Mr.
Weed.
PETER: Great.
Lois is getting chummy with the new neighbors.
BRIAN: She wants you to meet them.
PETER: She's always making me be social.
Cocktail parties, school functions, that time we planted trees in Jerusalem.
What? Look, all I'm saying is put an Israeli guy next to an Arab guy and I can't tell the difference.
- You must be Peter.
Joe Swanson.
- Yeah, yeah.
Nice to meet you, Phil.
You got a neighbor on the other side of your house, too.
So, don't think you always have to bug me.
I'll keep that in mind.
Say, do you have a screwdriver I can borrow? Man, you neighbors are like viruses.
Starts with a screwdriver.
Before you know it, you're using my supermarket my dry cleaner, and even my postman.
Can you believe that guy? "Do you have a screwdriver I can borrow?" What an ass.
- Did you find a replacement for the team? - No.
Believe me, I've been looking.
Hideo-san would be honored to play for your team.
But he wishes to know what compensation you offer.
Me love you long time.
Gosh, I'd like to help.
But I've gotta go out in the hall and chew on my ass for five minutes.
LOIS: Peter, I invited Joe and Bonnie to your game on Saturday.
Lois, I don't want those people there.
See, this is why I ask you to submit everything to me in writing first.
Bonnie told me Joe is a big baseball fan.
He played in college.
He did? Welcome to the neighborhood.
Hiya, Joe.
- Peter! - Don't get up.
This is a surprise.
I kinda thought you didn't like me.
What? Because of what I said this afternoon.
No.
See I have that disease where stuff pops out of your mouth.
Go to hell! Whoops.
See what I mean? I'm so sorry.
I thought maybe I crossed the line when I asked to borrow a screwdriver.
Are you kidding? You can borrow whatever you want.
Great.
Say, you don't happen to have any picture wire, do you? Picture wire? You son of a bitch.
[Dreamy ringing] Son of a bitch! Son of a bitch! There it goes again.
I don't want to impose.
No problem.
That's what neighbors do.
You know what else they do? They play on their neighbor's company softball team like this Saturday.
PETER: What do you say, neighbor? JOE: Sounds fun.
So much fun it should be illegal like copyright infringement.
[Mickey voice] See you at the game, Joe.
[Cheery instrumental music] - Hey, you want a piece of gum? - Thanks.
- That was joke gum.
- What do you mean? Now you're addicted to heroin.
I'm cold.
LOIS: Hey, Peter! MR.
WEED: It's nice that your family is here.
If your ringer doesn't arrive soon, you can spend every day with them at home.
He'll be here, Mr.
Weed.
You should see this guy in action.
PETER: He can hit, he can throw JOE: Peter! MR.
WEED: What's he doing in a wheelchair? Holy crip, he's a crapple! Peter, our new secret weapon is this very attractive paraplegic? Okay, Joe, you got me.
Rise and shine.
Come on.
- Stand and deliver.
Get the hell up.
- You're a hoot, Peter.
- Play ball! - Let's do it! I swear I didn't know.
Maybe they won't hit a lot of balls to him.
JOE: I got shortstop.
The movers tracked grease all over my carpet.
- I tried everything to get the stain out.
- What about lemon juice? - What about club soda? - What about shutting the hell up? Isn't baseball great? They say baseball's the national pastime.
I can't taste salt.
Crap! Don't hit it to Joe.
Please don't hit it to Joe! [Fans cheering] You're out! All right, Joe! Way to earn that parking space! BONNIE: All right! LOIS: Did you see that? BONNIE: That's my Joe! STEWIE: What the deuce? Half man, half machine.
STEWIE: Why with that technology, I could escape these wretched harridans! Go, cyborg! [Fantastical instrumental music] MR.
WEED: It all rests on that man's broad, rippling shoulders! [Whooshing] MR.
WEED: All right, Joe! Run! All right, Joe! Come on! Yeah! MR.
WEED: Hurry! Joe! All right! Yes, vamos! PLAYER: Let's hear it for Joe! Yeah, let's hear it for the guy who found Joe! Okay.
That's finger suckin' good, huh? It's an old policemen's recipe.
Eat up, everyone.
Tonight my wife won't be the only one enjoying a pig in a blanket.
BONNIE: Joe, you're so funny.
They love that one down at the Precinct.
This sucks, Brian.
Joe is stealing my thunder.
Hey, everybody! Time to limbo! - Face it.
He's the life of the party.
- Yeah? I'll show you who's the life of the party.
Hey, look! I fell in the pool with my clothes on! How hilarious is that? That is so Peter Griffin.
Guys? Guys? JOE: That's my idea.
MR.
WEED: Peter, come here.
Finally.
A little recognition.
Joe has the most wonderful idea.
Hey, I just suggested a line of handi-capable toys, you know to show kids the fun side of being physically challenged! That's what kids want to play with.
Yeah.
A Beanie Baby in a bubble.
What about my idea? Come on! Tootie morphs into a stink bug.
Joe, you're exactly the kind of man we need at our company.
Peter, make yourself useful.
Go get Joe a drink.
Jeez, first he takes my friends.
Then he takes my job.
But the way I wear my hat No, no.
He can't take that away from me.
You! How came you by this metal construct? - I demand to know who made you! - Stewie, it's not polite to point.
I'm so sorry.
That's okay, Lois.
He's just curious about the chair.
About 10 years ago I was investigating a robbery at an orphanage.
JOE: It was Christmas Eve and some presents had been stolen.
[Tense instrumental music] [Grunting] Reach for the sky, dirtbag! All right, pal! You've stolen your last Christmas.
[Exciting instrumental music] "You think you have won You think all is well "But kiss my green ass I shall see you in hell!" [Screaming] Are you Timmy? Merry Christmas, Timmy.
Enough! If you won't share your technological schemata with me peaceably I shall take the information from you by force! Wow.
Looks like you have a fan.
- Come on.
Let's get out of here.
- Peter, you can't leave.
Sorry, I promised the wife and kids I'd take them on a dream vacation to Hawaii right now.
Say aloha, kids.
What are you talking about? We want to hear more of Mr.
Swanson's stories.
He's cool, Dad.
He killed a guy.
Well, technically he was killed by the state, but funny story.
He did curse my name just before the injection.
LOIS: Peter, what's the matter with you? Why are you guys making such a big deal over Joe? You don't admire wheelchair people.
You're supposed to feel sorry for them.
When did it become okay to be handicapped? Don't talk like that! He's a remarkable man and the rest of your family adores him! Fine.
Then why don't you all marry him? And if he's so remarkable, let's see him do this.
Hey, look at me.
I'm walking.
I'm a remarkable man.
[People laughing next door] Well, look who finally came home.
I thought you were gonna spend all night at Joe's.
I could've.
That man has got magic fingers.
He found this one spot behind my ear, I Forget about it.
I thought my leg was never gonna stop.
I don't believe this.
My whole family worships the ground that guy can't walk on.
It's not too hard to see why.
He's a hero.
He makes the world a better place.
I've done lots of things to help people.
Remember the time I sang to the kids at the Sunday school? Yes, you forgot the words.
[Singing] "Jesus loves me "He loves me a bunch "Because He always puts Skippy "In my lunch" No.
It's not the same thing.
Joe puts himself in real danger every day.
You're right.
I'll never be that kind of hero.
Unless I put myself in real danger, too! For my family's sake! BRIAN: Why are the pretty ones always so dumb? [Creepy instrumental music] [Screaming] [Cat squealing] DISPATCH: Gang shooting on Third and Main.
Three wounded, one dead.
- Is it me or is rap music just getting lazier? - No.
It's my new police scanner.
This hero thing is gonna be easy once I find the right crime.
DISPATCH: Domestic disturbance PETER: Boring! DISPATCH: Report of a stabbing in DISPATCH: All units! A major robbery is in progress at Quahog Bank and Trust.
Suspects are armed and extremely dangerous.
- Perfect! Where's Lois and the kids? - Over at Joe's.
Well, go fetch 'em.
They're about to see a real hero in action.
To the Batcave! [Adventurous instrumental music] [Bats crying] PETER: Oh, God! Oh, God! Oh, God! PETER: You thought Joe was something.
You ain't seen nothin' yet.
LOIS: Peter, what's the big rush? All right, you guys wait right here.
Daddy's gonna make a little withdrawal.
ROBBER 1: Give Tammy a round of applause.
This was her first robbery and she was very brave.
[Muted laugh] Now before we go No, don't go.
Oh, princess, we have to.
PETER: I hope you brought your striped pajamas, boys.
Because there's a five-year sleepover at the big house.
And you're invited.
ROBBER 2: You'll never take us alive! [Gunshots] Lois and the kids should be in here to see this.
Yes.
It's going very well.
Mom, what do you do when you like a boy but he doesn't even notice you? Meg loves Kevin.
Shut up, you big sack of dog vomit! Meg, you're a sweet, lovely girl.
He'll come around.
Such a mom answer.
Have you tried showing off the goods? How's that for a mom answer? Creepy.
I saw some cute dresses down the street.
If nothing else, it'll make you feel better.
Come on, you guys.
BRIAN: If you want to be a hero, now might be a good time.
This isn't what I was expecting.
I thought being a hero would be all fun and games.
[Heroic instrumental music] PETER: Sorry, Wonder Woman.
I got three kings.
Now let's see your pair.
[Wonder Woman sighs] All right.
Robin, what are you looking at me for? Look at her.
[Space whooshing] ROBBER 2: Come on.
Let's go.
Oh, perfect.
ROBBER 2: We got hostages! Don't try anything funny! Don't worry, Brian.
I got a plan.
Good.
I was afraid you were just gonna improvise.
Actually, I was gonna use the little girl as a human shield and run like hell.
But improvise, that'll be easier on my back.
[Space whooshing] Okay, in this improv, Tammy and the short robber are husband and wife.
PETER: Okay.
And where are we? GUY: A bar! MAN: A pet store! GRANNY: Guadalajara, Mexico! Okay, okay.
I heard pet store.
And I'm the gruff but lovable owner.
All right.
Begin.
Hello, married couple.
I see you found a puppy.
Yeah.
His name is Sparky.
PETER: Well, before you take Sparky home, let me check him for worms.
Okay, drop it! All right, you guys.
Let's get out of here.
COP: All right, stand back! Whoa.
Hang on.
Sorry, no one can leave.
Listen, the whole reason I saved you guys today was so I could be a hero.
This wheelchair guy moved in next door and he can do all these great things and Your family idolizes the lousy cripple and not you? That's right! How'd you know? We've all been there.
CHRIS: Cool! The bank is getting jacked! LOIS: Officer, my husband's in there! - Can you tell me if he's okay? - What's he look like? LOIS: He's wearing a white-collared shirt, kind of big, with glasses.
COP: I got him.
LOIS: Oh, thank God.
- Take him out.
- No! Hey, there's my family.
I just want you to know I rob banks because a deaf man stole my job at the phone company.
So if anyone's gonna bust me, I'm glad it's you.
[Tense instrumental music] But But I was gonna be a hero.
Nobody's going anywhere! Joe, it's Peter! He's in trouble! A failed robbery at Quahog Bank and Trust has led to a terrifying hostage situation.
That's right.
A hostage situation.
- I gotta go.
- I know.
If we want the cops to take us seriously, we have to waste a hostage.
But who? - Excuse me.
Shouldn't that be "whom"? - Okay, you.
Crap! JOE: This is Police Lieutenant Joe Swanson.
I know we can work this out.
Not him again.
I hope this place isn't wheelchair accessible.
Bonnie, it's Peter.
Don't worry.
Joe's an excellent negotiator.
I was a virgin when we met.
It took him three hours.
I can't believe my dad is in there.
This'll probably scar me for the rest of my life.
I got a new dress.
Try talking about him.
So do you like music? Yeah! I played guitar in a band before we moved.
But it interfered with my studies.
What do you listen to? You first.
I'm into Garbage, Phish, Blur.
My parents don't like me listening to that stuff.
But I do anyway because I am not a robot! I also like Radiohead.
And even though society has turned its back on you I promise you there are people who care.
And you know what? I'm one of them.
He sure gets it.
Maybe he's right.
We can make a new start.
Come on, guys.
Don't let him sweet talk you like that.
Wait.
You can't leave now.
PETER: I'm supposed to be the hero.
Wait! Can you let me pistol-whip you a couple times for the camera? Stupid robbers with your guns and your make-out parties.
[Crowd cheering] [Cops cheering] Excellent! They detached the human component from the machine.
Machine, I am your new master and I order you to go! Engage! Blast! Must be some kind of proprietary command system.
Now on the Russian MiG, it's next to the altimeter.
LOIS: There you are.
I can't turn my back on you for a second.
One day I shall unlock the secret of that device.
And when I do, Mother, victory shall be Peter, you had us so worried.
What on earth were you trying to prove? I'm sorry.
Joe is a great guy.
I guess I was just tired of him being your hero.
Peter, Joe is a hero.
But he's not our hero.
- You are.
- Really? Yeah.
You're always right there on the couch for us, making us laugh when we're upset.
Changing the channel when something boring comes on.
Eating the last slice of pizza so the rest of us don't fight over it.
Yeah, Daddy.
If you hadn't pulled this stunt I wouldn't know how to manipulate Kevin.
And when the kids at school see us on TV they'll think you're a total psycho.
And I can say, "That psycho is my dad!" I wouldn't have won silver in Nagano, had you not driven me to the ice rink every morning at 6:00 a.
m.
I guess being a hero isn't always about saving lives and catching bad guys.
It's also about just being there for the people you love.
OLD WOMAN: Help! Someone just stole my purse! Who cares? I don't even know you.
Blasted matriarch! She has failed once again to replenish this frigid box with potations.
l shall give her a piece of my mind! Damn it! Now look here, you.
Oh, my God! [Dramatic instrumental music] Now you shouldn't be frightened, Stewie.
What you saw was actually a very beautiful thing.
Evidently, madam, you and l differ greatly in our conception of beauty.
What l just witnessed was ghastlier than a thousand ghouls! Stewie, mommies and daddies like to hug each other that way.
ln fact, sweetie, that's sort of how you were created.
That is a vile and odious lie! How dare you fill my head with such loathsome propaganda? Get out, you horrid woman! Okay, honey.
l'll go get your teddy bear.
[Stewie moaning] Good Lord.
You saw them together, didn't you? You know the tub where you take your little baths? They've done it there, too.
[Exclaiming] LOlS: [Singing] ''lt seems today that all you see ''is violence in movies and sex on TV ''But where are those good, old-fashioned values ''on which we used to rely? ''Lucky there's a family guy ''Lucky there's a man who'll positively tell you ''all the things that make us ''laugh 'n' cry ''He's a family guy'' What in the name of our Christian God? You're out of the semicircle! All Scouts have to sit in the semicircle! Why? Why? Saunders, tell him why! Because it's Rule 142-B! Because it's Rule 142-B! Good job, Scout.
Now drop and give me 20! Thank you, sir! Ladies, this Saturday at 0800 there will be a soapbox derby as a reward for all your obedience.
[Scouts barking] [Cheery TV theme music] Mom, Dad, I reaIIy Iike Potsie.
Why not, dear? Potsie's a very nice boy.
No, Mom.
I mean, I reaIIy Iike Potsie.
MR.
CUNNlNGHAM: We heard you the first time.
You have a homosexuaI attraction to Potsie.
Anything on that remote lower than mute? l got a surprise for you, Chris.
lt'll have to wait.
This is where the Fonz goes.
[Exclaiming] [Exclaiming] [Laughing] Take that, 1950s society! Okay, let's go.
Chris, this is the speed machine that's gonna win you the soapbox derby.
But, Dad, l was supposed to build it myself.
lt's a rule.
Come on.
Rules were made to be broken.
[Peter grunts] Here, let me show you the turbo booster.
Dad, what would you say if l told you l didn't want to be in the Scouts? l'd say come again? And then l'd laugh because l said ''come.
'' But thank God that's not the case.
You're a Scout.
And you know what that means? That means l love you.
Meg? Chris, get out of here! You're not allowed in my room.
l thought that was just when you were asleep.
What do you want? l don't want to be in the Scouts anymore.
l just want to draw.
l was kinda hoping you could tell Dad.
But try and open with a joke.
Tell him yourself.
l can't.
l don't want to disappoint him again.
You remember when he tried to sneak me into the County Fair? One, please.
[Chris sneezes] Wait a second! Your ass just sneezed! And horses can't talk! No! Nothing about this adds up at all! Okay, look.
Dad is really easy.
All you have to do is sit on his lap give him a big kiss on the cheek, look him right in the eye, and he's butter.
What the hell? Dad, the Scouts are no fun.
And l.
Wait a minute.
Chris, l am going to stand up, walk out of this room and we will never speak of this again.
[Moans] [Exciting instrumental music] Speed, you should not race! Ha-ha! The Mach 5 is not ready! Ha-ha! But Pops, l must race! Ha-ha! Very well.
But l am not really your father! Ha-ha! [Exclaiming] [Crowd cheering] Okay girls, get ready [Scouts making revving sounds] get set.
[Stammering] Please God, l don't ask you for much.
But let my boy win this race.
Do not go until l wave my flag.
l can't stress that enough.
l'll wave it once just to show you how it looks.
CHRlS: Look out! LEADER: Griffin is disqualified! [Leader grunting] LEADER: Your boy is out of the Scouts! Who died and made you President Nixon? Look, it's been two years! Your idiot son hasn't earned a single merit badge.
lf you'll excuse me, l've got to administer some spankings.
Come on.
Give him a little more time.
All right! You've got three days to earn a badge! Three days! That's tomorrow! We gotta get going! [Cheery instrumental music] Stewie, look what Mommy made for dessert.
Jell-O.
How exotic! l feel like l'm on the deck of the QE II.
Me and Chris will take ours to go.
We've only got one more night to get that badge.
Dad, maybe we should just give up.
l mean, we tried everything.
We almost got that one for insect study.
Look, Chris.
lt's a whole family of WASPs.
My, Margaret.
What a sub-par ham.
Perhaps l can't bake a ham.
But what l can cook up is a little grace and civility at the table.
Patty, did you know that your mother is a whore? l think it's great that you and Chris've been spending so much time together.
But he's the one who should be earning that badge.
Where do you get off telling me how to raise my son? Right.
Okay.
We'll try it your way, honey.
[Laughing nervously] PETER: There's my Scout! Not anymore, Dad.
l'm out.
They made me turn in my uniform and everything.
What? Those bastards! Don't you worry.
l'll get you back in! lt's okay, Dad.
l'm not really-- Don't take no for an answer, Chris.
You're a Griffin.
And a Griffin never knows when to stop.
PETER: Clear! PETER: Clear! [Gasping] You saved my life, Doctor! PETER: Clear! l'm calling that troop leader.
We're going over his head.
Straight to the Scout head office in New York.
Pack your bags, you guys! The Griffins are hitting the Big Apple! Ha-ha! Did you hear? The Griffins are going to New York! This does not affect us at all.
Ha-ha! l can't believe we're going to New York.
Dad, you don't really have to do this.
Yes, l do.
No boy of mine is gonna get booted out of the Scouts.
[Chris moans] What the hell do you think you're doing? Strapping you in, honey, so you don't get hurt.
So l don't get hurt.
That's the best you can do, you dull-witted termagant? l brought your Raffi tape.
Play WheeIs on the Bus and get the hell out of my sight.
Where's Brian? Aren't you coming? No, thanks.
l've been to New York.
lt's like Prague sans the whimsy.
Will you be okay by yourself?.
l think l'll manage.
All right, you guys.
We're off! Those Scouts are never gonna know what hit them.
And neither will that guy.
[Tires squealing] [Adventurous instrumental music] Okay.
l'm thinking of a movie.
-ls it an action movie? -No.
-ls it a musical? -No.
-ls it a good movie? -lt has its moments.
-CooI Runnings.
-Right! [Music on TV] After years of study, I've discovered the secret to Ionger Iife in canines.
And that secret is-- TV NARRATOR: We interrupt this program for some episodes of One Day at a Time.
Damn it, JuIie.
I'm a singIe mother doing the best damn job she knows how! And damn it, Schneider! I asked you to fix that damn sink two days ago! I'II fix your sink, Miss Romano.
And by that I mean I'II have sex with you.
And by that, I mean I'II fix your sink.
And by ''sink, '' I mean your reproductive organ.
[Laughter from TV audience] And by ''reproductive organ, '' I mean the thing between your knees.
And by ''the thing between your knees, '' I.
I guess that one's kind of seIf-expIanatory.
[Brian hollers] Peter, we're lost.
Would you please ask for directions? We are not lost.
And even if we were l can't ask a human being for directions.
-Why not? -Because l'm a man.
Haven't you ever seen a stand-up comedian, Lois? Dad, maybe we should go home.
No way.
We came to get you back into the Scouts.
And that's exactly what we're gonna do.
[Gurgling] -What was that? -Nothing.
[Gurgling] Peter, the car is making funny noises.
You're wrong again, Lois.
That wasn't the car.
Although you were right about that prune smoothie.
Are you okay? l'll be fine.
l just have to concentrate on driving.
[Alarming instrumental music] [Groaning] [Gurgling] [Peter groans] [Peter groans] Come on! That one's not even real! God! We gotta stop! [Car screeching] MEG: Wow! An lndian casino! Yeah.
l gotta find me the stink lodge! [Moaning] [Thrilling instrumental music] Come on, you guys.
No time to lose! Hold it.
Hold it! Hold it! [Moaning] AUTOMATED lNDlAN: WeIcome to our casino, paIefaces.
FeeI free to visit gift shop in Iobby and restaurant on second fIoor.
Do you have reservations? OnIy about the veaI! [Laughing] This is gonna be a photo finish, Lois! [Moaning] l'm gonna ask someone for directions.
Meg, watch Stewie.
Excuse me.
Can you tell me how to get to New York? Sure.
But what's your hurry, ma'am? Don't you want to play first? Thank you.
But l really don't approve of gambling.
Technically it's not really gambling.
We're trying to rebuild our shattered culture after you raped our land and defiled our women.
As long as you're not using it for firewater.
Look, a bow tie.
[Singing] l'm David Bowie.
Bo Derek! Very funny! Now tell the one that doesn't suck! [Laughter and applause] Thank you.
Yes.
And what's the deal with airline food? Thanks, ''Watches You Pee.
'' PETER: Where's your mother? Over there.
l didn't know you knew how to play poker.
-Yeah.
-How you doing? -Yeah.
-That's good, honey.
Let's go.
Yeah.
lt's funny.
l never knew video poker could be so much fun.
You win a few hands and all those lights go off.
And you just feel so good inside.
Yeah, gambling is great.
No question about it.
lt felt so good.
l kept putting my money in.
And before l knew it, l'd lost $40.
l'm so embarrassed.
That's okay.
As long as you learned your lesson.
l did, Peter, for a couple of minutes.
Then.
This is so silly.
l started playing again.
l could swear l parked here.
Yeah, you did.
But here's the really silly thing, Peter.
l sort of bet our car.
[Exclaiming] l won't panic.
l need to go back in the casino and find a high roller who'll pay $1 million to sleep with my wife.
What? That's ridiculous! These people took $24 for the island of Manhattan.
They have no idea what things are worth! MEG: Nice going, Mom.
l finally get my driver's license and you lose the car to a poker machine.
How ironic.
Don't talk about your mother that way.
She is not an iron.
We gotta figure out a way to get to New York and get Chris back into the Scouts.
But Dad-- l got it.
l'll just get Brian to wire us some money.
[Phone ringing] [Brian laughing] Damn it, JuIie! I am not shacking up with my boyfriend.
I am just going away for the weekend.
SCHNElDER: Yeah.
AII the away.
[TV audience laughing] [TV audience laughing] [Hooting] Damn, Schneider! What won't you say? No answer at the house.
You didn't bet that, too, did you? l'm sorry, Peter.
l feel so foolish.
lt just seemed like such a good cause.
Everyone in the tribe gets a share in the casino's profits.
-What did you just say? -''l'm sorry.
'' -After that.
-''l feel foolish.
'' -After that.
-''Casino's profits.
'' -Before that.
-''Everyone in the tribe.
'' -The whole thing.
-''Everyone in the tribe shares the profit?'' That's it! Let's go! l'm sorry to hear about your misfortune.
But we're not allowed to return gambling losses.
l think you can make an exception in our case, Lenny.
See, l'm an lndian, too.
LENNY AND LOlS: Excuse me? You heard me.
l'm a member of your tribe.
And that entitles me to a share of your wampum, kemosabe.
Whoa.
Wait a second.
Not so fast.
Tell me of your history, of your past.
l come from a long line of you people.
My great-grandfather's name was Jeep Grand Cherokee.
l mean, Chief Grand Cherokee.
He was a rainmaker.
[Native singing] [Singing] ''l'm so happy doing the neutron dance ''l'm just burning doing the neutron dance'' And he also killed a bunch of Krauts at Wounded Knee.
So are you gonna give me back my car, or what? l have to confer with the council of the elders.
You wait here.
Are you nuts, Peter? You'll never get away with this.
Why not? l've fooled people before.
You remember that time l pretended to be gay? [Cheery TV music] There is no way they're gonna believe you're an lndian.
LENNY: He's an lndian.
How do you know? -l can tell.
-You think everyone's an lndian.
He could just be another moocher.
Maybe we can put him through a test.
Like a really impossible stunt to prove he's the real deal.
Way to think outside the box, Frank.
To prove you are truly a member of our tribe, you must go on a vision quest.
Do you know what a vision quest is? Of course l do.
l'm an lndian.
But why don't you explain it to my wife? She's a little slow in the head.
A vision quest is a sacred spiritual journey.
Your husband must go out in the wilderness without food or water.
-Or shoes.
-Yeah.
Or shoes.
He must remain there until he can communicate with nature.
He must hear the wisdom of the rocks and trees.
And then his guiding spirit must appear to him and reveal a great personal truth.
And it's gotta be a real vision.
We're lndians.
We're gonna know if he's lying.
[Howling ominously] [Laughing] Sucker.
LOlS: Peter, please don't do this.
We can buy another car.
l'll give extra piano lessons on Sundays.
Come on.
All l gotta do is have a spiritual vision.
l've had one before.
Oh, my God, Brian.
There's a message in my Alpha Bits.
lt says ''Ooooo.
'' Peter, those are Cheerios.
You must begin your journey now.
-Now's your chance to be alone with Dad.
-Are you nuts? l'm not attracted to Dad.
-Tell him you don't want to be in Scouts.
-Thanks, Meg.
Yipes.
Dad, can l come? -How about it, Lenny? -What the hey? The more the merrier.
Now get the hell out of here, you nut, and go have yourself a spiritual vision.
[Mysterious instrumental music] Water! Thank God! CHRlS: Dad, l'm hungry.
Are we gonna die? PETER: Of course not.
This isn't the first time l found my own food in the wild.
[Girl humming] [Peter shouting] [Girl screams] [Laughing] Dumb broad.
[Screaming] [Wolf growling] They've been gone for over six hours.
How long do these vision quests usually take? lt varies.
lt depends on the person's age, and height, and sign.
You have no idea, do you? Of course l.
No.
Why would you send my husband and son out into the wilderness without any food or supplies? Because we really like your car? [Lois sighs] They're dead, you know.
[Wolves howling] Must eat.
Haven't snacked in hours.
Can't feel my eyes.
Wonder if club-footed midgets get justice in heaven.
TREE 1 : Hot enough for you? What? l say, ''Hot enough for you?'' Yeah.
l guess.
Oh, my God! l'm communicating with nature! Tree, if one of you falls and there's no one around, do you make a noise? Are you kidding? Scott fell last week.
-He hasn't shut up about it since.
-Sure.
Stand there and bitch! But would any of you take the time to help me? l'm playing the world's smallest violin, Scott.
FONZlE: Yo, Griffin! The Fonz! [Exclaiming] What are you doing here? Shouldn't you be in the middle of a Tuscadero sandwich? Yeah.
But l'm your spiritual guide, see? l want to lay a little personal truth on you.
Now, Mr.
C was like a father to me.
And he always listened, you know? And Griffin, right now, your son needs you to listen to him.
Whoa! Sure.
Whatever you say.
Fonzie? There's something l always wanted to ask you.
You were with a lot of girls.
-Did you ever get a sexual disease? -Herpes twice.
And the clap.
[Exclaiming] Dad? Can l talk to you? Not now, son! Sure.
Go right ahead.
Sure.
Go right ahead.
l don't want to be a Scout, Dad.
l just don't have fun there.
-l guess you're pretty disappointed in me.
-Yeah! -Dad, this is what l really like to do.
-What? You want to draw? Son, why don't you just stick a knife in my heart? -l mean, so you drew this? -Yeah.
l know they suck.
Not all of them.
Some of these look pretty good.
-Really? -Yeah! l didn't know anyone in this family had any talent.
Except for that one thing your mother does.
-You mean play the piano? -No.
She.
Yeah.
l probably don't say this often enough.
But l'm really proud of you, Chris.
Thanks, Dad.
[Singing] ''And the cat's in the cradle with the silver spoon ''little boy blue and the man in the moon ''When you coming home, Dad? l don't know when ''But we'll get together then, son You know we'll have a--'' Oh, my God! TREES: Fire! Let's get out of here! TREE: Run, you stupid bastards! Peter? Chris? Thank God.
Are you okay? Fantastic, Lois! l saw my guiding spirit.
Whoa! Wait a second! You had a vision? lt was amazing! l spoke to the trees.
And l saw the Fonz.
Really? What's the Fonz like? l bet he's stuck up.
A little.
But thanks to him, me and Chris have never been closer.
l want a spiritual vision, too! Man! l guess we've lost touch with our noble roots.
l mean, sure this casino's brought our tribe money and prosperity.
-But what is the price of our souls? -$6 million a week.
That sounds right.
Take your crappy car back.
Come on, boys.
Let's go hit the buffet.
All right! We did it! Let's get the hell out of here.
Stupid, greedy savages! Stewie, that's a terrible thing to say.
This one particular tribe has lost their way.
But most Native Americans are proud hardworking people who are true to their spiritual heritage.
They are certainly not savages.
That's funny, Mother.
Just this morning you said they were lazy like the dirty Mexicans.
Just kidding.
The Mexicans are a clean and industrious people with a rich cultural heritage.
Yeah.
Not like those dumb, gargantuan Swedes.
Actually, the Swedish people run the gamut from very short to tall.
And did you know that Sweden gave us the brilliant inventor, Alfred Nobel? Yeah.
Which is more than we ever got from those freeloading Canadians.
Canada sucks.
Come on, everyone.
The Eight is Enough reunion show is about to start.
Mary, have you seen Nicholas? He's up in his room sulking, Dad.
Yeah.
He's still upset because Abby threw out his baseball cards.
Maybe I should make him a sandwich.
[Laughing] Dad.
That's your solution to everything.
[Sister crying] Dad! What? Eight is enough.
[Laughing] You know, I love you girls.
LOIS: [Singing] "It seems today that all you see "is violence in movies and sex on TV "But where are those good, old-fashioned values "on which we used to rely? "Lucky there's a family guy "Lucky there's a man who'll positively tell you "all the things that make us "laugh 'n' cry "He's a family guy" Splendid.
That hausfrau's cheap rayon blouses will make a serviceable parachute should I need to abandon my jet in mid-flight.
Once it's built, of course.
Rupert, did you call that engineer at Lockheed yet? No, of course you didn't, you worthless little There! See what you made me do? Do you think I enjoy hitting you? Actually, I do.
I enjoy it so much I'm going to do it again! Stewie! My clothes are not for you to play with, understand? Thanks for telling me, Brian.
I don't know what we'd do without you.
I'm on to you.
Your pathetic attempts to hinder my work have not gone unnoticed.
You prance about this house like the cock of the walk.
But will you be prancing when there's nothing to prance about? Will you be prancing then? You just want to eat him up.
MEG: It is so hot out there! How hot is it? I don't know.
Like, around 98, 99.
I don't get it.
I think I'm a little sweaty.
You! You seem to know all the players in this poorly-acted farce.
What do they call that one? That's Meg, dude.
You know that.
Meg! You vile-smelling girl, you're not to touch any of my things! You understand me? Dirty girl.
DIANE: Meanwhile, here at home Quahog remains in the sweltering grip of a freak heat wave.
I don't think you should use the word "freak".
Some people might find it offensive.
- Finish your oatmeal, son.
- Why bother? I'm just a freak! We're all a little different, Diane.
Each of us.
Good point.
We're even feeling the effects of this heat wave here in our studio.
[Sneezing] Freak.
So stay inside and stay cool.
I think I saw one of her nipples! Chris, that's a terrible word! "Nipple.
" I'll chalk that up to the heat, mister.
Am I to strut about all day like a beggar child on the streets of Calcutta? Fetch me something linen to throw on before I call Child Services! Please don't threaten Mommy.
She's very hot.
Chris, you're hogging up all the fans! Yeah? You're hogging up all the ugly! Check this out, you guys.
PETER: The Rhode Island Dog Show Championship is in Quahog this year! - First prize is $500! - Really? If you won, we could use that money for a new air conditioner.
Brian.
You could win for sure.
You could do your impression of a barbershop quartet.
[Singing] "We were sailing along "On Moonlight Bay "We could hear the voices singing "They seemed to say" Sorry.
I don't do dog shows.
It's not my thing.
Come on.
All you gotta do is a few simple commands.
And maybe a trick or two.
It'll be like taking candy from a baby.
[Baby gurgling] Please, Brian.
I don't know.
I mean I don't even know where my papers are.
Can't you get the money another way? I've been trying.
That's why I went on that game show.
For $800, this chemical dye is found in over 95% of all cosmetic products.
Diarrhea.
[Laughter] What? Sorry.
What is Diarrhea? Come on, Brian.
We really need a new air conditioner.
[Groaning] Okay, let's go over the commands.
Sit.
Good.
Roll over.
I'm already shvitzing like crazy here.
Let's call it a night.
Do you want to win this thing or not? We haven't even talked about how you'll wear your ears.
I was thinking up.
I need a cocktail.
Don't push too hard, Peter.
You gotta take Brian's feelings into consideration.
After all, it's only a dog show.
Lois, honey, I love you but you're sucking all the energy out of the room.
[Knocking on door] Come.
I got you a little something for the show.
It's Italian.
Do you like it? It's exquisite.
It's not for every day.
Clearly.
I'm gonna put it on right now.
I know how hard you've been working.
And the whole family appreciates it.
Thank you, Lois.
I should go.
We'll be waiting downstairs whenever you're ready.
And Brian you look very handsome.
[Lnhales deeply] Showtime! ANNOUNCER: Welcome to the Quahog Dog Show.
Today's competition will be almost as hot as the weather, which is once again in the triple digits.
almost as hot as the weather, which is once again in the triple digits.
[Bird squawks] Peter, I'm not really comfortable with all this.
Do I know you? I don't think I can do this.
You can't back out now.
How about a pill? - Something to relax you before you go on? - Peter, are you offering Brian drugs? Not drugs.
Just a little blue thing celebrities take to help them perform.
Well, those celebrities are wrong! Lois, if Liza is wrong, then I don't want to know what right is.
STAGEHAND: Two minutes to curtain, Miss Minnelli! Come on, baby! Mama's gotta sparkle! It's time to make life a cabaret! Lady, for God's sake, I'm just a hard-shelled chocolate candy! Get help! [Grunting] You there, child-woman! I'll give you a shiny dime if you'll roll me into the nearest lake.
Let me see if I can find you a juice box.
And get the lead out, pudgy! ANNOUNCER: Next, Peter Griffin and his dog, "Brain".
We're off to a good start.
[Dramatic instrumental music] ANNOUNCER: A beautiful performance from "Brain" Griffin! Go, Brian! [Crowd applauding] All right, Brian.
We got it all sewn up.
What the hell is this? This? This is the part where you beg for a treat.
I don't think so.
Brian, you're embarrassing me.
God, he can't expect Brian to do that.
It's easier than it looks, Mom.
Come on, Brian.
We had a deal.
Yeah? The deal's off.
Me and the little shred of dignity I have left will be waiting in the car! Brian, come! Don't you walk out on me! I now command you to leave.
Keep going.
Yeah, that's right.
Yeah, flip me off.
Good boy.
[Giggling] How could you let me down like that, Brian? I let you down? Because I refused to demean myself by perpetuating the stereotype of the good dog? This is the one thing I ever asked you to do for us.
This and not do that thing where you drag your ass across the carpet.
One time I did that! Peter, Brian, please.
Let's just have a nice family car ride like we always do.
Yeah.
Except for the time Dad hit that deer.
Yeah, it looks like it's just a ding.
There's no reason to involve the insurance companies.
I should still take down your information.
Really? You could probably just buff that out.
Yeah, but I I would really feel better if I got your information.
Brian, maybe I had you pegged wrong.
Maybe you really don't care about this family.
If you cared about me, you'd never ask me to do something so degrading.
The next time I ask you to do something, I expect you to do it.
Understand? Who wants to sing show tunes? "In old" BRIAN: Stop the car.
PETER: Is that what you want? Because I'll stop.
BRIAN: Pull over now.
PETER: Fine.
God.
Brian, don't do this.
Is the doggie going bye-bye? I'm so sad.
Quick! Back up! [Sorrowful instrumental music] Great.
Is there a problem, Officer? Can I see your license, boy? "Boy"? Oh, God.
I left it on my other collar.
- You been chasing cars tonight, boy? - Look, the name is Brian.
- I was just out for a little walk.
That's all.
- Without a leash.
I'm gonna have to ask you to lie down on the sidewalk.
Down! I don't believe this.
I don't suppose you could let us off with a warning? Sorry, sir.
But leash laws are for his own good.
The fine is $10.
You behave, little fella, you hear me? [Slave voice] Lordy, I'll never roam again! Jackass.
He's the law outside this house just like I'm the law inside this house.
- And you better start obeying both of us.
- Look at you.
Big man, can't even afford to buy an air conditioner for your family.
What a bitch.
DIANE: Good morning Quahog.
The heat wave has finally broken.
It sure has.
You know what they say, "If you don't like "the weather in New England, go back where you came from.
" I don't think that's the expression.
I guess I had too many bloody marys this morning.
But anyway [Belching] God.
I hope the boss isn't watching.
[Laughing] I don't know how those two manage to be so perky in the morning.
Something smells good.
Homemade cinnamon buns fresh from the tube.
[Giggling] Nothing says "I love you" like something from What the hell are you doing, you crazy bitch? These oughta cheer Brian up.
Cinnamon buns are his favorite.
Really? I could've sworn his favorite was "treat Peter like crap" buns.
LOIS: Good morning, Brian.
My, your summer coat is really coming in nicely.
Isn't it, Peter? Yeah.
Must be that special jojoba shampoo I bought you.
It cost a little extra.
But I would do anything for you, Brian.
I'll be on the veranda since you're already on the cross.
Eat with us, Brian.
I made cinnamon buns.
May I have one on a plate or is Peter planning to balance it on my nose? Peter, Brian, stop this.
Can't you two go back to the way you used to be? [Ragtime music playing] We can't go back to the way things were after how I was treated.
- Not after the things I've seen.
- What did you see? Was it breasts? Get over it, Brian.
I mean, how bad do you really have it here? - When I found you, you were just a stray.
- You swore you would never speak of that.
No, thank you.
I just had it cleaned.
No.
Jeez.
All set, sir.
I don't have any change.
Sorry.
That's okay.
No charge.
[Sad instrumental music] Wait.
[Stammering] You hungry? Because my wife makes this beef-a-roni casserole.
Out of this world.
Look, you got everything you could possibly want right here.
Now just eat your cinnamon bun and stop being a bad dog.
How dare you? How dare I? Where do you think you're going? Out! You're not going anywhere without your leash! I don't need your damn leash, or you! I'm going for a walk.
Don't worry.
He won't get far without this.
And a pack of Eldorados, unfiltered.
What? That.
Yeah.
I'll clean that up on my way out.
See that sign? Now why don't you go tie yourself up to that parking meter? I don't want any trouble.
Mom, have you ever had a problem with freshness? What do you mean, honey? You know.
Have you ever felt not so fresh? I'm not sure what you're I don't follow you.
Have you ever felt like you're dirty? Down there? [Exclaiming] God, no! That was Brian's favorite commercial.
"Brian"? No, it's not ringing a bell.
Stop it! We all miss him.
Go find him, apologize, and bring him home.
You heard him.
He doesn't want to be a part of this family.
We don't need him.
We'll get another pet.
No way, Dad.
No one can take Brian's place.
STEWIE: Silence! That mongrel is probably decomposing on the side of a dirt road as we speak! - Let's get a kitty! - See, gang? Stewie's got the right idea.
- I don't know, Peter.
- Lois, trust me.
We'll get a lovable kitty-cat and everybody will feel a lot better.
[Hissing] PETER: Here, kitty, kitty.
Come on down nice and easy.
That's a good kitty.
[Gasping] What the hell was that? Something near a window.
Preferably a booth.
Yeah, you got 50 Puerto Ricans in the kitchen! Yeah, that's authentic Italian.
BRIAN: Don't do that.
That's what they expect you to do.
Okay, fine for you.
But what about your puppies? And your puppies' puppies? Am I the only one who's outraged here? I'm sorry.
Enjoy your dinner.
How come you're still setting a place for Brian? Because when he comes home, I want him to know he never left our thoughts.
I know you're thinking about him, too, Peter.
Look, Lois, he broke his promise to me.
Besides, we have a new pet.
And we love our fluffy kitty.
Gross.
Did he just drink from the fountain? Hey, you! COP: Stay! [Dramatic instrumental music] [Shouting] Joyce DeWitt? So that's where you've been.
Sorry, pooch.
You gotta sleep outside.
No dogs allowed in the bus station.
My blind guy's in the john.
I'll point him in your direction.
PETER: Brian's tennis ball.
Man, he loved to play with this thing.
REFEREE: Double fault! Come on, Brian.
Peter, why don't you just admit you miss Brian? You're right, Lois.
Who am I kidding? This family needs Brian.
I need him.
[Cat howling] God, I hate this freaking cat.
Can you spare some change? Why? So you can go buy yourself another bottle of booze? Why don't you make something of your life, like this dog? That's me! I mean, that was me.
MAN: Yeah, sure.
No, I mean it.
That was me.
Get away from me, you crazy animal! You want me to be a crazy animal? Okay, I'm a crazy animal! Stop! Help! Help! BRIAN: All right, who wants to be next? You? You? Brian! PETER: I'm here to bring you COP: You're going downtown, pal.
home.
Hi.
How's it going? Oh, God.
I know karate! [Kung fu noises] [Dog growling] Look! A tasty little baby! I see somebody's been neutered.
Come on, sugar.
It's time.
Thank God.
He's cute.
Aren't you precious? Lethal injection.
Next! - What? - Oh, no! You can't do this! Who's up for a little lunch? Something festive.
Did someone say Tex-Mex? I'm sorry, sugar.
Help me.
Don't worry.
I'll get you out of this.
I'll get us the best help there is.
PETER: "Dear MacGuyver "Enclosed is a rubber band, a paper clip, and a drinking straw.
"Please save my dog.
" You're looking well.
Don't get too close.
They say I'm dangerous.
That's why the man's gonna put me down.
Don't say that, Brian.
Peter is working on your appeal.
You'll see.
Everything's gonna work out.
I may have been born with my eyes closed, but now I see the world for what it is.
I'm a second-class citizen, Lois.
Great news! The City Council agreed to hear your case! BRIAN: You're kidding! If I prepare my case, I might have a chance after all.
I don't know how to thank you.
We're family.
This is what we do for each other.
Right, Peter? LOIS: Peter, don't stare! [Lntense instrumental music] Good luck, sweetness.
Thanks, Felicia.
This meeting was called to review the judgment in City of Quahog v.
Brian Griffin.
Justice, for all? Or for some? Does a dog not feel? If you scratch him, does his leg not shake? Yes, he is man's best friend.
But what manner of friend is man? I would like to cite the case of Plessy v.
Ferguson Wait a minute.
Why are we listening to a dog? Take him away! Does not every dog have his day? Wait! Please! I gotta say something! Look, all Brian's ever wanted is the same respect he gives us.
That and Snausages.
He's mental for those Snausages.
And sure, sometimes we have arguments, like when he's sleeping on the bed and Lois is in the "oodmay" but Brian won't "amscray.
" - Peter - Okay.
Look.
The point is, he's a member of our family first and a dog second.
And I'm real sorry I forgot that, buddy.
Sometimes we all need a second chance.
Sometimes we all need to forgive! I stole $10 from Meg's room! I stole $10 from Mom's purse! I've been making counterfeit $10 bills for years.
Mr.
Griffin, this dog is a danger to society.
Albeit an articulate and charismatic one.
But the law is the law and can't be circumvented by pretty words.
I'll give you each $20.
Deal.
He can go.
[All cheering] STEWIE: Mistrial, damn you! Mistrial! [Triumphant instrumental music] No.
Let him go.
Anybody want more pizza rolls? Yeah.
Quiet, Lois.
Murder She Wrote.
Charles Montrose, after all these years.
Jessica Fletcher! Why I haven't seen you since you had the You can say it, Charles.
I'm not ashamed.
Abortion.
So she's the murderer! Come on, kids.
Bedtime.
Good night, Brian.
And welcome home.
CHRIS: Good night, you guys.
MEG: Good night.
- Dog? - Yeah? If you ever tell anyone about that, I will kill you.
Once again, I am free to smite the world as I did in days long past.
When the evil shape-shifting wizard, Aku, arose from the bowels of hate to ravage our homeland, I was a young emperor at the time and was helpless against his powers.
But I remembered our grandfather's grandfather's story of three monks who were gifted with mystical powers.
I rode to the highest peak of the mountainside where the monks agreed to forge me an enchanted sword with great magic.
Armed with the sword and the hope of my people, I plunged into battle against Aku.
His evil was no match for the power of righteousness.
And with the sword's magic, Aku's demon forces were implanted into the earth forever petrifying him into the wasteland that he created.
Through years of hard work, we have rebuilt our glorious past with hopes never to encounter such an evil as Aku again.
Always be alert, my son.
For the presence of evil is sometimes right behind you.
No, it cannot be.
Aku.
The sword.
Not this time.
Mother, Aku has returned.
Do as we have planned.
Our future depends on it.
Break.
Here's some water, my emperor.
None for him.
I'm sorry, emperor.
Water.
Water.
Water.
I said, no water! He has returned.
Insubordinate fool.
No one attacks Aku's minions.
Destroy him.
My son.
What has happened to our land, Father? My son.
It has been many years since that fateful day that Aku returned from his imprisonment.
Enslaved, we have become, to unearth the riches of our land so that Aku can strengthen his powers and begin to take over the world.
Do not worry, Father.
For with the power of this sword, I will vanquish Aku sending him back into the pit of hate from which he came.
No! I thought once like you, but the sword is only a tool.
What power has it compared to the hand that wields it? Evil is clever, and deception is its most powerful weapon.
Let the sword guide you to your fate but let your mind set free the path to your destiny.
I will not fail you, Father.
Be wary, my son, for evil finds a way.
The mist is full of demons.
Aku is near.
Aku! Who dares to summon the master of masters? The deliverer of darkness? The shogun of sorrow, Aku.
I am the lost son of the land that you have pillaged.
I am here to reclaim it.
For my people.
For my father.
For my birthright.
Fool.
No mortal can hurt the great Aku.
That sword.
I remember that blade.
I recognize your blood.
You are the son of the fool who imprisoned me those many years ago.
No matter.
Neither he nor the sword had the power to slay me forever.
And neither do you.
No matter what form you take, Aku you will never defeat the side of righteousness.
Now, demon, with the blessings of righteousness and the power of the sacred blade I cast thee back to the vile pit from which you came.
You might have beaten me now, but I will destroy you in the future.
There is no future for you, Aku.
I disagree.
What trickery is this? Aku Do not worry, samurai.
You will see me again.
But next time you will not be so fortunate.
Oh, no! - Yeah! - That was bad, man! Yo, Jack! That was some awesome show! I've never peered upon moves like that, Jack! Word! Jack was all ricochetically-jumpa-delic! Hezeck, yeah! Bodigiously acrobatastic! Word! Word! But then, when Jack pulled that Swiss arm it was all, like, schwim-swack-swoof! Man, right through the car! Swick-attack-whack was full on the back, Jack! Oh, yeah, yeah! And he was all boom! Man! Eat that, flucking crucker! Then my man just lands all coolish style, like, "No sweating, chill.
" But then that gunner wanna come out all: The trash is all munching, crunching, snack-mixing! Out of that phat, supercagafragalistic-tistic tie, yo! Yeah! But Jack's just like, "Word! Let me get some.
" Tie.
Grab.
"I'm out, yo!" Word! Word! Word! Jack! Jack! You the sniz-nit, Jack! Oh, man! - You just made my day! - Up in the air! Thank you.
Where am I? Jack, you're on the gutter level of the Central Hub, Sector D.
- Central Hub? - Yeah, Jack.
The most crowdestness - Stinkiest - Most miserablest Residential-industrial spaceport on Earth! I have many questions and little time.
Who is in charge here? I must speak with your king.
- So, Jack - You don't see Aku.
Aku sees you! - Aku? - Yeah, man! Aku.
The master of masters.
- The deliverer of darkness.
- The shogun of sorrow.
- No! How can this be? - Don't know.
Just always been that way.
This I Yo, Jack.
What's up? You don't look so good.
What Jack needs is some liquid refreshment.
- Perhaps you are right.
- Word! Right over there.
- They will hook you up.
- Word! That joint is the busy bizomb! What do you want? A few of the locals inform me that I might be able to refresh myself here.
- What? - Hey, man! Jack just want a drink! A drink? Why didn't you say so? And what you looking at? I apologize.
I am new here.
I did not mean to stare.
No, human.
It is not that easy! Please.
I again apologize for my misbehavior.
I do not wish for any more trouble.
- Get up.
- I wish you no harm.
It is not me who should worry about being hurt, human.
It is you! So, what do you say, old chap? Will you help us? So, what did he say? What did he say? Will he do it? He said you're out of your mind, you blasted idiot! What do we do now? We've asked just about everyone here.
I say! What about him? You mean the lad who's about to get his bum disintegrated? - Oh, I can't watch! - Yes, that's the one.
I like him.
- By Jove, he's good! - Aye.
But it ain't over.
Lads, that's our boy.
Aye, he's good, all right.
But he'll never do it.
We'll see about that.
Be careful, Rothchild.
No worries, old friend.
Everything is under control.
Pardon me, fine sir.
Down here, old fellow.
I was just wondering if you would be so kind as to join us, as we are - Talking demon dogs! - Good heavens! Where? You will not best me this day, vile henchman of Aku! Hold on a moment, sir! I am by no means a demon or have anything to do with Aku.
- But you speak in the language of man.
- But of course! You're not from around here, are you? I say, why don't you come join my friends and me for a refreshment and we'll explain everything.
Splendid.
Right this way.
- Your refreshments are here.
- Splendid.
My boy, I do apologize.
How rude of us.
We haven't introduced ourselves.
This is Sir Dreyfuss Alexander, chief of excavation.
Dreyfuss, old boy, you're drooling again.
Oh, oh, sorry.
You blasted idiot! You're getting everybody wet! And this fine gentleman is Angus McDuffy, artifact aficionado.
And I am Sir Colin Bartholomew Montgomery Rothchild III.
Or "Rothie," for short.
I am sorry.
I am very confused.
Your world is new to me.
What has happened? No, no, no.
Quite all right, quite all right.
Since the beginning of history, the immortal Aku has ruthlessly ruled the Earth plundering its resources as he sees fit.
But it was still not enough.
He opened his ports to the galaxy so that he might take the riches of other worlds as well.
Since then, his otherworldly business affairs have drawn scads of vulturous criminals mindless stooges and questionable mercenaries to our pitiable planet making the Earth topsy-turvy, if I do say so myself.
There are other worlds across the stars? Well, of course, silly.
What world do you hail from? But I am from Earth.
Yet this world is nothing like the world I remember.
- How so, lad? - Even the grandest cities were never as overwhelming as this one.
Chariots did not fly, and dogs did not speak in human tongue.
What do you mean? Well, I mean no insult.
They were wonderful companions but the dogs I knew merely barked.
You see? The ancient myths are true! Lmpossible! If what you say is true, he'd have to be thousands of years old.
Astounding! The age-o-meter dates your particles all the way back to 25 B.
A.
Twenty-five years before Aku enslaved the Earth.
You, my friend, are a living fossil.
So the question is not where I am but when I am.
- Precisely.
The spell Aku cast must have ripped me from my own time and flung me into the distant future.
Time warp is highly plausible.
Allowing his evil time to fester and infect the entire world.
Most undoubtedly.
And I'm sure he plans to spread his vileness through the stars.
No.
I must return to my own time so that I might undo Aku's evil reign before it envelops the Earth.
This ageless demon must be stopped.
Oh, I'm so glad we agree on that point which actually brings us back to our proposal.
You see, we are archeologists trying to dig up the remains of our ancestors to find out more about our past.
It was only a few years ago that we discovered that our ancestors walked upon their legs and their arms.
Then, one day, during our excavation, we actually stumbled upon rare jewels.
Aye.
These jewels ended up being a key source of power for Aku.
So he enslaved us to forever dig up his jewels thus stifling our excavation of our glorious past.
- Which is why we need you.
- But what can I do? With your tremendous skill, you can break us free from Aku's grasp.
And we can escape in secret to again continue to discover our history.
I will help you.
Splendid! Well, we're off, then.
- Hold it! - What is it now, Rothie? - What's wrong? - My dearest apologies, kind sir.
But we never got your name.
- Jack.
- Jack was all - Jack.
Jack.
- Yo, Jack.
- Jack, was - Jack! They call me Jack.
Jack? I say, that's nice.
So simple but it seems to fit.
Who am I to comment? Well, Jack, we're on our way.
We'll take our rocket ship.
Rocket ship? I'm taking a break.
My lord, we are the Vadaquas from the Mosconian Galaxy.
Our water planet has been pillaged.
All the oceans that were once our home are gone.
We have searched long to find a planet with oceans rich enough to sustain our people.
And your world is our last hope for survival.
I know of your plight, Vadaquian.
For you see, I am he who has taken your waters and the riches within them.
- You monster! - Be quiet! I am sorry, my lord.
The boy is young and foolish.
He does not know what he says.
The boy will return.
He will learn proper respect for Aku in the pit of hate.
Yes, oh, master.
Your wisdom is unquestionable.
But will you, great lord Aku, allow us to inhabit your world? For you are our only hope.
You will be allowed.
The oceans of Aku will be your new home.
But you will pay homage to me by constructing statues in my likeness.
Once a month, a monolithic tribute will rise from the depths of the ocean to remind all who is the master of this world.
Now be gone! My lord master, I have great news for you.
What information can be considered great for the immortal Aku? An ancient warrior of great power and skill has revealed himself.
He has vowed to liberate the canines from your mines.
What impertinence is this? Show me the fool! So fate has arrived.
Many years have gone since that day.
And now, my formidable foe, you will pay for my pain in the past with your pain in the future.
Oh, dear.
Sir Jack, are you ill? I'm fine.
I just prefer walking.
Yes.
Rocket rides.
Sorry about that, old-timer.
But anyway, welcome to our camp.
As you can see, our archaeological dig had unearthed many astounding discoveries concerning the history of canine kind.
But unfortunately, Aku has, shall we say redirected our efforts purely toward the excavation of his precious gems.
And if Aku's unreasonable quotas are not fully met l'm afraid terrible punishments are exacted.
My people's spirits are broken.
We simply cannot live like this any longer.
I have seen Aku implement these atrocities before.
But no more.
Even dogs should not be forced to live like dogs! They're coming! They're coming! Aku's drones approach from the south.
They will be upon us by sunrise.
This is Sir Dreyfuss Alexander, Angus McDuffy and I am Sir Colin Bartholomew Montgomery Rothchild III.
You, my friend, are a living fossil.
The spell Aku cast must have ripped me from my own time and flung me into the distant future.
We need you.
With your tremendous skill, you can break us free from Aku's grasp.
I will help you.
We never got your name.
- Jack.
- Jack was all - Yo, Jack.
- Jack! They call me Jack.
Many years have gone since that day.
And now, my formidable foe, you will pay for my pain in the past with your pain in the future.
Aku's drones approach from the South.
They will be upon us by sunrise.
I say, there are quite a few of those Aku destroyer beetle drones.
How are you ever going to be able to defeat them? I'll need some weapons.
The destroyer drones have entered the valley! Everyone take cover! No.
There is no escape.
Now, that was smashing! A real bang-up job! Good Sir Jack, 'twas truly a noble deed you have done today and an historic victory most worthy of our logs.
You have saved our pack from the wrath of Aku's drones.
We are forever indebted to you.
Thanks are not necessary.
It is my duty to oppose the minions of Aku and my mission to vanquish the very demon himself.
Well, then, now that we have a chance at freedom we should take our leave of these forsaken mines.
Our pack shall continue our once-nomadic life searching for more answers to our puzzling history.
I wish you the best.
We certainly invite you to join us.
No.
I cannot.
Aku's wrongs must be righted.
Surely there is a way to reverse his spell.
I will find a way back to my own time.
There, I will finish what I started centuries ago and defeat Aku's evil before it was ever truly unleashed.
He is stronger than I remember.
But no matter.
For you see, little samurai, the world is mine.
My eyes and ears are everywhere.
Nothing you do will go unseen.
Quest as you may but we will meet again when I see fit in a time and place of my choosing.
And it is I who shall put an end to the war started in that age long past.
Samurai Jack.
- Not a bad job with the beast.
- I guess.
We would've caught him anyway with our modified tridental incapacitators.
Whatever.
Secure the beast! This beast is always trying to escape.
Your days are numbered, wild one.
Thanks to this brave warrior, you'll never escape again.
We must celebrate its capture.
Come back to our village with us.
- Well, I don't know if l - You should.
- There'll be a feast.
- With rare delectables.
Well, I have not eaten in days.
I suppose no harm could come of it.
Our people have dwelled in this land for many decades.
Much of it was barren wasteland when the first settlers arrived.
Our ancestors worked long and hard for many seasons to cultivate it into the beautiful place it is now.
These Woolies, as we call them, once roamed the land wild.
These bloodthirsty creatures threatened the survival of our early settlers nearly driving us to extinction.
Anyway, with our great courage and determination we managed to tame these savage beasts.
It took many years, but now they are docile and cooperative helping us with our everyday duties.
And in turn, we provide them with the shelter and safety of our village.
Well, here we are.
Pretty impressive, huh? - These buildings seem quite old.
- Thank you.
Secure the beast until I devise the proper punishment for his escape.
- Come on.
- Move it.
Let's go.
- Step it up.
Go on, fatty.
- Move it.
Let's eat.
Wait.
What are you doing? You can't get this one anymore.
It's the Junga lmport Edition.
Theirs is better.
I guess, but I got the exact one in Sarsyphis for only 10 pieces, still wrapped.
Oh.
Why, thank you.
Bring on the entertainment.
Up, you worthless beast.
I notice your treatment of the Woolies is somewhat harsh.
Not really.
It's no different than the way you humans treat What do you call them? Horses? Such huge structures.
Hey, come back here.
For such small creatures.
It is all right.
I will not hurt you.
Here.
You're not so bad, are you, big fellow? Well, sleep well, my friend.
Help me.
- What? - Hey, you! Get away from there! You should be careful.
The beasts are tricky.
Their mind control will fry your brain.
Come.
Dessert is served.
Help me.
Help me.
Do you understand me? Yes.
Please, help us.
- What do you want me to do? - Free me.
All can be explained.
So I says to Charlie, I have three of those What was that? - What was what? - Oh, nothing.
So anyway Must unlock.
- What is this place? - It's where we're kept at night.
Up.
Up.
I am Lazzor, the eldest of Woolies.
Countless seasons ago before the darkness fell, we were a happy people.
We had discovered a way of life that most creatures only dream about.
Paradise.
Ours was not a culture based on technology.
Our village was prosperous.
Then they came.
The pestilence that rained out of the sky.
The Chritchellites were upon us.
At first, we tried to defend ourselves but we were no match for their technology.
Using the power of the orb the Chritchellites have enslaved us to their service.
For decades they have abused our land.
And if they are not stopped I fear my people will soon fade from history.
Will you help us? I will.
Stay here.
What? Halt, beast.
There is no escape.
For I have captured you once, and will now see that you will never escape again.
We've been tricked! Get them! Destroy! There's too many.
We have to destroy the orb.
Get him! It is time.
And what do you think you're doing? - Get back in your cells.
- This is it.
We must destroy the orb! Up.
Climb.
Hey, they're going for the orb.
Don't let them reach the orb.
We are almost there.
I'm too weak.
The orb.
He broke the orb.
I can't believe Huh? Stay back! Your weapons are worthless now.
This is our home.
We are forever grateful, great warrior to your deeds done today.
If there is anything that you seek please honor us by letting us help you.
There is one thing that I quest for.
Yes.
I understand.
Travel north, samurai.
There you will find a magical place that can help you fulfill your destiny.
You have been found guilty of breaking Aku law 101 and 203: Habitation in an unauthorized facility and unauthorized construction of an escape vehicle.
Your punishment is extermination.
No! Don't! Well, according to my calculations our chances of escaping are now Oh, no! After all these years, to go back to work for Aku I can't do it! - Calm yourself, Frederick.
- Easy for you to say.
You were just a baby when the rest of us were forced to use our scientific knowledge to build Aku's robot armies and alpha evil technology.
My age is irrelevant here.
We shouldn't just give up.
We still have a chance.
Actually, there is substance to that theory.
If we launch our escape rocket before the fail-safe warning head informs Aku of our whereabouts we will succeed.
On the other hand, Aku is quite brilliant and, knowing our position, would not only send his ground troops to destroy us but would also block our escape route, forcing us to surrender.
Gentlemen, the orbital guard has begun to close in around our escape route.
You see? There is no escaping now! No! There has to be a way! I humbly apologize.
It was not my intention to bring these troubles upon you.
Yes! It is all your fault! Come on! That's not fair.
We were bound to be discovered.
If anything, he saved our lives.
Didn't you see the way he beat those robots? Yes.
He was quite impressive.
The odds of one person with a sword defeating three mantoids were 6923-to-1.
Hold it, gentlemen.
I think we've found our solution.
If we follow this warrior through Aku's blockade he might create enough of a distraction to give us a chance to slip through.
That's impossible.
No one can do that.
Let us surrender.
Actually, Frederick, the odds are promising.
It's only 5437-to-1.
- Yes! - This is quite a predicament.
On one hand, we have to trust a stranger to battle for the fate of our future.
On the other hand, the inevitable capture by Aku and a lifetime of slavery.
- I say we give the stranger a shot.
- Yes! This is all pointless.
He probably wouldn't even do it.
Wait.
I will gladly help.
But from what I understand, your battle is in the sky.
I am grounded.
I cannot fly.
Leave that to us.
Comrades, the odds have just improved.
Just hold still, Jack.
This won't take long.
Okey-dokey.
We're ready to go.
All right.
Everything looks good.
Let me explain your hand guidance-control system.
Send in the drones.
I am so excited.
Soon we shall be at our new home.
We'll finally be able to use our science for good.
No more protection against the polluted air.
- No more Aku robots.
- Yeah.
No more Aku.
Home.
What is wrong, friend? Odds are 3-to-1 you should have fun.
I, too, desire to find my home.
You see, in days long past where rockets and robots were nowhere near creation a young warrior forged into battle with Aku.
At the point where victory was imminent Aku tricked the warrior and flung him from his own time to a distant time in the future.
To reclaim his homeland and undo the evil of Aku the warrior has to find some sort of time passage home.
Such a magic is difficult to find.
Is that warrior you? - Yes.
- Wow! Time travel What do you say, gentlemen? You know a way to travel in time? It's quite simple, really.
Let's say this is the rocket.
If you get into the escape pod at the nose of the ship and jettison when we hit sub-light speed, that should put you at faster than light.
Which will easily send you back to your own time.
- This will work? - Oh, yes.
This theory is This theory is very sound.
Just make sure you're in the pod before we hit light speed.
- The rest will take care of itself.
- I will.
Wonderful! So we're on for tomorrow morn Perhaps sooner.
Ladies and gentlemen, we are entering Aku's blockade.
They're going to launch the first wave.
Better get Jack to the air lock.
Don't forget, Jack, you must be in the pod when we make the jump to warp drive.
The odds are quite staggering against you if you are not in the pod.
- Good luck, Jack.
- Thank you.
Here comes the first wave.
T minus 12 before impact.
Five seconds until impact.
Jack, they're digging into the hull! The tick droids are still digging through! The fuel level's dropping.
What's going on, Jack? Jack, those are what we like to call guided missiles! - They appear to be withdrawing.
- We are approaching top speed.
Jack, forget them.
Let's go.
Maximum velocity will be achieved in 1.
2 minutes.
Stabilizing retrorockets.
Standing by.
Jack, I'm going to lock you in.
This is going to be quite a ride.
What is that? Looks like the bugbots are forming into a giant gun.
- Jack's unlocking! - What? What are you doing? We're almost at top speed.
The robots must not fire that gun.
The odds of them hitting us at this speed are 325-to-1.
I cannot take that chance.
But you'll never make it back in time! Jack? Jack! - Initiate the countdown! - But what about Jack? Darn it! There's no time! 
Hello! Yes, yes.
I have been expecting you.
- I have come for - Please, please.
Do not insult me.
I know why you are here.
- You do? - Of course.
Many things in life are a mystery, but I know why you are here.
Yes, I know like a mother knows its child.
For example, if the child came home crying, the mother would know why.
That is how I know why you are here.
Please.
I am here for something very important.
Of course.
This I know.
You are here for what you cannot find anywhere else.
You are here to fulfill your most intimate desire.
You are here for what has been woven through time to guide you to your home.
- Yes.
Is it here? - Of course.
May I present the Aragian rug of King Bassad.
- What? Yes.
This I know.
It is quite breathtaking.
I am sorry.
I must have the wrong place.
I do not wish to purchase a rug.
- What? - I was positive this was the place.
Wait.
May I see that? The ancient scroll of the Woolies.
Yes.
They said that you might be able to help me.
Of course.
The Woolies are old friends.
Why did you not say so in the beginning? - But I tried - No matter.
Come quickly.
I sense we haven't much time.
There.
The Light of Eternity.
Come, sit.
There is nothing to fear.
Place your hands into the light.
The light has accepted you.
A vision is forming.
A strange structure with a jewel inside.
Yes.
It is what you seek.
The jewel possesses great magic.
- What has happened? - A warning.
Only one of pure heart may approach and use the power of the jewel.
My mission is noble.
My heart is pure.
I have nothing to fear.
Yes, the truth you speak.
Now follow the setting sun and the rising moon.
They will be your guide.
Something is wrong.
- It is something evil.
- I cannot make the image out.
Master Aku will pay us greatly for your destruction.
My sword.
What are you looking at? What the? - The evil.
- Yes, I know.
No.
You don't understand.
- It's about time.
- I needed my sword.
- I can see.
- Who are you? And why did you help me? You're not the grateful kind, are you? This way.
Hurry.
- Do you know how to ride an ukla? - A what? - It's like a camel, but different.
- I know how to ride a camel.
Good.
- Uklas? - Adorable, aren't they? Hut, hut, hut! No.
"Hut, hut, hut!" Hut, hut, hut! Hut, hut, hut! - Who are you? Why did you help me? - You're welcome.
My time in this land has made me harsh and rude.
Forgive me.
I did not mean to insult you.
- No tears shed, samurai.
- Jack.
- What? - Samurai Jack.
It is what the people of this land have named me.
Okay.
Then let us find shelter for the night, Jack.
The night is not for riding.
Do not worry.
They're harmless.
I am lkra.
I came to that place not to save you, but to save my father.
You see, many moons ago, my father, a great warrior stood against our lord and master Aku's tyranny.
But Aku was too powerful.
He made an example of my father and entrapped him in a ring of fire.
He has been imprisoned for eternity to pay for the crime that he committed against Aku.
Legend has it that somewhere in this desert lays a hidden magical jewel of great power a power strong enough to free my father.
The creature at that store was the last survivor of an ancient race of desert-dwellers.
He alone knew the whereabouts of the jewel.
I have searched for him for five years.
Now with the commotion that we have caused l'm afraid it may take me another five years to find him, if at all.
It is more than coincidence that our paths have crossed.
- What? - Yes.
Aku's treachery is my curse also.
But it appears that together we will have the power to defeat the demon.
Aku's henchmen were too late.
The ancient desert-dweller showed me how to find the all-powerful jewel.
- No.
- Yes.
We shall quest for the jewel.
Once we attain it, we will use its power to free your father and send me back in time to destroy Aku and undo the years of tyranny that he has laid upon these lands.
Look, the rising moon.
The path has been set.
Our time is now.
Where as individuals we have failed, together we will be victorious.
- Hut, hut, hut! - Hut, hut, hut! - Look.
- A mirage? It might be.
But we have traveled far.
I sense we are close.
Water! Our quest has ended.
The jewel.
My time on this miserable Aku-infested land will finally be over.
Magical jewel, we have traveled through your desert.
We have overcome every treacherous obstacle.
We have been awed by its breathtaking beauty.
We have earned its respect.
We now humbly request to use your power.
Fulfill our destiny! - What is happening? - The wizard spoke of this.
Only one of pure heart may use the power of the jewel.
It is testing us.
Something is wrong.
- We have been deceived.
- No.
There must be some mistake.
We are of pure heart.
I will not fight.
- You possess the power of flight? - Yes.
And much more.
What is happening? The jewel.
We have succeeded! At long last, my quest has come to an end.
What have you done? - Ikra? - No, fool! It is I, Aku.
Yes, samurai.
You have been betrayed.
I and lkra are one and the same.
No.
Oh, yes.
You see, I had a dream.
No, a nightmare of a jewel that had the power to send you back in time.
I knew that this was no mere dream, but a premonition.
I had to destroy this powerful jewel.
- But I did not know its whereabouts.
- No.
Yes, samurai.
I knew you would find it.
"My poor father trapped in a ring of fire by mean old Aku.
" Fool! Fight me, coward! Soon we will fight.
But not until I find a way to defeat you and your sword.
Now, how did you put it? Oh, yes.
Your time on this miserable Aku-infested land continues.
I will destroy you, Aku.
I swear it.
Charge! I, alone, was the only survivor.
My entire robot army, completely annihilated! In my dreams I still see arrows falling like rain! What does the tower hold that would make you sacrifice a whole army? Treasure? Gold? Rubies? Bah! Nothing as materialistic as treasure.
At the top of the tower is a mystical well the well of King Ozerick.
Those who reach the infamous well are granted one wish.
Your greatest desire.
Get out of the great Khan's chair! What are you, telling stories again?! Get swabbing the deck or I'll toss you overboard! You has-been! Excuse me.
Is this place you speak of real? Of course! As a matter of fact, we're passing it now.
There! In the center of that mist-shrouded isle lies the treasure of King Ozerick.
Thank you.
Huh? What? Wait! I beg you, reconsider.
There are only three archers, yet they decimated my whole army.
You are just one man! Do the math.
Why attempt it? That well could get me home.
There are other ways to get home.
Not for me.
It's no use.
No one can fight like this.
A great warrior must be in tune with all of his senses.
Only then will you be able to extend your awareness so that you may fight on any level.
- Try again.
- Yes, sifu.
I must fight on their level.
I am ready.
Where? What? I can see! We're restored! How is it possible? You have broken our curse.
We thank you.
- I have come to make a wish at this well.
- The well is yours.
Proclaim your wish, great warrior and it will be fulfilled beyond your wildest dream.
My quest has finally come to an end.
- Oh, mystic well, I humbly wish - Wait! We must warn you.
Any wish granted comes with a price.
It was forever ago, we fought long and hard to reach this well.
When we arrived, we stood before the well and made our wish: To be the greatest of warriors.
The spirit of the well did, indeed, make us great warriors.
But in so doing, robbed us of our sight and our minds enslaving us as its personal guard.
We have lived cursed lives until now.
Evil spirit of the well you will not claim another innocent! I wish thee destroyed! The greatest of warriors.
A noble spirit.
Such sacrifice.
Pay up, sucker.
You want something? Hot water, please.
Hey! You got some kind of nerve.
Hear what I'm saying? I'm talking to you! You got some gump coming here.
You know what I mean? Better finish that drink quick.
Because you might not live much longer.
Aku's offering two googolplex for your head.
Two googolplex.
That's a lot of money.
And we aim to collect it right about now.
Samurai Jack! This you? Yeah.
Look like you.
You're Samurai Jack? What a joke! This'll be the easiest googolplex I've ever made.
Googolplex.
Looks like there'll be no money for you, crazy round man.
Samurai Jack! You're mine! Useless bounty hunters! Is there no fighting style that can defeat his? Yes.
No fighting style can defeat his.
Who else wants some?! What sorcery is this? - Who are you? - Don't be such a fool.
- I'm you.
- Lf you are me, then who am I? You're so stupid.
- You are you also.
- Enough! You are my mirror image.
Yet your speech is foul with evil and disrespect.
Who are you? And how have you come to be me? I am the son of Aku's magic.
He has looked deep within you and has spawned me from your own burning hatred.
I am your dark side.
And I possess all the powers that you wield.
And I have only one purpose in my existence: To destroy you.
Hurts, doesn't it? Not as much as this is going to hurt you.
What the? - What the heck is going on? - You have lost.
The battle is over.
- What?! - You are my inner demon.
You have been born from the hatred within me.
But now that hatred is no more.
Thus, you do not exist.
Fool! I am real.
Now feel the reality of my cold, hard steel! I know you're watching.
These tricks are starting to annoy me.
Aye, I know of such a thing.
But a tale must be told.
A fisherman's tale about the Triceraquin.
The most elusive creature in the sea.
Yes, the Triceraquin.
All right, who ordered the green tea? But I caught one once.
Seven years ago, off of Tempest Point.
I braved those waters for three days without a single bite.
But on the third day, something bit.
Something big.
On this point, you'll have to trust me because I let the Triceraquin go.
Ah, sure you did Pipe down, you gunnysacks! Yes, I let him go.
And in return, he told me about the secret hidden city at the bottom of the ocean Oceanus, and the treasure that lies within it.
A machine.
A time machine.
Oh, boy.
It'll take a brave man to make the trip.
The waters past Tempest Point aren't for the meek.
But you look like a brave man.
A brave man, indeed.
The hidden city.
No, wait! Stop! Don't be afraid, little one.
We won't hurt you.
Tell us, what's your name? Jack.
- Forgive my trespassing.
I have come to - Jack? Well, welcome, Jack.
Welcome to Oceanus.
We are the Triceraquins, amphibious beings who reside here.
Congratulations on surviving your journey.
Yes.
And without gills too.
Good show, boy.
- Come, Jack.
You must be tired.
- And hungry too.
We were just about to sit down for supper.
I'm sure we can make room for one more.
Sushi! A toast, to our new friend.
Welcome, Jack.
Welcome, Jack! Thank you.
Due to the nature of our geography, it's not often that we receive visitors.
In fact, you're the first.
Of course, it wasn't always like this.
We were once a very social race.
Our people lived on the surface of the ocean and traded with the locals of the mainland.
That was, of course, before he came and banished us to the bottom of the sea.
- Aku.
- Yes.
But that's ancient history now.
But enough about us.
Tell us, young Jack what brings you out this far? I am humbled by your generosity, and much indebted to you all.
But the reason I have made this journey to you is to ask - The time machine, yes? - It's what you've come for, isn't it? - You know of it? - Of course we know of it.
It's ours.
- We built it.
- What's more, we can take you to it.
But for now, eat, and then rest while we prepare all the details.
What is happening? What are you doing? - You? - Yes, me.
Did you think that this was your way out? No, my friend.
You are our way out.
No.
There is nothing we can do.
Sometimes the needs of the many outweigh the needs of the few.
- I do not understand.
- Soon it will all be over.
Sorry, Jack.
Aku! Listen, please! You don't know what you're doing! You have no idea who you're dealing with! Well, well, Triceraquins.
I am pleased at what I see.
Why? Why have you done this? Yes.
Why don't you explain to our friend.
Please, understand.
We had no choice.
- It was either us or you.
- You have made a mistake.
- Aku cannot be trusted.
- Enough! It is time for me to rid myself of this menace once and for all.
Goodbye, old friend.
Lord Aku, we have fulfilled our obligation to you.
We now ask that you Fulfill mine? Yes.
Yes, the obligation.
Of course.
Yes Well, it seems that I've changed my mind! And your pathetic city will remain sunken isolated from the world for as long as I see fit! - We have been betrayed! - The samurai was right! Revenge! Fools! No! The first wave has failed! Hopefully, the second will succeed.
Can you not see Aku is beyond destruction? Now you will pay for your insolence.
It's no use.
He's far too powerful.
We must evacuate.
Wait! What about Jack? It is pointless to struggle.
- Accept your fate! - Never! A brave warrior to the end, eh? What? Welcome aboard, laddie.
Hold on tight.
We're gonna make a run for it.
No! We must turn around! Are you mad, man? No.
I am the one who holds the key to Aku's destruction.
- Lost his mind, he has.
- You saw what happened back there.
Yes.
Aku is powerful.
But with my father's sword and the might of righteousness I can end Aku's tyranny forever, freeing all he has enslaved.
I beg you to trust me! As I once trusted you.
Now! The sword! - Well, good show, matey.
- Kudos to you.
This is not over, samurai! We shall meet again.
It's so beautiful.
Jack, there's something The way we betrayed you is unforgivable I understand.
Aku's deceit runs deep.
Even a good heart can be tainted in the hands of Aku.
There was never a time machine, was there? My quest continues.
But if we could perhaps be of assistance to you in any other way? Well, there is one thing.
The voice beckons me further in.
Surely he takes me for a fool to follow deeper into his trap.
A fool I be! Come.
Welcome to your doom.
Many warriors have been lured here to their end.
Why have you done this? My purpose is to battle.
Yes.
At last, after all these years, a worthy opponent.
Enough of this pointless battle.
I will continue to fight you no more.
I say thee nay! No! I will not do battle with you for your amusement.
There is no honor in it.
Honor? What do thee know of honor? A millennium hath passed, and now my goal is within my grasp.
This battle will continue to the end.
I said, I will not fight you, monster.
I shall not be denied! Strike me down if you must but I will not fight.
Nay.
I cannot strike the defenseless.
This battle must be concluded by the warrior's code.
I beg thee.
Rise, unsheathe your sword, continue this fight.
- Why? - For freedom.
The master of this kingdom of rock is just a man.
A cursed man trapped in a rock body.
It happened long ago.
So long ago now.
'Twas once a time where I, too, was a man.
A mighty warrior like thee.
I have engraved a recording of my past so that I would never forget the life I had, the man I was so thy people would not be lost to the dust of time.
Let me take thee on a journey into the past.
This land 'twas not always parched and burnt.
Once, a beautiful city thrived in the lush countryside.
'Twas truly a sight to behold.
A jewel of all the northern lands.
My happiness was a beautiful family of a wife, two sons and a faithful canine.
Times were good, game was plentiful, and my people prospered.
'Twas on return from a successful hunting trip when an omen appeared.
A black moon blocked out the sun.
It grew and grew, until it ate the sky and land.
The darkness now loomed over my kingdom.
A horrible monster, born from within the darkness, attacked.
My army retaliated.
But our efforts were to no avail.
'Twere I alone who was left to destroy the monster.
My weapons were worthless.
My attempts to avenge amused the monster and he struck me down.
I lay before him, ready to battle for the last time.
But the villain did not destroy me.
Nay, the fate dealt to me was much more cruel.
He imprisoned me within an unbreakable crystal denying me a warrior's end.
Helpless was I as the beast destroyed what was left of my beloved kingdom.
Then he came for me again.
'Twas his enjoyment that day to punish me for eternity.
Thrust me, he did, into the core of the mountain.
'Twas his plan for me to spend all of eternity in the mountain never to join my fallen comrades in Valhalla the resting place of all great warriors.
Through countless eons I laid still but my will was strong.
I found a way to manipulate the material around me.
Out of the rock, I formed the body thou seest before thee.
Then I created a passage so full of peril and danger that only the greatest of warriors can pass.
For, you see, the only entry into Valhalla is to fall in combat to another warrior.
And thou are the only one to survive.
As written, the truth has been told.
My fate is at your mercy.
Prepare yourself.
At last, the gates of Valhalla open to me.
Rise, warrior! Rise! Honorably I must be defeated.
I cannot let up.
Do not worry.
I have only begun to fight.
After all these years my freedom has arrived.
Accursed monster, your spell is broken! I am free! At last, my flesh is restored.
The curse is lifted.
Warrior.
I I Don't worry, my friend.
Please, hand me my sword.
Thank you.
By the look on your face, I can tell you like the pipes, wee laddie.
Please, I don't mean to interrupt but am I close to the end of this bridge? No, far from it.
I've been traipsing across this bridge for days now.
Seems I have a long way to go still.
I should be on my way.
Excuse me.
- What do you expect me to do? - Just stand aside.
And risk falling over the side for a perfect stranger? Away and bow your head.
You stand aside! My destination lies at the opposite end of the bridge.
And you'll get there after you back up and I reach that end of the bridge first.
That would waste too much time and time is what I don't have.
So you think you're better than me because you're in a hurry.
Well, I'm in a hurry too! But, no, you did not think of that, did you? That I might be an equal.
No! You just consider yourself superior, right off.
You're rude.
You mistake my comment, sir.
Do I? You think I'm dumb too? No, I Look, we are both in a hurry.
So I shall hang from these planks and you may walk over.
So you get a peek up my kilt? That is not what I am suggesting.
- So you say, you plucky-faced hing-oot! - What did you call me? So you're deaf too, you clagtail cuddie dreik! I'll tell you what we're gonna do.
We'll fight for it to the finish.
- I do not think there is any need to - Listen, you boony blathering numpty.
The only way for you to get across this bridge is to beat me in combat! Now, are you a man, or a worthless blate like I know you are? I'm calling you a coward! I fear no man.
That's some tough talk coming from a man who wears a basket on his head! I carry my haggis in a basket.
You might even make me shiver if you weren't dressed in a nightgown.
You look like my nanny! You call that thing dangling off your hip a sword? Looks like a butter knife.
You'll not hurt anyone, wielding a piece of tinfoil around.
You'd be better off using your slippers for a weapon.
This is a sword! And it's bigger than yours.
What do you think of that, Mr.
Pajama-Wearing, Basket-Face Slipper-Wielding, Clype-Dreep-Bachle Gether-Uping-Blate-Maw, Bleathering, Gomeril Jessie, Oaf-looking, Scooner, Nyaff, Plookie, Shan, Milk-Drinking Soy-Faced Shilpit, Mim-Moothed, Sniveling, Worm-Eyed, Hotten-Blaugh Vile-Stoochie, Cully-Breek-Tattie.
You gonna weep now? Shall I pause while you mourn your hat? I can play a melancholy tune to go with your weeping.
You've done it now.
I'm gonna turn your head into a flour sifter.
Aye, you got a lot of pep for a wee laddie.
The horse-cut technique should've destroyed your sword.
Magic runes, laddie! All them fancy moves will get you nowhere.
Now, quit your jumping around and get to fighting! Prepare to meet your doom.
I'll give you one more chance to give up.
I am not defeated.
And I shall hold my ground.
Hold your ground? You can barely hold your sword.
Then come get me.
What? I Seeing that I'm a sportsman l'll give you a moment to recuperate.
They're after me.
After you? They're after me! Aku's got a price on my head! Aku has a price on my head! We are in no condition to fight.
Especially not with a pajama-wearing daisy strapped to my wrist! - We must escape.
- Over the side! Leave it to a lover of basket hats to jump left instead of right.
I'm having second thoughts now anyway.
We have no idea how far down Great job, laddie.
- You have any idea where we are? - No.
So, what now, smarty-pants? For the moment, we are safe from those bounty hunters.
We must find shelter before they find us.
We are defenseless in this lagoon.
Shut it! There.
We'll be safer on land.
- Hear you!! - Blaster! What I do not understand is, why Aku is after you.
I have a huge price on my head.
Oh, yeah.
Huge.
I'm the most wanted man on this planet.
Bounty hunters of all types are after me skin.
My face is plastered on wanted posters in every town on seven countries.
Oh, yeah.
I'm infamous.
No.
I don't believe it.
Got it! I think they're gone.
Are you sure? Aye, it's quiet.
Jump now! - This might not work.
- Of course it works.
We're a lethal pair.
Behind you! The arrow relies on the bow.
The bow, on the arrow.
But they are not tied together.
That would be pointless now, wouldn't it? Exactly.
Together we are formidable but shackled, our power is pointless.
- We must be free.
- Aye, free.
And we'll take them together! Is that the best you can do? I'd say we've wiped out our bounty-hunter problem.
- For now.
- Aye.
For now.
I was wrong about you.
I acted foolishly as well.
No hard feelings, aye? I'll buy you a refreshment.
Please, allow me.
I shall buy you a refreshment.
No, no, I'll buy you one.
I insist.
No, I must buy you one, to make amends.
It's all right.
I'll buy.
- Yeah? - Ricko Benny Giordano.
Come on in.
Welcome to the Blue Monkey.
Welcome, friends.
And a warm welcome to the Buddy Righteous Orchestra.
And without any further ado please welcome the lovely Lula Lillywhite.
Okay, mac, that's enough.
Nice and slow.
That's right, put the butter knife away.
Come on.
Move it before we throw you out.
Wait.
Let him stay.
It's okay.
Let him go, see? - You know, we could use a guy like you.
- "We"? Me and the boys, see? Stitches, Mr.
Shine, Mr.
Pibbles and Knuckles.
- Yeah.
Well, actually, my real name is Joe.
- Mr.
Pibbles.
What exactly does your organization do? Why, me and the boys sort of run things around this town.
Know what I mean? Say, how'd you like to? It's all right.
You can put them down now.
How'd you like to be a member of the most feared gang in the city, see? What activities does your gang participate in? Stitches, break it down for him.
We fix things.
Know what I mean? Make sure money goes to the right places around here: The horses, casinos, banks.
You follow? You are involved in crime.
Now, did I say that? Enough has been said.
Your activities are of no interest to me.
I wish to be no part of your group.
So a prima donna, eh? Get out of here.
Go on.
Beat it, altar boy.
What are you, crazy? You out of your mind? What's up with this guy? Well, what are you all standing around for? We got a delivery to make for Aku.
- Do you mean the great and powerful Aku? - Of course.
The master of darkness, the shogun of sorrow, the big boss himself: Aku.
- And you have dealings with Aku in person? - Sure.
All the time.
- What's it to you anyway? - Please forgive me.
I thought you were - Small time? - Well, no.
L Oh, so now Mr.
Goody-Two-Sandals feels like talking, eh? Please understand.
I have spent my lifetime preparing to come face to face with Aku.
Fulfilling this goal would forever change my life.
Okay, boy.
We'll give you a shot.
But you gotta pass a little test first, see? You know, to prove you got the stomach for it.
Here's the skinny.
It's not a hard job, but your heart's gotta be in the right place, see? One of our clients, see, hasn't been paying his protection money.
So he needs to be rubbed out.
You tell him the Society for the Preservation of Animal Love has sent a surprise gift as a token of appreciation for his ongoing love of animals, see? Then you got 20 seconds to hightail it out of there and then it's "bang.
" The gift that keeps on giving.
- Well, kid, how'd it go? - It went exactly as planned.
The old man took the package.
I said my lines exactly as I was supposed to.
He never suspected a thing.
After which, I immediately left the premises.
He never knew what hit him.
You should not be concerned with any further payment problems with your clients.
Pretty cold-blooded, kid.
I'm impressed, see? A price must be paid for disobedience.
I like this guy.
Boys, meet "Jackie the Blade.
" Looking pretty good there, huh? Yeah.
Nice-looking suit.
Sure.
- Terrific.
- I like the shoes.
With all the accouterments, see? Yeah, great.
How come he gets the cool name? All right, you knuckleheads, listen up.
We're here to talk about a very big job.
One of very special interest to the big boss himself.
- Aku? - That's right, Jackie.
Now, nobody's ever pulled this one off, see? But with you on our side, we'll smoke it.
And we will get to meet Aku? Not only will you get to meet him, but if we pull this off successfully the big boss will make us richer beyond our wildest dreams, see? Boys, say hello to the Public Works and Utilities Building.
Hello.
It's a well-kept secret that deep inside this building lies the legendary Neptune Jewel, see? And it's our job to get it out.
You mean, we gotta fit inside that little thing? - What is the importance of this jewel? - Here's the short version, Jackie.
Long before you was born or I was born or anybody was born the Neptune Jewel was kept inside this mountain, see? Legend has it, it was placed there by an ancient spirit who gave the jewel special powers to control all the waters of the world, see? Naturally, Aku wanted the jewel's power so evil could control the world, which it should.
But then, this no-good, goody two-shoes, good-for-nothing got in the way, see? I don't know how she did it, but she beat our boss.
And she summoned the forces of nature to guard it: Earth.
Wind.
And Fire.
And so Earth, Wind and Fire have guarded the jewel for centuries, see? Making it impossible for Aku to get his hands on it.
And since the big boss himself couldn't close the deal it's been centuries since anybody's even thought about it.
So you see, see? You'd have to be pretty nuts to try to swipe the Neptune Jewel.
At least that's what I thought, until I saw Jackie here in action.
The way you cleaned up them robot thugs at the Blue Monkey made me think we're just nuts enough to pull this one off.
So are you game, Jackie? To stand in Aku's presence, I would consider no feat too great.
Way to go, Jackie.
That's pretty cool.
You know what you're doing.
All right, here's the plan, Jackie.
We strike this Sunday at midnight, see? You will never possess the Neptune Jewel.
You will not escape.
- Come and get me.
- Insolent fool! Hey, look.
He did it.
Way to go there, Jackie-boy! What do you know about that? That's really something.
Who dares to summon? Oh, it is you.
Yes.
You see Do you forget that you are forbidden to come here? Yeah, boss, I know.
But this time we really got something.
Something big, see? What can you possibly have that the almighty Aku cannot attain? - The Jewel of Neptune.
- What? It cannot be.
The power to control all the water of the world.
Only for you, my lord.
Yes.
It truly is the magical jewel.
But how did such an elusive treasure come into your possession? Well, it wasn't easy, master.
But we got a little help from our newest member.
- Come on out, Jackie.
- Jackie? - Actually, it's Jack.
- You! What the heck is going on, man? You will not defeat me so easily.
Yes.
It won't be easy, but it will be worth the effort.
The sword! Why is Jackie fighting the big boss, boss? I don't know, see? But we'd better save Jackie before he ain't no more.
No tricks will save you this time, Aku.
Aku! Easy there, Jackie-boy.
What? Where am I? What happened? Can you believe this guy? What happened, Jackie, is that we saved your life.
You what? You see, you lost your mind back there and started to duke it out with the big boss.
So we nailed you over the head, man.
Lights out.
And here we are.
Yeah.
We saved you before Aku had a chance to put you out of commission permanently.
I cannot believe this! What's not to believe? We saved you like you saved us.
No! You do not understand! You must take me back immediately! Aren't you listening, Jackie? We can't take you back.
Aku would destroy you, see? Besides, we couldn't even if we wanted to.
When we dragged you out, Aku's castle disappeared.
Who knows where it'll pop up next.
Hey, what's all this about anyway? You got some death wish or something? No! You don't understand! I have deceived you.
- Hey.
You mean, you ain't one of us, man? - No.
You are criminals.
It is not honorable.
You see, long ago this land was good, its people honest.
But then Aku came It does not matter.
My quest continues.
I am sorry about the deception, but it had to be done.
Now, if you please, the jewel.
We don't have it, see? We gave it to Aku.
Mr.
Pibbles? Yeah, you know, during all the commotion, I kept it.
You know, for safekeeping.
Thank you.
I must return it to its proper place.
- Wait, Jackie.
Let us do it.
- Why? Well, all this crime business has suddenly put a bad taste in my mouth, yeah.
Yeah, we're going legit, see? For our first gig, we're gonna return the jewel.
It's the honorable thing to do.
I feel you will be happier on the path of righteousness.
Goodbye.
Yeah, I think we will too.
Sucker.
Step right up.
Get your water right here.
Only 500 smackers per ounce.
Please, don't take my soul.
Aku, you will not claim another innocent! Samurai Jack! My hero.
I hate being Aku! I don't wanna be him anymore! I wanna be Jack! What? First of all, I do the best Jack imitation.
Do it again, Phil! Aku, you will not claim another innocent.
And, second, you used to love being Aku.
Yeah.
That was before Jack came along! Now everyone wants to play Jack and destroy me! But you look just like him.
It's just my hair.
No, Aku.
Your tricks will not protect you this time! Yeah! Destroy Aku! For eons I have terrorized this land.
Every miserable creature trembled at the mere mention of my name.
The pitiful people shrank before my awesome power.
But now I am openly mocked by these measly urchins.
Tales of the samurai's heroics have spread through the world like a virus! But I will cure the world of this plague of hope.
I will unleash such evil that even the most innocent soul will be consumed by terror! We're not afraid of you anymore, Aku no matter what you do.
Hush! You cannot speak of Aku this way.
Insolent brats! Their elders still fear and respect the almighty Aku.
But this new generation the seed of rebellion has been planted in them by these tales of heroism.
Well, if they respond to stories I have a tale or two that will turn Aku into the hero of their young hearts! - What's going on? - Why have we been forced to come here? A tale must be told.
A tale of epic proportions.
I will take you to a universe far away.
To a world of hunger.
For the only one who ate was a corrupt and evil beast.
A devourer of worlds who set his sight on our defenseless sphere.
But a beloved and courageous hero arose to oppose the terrorizing beast.
Mounted on his sled with eight tiny reindeer he flew into battle against the cosmic scourge.
Then the great warrior focused all his power into his spear of truth.
And he hurled it with all his might.
The spear struck the beast transforming him into beef jerky! The great warrior was victorious.
And the people feasted on the spoils of his conquest and never went hungry again.
"Who shall we thank for this heroic feat?" The people asked.
The warrior removed his helmet to reveal himself.
It was none other than I Aku! And so the people bowed down and made the great warrior their king! That is the story of how I came to be.
Perhaps my story is too complex for these young minds.
A story of the purest, simplest theme must be told.
Yes.
Fairy tales are simple.
But the heroes within are legendary.
"Little Red Riding Hood.
" "Once upon a time there was a little girl who was loved by all.
" Yes, I am familiar with this one.
Once upon a time, there was a little girl with an adorable red cape and great flaming eyebrows who was beloved by all.
And so the people affectionately named her Little Red Hood.
One day, Little Red Hood was on her way to her grandmother's house.
My poor grandmama is of delicate health.
So I am delivering to her a picnic basket of confectionery treats! Did someone say "picnic baskets filled with delicious confectionery treats"? And so the mean wolf took a shortcut and arrived at Grandmother's house before Little Red Hood.
Who's there? Howdy-ho, Grandma.
It's me, the wolf.
- Oh, my! - Yeah, yeah, I know.
I'm petrifying.
Now, enough of the chitchat.
In you go.
How horrible! Little Red Hood approached Grandma's house unaware of what awaits her within.
Who's there? Hey, hey.
Keep it down in there! Come in, my child.
Hey, Red.
How about giving me some of those confectionery treats? My, Grandma! What big eyes you have! Yeah, yeah.
Big eyes, big teeth, and a big appetite! The wolf attacked Little Red Hood not knowing that Little Red Hood had laser eye beams great combat skills and a powerful uppercut that freed Little Red's grandmother from the evil bowels of the wolf.
Confectionery treats.
And so Little Red Hood was victorious! Do not be afraid, children.
Show your joy.
Do you not like the tales of Aku? Speak! Yes, child.
Share your thoughts on the tales of Aku.
Well, the stories were told very well.
Yes? But I think we would like to hear a story about Samurai Jack? What?! So be it.
Pay attention, children for you are about to hear the story of "Jack and the Three Bears.
" Once upon a time, there were three bears who lived together in a house of wood.
One was a little wee bear.
One was a middle-size bear.
And the other was a great, huge bear! I made us some porridge, comrades.
But, alas, it is too hot.
That's okay, brother.
We can go for a walk in the woods while it cools off.
You made porridge! And while they were out a wicked samurai came to the house.
He was not a good samurai.
He was an impudent, bad, old samurai.
Oh, yeah! Porridge! And so the wicked samurai began to eat.
It did not matter to him if the porridge was too hot, too cold, or just right.
He ate it all! All right! Good.
And then he set off to destroy the three bears' house.
When the three bears returned complete destruction awaited them.
- Someone's been eating my porridge! - Someone's been messing with my books! Someone's been wearing my clothes! Someone wrecked our whole house! And there he is! Sleeping in my bed! Shut up! I'm trying to sleep! Sir? Aku? Yes, child? Why do you interrupt Aku? Well, the thing is Jack wouldn't do that.
Oh? You know him? No.
But Very well.
Perhaps I exaggerated a little.
But this next story is true to its uttermost detail.
Once upon a time, there was a house built from straw, wood and brick where three innocent little pigs happily made their residence.
Until there was a knock at the door.
It was big, bad Jack.
Little pig, little pig open up and let me in! Not by the hairs on our chinny-chin chins! Then I'll huff and I'll puff and I'm coming in! Here's Jackie! Aku, sir? Yes, girl child? I'm scared.
Good.
The samurai is scary! - But Jack would never do such a - Silence! I will continue with yet another tale.
The story of poor little Cinderella and her evil stepmother, Jacqueline.
And her two wicked stepsisters, Jackie and Jackquela.
- Scrub that floor! - Wash those dishes! Make me dinner! - But Jack is a man.
- Very well.
There once was a house made of candy.
But a giant samurai came and smashed it! Guess my name! But those are three different stories.
With great endings.
And so the samurai prince finally found the magic frog and kissed him, enraging the frog who then ate the samurai prince.
But wasn't Jack just a giant? Yes.
And he fell off the beanstalk.
- But he wasn't on a beanstalk.
- You are correct.
He was searching for his lost sheep who stampeded over him.
That's not how the story goes.
Yes, it does! After barely surviving the sheep stampede a cat in giant boots came along and kicked the samurai! - What? Rapunzel, Rapunzel, let down your hair.
What's happening? Enough! Here is the truest tale of all! There was an almighty, all-powerful wizard.
And there was a pathetic, little samurai.
And the wizard destroyed him! The end! - No, that's not how it would happen.
- Yeah! First, it would be a misty night.
And Jack would be climbing a huge castle.
But not before he defeated its 8-foot, six-armed mutant guard.
Yeah! Then he would be climbing all battle-damaged.
With his hair all messed up.
With his sword in his teeth! Yeah.
And as Jack reaches the top of the castle Aku would creepily creep out from the shadows.
But Jack can smell his foul stench.
- And then they fight! - Not yet! First, they would stare each other down! - And then they'd fight! - No, not yet! Jack would first say, "You have plagued the land with your evil long enough.
Prepare to meet your doom.
" - And then they'd fight! - No, not yet! Because Aku would answer, "You are truly powerful, samurai but no match for my evil wizardry!" - Now? - Now.
And then they'd fight! Aku quickly turns into a huge Dragon-like creature.
But he's no match for Jack's samurai skill! And with one mighty blow Jack destroys Aku! Then he would sheath his sword all cool-style and say: "My quest has ended.
I will now travel back to my own time and undo the evil that Aku has done.
`;

let cleanedLines = lines.replace(/\([0-9] comment[s]?\)/giu, '');
cleanedLines = cleanedLines.replace(/[:!?[\],."]/giu, '');
cleanedLines = cleanedLines.replace(/\s-/giu, '');
cleanedLines = cleanedLines.trim().toLowerCase();

export default new MarkovChain(cleanedLines);

// you do it before the question marks are a failure
// the northern lands all smile and brings new neighbors are here

// const removedWords = ['and', 'to', 'of', '9', 'd'];
// const words = wisdom
//   .start('a')
//   .end(400)
//   .process()
//   .split(' ')
//   .filter(word => !removedWords.includes(word));

// let wordArray = '[';

// words.forEach(word => {
//   wordArray += `"${word}",`;
// });

// wordArray = wordArray.slice(0, -1) + ']';

// wordArray; //?

// fs.writeFile('word.txt', wordArray, () => {});
