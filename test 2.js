const searchCandies = (searchPrefix, maxPrice) => {
  
  return candies.filter(candy => 
    {return candy.name.toLowerCase().startsWith(searchPrefix.toLowerCase();}).filter(candy => {return candy.price <= maxPrice;}).map(candy => {return candy.name});
}