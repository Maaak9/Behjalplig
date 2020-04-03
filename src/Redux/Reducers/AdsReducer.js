const defaultState = {
  map: {
    1234: {
      title: 'Hjälp med inköp av matvaror',
      location: {
        county: 'Västra götaland',
        city: 'Göteborg',
        zipcode: 41273,
        cords: { long: 10, lat: 20 },
      },
      date: 1,
      description: 'description Add1',
      img: 'https://static.mathem.se/images/foodbags/matkasse-vego.jpg',
      category: 'food',
      isSearchingFor: true,
    },
    1235: {
      title: 'Hjälper till med inköp av matvaror',
      location: {
        county: 'Västra götaland',
        city: 'Kungälv',
        zipcode: 41273,
        cords: { long: 10, lat: 20 },
      },
      date: 2,
      description: 'description Add2',
      img: 'https://static.mathem.se/images/foodbags/matkasse-vego.jpg',
      category: 'food',
      isSearchingFor: false,

    },
    1236: {
      title: 'Hjälp med rastning av hund',
      location: {
        county: 'Västra götaland',
        city: 'Göteborg',
        zipcode: 41273,
        cords: { long: 10, lat: 20 },
      },
      date: 5,
      description: 'description Add3',
      img: 'https://lh3.googleusercontent.com/proxy/jAkWehgFOm73FZRiP95S3YiWOFvZbcR1KVK6KW08NEx3Cj_otye8g__nKruVdo3FDiIwSpCqe58IxImVIRDhv7HWNTo3YXuIziN7SvV8mXYMG_jMOQ0w2yu-OISWjti_',
      category: 'food',
      isSearchingFor: true,

    },
    1237: {
      title: 'Add4',
      location: {
        county: 'Västra götaland',
        city: 'Göteborg',
        zipcode: 41273,
        cords: { long: 10, lat: 20 },
      },
      date: 10,
      description: 'description Add4',
      img: 'https://static.mathem.se/images/foodbags/matkasse-vego.jpg',
      category: 'food',
      isSearchingFor: true,

    },
    1238: {
      title: 'Add5',
      location: {
        county: 'Västra götaland',
        city: 'Göteborg',
        zipcode: 41273,
        cords: { long: 10, lat: 20 },
      },
      date: 2,
      description: 'description Add5',
      img: 'https://static.mathem.se/images/foodbags/matkasse-vego.jpg',
      category: 'food',
      isSearchingFor: true,

    }
  },
};


const AdsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_ADDS': {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default AdsReducer;
