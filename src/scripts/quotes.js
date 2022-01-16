const url = "https://type.fit/api/quotes";


async function getQuotes() {
    const quote = document.querySelector(".quote-text");
    const author = document.querySelector(".author");
    console.log(quote, author);
  const response = await fetch(url);
  const quotes = await response.json();
  let filteredQuotes = quotes.filter((quote) => {
    return quote["author"] !== null;
  });
    const index = Math.floor(Math.random() * filteredQuotes.length);
  quote.textContent = filteredQuotes[index].text;
  author.textContent = `- ${filteredQuotes[index].author}`;
  //return filteredQuotes[index];
    
}




export { getQuotes };