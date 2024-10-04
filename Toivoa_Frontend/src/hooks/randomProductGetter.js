const getRandomProducts = (products, amount) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, amount); // Select the first 'amount' of items
  };

export default getRandomProducts