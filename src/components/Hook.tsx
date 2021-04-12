import { useState, useEffect } from "react";

const url = "https://blueberry-cupcake-53839.herokuapp.com/api/persons";

const UseEffectFetchData = () => {
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    const response = await fetch(url);
    const screens = await response.json();
    setData(screens);
  };

  useEffect(() => {
    getData();
  });
  return data;
};

export default UseEffectFetchData;
