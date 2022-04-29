exports.Product = {
  category: (parent, args, context) => {
    const { categories } = context;
    const { categoryID } = parent;
    return categories.find(category => category.id === categoryID);
  },
  reviews: (parent, args, context) => {
    const { reviews } = context;
    const { productID } = parent;
    return reviews.filter(review => review.productID === productID);
  }
}