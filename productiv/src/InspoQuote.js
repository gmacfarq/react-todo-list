import axios from "axios";
import React, { useState } from "react";

const URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function InspoQuote() {
  const [quote, setQuote] = useState("");

  async function getQuote() {
    const randomQuo = await axios.get(URL);
    setQuote(`${randomQuo.data.quote.text} - ${randomQuo.data.quote.author}`);
  }
  return (
    <div>
      <p>{quote}</p>
      {quote === "" ? <button className="inspo-quote" onClick={getQuote}>
        Click here for an inspiration quote!</button> : <button className="inspo-quote" onClick={getQuote}>
        NÜ Quote</button>}

    </div>
  );
}

export default InspoQuote;