// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    "id": 1,
    "type": "House",
    "name": "House 1",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    "image": House1,
    "imageLg": House1Lg,
    "country": "United States",
    "address": "7240C Argyle St. Lawndale, CA 90260",
    "bedrooms": "6",
    "bathrooms": "3",
    "surface": "4200 sq ft",
    "year": "2016",
    "price": "110000",
    "agent": {
      "image": Agent1,
      "name": "Patricia Tullert",
      "phone": "0123 456 78910"
    }
  },
  {
    "id": 2,
    "type": "House",
    "name": "House 2",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    "image": House2,
    "imageLg": House2Lg,
    "country": "Canada",
    "address": "798 Talbot St. Bridgewater, NJ 08807",
    "bedrooms": "6",
    "bathrooms": "3",
    "surface": "4200 sq ft",
    "year": "2016",
    "price": "140000",
    "agent": {
      "image": Agent2,
      "name": "Daryl Hawker",
      "phone": "0123 456 78910"
    }
  },
  {
    "id": 3,
    "type": "House",
    "name": "House 3",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    "image": House3,
    "imageLg": House3Lg,
    "country": "United States",
    "address": "2 Glen Creek St. Alexandria, VA 22304",
    "bedrooms": "6",
    "bathrooms": "3",
    "surface": "4200 sq ft",
    "year": "2016",
    "price": "170000",
    "agent": {
      "image": Agent3,
      "name": "Amado Smith",
      "phone": "0123 456 78910"
    }
  },
  {
    "id": 19,
    "type": "House",
    "name": "House - Bangalore",
    "description": "Beautiful independent house located in a calm residential area of Bangalore...",
    "image": House10,
    "imageLg": House10Lg,
    "country": "India",
    "address": "12 MG Road, Indiranagar, Bangalore, Karnataka 560038",
    "bedrooms": "4",
    "bathrooms": "3",
    "surface": "2800 sq ft",
    "year": "2018",
    "price": "₹95,00,000",
    "agent": {
      "image": Agent6,
      "name": "Anjali Menon",
      "phone": "+91 98765 43210"
    }
  },
  {
    "id": 4,
    "type": "House",
    "name": "House 4",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    "image": House4,
    "imageLg": House4Lg,
    "country": "Canada",
    "address": "84 Woodland St. Cocoa, FL 32927",
    "bedrooms": "6",
    "bathrooms": "3",
    "surface": "4200 sq ft",
    "year": "2016",
    "price": "200000",
    "agent": {
      "image": Agent4,
      "name": "Kaitlyn Gonzalez",
      "phone": "0123 456 78910"
    }
  },
  {
    "id": 5,
    "type": "House",
    "name": "House 5",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    "image": House5,
    "imageLg": House5Lg,
    "country": "United States",
    "address": "28 Westport Dr. Warminster, PA 18974",
    "bedrooms": "5",
    "bathrooms": "3",
    "surface": "4200 sq ft",
    "year": "2015",
    "price": "210000",
    "agent": {
      "image": Agent5,
      "name": "Grover Robinson",
      "phone": "0123 456 78910"
    }
  },
  {
    "id": 6,
    "type": "House",
    "name": "House 6",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    "image": House6,
    "imageLg": House6Lg,
    "country": "Canada",
    "address": "32 Pawnee Street Butte, MT 59701",
    "bedrooms": "6",
    "bathrooms": "3",
    "surface": "6200 sq ft",
    "year": "2014",
    "price": "220000",
    "agent": {
      "image": Agent6,
      "name": "Karen Sorensen",
      "phone": "0123 456 78910"
    }
  },
  {
    "id": 7,
    "type": "Apartament",
    "name": "Apartament 1",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    "image": Apartment1,
    "imageLg": Apartment1Lg,
    "country": "Canada",
    "address": "32 Pawnee Street Butte, MT 59701",
    "bedrooms": "2",
    "bathrooms": "1",
    "surface": "1200 sq ft",
    "year": "2012",
    "price": "20000",
    "agent": {
      "image": Agent7,
      "name": "Jawhar Shamil Naser",
      "phone": "0123 456 78910"
    }
  },
  {
    "id": 20,
    "type": "Apartament",
    "name": "Apartament - Mumbai",
    "description": "Compact and elegant apartment located in Mumbai with sea-facing balcony...",
    "image": Apartment4,
    "imageLg": Apartment4Lg,
    "country": "India",
    "address": "22 Carter Road, Bandra West, Mumbai, Maharashtra 400050",
    "bedrooms": "2",
    "bathrooms": "2",
    "surface": "1100 sq ft",
    "year": "2020",
    "price": "₹1,20,00,000",
    "agent": {
      "image": Agent8,
      "name": "Rohan Malhotra",
      "phone": "+91 99876 54321"
    }
  },
  {
    "id": 8,
    "type": "Apartament",
    "name": "Apartament 2",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    "image": Apartment2,
    "imageLg": Apartment2Lg,
    "country": "United States",
    "address": "28 Westport Dr. Warminster, PA 18974",
    "bedrooms": "3",
    "bathrooms": "1",
    "surface": "1000 sq ft",
    "year": "2011",
    "price": "30000",
    "agent": {
      "image": Agent8,
      "name": "Juana Douglass",
      "phone": "0123 456 78910"
    }
  },
  {
    "id": 9,
    "type": "Apartament",
    "name": "Apartament 3",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    "image": Apartment3,
    "imageLg": Apartment3Lg,
    "country": "United States",
    "address": "84 Woodland St. Cocoa, FL 32927",
    "bedrooms": "2",
    "bathrooms": "1",
    "surface": "1100 sq ft",
    "year": "2011",
    "price": "40000",
    "agent": {
      "image": Agent9,
      "name": "Jerry Schenck",
      "phone": "0123 456 78910"
    }
  },
  {
    "id": 10,
    "type": "House",
    "name": "House 7",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    "image": House7,
    "imageLg": House7Lg,
    "country": "Canada",
    "address": "7240C Argyle St. Lawndale, CA 90260",
    "bedrooms": "5",
    "bathrooms": "3",
    "surface": "3200 sq ft",
    "year": "2015",
    "price": "117000",
    "agent": {
      "image": Agent10,
      "name": "Vera Levesque",
      "phone": "0123 456 78910"
    }
  },
  {
    "id": 11,
    "type": "House",
    "name": "House 8",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    "image": House8,
    "imageLg": House8Lg,
    "country": "Canada",
    "address": "798 Talbot St. Bridgewater, NJ 08807",
    "bedrooms": "7",
    "bathrooms": "2",
    "surface": "2200 sq ft",
    "year": "2019",
    "price": "145000",
    "agent": {
      "image": Agent11,
      "name": "Sofia Gomes",
      "phone": "0123 456 78910"
    }
  },
  {
    "id": 21,
    "type": "House",
    "name": "House - Hyderabad",
    "description": "Spacious villa located in the heart of Hyderabad...",
    "image": House11,
    "imageLg": House11Lg,
    "country": "India",
    "address": "45 Banjara Hills, Hyderabad, Telangana 500034",
    "bedrooms": "5",
    "bathrooms": "4",
    "surface": "3500 sq ft",
    "year": "2017",
    "price": "₹1,15,00,000",
    "agent": {
      "image": Agent1,
      "name": "Sahana Iyer",
      "phone": "+91 91234 56789"
    }
  },
  {
    "id": 12,
    "type": "House",
    "name": "House 9",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    "image": House9,
    "imageLg": House9Lg,
    "country": "United States",
    "address": "2 Glen Creek St. Alexandria, VA 22304",
    "bedrooms": "4",
    "bathrooms": "4",
    "surface": "4600 sq ft",
    "year": "2015",
    "price": "139000",
    "agent": {
      "image": Agent12,
      "name": "Raymond Hood",
      "phone": "0123 456 78910"
    }
  },
  {
    "id": 22,
    "type": "Apartament",
    "name": "Apartament - New Delhi",
    "description": "Modern apartment in New Delhi, situated in a gated community...",
    "image": Apartment5,
    "imageLg": Apartment5Lg,
    "country": "India",
    "address": "110 DLF Phase II, Gurgaon, New Delhi NCR 122002",
    "bedrooms": "3",
    "bathrooms": "2",
    "surface": "1400 sq ft",
    "year": "2021",
    "price": "₹87,00,000",
    "agent": {
      "image": Agent9,
      "name": "Rajeev Bhatia",
      "phone": "+91 98700 12345"
    }
  },
  {
    "id": 23,
    "type": "House",
    "name": "House - Bhubaneswar",
    "description": "Spacious and modern independent house located in a peaceful neighborhood of Bhubaneswar.",
    "image": House12,
    "imageLg": House12Lg,
    "country": "India",
    "address": "5A Shastri Nagar, Bhubaneswar, Odisha 751010",
    "bedrooms": "5",
    "bathrooms": "4",
    "surface": "3500 sq ft",
    "year": "2020",
    "price": "₹1,20,00,000",
    "agent": {
      "image": Agent3,
      "name": "Ravi Kumar",
      "phone": "+91 98765 54321"
    }
  },
  {
    "id": 24,
    "type": "Apartment",
    "name": "Apartment - Bhubaneswar",
    "description": "Modern apartment with premium amenities located in the heart of Bhubaneswar, perfect for a family.",
    "image": Apartment6,
    "imageLg": Apartment6Lg,
    "country": "India",
    "address": "Sector 3, Smart City, Bhubaneswar, Odisha 751030",
    "bedrooms": "3",
    "bathrooms": "2",
    "surface": "1800 sq ft",
    "year": "2021",
    "price": "₹75,00,000",
    "agent": {
      "image": Agent10,
      "name": "Priya Sahu",
      "phone": "+91 98765 98765"
    }
  }
  
  
  
]

