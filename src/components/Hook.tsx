import { useState, useEffect } from "react";

const url = "https://evening-mesa-82321.herokuapp.com/api/books";

const FetchData = () => {
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    const response = await fetch(url);
    const screens = await response.json();
    setData(screens);
  };

  useEffect(() => {
    getData();
  }, []);
  return data;
};

export const fetchedBooks = () => {
  const data = FetchData();

  return data
    .sort((max, min) => max.year - min.year)
    .map((book) => (
      <div
        key={book.id}
        style={{
          border: "1px solid black",
          padding: "5px",
          maxWidth: "200px",
          height: "300px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={book.picture}
          alt="book cover"
          style={{
            maxWidth: "130px",
            maxHeight: "150px",
          }}
        />
        <div>
          {book.title} by {book.author}
        </div>
        <a href={book.url}>Info</a>
        <div>{`${book.day}.${book.month}.${book.year}`}</div>
        <p>{"⭐️".repeat(book.stars)}</p>
      </div>
    ));
};
