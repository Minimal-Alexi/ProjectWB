const getRandomProducts = (products, amount, id) => {
  //MAKE SURE TO FILTER OUT THE ID OF THE PRODUCT PAGE YOU'RE CURRENTLY ON! THANK YOU.
  const filteredProducts = products.filter(product => product._id !== id);
  const shuffled = [...filteredProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
};
export default getRandomProducts