exports.Category = {
  products: (parent, args, context) => {
    const { allProducts } = context;
    const { id } = parent;
    const { filter } = args;
    const categoryProducts = allProducts.filter(product => product.categoryID === id);
    let filterProduct = categoryProducts;
    if (filter) {
      if (filter.onSale === true) {
        filterProduct = allProducts.filter(product => {
          return product.onSale
        });
      }
    }
    return filterProduct;
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


  // query {
  //   category(id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70") {
  //     name
  //     products(filter: { onSale: false }) {
  //       name
  //       onSale
  //     }
  //   }
  // }
}