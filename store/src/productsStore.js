// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

// import coffeePic from './images/coffeePic.jpg';
// import hotChocolate from './images/hotChocolate.jpg';
// import earlGreyTea from './images/earlGreyTea.jpg';

const productsArray = [
  {
    id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
    title: "Coffee",
    price: 4.99,
    picture:
      "https://th.bing.com/th/id/R.fe20a57e77099fe1baea254d50f6802c?rik=FsyFE8G2RLe1EA&riu=http%3a%2f%2fehonami.blob.core.windows.net%2fmedia%2f2014%2f11%2fcoffee-even-decaf-found-benefit-liver-health.jpg&ehk=XtVvJ0uvsrpSLM02RVuUPBj0EQvfbEYoC7lew1%2bWrmk%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
    title: "Earl Grey Tea",
    price: 9.99,
    picture:
      "https://www.hdwallpaper.nu/wp-content/uploads/2017/03/coffee-7.jpg",
  },
  {
    id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
    title: "Hot Chocolate",
    price: 7.99,
    picture:
      "https://th.bing.com/th/id/OIP.DbMSF0rlvug_d7wwLcw0UAHaLH?pid=ImgDet&rs=1",
  },
  {
    id: "price_1LnUUoDM1jwCEz8OvxIcJ7t9",
    title: "Camomille",
    price: 4.99,
    picture:
      "https://th.bing.com/th/id/R.ae8c9c957c15c4d9833b3e597fe65b90?rik=tbbiK%2bo3QqKW9A&pid=ImgRaw&r=0",
  },
  {
    id: "price_1LnUUoDM1jwCEz8OvxIcJ7t8",
    title: "Green Tea",
    price: 3.99,
    picture:
      "https://th.bing.com/th/id/R.75a7f7f8fd4aaa852943c6690bbe98ba?rik=3tGJGJemm7tdNg&riu=http%3a%2f%2feathealthystayhealthy.files.wordpress.com%2f2014%2f01%2fgreentea1.jpg&ehk=EhElYZ2DhicAvYQvtWEcTuNl3%2fjj%2fClYjXMrlFJWybQ%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: "price_1LnUUoDM1jwCEz8OvuIcJ7t8",
    title: "Peppermint Tea",
    price: 3.99,
    picture:
      "https://th.bing.com/th/id/R.6eeaf8d01e457b477b7bb4a91472420a?rik=9w83gNuVfNgNEA&riu=http%3a%2f%2fprovendietpillsreview.com%2fwp-content%2fuploads%2f2014%2f12%2fpeppermint-tea-weight-loss1.jpeg&ehk=I4niDqI%2beMpNas3%2fUvoANk7ZYGZlK7IVTOFoQ7LyAVg%3d&risl=&pid=ImgRaw&r=0",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
