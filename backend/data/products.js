const products = [
    // {
    //   name: "PlayStation 5",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    //   description:
    //     "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    //   price: 499,
    //   countInStock: 15,
    // },
    // {
    //   name: "Iphone 12",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    //   description:
    //     "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    //   price: 1099,
    //   countInStock: 10,
    // },
    // {
    //   name: "Cannon EOS-1D",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    //   description:
    //     "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    //   price: 1300,
    //   countInStock: 5,
    // },
    // {
    //   name: "Amazon Alexa",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    //   description:
    //     "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    //   price: 50,
    //   countInStock: 25,
    // },
    // {
    //   name: "Audio Technica Headphones",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    //   description:
    //     "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    //   price: 233,
    //   countInStock: 4,
    // },
    // {
    //   name: "JBL FLIP 4",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    //   description:
    //     "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    //   price: 140,
    //   countInStock: 10,
    // },
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
      "ref": "B4084800",
      "categorie": "rings",
      "name": "Love ring",
      "price": 1650,
      "tags": "pink gold",
      "description": "Love ring, 18K rose gold. Width: 5.5mm.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/10/28/64/0/1028640.png",
      "countInStock": 20
    },
    {
      "ref": "B4032400",
      "categorie": "rings",
      "name": "Love ring, 3 diamonds",
      "price": 3500,
      "tags": "yellow gold, diamonds",
      "description": "Love ring, 18K yellow gold, set with 3 brilliant-cut diamonds totaling 0.22 carats. Width: 5.5mm.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/58/47/16/584716.png",
      "countInStock": 34
    },
    {
      "ref": "B4087500",
      "categorie": "rings",
      "name": "Love ring, 3 diamonds",
      "price": 3500,
      "tags": "pink gold, diamonds",
      "description": "Love ring, 18K rose gold, set with 3 brilliant-cut diamonds totaling 0.22 carats. Width: 5.5mm.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/58/39/70/583970.png",
      "countInStock": 5
    },
    {
      "ref": "B4032500",
      "categorie": "rings",
      "name": "Love ring, 3 diamonds",
      "price": 3750,
      "tags": "white gold, diamonds",
      "description": "Love ring, 18K white gold, set with 3 brilliant-cut diamonds totaling 0.22 carats. Width: 5.5mm.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/58/36/97/583697.png",
      "countInStock": 1
    },
    {
      "ref": "B4050700",
      "categorie": "rings",
      "name": "Love wedding band, 1 diamond",
      "price": 2020,
      "tags": "pink gold, diamond",
      "description": "Love wedding band, 18K rose gold, set with 1 brilliant-cut diamonds totaling 0.02 carats. Width: 4mm.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/59/04/56/590456.png",
      "countInStock": 5
    },
    {
      "ref": "B4050800",
      "categorie": "rings",
      "name": "Love wedding band, 8 diamonds",
      "price": 3550,
      "tags": "pink gold, diamonds",
      "description": "Love wedding band, 18K rose gold, set with 8 brilliant-cut diamonds totaling 0.19 carats. Width: 4mm.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/63/24/01/632401.png",
      "countInStock": 5
    },
    {
      "ref": "B4218100",
      "categorie": "rings",
      "name": "Love ring, SM",
      "price": 4500,
      "tags": "pink gold, diamonds",
      "description": "Love ring, small model, 18K pink gold, set with 72 brilliant-cut diamonds totaling 0.19 carats. Width: 2.6mm.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/10/57/33/2/1057332.png",
      "countInStock": 5
    },
    {
      "ref": "B4083300",
      "categorie": "rings",
      "name": "Love wedding band, diamond-paved",
      "price": 6650,
      "tags": "yellow gold, diamonds",
      "description": "Love wedding band, 18K yellow gold, set with 88 brilliant-cut diamonds totaling 0.31 carats. 4mm to 5mm width following metrics.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/63/23/98/632398.png",
      "countInStock": 5
    },
    {
      "ref": "B4087600",
      "categorie": "rings",
      "name": "Love ring, diamond-paved",
      "price": 8800,
      "tags": "pink gold, diamonds",
      "description": "Love ring, 18K pink gold, set with 66 brilliant-cut diamonds totaling 0.70 carat. Width: 6.5 mm.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/58/62/96/586296.png",
      "countInStock": 5
    },
    {
      "ref": "B4207600",
      "categorie": "rings",
      "name": "Love ring, diamond-paved, ceramic",
      "price": 10900,
      "tags": "white gold, ceramic, diamonds",
      "description": "Love ring, 18K white gold, black ceramic, set with 66 brilliant-cut diamonds totaling 0.74 carats. Width: 6.5mm.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/58/77/67/587767.png",
      "countInStock": 14
    },
    {
      "ref": "N4210400",
      "categorie": "rings",
      "name": "Love ring, diamond-paved",
      "price": 14900,
      "tags": "white gold, diamonds",
      "description": "Love ring, 18K white gold, set with 72 brilliant-cut diamonds totaling 1.26 carats. Width: 6.5mm.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/19/44/00/0/1944000.png",
      "countInStock": 5
    },
    {
      "ref": "B4064400",
      "categorie": "rings",
      "name": "Love ring, pink sapphires",
      "price": 2380,
      "tags": "pink gold, sapphire",
      "description": "Love ring, 18K rose gold, set with 1 rose sapphire. Width: 5.5mm.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/63/24/00/632400.png",
      "countInStock": 12
    },
    {
      "ref": "B4087800",
      "categorie": "rings",
      "name": "Love ring",
      "price": 2760,
      "tags": "pink gold, sapphires, garnets, amethyst",
      "description": "Love ring, 18K rose gold, set with 1 rose sapphire, 1 blue sapphire, 1 yellow sapphire, 1 green garnet, 1 orange garnet and 1 amethyst. Width: 5.5mm.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/63/24/02/632402.png",
      "countInStock": 1
    },
    {
      "ref": "B4227800",
      "categorie": "rings",
      "name": "Love ring",
      "price": 3250,
      "tags": "yellow gold",
      "description": "Love ring, 18K yellow gold.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/19/21/91/4/1921914.png",
      "countInStock": 5
    },
    {
      "ref": "B4227900",
      "categorie": "rings",
      "name": "Love ring",
      "price": 3500,
      "tags": "white gold",
      "description": "Love ring, 18K white gold.",
      "imageUrl": "https://www.cartier.com//content/dam/rcq/car/16/48/33/4/1648334.png",
      "countInStock": 3
    }
  ];
  
  module.exports = products;