const allProducts = [{
  "id": 1,
  "name": "Saturn",
  "description": "justo morbi ut odio cras mi pede malesuada in imperdiet et commodo",
  "quantity": 5,
  "price": 3.34,
  "onSale": false,
  "categoryID": "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
}, {
  "id": 2,
  "name": "Mazda",
  "description": "tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum",
  "quantity": 18,
  "price": 8.83,
  "onSale": true,
  "categoryID": "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
}, {
  "id": 3,
  "name": "Ford",
  "description": "sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla",
  "quantity": 25,
  "price": 8.49,
  "onSale": true,
  "categoryID": "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
}, {
  "id": 4,
  "name": "Infiniti",
  "description": "morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo",
  "quantity": 7,
  "price": 5.51,
  "onSale": true,
  "categoryID": "34115aac-0ff5-4859-8f43-10e8db23602b"
}, {
  "id": 5,
  "name": "Mitsubishi",
  "description": "molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
  "quantity": 16,
  "price": 7.73,
  "onSale": false,
  "categoryID": "34115aac-0ff5-4859-8f43-10e8db23602b"
}, {
  "id": 6,
  "name": "Chevrolet",
  "description": "nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non",
  "quantity": 5,
  "price": 2.00,
  "onSale": true,
  "categoryID": "34115aac-0ff5-4859-8f43-10e8db23602b"
}, {
  "id": 7,
  "name": "Lincoln",
  "description": "erat curabitur gravida nisi at nibh in hac habitasse platea",
  "quantity": 3,
  "price": 0.12,
  "onSale": false,
  "categoryID": "34115aac-0ff5-4859-8f43-10e8db23602b"
}, {
  "id": 8,
  "name": "Chevrolet",
  "description": "eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor",
  "quantity": 18,
  "price": 8.21,
  "onSale": false,
  "categoryID": "d914aec0-25b2-4103-9ed8-225d39018d1d"
}, {
  "id": 9,
  "name": "Acura",
  "description": "metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",
  "quantity": 23,
  "price": 8.66,
  "onSale": false,
  "categoryID": "d914aec0-25b2-4103-9ed8-225d39018d1d"
}, {
  "id": 10,
  "name": "Jeep",
  "description": "sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam",
  "quantity": 15,
  "price": 4.71,
  "onSale": true,
  "categoryID": "d914aec0-25b2-4103-9ed8-225d39018d1d"
}]

const categories = [
  {
    id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
    name: "Hatchback",
  },
  {
    id: "34115aac-0ff5-4859-8f43-10e8db23602b",
    name: "Sedan",
  },
  {
    id: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    name: "SUV",
  },
];

module.exports = {
  allProducts,
  categories
}