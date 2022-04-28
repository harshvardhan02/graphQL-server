exports.Product = {
  category: (parent, args, context) => {
    const { categories } = context;
    const { categoryID } = parent;
    return categories.find(category => category.id === categoryID);
  }
}