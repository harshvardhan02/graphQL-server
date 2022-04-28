exports.Category = {
  products: (parent, args, context) => {
    const { allProducts } = context;
    const { id } = parent;
    return allProducts.filter(product => product.categoryID === id);
  }
  // query for products in a category:-
  // query($categoryId: ID!) {
  //   category(id: $categoryId) {
  //     id
  //     name
  //     products {
  //       name
  //       price
  //     }
  //   }
  // }
}