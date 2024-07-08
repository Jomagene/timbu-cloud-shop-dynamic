import {
  bag1,
  bag2,
  bag3,
  bag4,
  bag5,
  bag6,
  dress1,
  dress2,
  dress3,
  dress4,
  dress5,
  dress6,
  kid1,
  kid2,
  kid3,
  kid4,
  kid5,
  kid6,
  pant1,
  pant2,
  pant3,
  pant4,
  pant5,
  pant6,
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
  shoe1,
  shoe2,
  shoe3,
  shoe4,
  shoe5,
  shoe6,
} from "./assets/icons-images";

const products_data = {
  men: {
    pants: [
      { id: 1, picture: pant1, title: "Stradivarius", price: "£12.99" },
      { id: 2, picture: pant2, title: "Mocassin", price: "£32.99" },
      { id: 3, picture: pant3, title: "Mocassin", price: "£14.99" },
      { id: 4, picture: pant4, title: "Stretch Khakis", price: "£12.99" },
      { id: 5, picture: pant5, title: "Stretch Beige", price: "£22.99" },
      { id: 6, picture: pant6, title: "Mocassin", price: "£32.99" },
    ],
    shoes: [
      { id: 1, picture: shoe1, title: "COLID", price: "£12.99" },
      { id: 2, picture: shoe2, title: "TOmmy Hilifiger", price: "£32.99" },
      { id: 3, picture: shoe3, title: "Colored Airforce", price: "£14.99" },
      { id: 4, picture: shoe4, title: "Brogues", price: "£12.99" },
      { id: 5, picture: shoe5, title: "Loafers", price: "£22.99" },
      { id: 6, picture: shoe6, title: "Mocassin", price: "£32.99" },
    ],
  },
  women: {
    dress: [
      { id: 1, picture: dress1, title: "Stradivarius", price: "£12.99" },
      { id: 2, picture: dress2, title: "Mocassin", price: "£32.99" },
      { id: 3, picture: dress3, title: "Mocassin", price: "£14.99" },
      { id: 4, picture: dress4, title: "Stretch Khakis", price: "£12.99" },
      { id: 5, picture: dress5, title: "Stretch Beige", price: "£22.99" },
      { id: 6, picture: dress6, title: "Mocassin", price: "£32.99" },
    ],
    purse: [
      { id: 1, picture: bag1, title: "COLID", price: "£12.99" },
      { id: 2, picture: bag2, title: "TOmmy Hilifiger", price: "£32.99" },
      { id: 3, picture: bag3, title: "Colored Airforce", price: "£14.99" },
      { id: 4, picture: bag4, title: "Brogues", price: "£12.99" },
      { id: 5, picture: bag5, title: "Loafers", price: "£22.99" },
      { id: 6, picture: bag6, title: "Mocassin", price: "£32.99" },
    ],
  },
  children: {
    all: [
      { id: 1, picture: kid1, title: "Mocassin", price: "£12.99" },
      { id: 2, picture: kid2, title: "Mocassin", price: "£32.99" },
      { id: 3, picture: kid3, title: "Mocassin", price: "£14.99" },
      { id: 4, picture: kid4, title: "Mocassin", price: "£12.99" },
      { id: 5, picture: kid5, title: "Mocassin", price: "£22.99" },
      { id: 6, picture: kid6, title: "Mocassin", price: "£32.99" },
    ],
  },
};

export const testimonials = [
  {
    id: "1",
    name: "Brandon Smidth",
    picture: profile1,
    speech:
      "I really enjoyed my other that i had to refer all my friend. Deliivery was realy fast and there were no complications with my package",
  },
  {
    id: "2",
    name: "Jane Doe",
    picture: profile2,
    speech:
      "Love the products at Timbo Shop, but had an issue with stock updates. Customer service resolved it quickly. Will shop again",
  },
  {
    id: "3",
    name: "Yusuf Abdul",
    picture: profile3,
    speech:
      "I love the variety and quality of products at Timbo Shop, but I had a few issues with my recent order. The team was helpful in resolving the issue",
  },
  {
    id: "4",
    name: "Peter Parker",
    picture: profile4,
    speech:
      "Love the products at Timbo Shop, but had an issue with stock updates. Customer service resolved it quickly. Will shop again",
  },
  {
    id: "5",
    name: "Blessing Tutka",
    picture: profile5,
    speech:
      "Fantastic experience at Timbo Shop! Great product selection, high quality, and fast shipping. Highly recommend!",
  },
  {
    id: "6",
    name: "Semjo",
    picture: profile6,
    speech:
      "I really enjoyed my other that i had to refer all my friend. Deliivery was realy fast and there were no complications with my package",
  },
];

export default products_data;
