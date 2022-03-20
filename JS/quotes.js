const quotes = [
    { 
        quote : "Insanity is doing the same thing over and over again and expecting different results.",
        author : "Einstein", 
    },
    {
        quote : "Give me six hours to chop down a tree and I'll spend the first four shrapening the axe.",
        author : "Lincoln",
    },
    {
        quote : "Government of the people, by the people, for the people, shall not perish from the earth.",
        author : "Lincoln",
    },
    {
        quote : "Genius is 1 inpiration and 99 perspiration.",
        author : "Edison",   
    },
    {
        quote : "a lot of times, people don't know what they want until you show it to them.",
        author : "Steve Jobs",
    },
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney", 
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela",
    },
    {
        quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author : "James Cameron",
    },
    {
        quote : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author : "Oprah Winfrey",
    },
    {
        quote : "If life were predictable it would cease to be life, and be without flavor",
        author : "Eleanor Roosevelt", 
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;

