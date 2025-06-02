// Placeholder JS - To be customized based on your project needs
import { useState, useEffect } from 'react';

const quotes = [
  "Tớ Iu Cậu",
  "AI Lớp Diu 💗",
  "Mãi Bên Nhau Nhé"
];

let currentQuoteIndex = 0;

function changeQuote() {
  const quoteMessage = document.getElementById('quote-message');
  const quoteAuthor = document.getElementById('quote-author');

  // Set the message and author dynamically
  quoteMessage.innerHTML = quotes[currentQuoteIndex];
  quoteAuthor.innerHTML = "Ng Đức";

  // Move to the next quote
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

useEffect(() => {
  // Update quote every 3 seconds
  const quoteInterval = setInterval(changeQuote, 3000);

  // Initialize with the first quote
  changeQuote();

  return () => clearInterval(quoteInterval);
}, []);
