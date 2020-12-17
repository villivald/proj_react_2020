const IMAGES = [
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/%D0%9E%D0%B1%D0%BB%D0%BE%D0%BC%D0%BE%D0%B2.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/%D0%9E%D0%B1%D0%BB%D0%BE%D0%BC%D0%BE%D0%B2.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "http://www.maximkantor.com/svet/cover.jpg",
    thumbnail: "http://www.maximkantor.com/svet/cover.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/3/38/ABS_Strana_Bagrovyh_Tuch_1960_BookCover.jpg/256px-ABS_Strana_Bagrovyh_Tuch_1960_BookCover.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/3/38/ABS_Strana_Bagrovyh_Tuch_1960_BookCover.jpg/256px-ABS_Strana_Bagrovyh_Tuch_1960_BookCover.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://www.litmir.me/data/Book/0/249000/249883/BC4_1490723871.jpg",
    thumbnail:
      "https://www.litmir.me/data/Book/0/249000/249883/BC4_1490723871.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/9/99/%D0%A1%D1%82%D0%B0%D0%B6%D1%91%D1%80%D1%8B_%28%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D1%8C%29.jpg/245px-%D0%A1%D1%82%D0%B0%D0%B6%D1%91%D1%80%D1%8B_%28%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D1%8C%29.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/9/99/%D0%A1%D1%82%D0%B0%D0%B6%D1%91%D1%80%D1%8B_%28%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D1%8C%29.jpg/245px-%D0%A1%D1%82%D0%B0%D0%B6%D1%91%D1%80%D1%8B_%28%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D1%8C%29.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/ru/2/2b/%D0%A5%D0%B8%D1%89%D0%BD%D1%8B%D0%B5_%D0%B2%D0%B5%D1%89%D0%B8_%D0%B2%D0%B5%D0%BA%D0%B0.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/2/2b/%D0%A5%D0%B8%D1%89%D0%BD%D1%8B%D0%B5_%D0%B2%D0%B5%D1%89%D0%B8_%D0%B2%D0%B5%D0%BA%D0%B0.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src:
      "https://img4.labirint.ru/rc/dc123b42c9d7c0826bc677257d2b0de9/220x340/books62/616698/cover.jpg?1564047727",
    thumbnail:
      "https://img4.labirint.ru/rc/dc123b42c9d7c0826bc677257d2b0de9/220x340/books62/616698/cover.jpg?1564047727",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/7/73/Homo_Deus.jpg",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/7/73/Homo_Deus.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/ru/5/53/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B3%D0%BE_%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F_%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D0%B0_%D0%B1%D1%80%D0%B0%D1%82%D1%8C%D0%B5%D0%B2_%D0%A1%D1%82%D1%80%D1%83%D0%B3%D0%B0%D1%86%D0%BA%D0%B8%D1%85_%C2%AB%D0%9F%D0%BE%D0%BB%D0%B4%D0%B5%D0%BD%D1%8C%2C_XXII_%D0%B2%D0%B5%D0%BA%C2%BB.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/5/53/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B3%D0%BE_%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F_%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D0%B0_%D0%B1%D1%80%D0%B0%D1%82%D1%8C%D0%B5%D0%B2_%D0%A1%D1%82%D1%80%D1%83%D0%B3%D0%B0%D1%86%D0%BA%D0%B8%D1%85_%C2%AB%D0%9F%D0%BE%D0%BB%D0%B4%D0%B5%D0%BD%D1%8C%2C_XXII_%D0%B2%D0%B5%D0%BA%C2%BB.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://m.media-amazon.com/images/I/31hKHfEGWlL.jpg",
    thumbnail: "https://m.media-amazon.com/images/I/31hKHfEGWlL.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/ru/e/ed/%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE_%D0%B1%D1%8B%D1%82%D1%8C_%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/e/ed/%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE_%D0%B1%D1%8B%D1%82%D1%8C_%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/en/a/ad/Escape-attempt-macmillan-cover.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/a/ad/Escape-attempt-macmillan-cover.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
];

export default IMAGES;
