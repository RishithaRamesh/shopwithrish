const products = [
  {
    ref: "H8000466",
    categorie: "earrings",
    name: "Pluie de Cartier earrings",
    price: 32000,
    tags: "white gold, diamonds",
    description: "Pluie de Cartier earrings, 18K white gold, each set with 20 brilliant-cut diamonds totaling 2.06 carats.",
    imageUrl: "https://www.cartier.com//content/dam/rcq/car/18/12/48/8/1812488.png",
    countInStock: 1
  },
  {
    ref: "B8301416",
    categorie: "earrings",
    name: "Clash de Cartier earrings Small Model",
    price: 7500,
    tags: "pink gold",
    description: "Clash de Cartier earrings, small model, 18K pink gold. Width: 6.4mm. Inner diameter: 37.8mm",
    imageUrl: "https://www.cartier.com//content/dam/rcq/car/19/15/81/7/1915817.png",
    countInStock: 10
  },
  {
    ref: "B8301408",
    categorie: "earrings",
    name: "Ecrou de Cartier earrings",
    price: 5000,
    tags: "pink gold",
    description: "Ecrou de Cartier earrings, 18K pink gold.",
    imageUrl: "https://www.cartier.com//content/dam/rcq/car/16/83/06/2/1683062.png",
    countInStock: 17
  },
    {
      ref: "B4084600",
      categorie: "rings",
      name: "Love ring",
      price: 1650,
      tags: "yellow gold",
      description: "Love ring, 18K yellow gold. Width: 5.5mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/58/71/74/587174.png",
      countInStock: 24
    },
    {
      ref: "B4084900",
      categorie: "rings",
      name: "Love ring",
      price: 3650,
      tags: "platinum",
      description: "Love ring, 950/1000 platinum. Width: 5.5mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/19/43/98/1/1943981.png",
      countInStock: 6
    },
    {
      ref: "B7224527",
      categorie: "necklaces",
      name: "Love necklace",
      price: 7450,
      tags: "pink gold, diamonds",
      description: "Love necklace, 18K rose gold, set with 54 brilliant-cut diamonds totaling 0.34 carats. Inner diameter 15.95mm. Chain length: 420mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/90/23/82/902382.png",
      countInStock: 11
    },
    {
      ref: "B7058000",
      categorie: "necklaces",
      name: "Love necklace, diamond-paved",
      price: 8000,
      tags: "white gold, diamonds",
      description: "Love necklace, 18K white gold, set with 54 brilliant-cut diamonds totaling 0.34 carats. Inner diameter 15.95mm. Chain length: 420mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/13/61/35/6/1361356.png",
      countInStock: 3
    },
    {
      ref: "H6007517",
      categorie: "bracelets",
      name: "Panth√®re de Cartier bracelet",
      price: 10000,
      tags: "platinum, emeralds, onyx, diamonds",
      description: "Bracelet - 950‚Ä∞ platinum, 744 brilliant-cut diamonds totaling 12.73 carats, emeralds, onyx.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/77/38/26/773826.png",
      countInStock: 5
    },
    {
      ref: "B6035417",
      categorie: "bracelets",
      name: "Love bracelet",
      price: 6750,
      tags: "white gold",
      description: "Love bracelet, 18K white gold. Sold with a screwdriver. Width: 6.1mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/58/43/66/584366.png",
      countInStock: 21
    },
    {
      ref: "B6047517",
      categorie: "bracelets",
      name: "Love bracelet, SM",
      price: 4050,
      tags: "yellow gold",
      description: "Love bracelet, small model, 18K yellow gold. Sold with a screwdriver. Width: 3.65mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/14/37/25/7/1437257.png",
      countInStock: 24
    },
    {
      ref: "B6047317",
      categorie: "bracelets",
      name: "Love bracelet, SM",
      price: 4050,
      tags: "pink gold",
      description: "Love bracelet, small model, 18K rose gold. Sold with a screwdriver. Width: 3.65mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/14/37/25/3/1437253.png",
      countInStock: 1
    },
    {
      ref: "B6035617",
      categorie: "bracelets",
      name: "Love bracelet",
      price: 6300,
      tags: "pink gold",
      description: "Love bracelet, 18K rose gold. Sold with a screwdriver. Width: 6.1mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/58/48/05/584805.png",
      countInStock: 4
    },
    {
      ref: "B4084800",
      categorie: "rings",
      name: "Love ring",
      price: 1650,
      tags: "pink gold",
      description: "Love ring, 18K rose gold. Width: 5.5mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/10/28/64/0/1028640.png",
      countInStock: 20
    },
    {
      ref: "B4032400",
      categorie: "rings",
      name: "Love ring, 3 diamonds",
      price: 3500,
      tags: "yellow gold, diamonds",
      description: "Love ring, 18K yellow gold, set with 3 brilliant-cut diamonds totaling 0.22 carats. Width: 5.5mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/58/47/16/584716.png",
      countInStock: 34
    },
    {
      ref: "B4087500",
      categorie: "rings",
      name: "Love ring, 3 diamonds",
      price: 3500,
      tags: "pink gold, diamonds",
      description: "Love ring, 18K rose gold, set with 3 brilliant-cut diamonds totaling 0.22 carats. Width: 5.5mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/58/39/70/583970.png",
      countInStock: 5
    },
    {
      ref: "N6713417",
      categorie: "bracelets",
      name: "Cactus de Cartier bracelet",
      price: 84000,
      tags: "yellow gold, diamonds",
      description: "Cactus de Cartier bracelet, 18K yellow gold, set with 223 brilliant-cut diamonds totaling 4.26 carats.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/16/49/58/9/1649589.png",
      countInStock: 9
    },
    {
      ref: "N6712317",
      categorie: "bracelets",
      name: "Essential Lines bracelet",
      price: 22300,
      tags: "white gold, sapphires",
      description: "Essential Lines bracelet, 18K white gold, set with 52 brilliant-cut sapphires.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/14/69/79/4/1469794.png",
      countInStock: 9
    },
    {
      ref: "B4032500",
      categorie: "rings",
      name: "Love ring, 3 diamonds",
      price: 3750,
      tags: "white gold, diamonds",
      description: "Love ring, 18K white gold, set with 3 brilliant-cut diamonds totaling 0.22 carats. Width: 5.5mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/58/36/97/583697.png",
      countInStock: 1
    },
    {
      ref: "B6038000",
      categorie: "bracelets",
      name: "Logo bracelet",
      price: 1810,
      tags: "pink gold, diamonds",
      description: "Double C de Cartier bracelet, 18K pink gold, set with 2 brilliant-cut diamonds of 0.04 carat.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/58/56/67/585667.png",
      countInStock: 23
    },
    {
      ref: "N6713317",
      categorie: "bracelets",
      name: "Etincelle de Cartier bracelet",
      price: 33500,
      tags: "white gold, diamonds",
      description: "√âtincelle de Cartier bracelet, 18K white gold, set with 178 brilliant-cut diamonds totaling 2.58 carats.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/18/12/34/6/1812346.png",
      countInStock: 45
    },
    {
      ref: "B4050700",
      categorie: "rings",
      name: "Love wedding band, 1 diamond",
      price: 2020,
      tags: "pink gold, diamond",
      description: "Love wedding band, 18K rose gold, set with 1 brilliant-cut diamonds totaling 0.02 carats. Width: 4mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/59/04/56/590456.png",
      countInStock: 5
    },
    {
      ref: "B4050800",
      categorie: "rings",
      name: "Love wedding band, 8 diamonds",
      price: 3550,
      tags: "pink gold, diamonds",
      description: "Love wedding band, 18K rose gold, set with 8 brilliant-cut diamonds totaling 0.19 carats. Width: 4mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/63/24/01/632401.png",
      countInStock: 5
    },
    {
      ref: "N8515186",
      categorie: "earrings",
      name: "Agrafe earrings",
      price: 25900,
      tags: "pink gold, diamonds",
      description: "Agrafe earrings, 18K pink gold, each set with 79 brilliant-cut pav√© diamonds totaling 2.77 carats.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/19/15/38/7/1915387.png",
      countInStock: 12
    },
    {
      ref: "B4218100",
      categorie: "rings",
      name: "Love ring, SM",
      price: 4500,
      tags: "pink gold, diamonds",
      description: "Love ring, small model, 18K pink gold, set with 72 brilliant-cut diamonds totaling 0.19 carats. Width: 2.6mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/10/57/33/2/1057332.png",
      countInStock: 5
    },
    {
      ref: "B4083300",
      categorie: "rings",
      name: "Love wedding band, diamond-paved",
      price: 6650,
      tags: "yellow gold, diamonds",
      description: "Love wedding band, 18K yellow gold, set with 88 brilliant-cut diamonds totaling 0.31 carats. 4mm to 5mm width following metrics.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/63/23/98/632398.png",
      countInStock: 5
    },
    {
      ref: "B4087600",
      categorie: "rings",
      name: "Love ring, diamond-paved",
      price: 8800,
      tags: "pink gold, diamonds",
      description: "Love ring, 18K pink gold, set with 66 brilliant-cut diamonds totaling 0.70 carat. Width: 6.5 mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/58/62/96/586296.png",
      countInStock: 5
    },
    {
      ref: "B4207600",
      categorie: "rings",
      name: "Love ring, diamond-paved, ceramic",
      price: 10900,
      tags: "white gold, ceramic, diamonds",
      description: "Love ring, 18K white gold, black ceramic, set with 66 brilliant-cut diamonds totaling 0.74 carats. Width: 6.5mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/58/77/67/587767.png",
      countInStock: 14
    },
    {
      ref: "N4210400",
      categorie: "rings",
      name: "Love ring, diamond-paved",
      price: 14900,
      tags: "white gold, diamonds",
      description: "Love ring, 18K white gold, set with 72 brilliant-cut diamonds totaling 1.26 carats. Width: 6.5mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/19/44/00/0/1944000.png",
      countInStock: 5
    },
    {
      ref: "B4064400",
      categorie: "rings",
      name: "Love ring, pink sapphires",
      price: 2380,
      tags: "pink gold, sapphire",
      description: "Love ring, 18K rose gold, set with 1 rose sapphire. Width: 5.5mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/63/24/00/632400.png",
      countInStock: 12
    },
    {
      ref: "B4087800",
      categorie: "rings",
      name: "Love ring",
      price: 2760,
      tags: "pink gold, sapphires, garnets, amethyst",
      description: "Love ring, 18K rose gold, set with 1 rose sapphire, 1 blue sapphire, 1 yellow sapphire, 1 green garnet, 1 orange garnet and 1 amethyst. Width: 5.5mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/63/24/02/632402.png",
      countInStock: 1
    },
    {
      ref: "H6019817",
      categorie: "bracelets",
      name: "Reflection de Cartier bracelet",
      price: 263000,
      tags: "white gold, diamonds",
      description: "Large model Reflection de Cartier bracelet, 18K white gold, set with 166 baguette-cut diamonds totaling 12.96 carats, 30 princess-cut diamonds totaling 4.23 carats and 2 troidia-cut diamonds totaling 0.81 carats.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/16/29/22/1/1629221.png",
      countInStock: 12
    },
    {
      ref: "B6048217",
      categorie: "bracelets",
      name: "Juste un Clou bracelet",
      price: 6800,
      tags: "yellow gold",
      description: "Juste un Clou bracelet, classic, 18K yellow gold. Width: 3.5mm.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/59/08/02/590802.png",
      countInStock: 10
    },
    {
      ref: "B4227900",
      categorie: "rings",
      name: "Love ring",
      price: 3500,
      tags: "white gold",
      description: "Love ring, 18K white gold.",
      imageUrl: "https://www.cartier.com//content/dam/rcq/car/16/48/33/4/1648334.png",
      countInStock: 3
    }
  ];
  
  module.exports = products;