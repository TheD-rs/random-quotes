const quote = document.querySelector('.text');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');
async function getQuotes() {
  const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json();
  let randomNum = Math.floor(Math.random() * data.length);
  quote.textContent = `« ${data[randomNum].text} »`;
  author.textContent = data[randomNum].author;
}
getQuotes();

btn.addEventListener('click', getQuotes)