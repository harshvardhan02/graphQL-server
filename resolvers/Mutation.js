const { v4: uuid } = require("uuid")

exports.Mutation = {
  addCategory: (parent, args, context) => {
    const { input } = args;
    const { categories } = context;
    const newCategory = {
      id: uuid(),
      name: input.name
    }
    categories.push(newCategory);
    return newCategory;
  }
}

// add category mutation:
// mutation {
//   addCategory(input: {
//     name: "Cricket"
//   }){
//     id
//     name
//   }
// }