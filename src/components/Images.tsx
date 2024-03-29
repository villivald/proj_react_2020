const IMAGES = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/%D0%9E%D0%B1%D0%BB%D0%BE%D0%BC%D0%BE%D0%B2.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/%D0%9E%D0%B1%D0%BB%D0%BE%D0%BC%D0%BE%D0%B2.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Обломов - Гончаров",
  },
  {
    src: "https://s1.livelib.ru/boocover/1000656413/200x305/1bb1/boocover.jpg",
    thumbnail:
      "https://s1.livelib.ru/boocover/1000656413/200x305/1bb1/boocover.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Красный свет - Кантор",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/ru/thumb/3/38/ABS_Strana_Bagrovyh_Tuch_1960_BookCover.jpg/256px-ABS_Strana_Bagrovyh_Tuch_1960_BookCover.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/3/38/ABS_Strana_Bagrovyh_Tuch_1960_BookCover.jpg/256px-ABS_Strana_Bagrovyh_Tuch_1960_BookCover.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Страна багровых туч	-	Стругацкие",
  },
  {
    src: "http://www.rusf.ru/abs/images/obl/spagr004.jpg",
    thumbnail: "http://www.rusf.ru/abs/images/obl/spagr004.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Путь на Амальтею - Стругацкие",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/99/%D0%A1%D1%82%D0%B0%D0%B6%D1%91%D1%80%D1%8B_%28%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D1%8C%29.jpg/245px-%D0%A1%D1%82%D0%B0%D0%B6%D1%91%D1%80%D1%8B_%28%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D1%8C%29.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/9/99/%D0%A1%D1%82%D0%B0%D0%B6%D1%91%D1%80%D1%8B_%28%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D1%8C%29.jpg/245px-%D0%A1%D1%82%D0%B0%D0%B6%D1%91%D1%80%D1%8B_%28%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D1%8C%29.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Стажеры - Стругацкие",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/ru/2/2b/%D0%A5%D0%B8%D1%89%D0%BD%D1%8B%D0%B5_%D0%B2%D0%B5%D1%89%D0%B8_%D0%B2%D0%B5%D0%BA%D0%B0.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/2/2b/%D0%A5%D0%B8%D1%89%D0%BD%D1%8B%D0%B5_%D0%B2%D0%B5%D1%89%D0%B8_%D0%B2%D0%B5%D0%BA%D0%B0.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Хищные вещи века - Стругацкие",
  },
  {
    src: "https://cdn-ed.versobooks.com/images/000013/918/9781784782788-b8440a5152fb956d3a03576ef2ae15d4.jpg",
    thumbnail:
      "https://cdn-ed.versobooks.com/images/000013/918/9781784782788-b8440a5152fb956d3a03576ef2ae15d4.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Октябрь - Мьевиль",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/7/73/Homo_Deus.jpg",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/7/73/Homo_Deus.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Homo Deus - Харари",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/ru/5/53/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B3%D0%BE_%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F_%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D0%B0_%D0%B1%D1%80%D0%B0%D1%82%D1%8C%D0%B5%D0%B2_%D0%A1%D1%82%D1%80%D1%83%D0%B3%D0%B0%D1%86%D0%BA%D0%B8%D1%85_%C2%AB%D0%9F%D0%BE%D0%BB%D0%B4%D0%B5%D0%BD%D1%8C%2C_XXII_%D0%B2%D0%B5%D0%BA%C2%BB.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/5/53/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B3%D0%BE_%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F_%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D0%B0_%D0%B1%D1%80%D0%B0%D1%82%D1%8C%D0%B5%D0%B2_%D0%A1%D1%82%D1%80%D1%83%D0%B3%D0%B0%D1%86%D0%BA%D0%B8%D1%85_%C2%AB%D0%9F%D0%BE%D0%BB%D0%B4%D0%B5%D0%BD%D1%8C%2C_XXII_%D0%B2%D0%B5%D0%BA%C2%BB.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Полдень, XXII век - Стругацкие",
  },
  {
    src: "https://m.media-amazon.com/images/I/31hKHfEGWlL.jpg",
    thumbnail: "https://m.media-amazon.com/images/I/31hKHfEGWlL.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Краткая история русских хакеров - Туровский",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/ru/e/ed/%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE_%D0%B1%D1%8B%D1%82%D1%8C_%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/e/ed/%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE_%D0%B1%D1%8B%D1%82%D1%8C_%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Трудно быть богом - Стругацкие",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1621617759l/331252.jpg",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1621617759l/331252.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Попытка к бегству - Стругацкие",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/7/74/Far-rainbow-macmillan-cover.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Far-rainbow-macmillan-cover.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Далекая радуга - Стругацкие",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d4/TheThaw.jpg",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/d/d4/TheThaw.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Оттепель - Эренбург",
  },
  {
    src: "https://www.corpus.ru/picts/products/Sorokin-History-1000.jpg",
    thumbnail: "https://www.corpus.ru/picts/products/Sorokin-History-1000.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Нормальная история - Сорокин",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/0/04/Prisoners-of-power-cover.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/04/Prisoners-of-power-cover.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Обитаемый остров - Стругацкие",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/ru/8/83/%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%BA_%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%BC%D1%83_%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8E_%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D0%B8_%D0%B1%D1%80%D0%B0%D1%82%D1%8C%D0%B5%D0%B2_%D0%A1%D1%82%D1%80%D1%83%D0%B3%D0%B0%D1%86%D0%BA%D0%B8%D1%85_%C2%AB%D0%9C%D0%B0%D0%BB%D1%8B%D1%88%C2%BB.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/8/83/%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%BA_%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%BC%D1%83_%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8E_%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D0%B8_%D0%B1%D1%80%D0%B0%D1%82%D1%8C%D0%B5%D0%B2_%D0%A1%D1%82%D1%80%D1%83%D0%B3%D0%B0%D1%86%D0%BA%D0%B8%D1%85_%C2%AB%D0%9C%D0%B0%D0%BB%D1%8B%D1%88%C2%BB.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Малыш - Стругацкие",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/9d/%D0%9F%D0%B0%D1%80%D0%B5%D0%BD%D1%8C_%D0%B8%D0%B7_%D0%9F%D1%80%D0%B5%D0%B8%D1%81%D0%BF%D0%BE%D0%B4%D0%BD%D0%B5%D0%B9.jpeg/400px-%D0%9F%D0%B0%D1%80%D0%B5%D0%BD%D1%8C_%D0%B8%D0%B7_%D0%9F%D1%80%D0%B5%D0%B8%D1%81%D0%BF%D0%BE%D0%B4%D0%BD%D0%B5%D0%B9.jpeg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/9/9d/%D0%9F%D0%B0%D1%80%D0%B5%D0%BD%D1%8C_%D0%B8%D0%B7_%D0%9F%D1%80%D0%B5%D0%B8%D1%81%D0%BF%D0%BE%D0%B4%D0%BD%D0%B5%D0%B9.jpeg/400px-%D0%9F%D0%B0%D1%80%D0%B5%D0%BD%D1%8C_%D0%B8%D0%B7_%D0%9F%D1%80%D0%B5%D0%B8%D1%81%D0%BF%D0%BE%D0%B4%D0%BD%D0%B5%D0%B9.jpeg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Парень из прейсподней - Стругацкие",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/ru/1/17/%D0%96%D1%83%D0%BA_%D0%B2_%D0%BC%D1%83%D1%80%D0%B0%D0%B2%D0%B5%D0%B9%D0%BD%D0%B8%D0%BA%D0%B5.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/1/17/%D0%96%D1%83%D0%BA_%D0%B2_%D0%BC%D1%83%D1%80%D0%B0%D0%B2%D0%B5%D0%B9%D0%BD%D0%B8%D0%BA%D0%B5.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Жук в муравейнике - Стругацкие",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f7/The-time-wanderers-cover.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/f/f7/The-time-wanderers-cover.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Волны гасят ветер - Стругацкие",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/6/69/Laurus_book_cover_%28Russian%29.jpeg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/6/69/Laurus_book_cover_%28Russian%29.jpeg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Лавр - Водолазкин",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/c/cd/The_map_and_the_territory_bookcover.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/c/cd/The_map_and_the_territory_bookcover.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Карта и территория - Мишель Уельбек",
  },
  {
    src: "https://s1.livelib.ru/boocover/1000013515/200/1596/boocover.jpg",
    thumbnail:
      "https://s1.livelib.ru/boocover/1000013515/200/1596/boocover.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Норма - Сорокин",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d2/Sapiens_A_Brief_History_of_Humankind.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/Sapiens_A_Brief_History_of_Humankind.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Sapiens. краткая история человечества - Харари",
  },
  {
    src: "https://s1.livelib.ru/boocover/1002910038/200/687d/boocover.jpg",
    thumbnail:
      "https://s1.livelib.ru/boocover/1002910038/200/687d/boocover.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Необычайные похождения Хулио Хуренито - Эренбург",
  },
  {
    src: "https://royallib.com/data/images/291/cover_291540.jpg",
    thumbnail: "https://royallib.com/data/images/291/cover_291540.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Соглядатай - A. Роб-Грийе",
  },
  {
    src: "https://img3.labirint.ru/rc/9bacb4fcb80bd0fe910a4412d13e9b66/220x340/books4/31745/cover.jpg?1563632793",
    thumbnail:
      "https://img3.labirint.ru/rc/9bacb4fcb80bd0fe910a4412d13e9b66/220x340/books4/31745/cover.jpg?1563632793",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Воры - Галеотти",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/51PEj5p72jL._SX331_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51PEj5p72jL._SX331_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Палач - Лимонов",
  },
  {
    src: "https://chernaya100.com/media/books/kovalevsky-foreignrussia/kovalevsky-1.png",
    thumbnail:
      "https://chernaya100.com/media/books/kovalevsky-foreignrussia/kovalevsky-1.png",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Зарубежная Россия - Ковалевский",
  },
  {
    src: "https://img4.labirint.ru/rc/327188b91c8db13a9d39f10cc2e94691/220x340/books68/671998/cover.jpg?1564158974",
    thumbnail:
      "https://img4.labirint.ru/rc/327188b91c8db13a9d39f10cc2e94691/220x340/books68/671998/cover.jpg?1564158974",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Почему распался СССР - Аркадий Дубнов",
  },
  {
    src: "https://frontendmasters.com/books/front-end-handbook/2019/assets/images/FM_2019Cover_final.jpg",
    thumbnail:
      "https://frontendmasters.com/books/front-end-handbook/2019/assets/images/FM_2019Cover_final.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Frontend developer handbook - Frontendmasters",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405229927l/3424859.jpg",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405229927l/3424859.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Дневник неудачника - Лимонов",
  },
  {
    src: "https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/book-cover-sm.png",
    thumbnail:
      "https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/book-cover-sm.png",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Refactoring UI - Wathan & Schoger",
  },
  {
    src: "https://s1.livelib.ru/boocover/1000102637/o/c794/Eduard_Limonov__Torzhestvo_metafiziki.jpeg",
    thumbnail:
      "https://s1.livelib.ru/boocover/1000102637/o/c794/Eduard_Limonov__Torzhestvo_metafiziki.jpeg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Торжество метафизики - Лимонов",
  },
  {
    src: "https://store.artlebedev.ru/products/images/m19bqkt2.jpg",
    thumbnail: "https://store.artlebedev.ru/products/images/m19bqkt2.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Ководство - Лебедев",
  },
  {
    src: "https://m.media-amazon.com/images/I/51yr12gkjRL.jpg",
    thumbnail: "https://m.media-amazon.com/images/I/51yr12gkjRL.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "The Complete Software Developer's Career Guide - Sonmez",
  },
  {
    src: "https://cdn.ast.ru/v2/AST000000000145915/COVER/cover1__w340.jpg",
    thumbnail:
      "https://cdn.ast.ru/v2/AST000000000145915/COVER/cover1__w340.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Первая сверхдержава - Акунин",
  },
  {
    src: "https://northernstories.no/dynamic_images/0ed994e6749ba9080a7dd9177ac56014c42d8305/1334x2048/21-20190510143236485252.png",
    thumbnail:
      "https://northernstories.no/dynamic_images/0ed994e6749ba9080a7dd9177ac56014c42d8305/1334x2048/21-20190510143236485252.png",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Предатель в Северной Корее - М.Тровик",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/6/60/Azazel_%28book%29.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/6/60/Azazel_%28book%29.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Азазель - Акунин",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/51WiLueukSL._SX396_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51WiLueukSL._SX396_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Soft skills - Sonmez",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/6/62/The_turkish_gambit_by_boris_akunin.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/6/62/The_turkish_gambit_by_boris_akunin.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Турецкий гамбит - Акунин",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Pragmatic programmer - Thomas & Hunt",
  },
  {
    src: "https://www.storytel.com/images/200x200/0000056775.jpg",
    thumbnail: "https://www.storytel.com/images/200x200/0000056775.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Хрущев - Млечин",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/5/51/Leviafan_book.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/5/51/Leviafan_book.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Левиафан - Акунин",
  },
  {
    src: "hhttps://upload.wikimedia.org/wikipedia/en/c/c6/EnvyOlyesha.jpg",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/c6/EnvyOlyesha.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Зависть - Олеша",
  },
  {
    src: "https://assets1.bmstatic.com/assets/books-covers/21/9e/ipad-10fd2ce8d7f8855bf103be0d3b4c7727.jpg",
    thumbnail:
      "https://assets1.bmstatic.com/assets/books-covers/21/9e/ipad-10fd2ce8d7f8855bf103be0d3b4c7727.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Расстрига - Доренко",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/6/61/Smert_achillesa.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/6/61/Smert_achillesa.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Смерть Ахиллеса - Акунин",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b2/The_House_of_Government_by_Yuri_Slezkine.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/b/b2/The_House_of_Government_by_Yuri_Slezkine.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Дом правительства - Слезкин",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/ru/8/8a/%D0%9E%D1%81%D0%BE%D0%B1%D1%8B%D0%B5_%D0%BF%D0%BE%D1%80%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F_%28%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8%29.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/8/8a/%D0%9E%D1%81%D0%BE%D0%B1%D1%8B%D0%B5_%D0%BF%D0%BE%D1%80%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F_%28%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8%29.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Пиковый валет - Акунин",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439448575l/26085784._SX318_.jpg",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439448575l/26085784._SX318_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Отъявленный программист - Савчук",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/e/ee/SpecialAssignments.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/e/ee/SpecialAssignments.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Декоратор - Акунин",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Isaak_Babel_Konarmiya.jpg/440px-Isaak_Babel_Konarmiya.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Isaak_Babel_Konarmiya.jpg/440px-Isaak_Babel_Konarmiya.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Конармия - Бабель",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d2/The_state_counsellor_by_boris_akunin.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/The_state_counsellor_by_boris_akunin.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Статский советник - Акунин",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/41htjIPKvJL._SX322_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/41htjIPKvJL._SX322_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Беседы с дочерью об экономике - Варуфакис",
  },
  {
    src: "https://groveatlantic.com/core/wp-content/uploads/2017/04/9780802124074-678x1024.jpg",
    thumbnail:
      "https://groveatlantic.com/core/wp-content/uploads/2017/04/9780802124074-678x1024.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Lingo - G. Dorren",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/51+lPgRGIRL._SY498_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51+lPgRGIRL._SY498_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "If Hemingway Wrote JavaScript - A.Croll",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/71S21-B1haL.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/71S21-B1haL.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "The Four - S. Galloway",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d1/BorisAkunin_Coronation_russian.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/d/d1/BorisAkunin_Coronation_russian.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Коронация - Акунин",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/41AtqnBj+3L._SX334_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/41AtqnBj+3L._SX334_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Век тревожности - С. Стоссел",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a8/Elon_Musk_-_Tesla%2C_SpaceX%2C_and_the_Quest_for_a_Fantastic_Future.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/a/a8/Elon_Musk_-_Tesla%2C_SpaceX%2C_and_the_Quest_for_a_Fantastic_Future.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Elon Musk - A. Vance",
  },
  {
    src: "https://www.diktaattori.fi/images/tuotteet/1495438517.jpg",
    thumbnail: "https://www.diktaattori.fi/images/tuotteet/1495438517.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Juoppohullun päiväkirja - Vuorinen ",
  },
  {
    src: "https://img3.labirint.ru/rc/f744d86807cc9d8594b9c590350cb1aa/220x340/books56/556427/cover.jpg?1563950295",
    thumbnail:
      "https://img3.labirint.ru/rc/f744d86807cc9d8594b9c590350cb1aa/220x340/books56/556427/cover.jpg?1563950295",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Горький - Быков",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/510PJI0uGwL._SX334_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/510PJI0uGwL._SX334_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Шум времени - Мандельштам",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/41oAQDXNRML._SX316_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/41oAQDXNRML._SX316_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Babel - G. Dorren",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/51msSEgXtdL._SX324_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51msSEgXtdL._SX324_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "The 2084 Report - J. Powell",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504749459l/34889270._SY475_.jpg",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504749459l/34889270._SY475_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Крестовые сестры - Ремизов",
  },
  {
    src: "https://assets1.bmstatic.com/assets/books-covers/bf/26/vNxUkbpl-ipad.jpg",
    thumbnail:
      "https://assets1.bmstatic.com/assets/books-covers/bf/26/vNxUkbpl-ipad.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Карамора - Горький",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/c/cf/Auto-da-Fe_first_edition.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/c/cf/Auto-da-Fe_first_edition.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Ослепление - Канетти",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/515TynAfmlL._SX331_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/515TynAfmlL._SX331_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Будущее - Глуховский",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/c/cd/She_lover_of_death_by_boris_akunin.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/c/cd/She_lover_of_death_by_boris_akunin.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Любовница смерти - Акунин",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/7/73/Moscow_Petushki.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/7/73/Moscow_Petushki.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Москва - Петушки - Ерофеев",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/a/af/Ubik%281stEd%29.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/a/af/Ubik%281stEd%29.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Убик - Ф. Дик",
  },
  {
    src: "https://m.media-amazon.com/images/I/51Lb4J6645L.jpg",
    thumbnail: "https://m.media-amazon.com/images/I/51Lb4J6645L.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Теоретический минимум по Computer Science - В. Фило",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/514qh-qixZL._SX331_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/514qh-qixZL._SX331_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Москва и москвичи - Гиляровский",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/410DSGV3JQL._SX301_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/410DSGV3JQL._SX301_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Котлован - Платонов",
  },
  {
    src: "https://s5-goods.ozstatic.by/1000/559/970/10/10970559_0.jpg",
    thumbnail: "https://s5-goods.ozstatic.by/1000/559/970/10/10970559_0.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Все свободны - Зыгарь",
  },
  {
    src: "https://neweasterneurope.eu/new_site/wp-content/uploads/2018/12/tamtam.png",
    thumbnail:
      "https://neweasterneurope.eu/new_site/wp-content/uploads/2018/12/tamtam.png",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Как работает пропаганда - Эйдельман",
  },
  {
    src: "https://s1.livelib.ru/boocover/1000521681/o/f8e5/Boris_Ryzhij__V_kvartalah_dalnih_i_pechalnyh..._sbornik.jpeg",
    thumbnail:
      "https://s1.livelib.ru/boocover/1000521681/o/f8e5/Boris_Ryzhij__V_kvartalah_dalnih_i_pechalnyh..._sbornik.jpeg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "В кварталах дальних и печальных - Рыжий",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4a/He_Lover_of_Death_-_Akunin.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/4/4a/He_Lover_of_Death_-_Akunin.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Любовник смерти - Акунин",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Dostoyevski_-_White_Nights_%281865%29.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Dostoyevski_-_White_Nights_%281865%29.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Белые ночи - Достоевский",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1536006768l/41671384._SY475_.jpg",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1536006768l/41671384._SY475_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Несовременная страна - Иноземцев",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367786544l/17885102.jpg",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367786544l/17885102.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Иосиф Сталин. Начало - Радзинский",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1487805540l/34376766._SY475_.jpg",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1487805540l/34376766._SY475_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Blood, Sweat, and Pixels - Schreier",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348376248l/10792024.jpg",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348376248l/10792024.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Третий Рейх - Боланьо",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/9/95/The_diamond_chariot_-_bookcover.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/9/95/The_diamond_chariot_-_bookcover.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Алмазная колесница - Акунин",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/A1MURHOTzcL.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/A1MURHOTzcL.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Десять дней которые потрясли мир - Джон Рид",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/51Bw+KGlm3L.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51Bw+KGlm3L.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Инь и Ян - Акунин",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565810646l/43582376.jpg",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565810646l/43582376.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "The Body - Bill Bryson",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Автостопом по Галактике - Д. Адамс",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/9/98/RestaurantAtTheEndOfTheUniverse.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/9/98/RestaurantAtTheEndOfTheUniverse.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Ресторан в конце Вселенной - Д. Адамс",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1503566879l/23354301._SY475_.jpg",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1503566879l/23354301._SY475_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Дорогая редакция - Тимченко",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/ru/8/8d/%D0%9D%D0%B5%D1%84%D1%80%D0%B8%D1%82%D0%BE%D0%B2%D1%8B%D0%B5_%D1%87%D1%91%D1%82%D0%BA%D0%B8_%28%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8%29.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/8/8d/%D0%9D%D0%B5%D1%84%D1%80%D0%B8%D1%82%D0%BE%D0%B2%D1%8B%D0%B5_%D1%87%D1%91%D1%82%D0%BA%D0%B8_%28%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8%29.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Нефритовые четки - Акунин",
  },
  {
    src: "https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_415/63123111-sasha-sulim-bezludnoe-mesto-kak-lovyat-manyakov-v-rossii.jpg",
    thumbnail:
      "https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_415/63123111-sasha-sulim-bezludnoe-mesto-kak-lovyat-manyakov-v-rossii.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Безлюдное место - Сулим",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/51YT-uzWiuL._SX328_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51YT-uzWiuL._SX328_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Весь мир театр - Акунин",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Clean Code - R. Martin",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/49/Cover_of_The_Time_Traveler%27s_Guide_to_Medieval_England.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Cover_of_The_Time_Traveler%27s_Guide_to_Medieval_England.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Средневековая Англия - Я. Мортимер",
  },
  {
    src: "https://www.storytel.com//images/320x320/0001498335.jpg",
    thumbnail: "https://www.storytel.com//images/320x320/0001498335.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Солнце мертвых - Шмелев",
  },
  {
    src: "https://cv5.litres.ru/pub/c/elektronnaya-kniga/cover_415/4244155-edvard-radzinskiy-iosif-stalin-gibel-bogov.jpg",
    thumbnail:
      "https://cv5.litres.ru/pub/c/elektronnaya-kniga/cover_415/4244155-edvard-radzinskiy-iosif-stalin-gibel-bogov.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Иосиф Сталин. Гибель богов - Радзинский",
  },
  {
    src: "https://debuggingcss.com/images/book.jpg",
    thumbnail: "https://debuggingcss.com/images/book.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Debugging CSS - Shadeed",
  },
  {
    src: "https://i1.sndcdn.com/artworks-000114011994-vfhsko-t500x500.jpg",
    thumbnail:
      "https://i1.sndcdn.com/artworks-000114011994-vfhsko-t500x500.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Планета Вода - Акунин",
  },
  {
    src: "https://s1.livelib.ru/boocover/1001256020/o/7260/Boris_Akunin__Parus_odinokij_nostalgicheskij_detektiv.jpeg",
    thumbnail:
      "https://s1.livelib.ru/boocover/1001256020/o/7260/Boris_Akunin__Parus_odinokij_nostalgicheskij_detektiv.jpeg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Парус одинокий - Акунин",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/6/68/ARussianJournal.JPG",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/6/68/ARussianJournal.JPG",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Русский дневник - Стейнбек",
  },
  {
    src: "https://res.cloudinary.com/dolyfnals/image/upload/v1557141160/ui25mfgkuf0qmqwyvbnm.jpg",
    thumbnail:
      "https://res.cloudinary.com/dolyfnals/image/upload/v1557141160/ui25mfgkuf0qmqwyvbnm.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Unelmien NBA - Häyrinen, Möttölä",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367787355l/17885130.jpg",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367787355l/17885130.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Иосиф Сталин. Последняя загадка - Радзинский",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4b/Crimeandpunishmentcover.png",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/4/4b/Crimeandpunishmentcover.png",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Преступление и наказание - Достоевский",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/1/1f/Maybe-you-should-talk-to-someone.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/1/1f/Maybe-you-should-talk-to-someone.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Вы хотите поговорить об этом? - Л. Готтлиб",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/ru/1/1d/%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80_%D0%93%D0%B0%D1%80%D0%B8%D0%BD_%28%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%29_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/1/1d/%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80_%D0%93%D0%B0%D1%80%D0%B8%D0%BD_%28%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%29_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Доктор Гарин - Сорокин",
  },
  {
    src: "https://m.media-amazon.com/images/I/518wzjfaR7L.jpg",
    thumbnail: "https://m.media-amazon.com/images/I/518wzjfaR7L.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Куда ж нам плыть? - Акунин",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/510MOxQqeuL._SX326_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/510MOxQqeuL._SX326_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Revolutions - Furtado",
  },
  {
    src: "https://m.media-amazon.com/images/I/51oLu3mpNkL.jpg",
    thumbnail: "https://m.media-amazon.com/images/I/51oLu3mpNkL.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Герои книг на приеме у психотерапевта - A. Боттлингер",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c1/Thinking%2C_Fast_and_Slow.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/Thinking%2C_Fast_and_Slow.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Думай медленно… решай быстро - Канеман",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/ru/f/fa/%D0%90%D0%BA%D1%83%D0%BD%D0%B8%D0%BD_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4.jpeg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/f/fa/%D0%90%D0%BA%D1%83%D0%BD%D0%B8%D0%BD_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4.jpeg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Черный город - Акунин",
  },
  {
    src: "https://namednibook.ru/img/volumes/covers/1921-1930.jpg",
    thumbnail: "https://namednibook.ru/img/volumes/covers/1921-1930.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Намедни 1921-1930 - Парфенов",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/41cl5DPW8OL._SX322_BO1,204,203,200_.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/41cl5DPW8OL._SX322_BO1,204,203,200_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Птица за птицей - Ламотт",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/71nFBeupWzL.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/71nFBeupWzL.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Не прощаюсь - Акунин",
  },
  {
    src: "https://i.imgur.com/BMXAyZU.png",
    thumbnail: "https://i.imgur.com/BMXAyZU.png",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Make VS Code Awesome - Porzio",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575496058l/49094876._SY475_.jpg",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575496058l/49094876._SY475_.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Пить или не пить? - Д. Натт",
  },
  {
    src: "https://m.media-amazon.com/images/I/5181-JHGsdL.jpg",
    thumbnail: "https://m.media-amazon.com/images/I/5181-JHGsdL.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Дневники - З. Гиппиус",
  },
  {
    src: "https://alpinabook.ru/resize/820x1200/upload/iblock/37f/37f14e25d9516a412cfffa03cd57804a.jpg",
    thumbnail:
      "https://alpinabook.ru/resize/820x1200/upload/iblock/37f/37f14e25d9516a412cfffa03cd57804a.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "100 рассказов из истории медицины - М. Шифрин",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/b/bf/TheHeartOfADog_%28Mikhail_Bulgakov_novel_-_cover_art%29.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/b/bf/TheHeartOfADog_%28Mikhail_Bulgakov_novel_-_cover_art%29.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Собачье сердце - Булгаков",
  },
  {
    src: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/6880393-sasha-filipenko-10901725-byvshiy-syn.jpg",
    thumbnail:
      "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/6880393-sasha-filipenko-10901725-byvshiy-syn.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Бывший сын - Филипенко",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328868897l/99797.jpg",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328868897l/99797.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Голем - Майринк",
  },
  {
    src: "https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/9243463-sasha-filipenko-10901725-zamysly.jpg",
    thumbnail:
      "https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/9243463-sasha-filipenko-10901725-zamysly.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Замыслы - Филипенко",
  },
  {
    src: "https://images.cdn.yle.fi/image/upload/ar_1:1,b_auto:predominant_gradient:4,c_pad,d_yle-areena.jpg,f_auto,fl_lossy,q_auto:eco,w_720/v1601626132/13-1-4274369-1601626125705.jpg",
    thumbnail:
      "https://images.cdn.yle.fi/image/upload/ar_1:1,b_auto:predominant_gradient:4,c_pad,d_yle-areena.jpg,f_auto,fl_lossy,q_auto:eco,w_720/v1601626132/13-1-4274369-1601626125705.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Swannin tie - Proust",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/6/61/PulpNovel.jpg",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/6/61/PulpNovel.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Макулатура - Буковски",
  },
  {
    src: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/6376393-zinaida-gippius-yazvitelnye-zametki-o-care-staline-i-muzhe-6376393.jpg",
    thumbnail:
      "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/6376393-zinaida-gippius-yazvitelnye-zametki-o-care-staline-i-muzhe-6376393.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Язвительные заметки о Царе, Сталине и Муже - Гиппиус",
  },
  {
    src: "http://kirsinbookclub.com/wp-content/uploads/2016/03/SetWidth335-Sesta-kupeja-LAT.jpg",
    thumbnail:
      "http://kirsinbookclub.com/wp-content/uploads/2016/03/SetWidth335-Sesta-kupeja-LAT.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Hytti nro 6 - R. Liksom",
  },
  {
    src: "https://otava.fi/wp-content/uploads/isbn/9789511377474-scaled-400x0-c-default.jpeg",
    thumbnail:
      "https://otava.fi/wp-content/uploads/isbn/9789511377474-scaled-400x0-c-default.jpeg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Yhden miehen enemmistö - T. Soini",
  },
  {
    src: "https://cdn1.ozone.ru/multimedia/c1200/1000685961.jpg",
    thumbnail: "https://cdn1.ozone.ru/multimedia/c1200/1000685961.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Иностранец в смутное время - Лимонов",
  },
  {
    src: "https://otava.fi/wp-content/uploads/isbn/9789511363453-400x0-c-default.jpeg",
    thumbnail:
      "https://otava.fi/wp-content/uploads/isbn/9789511363453-400x0-c-default.jpeg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Kaikki elämästä(ni) - A. Holma",
  },
  {
    src: "https://alpinabook.ru/resize/820x1200/upload/iblock/5cb/cgtnvmdhi5cewr6ih13bnb5sqzm14vjk.jpg",
    thumbnail:
      "https://alpinabook.ru/resize/820x1200/upload/iblock/5cb/cgtnvmdhi5cewr6ih13bnb5sqzm14vjk.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Ход царем - И. Жегулев",
  },
  {
    src: "https://i.imgur.com/GrbQfAQ.png",
    thumbnail: "https://i.imgur.com/GrbQfAQ.png",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Frontend Unicorn - S. Adamiak",
  },
  {
    src: "https://m.media-amazon.com/images/I/41bEvgq9yzL.jpg",
    thumbnail: "https://m.media-amazon.com/images/I/41bEvgq9yzL.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Опасные советские вещи - А. Архипова",
  },
  {
    src: "https://s2.adlibris.com/images/7097026/mielensapahoittaja.jpg",
    thumbnail: "https://s2.adlibris.com/images/7097026/mielensapahoittaja.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Mielensäpahoittaja - T. Kyrö",
  },
  {
    src: "https://kirja.s3.amazonaws.com/prod/9789510390795_frontcover_final_medium.jpg",
    thumbnail:
      "https://kirja.s3.amazonaws.com/prod/9789510390795_frontcover_final_medium.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Mielensäpahoittaja ja ruskeakastike - T. Kyrö",
  },
  {
    src: "https://kirja.s3.amazonaws.com/prod/9789510407622_frontcover_final_medium.jpg",
    thumbnail:
      "https://kirja.s3.amazonaws.com/prod/9789510407622_frontcover_final_medium.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Ilosia aikoja, Mielensäpahoittaja - T. Kyrö",
  },
  {
    src: "https://i.imgur.com/t6VAjPu.png?1",
    thumbnail: "https://i.imgur.com/t6VAjPu.png?1",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "1947. Год, в который все началось - Э. Осбринк",
  },
  {
    src: "https://img4.labirint.ru/rc/b83c885ee94edca0ae9bc1dcd6ba6bd4/220x340/books73/728862/cover.jpg?1575534379",
    thumbnail:
      "https://img4.labirint.ru/rc/b83c885ee94edca0ae9bc1dcd6ba6bd4/220x340/books73/728862/cover.jpg?1575534379",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Средневековье крупным планом - Воскобойников ",
  },
  {
    src: "https://www.basicbooks.com/wp-content/uploads/2019/11/9781541618572.jpg?fit=500%2C750",
    thumbnail:
      "https://www.basicbooks.com/wp-content/uploads/2019/11/9781541618572.jpg?fit=500%2C750",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "The Little Ice Age - B. Fagan",
  },
  {
    src: "https://cdn1.ozone.ru/multimedia/wc1200/1000015466.jpg",
    thumbnail: "https://cdn1.ozone.ru/multimedia/wc1200/1000015466.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Томас Манн - С. Апт",
  },
  {
    src: "https://cdn1.ozone.ru/s3/multimedia-t/c1200/6013151801.jpg",
    thumbnail: "https://cdn1.ozone.ru/s3/multimedia-t/c1200/6013151801.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Старик путешествует - Лимонов",
  },
  {
    src: "https://cv4.litres.ru/pub/c/elektronnaya-kniga/cover_415/3954345-dmitriy-bykov-iks.jpg",
    thumbnail:
      "https://cv4.litres.ru/pub/c/elektronnaya-kniga/cover_415/3954345-dmitriy-bykov-iks.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Икс - Быков",
  },
  {
    src: "https://alpinabook.ru/resize/820x1200/upload/iblock/26f/3a38a26y7hcm3dbw2onyyzaqpb2se572/%D0%BE%D0%B1%D1%80%D0%B5%D1%87.jpg",
    thumbnail:
      "https://alpinabook.ru/resize/820x1200/upload/iblock/26f/3a38a26y7hcm3dbw2onyyzaqpb2se572/%D0%BE%D0%B1%D1%80%D0%B5%D1%87.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Град обреченных - Меркачева",
  },
  {
    src: "https://s1.livelib.ru/boocover/1000088363/o/9da4/Boris_Vishnevskij__Arkadij_i_Boris_Strugatskie._Dvojnaya_zvezda.jpeg",
    thumbnail:
      "https://s1.livelib.ru/boocover/1000088363/o/9da4/Boris_Vishnevskij__Arkadij_i_Boris_Strugatskie._Dvojnaya_zvezda.jpeg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Двойная звезда - Вишневский",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/71j+zmN5o-L.jpg",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/71j+zmN5o-L.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Моя жизнь - Троцкий",
  },
  {
    src: "https://s1.adlibris.com/images/60244009/navalny.jpg",
    thumbnail: "https://s1.adlibris.com/images/60244009/navalny.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Navalny - Dollbaum",
  },
  {
    src: "https://cv0.litres.ru/pub/c/elektronnaya-kniga/cover_415/48513502-boris-akunin-pervaya-s-48513502.jpg",
    thumbnail:
      "https://cv0.litres.ru/pub/c/elektronnaya-kniga/cover_415/48513502-boris-akunin-pervaya-s-48513502.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Первая сверхдержава - Акунин",
  },
  {
    src: "https://img4.labirint.ru/rc/7b92e2578ce59191315dc61cf9d6b5f2/220x340/books29/285192/cover.jpg?1563612594",
    thumbnail:
      "https://img4.labirint.ru/rc/7b92e2578ce59191315dc61cf9d6b5f2/220x340/books29/285192/cover.jpg?1563612594",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Триптих - С. Соколов",
  },
  {
    src: "https://knizhnik.org/covers/page-26895-tajnye-vidy-na-goru-fudzi.jpg",
    thumbnail:
      "https://knizhnik.org/covers/page-26895-tajnye-vidy-na-goru-fudzi.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Тайные виды на гору Фудзи - Пелевин",
  },
  {
    src: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20_hu7d9a813cf46675dfb7b1bf4930cee733_2802494_500x0_resize_q75_box.jpg",
    thumbnail:
      "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20_hu7d9a813cf46675dfb7b1bf4930cee733_2802494_500x0_resize_q75_box.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Программист-прагматик - Д. Томас",
  },
  {
    src: "https://ereolen.dk/sites/default/files/styles/ding_primary_large/public/ting/covers/MTUwMDYxLWVib2c6T0ROMDAwNTQ1NDE3Ng%3D%3D.jpg?itok=okKlHmbu",
    thumbnail:
      "https://ereolen.dk/sites/default/files/styles/ding_primary_large/public/ting/covers/MTUwMDYxLWVib2c6T0ROMDAwNTQ1NDE3Ng%3D%3D.jpg?itok=okKlHmbu",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Breathe - Nestor",
  },
  {
    src: "https://pup-assets.imgix.net/onix/images/9780691211411.jpg",
    thumbnail: "https://pup-assets.imgix.net/onix/images/9780691211411.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Spin Dictators - S. Guriev & D. Treisman",
  },
  {
    src: "https://ndc.book24.ru/resize/820x1180/iblock/464/464fe7c5fe5706ca14b76588390b0aa6/b16a755fc97050c54f5c896b37eabaad.jpg",
    thumbnail:
      "https://ndc.book24.ru/resize/820x1180/iblock/464/464fe7c5fe5706ca14b76588390b0aa6/b16a755fc97050c54f5c896b37eabaad.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Spin Dictators - S. Guriev & D. Treisman",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b0/The_God_Equation.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/b/b0/The_God_Equation.jpg",
    thumbnailWidth: 150,
    thumbnailHeight: 174,
    caption: "Уравнение Бога - М. Каку",
  },
];

export default IMAGES;
