export const getQuotes = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to receive Simpsons quotes.'

      return json;
    })
    .then(json => json.map(quote => ({
      quote: quote.quote,
      character: quote.character,
      image: quote.image
    })));
};
