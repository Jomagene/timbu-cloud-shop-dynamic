import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const apikey = import.meta.env.VITE_APP_TIMBU_API_KEY;
  const apId = import.meta.env.VITE_APP_APP_ID;
  const orgId = import.meta.env.VITE_APP_ORGANIZATION_ID;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      const data_Url = "https://timbu-get-all-products.reavdev.workers.dev/";

      try {
        const response = await axios.get(data_Url, {
          params: {
            organization_id: orgId,
            reverse_sort: false,
            page: currentPage,
            size: 30,
            Appid: apId,
            Apikey: apikey,
          },
        });

        if (response.status === 200) {
          setProducts(response.data.items || []);
        }
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const regManShoe = /s\d+/;
  const regManPant = /p\d+/;
  const regWomanDress = /d\d+/;
  const regWoanPurse = /pu\d+/;
  const regKid = /ki\d+/;

  const extractIdNumber = (unique_id) => parseInt(unique_id.match(/\d+/)[0]);

  const shoes = products.filter((item) => regManShoe.test(item.unique_id));
  const pants = products.filter((item) => regManPant.test(item.unique_id));
  const purses = products.filter((item) => regWoanPurse.test(item.unique_id));
  const dresses = products.filter((item) => regWomanDress.test(item.unique_id));
  const kids = products.filter((item) => regKid.test(item.unique_id));

  shoes.sort(
    (a, b) => extractIdNumber(a.unique_id) - extractIdNumber(b.unique_id)
  );
  pants.sort(
    (a, b) => extractIdNumber(a.unique_id) - extractIdNumber(b.unique_id)
  );
  purses.sort(
    (a, b) => extractIdNumber(a.unique_id) - extractIdNumber(b.unique_id)
  );
  dresses.sort(
    (a, b) => extractIdNumber(a.unique_id) - extractIdNumber(b.unique_id)
  );
  kids.sort(
    (a, b) => extractIdNumber(a.unique_id) - extractIdNumber(b.unique_id)
  );

  const [pant1, pant2, pant3, pant4, pant5, pant6] = pants.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[0]?.url}`
  );
  const [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6] = shoes.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[0]?.url}`
  );
  const [dress1, dress2, dress3, dress4, dress5, dress6] = dresses.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[0]?.url}`
  );
  const [bag1, bag2, bag3, bag4, bag5, bag6] = purses.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[0]?.url}`
  );
  const [kid1, kid2, kid3, kid4, kid5, kid6] = kids.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[0]?.url}`
  );

  const [sTitle1, sTitle2, sTitle3, sTitle4, sTitle5, sTitle6] = shoes.map(
    (item) => item.name
  );
  const [pTitle1, pTitle2, pTitle3, pTitle4, pTitle5, pTitle6] = pants.map(
    (item) => item.name
  );
  const [puTitle1, puTitle2, puTitle3, puTitle4, puTitle5, puTitle6] =
    purses.map((item) => item.name);
  const [dTitle1, dTitle2, dTitle3, dTitle4, dTitle5, dTitle6] = dresses.map(
    (item) => item.name
  );
  const [kiTitle1, kiTitle2, kiTitle3, kiTitle4, kiTitle5, kiTitle6] = kids.map(
    (item) => item.name
  );

  const [sPrice1, sPrice2, sPrice3, sPrice4, sPrice5, sPrice6] = shoes.map(
    (item) => item.price
  );
  const [pPrice1, pPrice2, pPrice3, pPrice4, pPrice5, pPrice6] = pants.map(
    (item) => item.price
  );
  const [puPrice1, puPrice2, puPrice3, puPrice4, puPrice5, puPrice6] =
    purses.map((item) => item.price);
  const [dPrice1, dPrice2, dPrice3, dPrice4, dPrice5, dPrice6] = dresses.map(
    (item) => item.price
  );
  const [kiPrice1, kiPrice2, kiPrice3, kiPrice4, kiPrice5, kiPrice6] = kids.map(
    (item) => item.price
  );

  const products_datA = {
    men: {
      pants: [
        { id: 1, picture: pant1, title: pTitle1, price: pPrice1 },
        { id: 2, picture: pant2, title: pTitle2, price: pPrice2 },
        { id: 3, picture: pant3, title: pTitle3, price: pPrice3 },
        { id: 4, picture: pant4, title: pTitle4, price: pPrice4 },
        { id: 5, picture: pant5, title: pTitle5, price: pPrice5 },
        { id: 6, picture: pant6, title: pTitle6, price: pPrice6 },
      ],
      shoes: [
        { id: 1, picture: shoe1, title: sTitle1, price: sPrice1 },
        { id: 2, picture: shoe2, title: sTitle2, price: sPrice2 },
        { id: 3, picture: shoe3, title: sTitle3, price: sPrice3 },
        { id: 4, picture: shoe4, title: sTitle4, price: sPrice4 },
        { id: 5, picture: shoe5, title: sTitle5, price: sPrice5 },
        { id: 6, picture: shoe6, title: sTitle6, price: sPrice6 },
      ],
    },
    women: {
      dress: [
        { id: 1, picture: dress1, title: dTitle1, price: dPrice1 },
        { id: 2, picture: dress2, title: dTitle2, price: dPrice2 },
        { id: 3, picture: dress3, title: dTitle3, price: dPrice3 },
        { id: 4, picture: dress4, title: dTitle4, price: dPrice4 },
        { id: 5, picture: dress5, title: dTitle5, price: dPrice5 },
        { id: 6, picture: dress6, title: dTitle6, price: dPrice6 },
      ],
      purse: [
        { id: 1, picture: bag1, title: puTitle1, price: puPrice1 },
        { id: 2, picture: bag2, title: puTitle2, price: puPrice2 },
        { id: 3, picture: bag3, title: puTitle3, price: puPrice3 },
        { id: 4, picture: bag4, title: puTitle4, price: puPrice4 },
        { id: 5, picture: bag5, title: puTitle5, price: puPrice5 },
        { id: 6, picture: bag6, title: puTitle6, price: puPrice6 },
      ],
    },
    children: {
      all: [
        { id: 1, picture: kid1, title: kiTitle1, price: kiPrice1 },
        { id: 2, picture: kid2, title: kiTitle2, price: kiPrice2 },
        { id: 3, picture: kid3, title: kiTitle3, price: kiPrice3 },
        { id: 4, picture: kid4, title: kiTitle4, price: kiPrice4 },
        { id: 5, picture: kid5, title: kiTitle5, price: kiPrice5 },
        { id: 6, picture: kid6, title: kiTitle6, price: kiPrice6 },
      ],
    },
  };

  return (
    <ProductContext.Provider value={{ products_datA, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
