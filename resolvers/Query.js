exports.Query = {
  hello: () => {
    return ["Harshvardhan", "Singh", "Baghel"];
  },
  products: (parent, args, context) => {
    const { allProducts, reviews } = context;
    const { filter } = args;
    let filterProduct = allProducts;
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale === true) {
        filterProduct = allProducts.filter(product => {
          return product.onSale
        });
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filterProduct = allProducts.filter(product => {
          let sumRating = 0;
          let numberOfReviews = 0;

          reviews.forEach(review => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;
          console.log(numberOfReviews)
          return avgProductRating >= avgRating;
        });
      }
    }
    return filterProduct;
  },
  // query {
  //   products(filter: { onSale: true }) {
  //     name
  //     onSale
  //   }
  // }

  // query {
  //   products(filter: {
  //     onSale: true
  //     avgRating: 4
  //   }) {
  //     name
  //     price
  //     onSale
  //   }
  // }


  // resolver has 3 parameters parent, args and context
  product: (parent, args, context) => {
    const { allProducts } = context;
    const { id } = args;
    return product = allProducts.find(product => product.id === id);
  },
  categories: (parent, args, context) => {
    const { categories } = context;
    return categories;
  },
  category: (parent, args, context) => {
    const { categories } = context;
    const { id } = args;
    return categories.find(category => category.id === id);
  }
}