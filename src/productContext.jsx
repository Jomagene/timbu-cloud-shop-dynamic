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
    (item) => `https://api.timbu.cloud/images/${item.photos[3]?.url}`
  );
  const [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6] = shoes.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[3]?.url}`
  );
  const [dress1, dress2, dress3, dress4, dress5, dress6] = dresses.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[1]?.url}`
  );
  const [bag1, bag2, bag3, bag4, bag5, bag6] = purses.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[3]?.url}`
  );
  const [kid1, kid2, kid3, kid4, kid5, kid6] = kids.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[3]?.url}`
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
    (item) =>
      item.current_price?.[0]?.NGN?.[0] || item.current_price?.[0]?.CDF?.[0]
  );
  const [pPrice1, pPrice2, pPrice3, pPrice4, pPrice5, pPrice6] = pants.map(
    (item) =>
      item.current_price?.[0]?.NGN?.[0] || item.current_price?.[0]?.CDF?.[0]
  );
  const [puPrice1, puPrice2, puPrice3, puPrice4, puPrice5, puPrice6] =
    purses.map(
      (item) =>
        item.current_price?.[0]?.NGN?.[0] || item.current_price?.[0]?.CDF?.[0]
    );
  const [dPrice1, dPrice2, dPrice3, dPrice4, dPrice5, dPrice6] = dresses.map(
    (item) =>
      item.current_price?.[0]?.NGN?.[0] || item.current_price?.[0]?.CDF?.[0]
  );
  const [kiPrice1, kiPrice2, kiPrice3, kiPrice4, kiPrice5, kiPrice6] = kids.map(
    (item) =>
      item.current_price?.[0]?.NGN?.[0] || item.current_price?.[0]?.CDF?.[0]
  );

  const [Pic0_1, Pic0_2, Pic0_3, Pic0_4, Pic0_5, Pic0_6] = pants.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[0]?.url}`
  );
  const [Pic1_1, Pic1_2, Pic1_3, Pic1_4, Pic1_5, Pic1_6] = pants.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[1]?.url}`
  );
  const [Pic2_1, Pic2_2, Pic2_3, Pic2_4, Pic2_5, Pic2_6] = pants.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[2]?.url}`
  );

  const [shoe0_1, shoe0_2, shoe0_3, shoe0_4, shoe0_5, shoe0_6] = shoes.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[0]?.url}`
  );
  const [shoe1_1, shoe1_2, shoe1_3, shoe1_4, shoe1_5, shoe1_6] = shoes.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[1]?.url}`
  );
  const [shoe2_1, shoe2_2, shoe2_3, shoe2_4, shoe2_5, shoe2_6] = shoes.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[2]?.url}`
  );

  const [dress0_1, dress0_2, dress0_3, dress0_4, dress0_5, dress0_6] =
    dresses.map(
      (item) => `https://api.timbu.cloud/images/${item.photos[0]?.url}`
    );
  const [dress1_1, dress1_2, dress1_3, dress1_4, dress1_5, dress1_6] =
    dresses.map(
      (item) => `https://api.timbu.cloud/images/${item.photos[2]?.url}`
    );
  const [dress2_1, dress2_2, dress2_3, dress2_4, dress2_5, dress2_6] =
    dresses.map(
      (item) => `https://api.timbu.cloud/images/${item.photos[3]?.url}`
    );

  const [purse0_1, purse0_2, purse0_3, purse0_4, purse0_5, purse0_6] =
    purses.map(
      (item) => `https://api.timbu.cloud/images/${item.photos[0]?.url}`
    );
  const [purse1_1, purse1_2, purse1_3, purse1_4, purse1_5, purse1_6] =
    purses.map(
      (item) => `https://api.timbu.cloud/images/${item.photos[1]?.url}`
    );
  const [purse2_1, purse2_2, purse2_3, purse2_4, purse2_5, purse2_6] =
    purses.map(
      (item) => `https://api.timbu.cloud/images/${item.photos[2]?.url}`
    );

  const [kid0_1, kid0_2, kid0_3, kid0_4, kid0_5, kid0_6] = kids.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[0]?.url}`
  );
  const [kid1_1, kid1_2, kid1_3, kid1_4, kid1_5, kid1_6] = kids.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[1]?.url}`
  );
  const [kid2_1, kid2_2, kid2_3, kid2_4, kid2_5, kid2_6] = kids.map(
    (item) => `https://api.timbu.cloud/images/${item.photos[2]?.url}`
  );

  const products_datA = {
    men: {
      pants: [
        {
          id: "p1",
          picture: pant1,
          title: pTitle1,
          price: pPrice1,
          pic1: Pic0_1,
          pic2: Pic1_1,
          pic3: Pic2_1,
        },
        {
          id: "p2",
          picture: pant2,
          title: pTitle2,
          price: pPrice2,
          pic1: Pic0_2,
          pic2: Pic1_2,
          pic3: Pic2_2,
        },
        {
          id: "p3",
          picture: pant3,
          title: pTitle3,
          price: pPrice3,
          pic1: Pic0_3,
          pic2: Pic1_3,
          pic3: Pic2_3,
        },
        {
          id: "p4",
          picture: pant4,
          title: pTitle4,
          price: pPrice4,
          pic1: Pic0_4,
          pic2: Pic1_4,
          pic3: Pic2_4,
        },
        {
          id: "p5",
          picture: pant5,
          title: pTitle5,
          price: pPrice5,
          pic1: Pic0_5,
          pic2: Pic1_5,
          pic3: Pic2_5,
        },
        {
          id: "p6",
          picture: pant6,
          title: pTitle6,
          price: pPrice6,
          pic1: Pic0_6,
          pic2: Pic1_6,
          pic3: Pic2_6,
        },
      ],
      shoes: [
        {
          id: "s1",
          picture: shoe1,
          title: sTitle1,
          price: sPrice1,
          pic1: shoe0_1,
          pic2: shoe1_1,
          pic3: shoe2_1,
        },
        {
          id: "s2",
          picture: shoe2,
          title: sTitle2,
          price: sPrice2,
          pic1: shoe0_2,
          pic2: shoe1_2,
          pic3: shoe2_2,
        },
        {
          id: "s3",
          picture: shoe3,
          title: sTitle3,
          price: sPrice3,
          pic1: shoe0_3,
          pic2: shoe1_3,
          pic3: shoe2_3,
        },
        {
          id: "s4",
          picture: shoe4,
          title: sTitle4,
          price: sPrice4,
          pic1: shoe0_4,
          pic2: shoe1_4,
          pic3: shoe2_4,
        },
        {
          id: "s5",
          picture: shoe5,
          title: sTitle5,
          price: sPrice5,
          pic1: shoe0_5,
          pic2: shoe1_5,
          pic3: shoe2_5,
        },
        {
          id: "s6",
          picture: shoe6,
          title: sTitle6,
          price: sPrice6,
          pic1: shoe0_6,
          pic2: shoe1_6,
          pic3: shoe2_6,
        },
      ],
    },
    women: {
      dress: [
        {
          id: "d1",
          picture: dress1,
          title: dTitle1,
          price: dPrice1,
          pic1: dress0_1,
          pic2: dress1_1,
          pic3: dress2_1,
        },
        {
          id: "d2",
          picture: dress2,
          title: dTitle2,
          price: dPrice2,
          pic1: dress0_2,
          pic2: dress1_2,
          pic3: dress2_2,
        },
        {
          id: "d3",
          picture: dress3,
          title: dTitle3,
          price: dPrice3,
          pic1: dress0_3,
          pic2: dress1_3,
          pic3: dress2_3,
        },
        {
          id: "d4",
          picture: dress4,
          title: dTitle4,
          price: dPrice4,
          pic1: dress0_4,
          pic2: dress1_4,
          pic3: dress2_4,
        },
        {
          id: "d5",
          picture: dress5,
          title: dTitle5,
          price: dPrice5,
          pic1: dress0_5,
          pic2: dress1_5,
          pic3: dress2_5,
        },
        {
          id: "d6",
          picture: dress6,
          title: dTitle6,
          price: dPrice6,
          pic1: dress0_6,
          pic2: dress1_6,
          pic3: dress2_6,
        },
      ],
      purse: [
        {
          id: "pu1",
          picture: bag1,
          title: puTitle1,
          price: puPrice1,
          pic1: purse0_1,
          pic2: purse1_1,
          pic3: purse2_1,
        },
        {
          id: "pu2",
          picture: bag2,
          title: puTitle2,
          price: puPrice2,
          pic1: purse0_2,
          pic2: purse1_2,
          pic3: purse2_2,
        },
        {
          id: "pu3",
          picture: bag3,
          title: puTitle3,
          price: puPrice3,
          pic1: purse0_3,
          pic2: purse1_3,
          pic3: purse2_3,
        },
        {
          id: "pu4",
          picture: bag4,
          title: puTitle4,
          price: puPrice4,
          pic1: purse0_4,
          pic2: purse1_4,
          pic3: purse2_4,
        },
        {
          id: "pu5",
          picture: bag5,
          title: puTitle5,
          price: puPrice5,
          pic1: purse0_5,
          pic2: purse1_5,
          pic3: purse2_5,
        },
        {
          id: "pu6",
          picture: bag6,
          title: puTitle6,
          price: puPrice6,
          pic1: purse0_6,
          pic2: purse1_6,
          pic3: purse2_6,
        },
      ],
    },
    children: {
      all: [
        {
          id: "ki1",
          picture: kid1,
          title: kiTitle1,
          price: kiPrice1,
          pic1: kid0_1,
          pic2: kid1_1,
          pic3: kid2_1,
        },
        {
          id: "ki2",
          picture: kid2,
          title: kiTitle2,
          price: kiPrice2,
          pic1: kid0_2,
          pic2: kid1_2,
          pic3: kid2_2,
        },
        {
          id: "ki3",
          picture: kid3,
          title: kiTitle3,
          price: kiPrice3,
          pic1: kid0_3,
          pic2: kid1_3,
          pic3: kid2_3,
        },
        {
          id: "ki4",
          picture: kid4,
          title: kiTitle4,
          price: kiPrice4,
          pic1: kid0_4,
          pic2: kid1_4,
          pic3: kid2_4,
        },
        {
          id: "ki5",
          picture: kid5,
          title: kiTitle5,
          price: kiPrice5,
          pic1: kid0_5,
          pic2: kid1_5,
          pic3: kid2_5,
        },
        {
          id: "ki6",
          picture: kid6,
          title: kiTitle6,
          price: kiPrice6,
          pic1: kid0_6,
          pic2: kid1_6,
          pic3: kid2_6,
        },
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
