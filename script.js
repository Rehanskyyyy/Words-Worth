const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal.",
    "Life is what happens when you're busy making other plans.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Do what you can, with what you have, where you are.",
    "The journey of a thousand miles begins with one step.",
    "What you get by achieving your goals is not as important as what you become.",
    "In the middle of difficulty lies opportunity.",
    "It always seems impossible until it’s done.",
    "Don’t watch the clock, do what it does. Keep going.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "The purpose of life is not to be happy. It is to be useful.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "You miss 100% of the shots you don’t take.",
    "I have not failed. I’ve just found 10,000 ways that won’t work.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The only way to do great work is to love what you do.",
    "Don’t be afraid to give up the good to go for the great.",
    "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "The secret of getting ahead is getting started.",
    "You define your own life. Don’t let other people write your script.",
    "The only impossible journey is the one you never begin.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "A person who never made a mistake never tried anything new.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Act as if what you do makes a difference. It does.",
    "Courage is grace under pressure.",
    "Be yourself, everyone else is already taken.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The best way out is always through.",
    "Turn your wounds into wisdom.",
    "Dream big and dare to fail.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The only thing we have to fear is fear itself.",
    "Fall seven times and stand up eight.",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "Success is how high you bounce when you hit bottom.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Be the change that you wish to see in the world.",
    "Keep going. Everything you need will come to you at the perfect time.",
    "Success is not how far you got, but the distance you traveled from where you started.",
    "You don’t have to be great to start, but you have to start to be great.",
    "A goal without a plan is just a wish.",
    "If you want to lift yourself up, lift up someone else.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "If you don't know where you are going, any road will get you there.",
    "I love deadlines. I like the whooshing sound they make as they fly by.",
    "Quality is never an accident. It is always the result of intelligent effort.",
    "Some cause happiness wherever they go; others whenever they go.",
    "It is never too late to be what you might have been.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "If you are dreamin` make sure you dream big."
];

const authors = [
    "~ Peter Drucker",
    "~ Winston Churchill",
    "~ John Lennon",
    "~ Franklin D. Roosevelt",
    "~ Dalai Lama",
    "~ Theodore Roosevelt",
    "~ Lao Tzu",
    "~ Zig Ziglar",
    "~ Albert Einstein",
    "~ Nelson Mandela",
    "~ Sam Levenson",
    "~ Steve Jobs",
    "~ Ralph Waldo Emerson",
    "~ C.S. Lewis",
    "~ Wayne Gretzky",
    "~ Thomas Edison",
    "~ Henry David Thoreau",
    "~ Steve Jobs",
    "~ John D. Rockefeller",
    "~ Jim Rohn",
    "~ Mark Twain",
    "~ Unknown artist",
    "~ Tony Robbins",
    "~ Eleanor Roosevelt",
    "~ Theodore Roosevelt",
    "~ Eleanor Roosevelt",
    "~ William Butler Yeats",
    "~ Albert Einstein",
    "~ George Addair",
    "~ Winston Churchill",
    "~ William James",
    "~ Ernest Hemingway",
    "~ Oscar Wilde",
    "~ Walt Whitman",
    "~ Robert Frost",
    "~ Oprah Winfrey",
    "~ Norman Vaughan",
    "~ Ralph Waldo Emerson",
    "~ Franklin D. Roosevelt",
    "~ Japanese Proverb",
    "~ Aristotle",
    "~ George S. Patton",
    "~ Ralph Waldo Emerson",
    "~ Mahatma Gandhi",
    "~ Unknown artist",
    "~ Steve Maraboli",
    "~ Zig Ziglar",
    "~ Antoine de Saint-Exupéry",
    "~ Booker T. Washington",
    "~ Unknown artist",
    "~ Lewis Carroll",
    "~ Douglas Adams",
    "~ John Ruskin",
    "~ Oscar Wilde",
    "~ George Eliot",
    "~  Ralph Waldo Emerson",
    "~ Karan Aujla"
];

console.log(quotes.length)
console.log(authors.length)

function getRandomindex(){
    return Math.floor(quotes.length * Math.random())
}
const button = document.body.querySelector(".btn")

button.addEventListener("click", function () {
    document.body.querySelector(".btn").innerHTML = "Another one"
    const index = getRandomindex()
    document.body.querySelector(".quote").innerHTML = quotes[index]
    document.body.querySelector(".author").innerHTML = authors[index]
    document.body.style.transition = "all 3s ease"
});

function addPressEffect() {
    button.style.transform = "scale(0.95)";
    button.style.transition = "transform 0.1s ease";
}

function removePressEffect() {
    button.style.transform = "scale(1)";
}


button.addEventListener("mousedown", addPressEffect);
button.addEventListener("mouseup", removePressEffect);
button.addEventListener("mouseout", removePressEffect);

button.addEventListener("touchstart", addPressEffect);
button.addEventListener("touchend", removePressEffect);