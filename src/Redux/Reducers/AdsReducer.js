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
      description: "vitae enim vitae dolor ullamcorper porta. Donec semper in enim vel vestibulum. Donec rhoncus non felis at ultricies. Phasellus sem dolor, finibus mollis dictum quis, vulputate vitae lorem. Aliquam mattis nisi ac nisl molestie, vitae molestie massa elementum. Nulla tincidunt, velit et molestie iaculis, odio arcu rhoncus enim, vestibulum rutrum mauris nunc sit amet orci. Phasellus ultricies, ante non commodo efficitur, neque felis tempus orci, vestibulum malesuada ante ligula ac ex. Mauris mattis dui convallis, rutrum lorem vel, blandit lectus. Fusce viverra elit sed ultrices im",
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
      description: "Donec eu eros vestibulum, accumsan lacus ac, ultricies risus. In eget tellus vestibulum, dictum neque a, tincidunt quam. Suspendisse pellentesque massa nec luctus dictum. Pellentesque posuere leo ante, a malesuada lacus rutrum nec. Pellentesque nec pulvinar erat. Nunc ornare id leo sed sagittis. Curabitur dignissim ipsum turpis, sed gravida sem faucibus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan dictum magna.",
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
      description: "Cras eu mi non ipsum porttitor mattis at a mauris. Phasellus purus dolor, imperdiet a tempus ut, dignissim sed ipsum. Ut faucibus magna sit amet sem blandit, in ultrices metus dictum. Nunc ultrices interdum velit eu iaculis. Proin pretium, dolor quis pretium fermentum, risus purus vehicula nulla,",
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
      description: "Suspendisse at urna rhoncus, bibendum diam sit amet, gravida lorem. Ut faucibus posuere nisl, non fringilla risus rutrum a. Curabitur accumsan, metus non vulputate finibus, diam ligula euismod elit, et feugiat lectus erat eu quam. Ut pharetra dolor a justo convallis suscipit. Proin nec mi erat. Ut porta felis eu ultrices condimentum. Donec eget semper lorem, ac efficitur turpis. Integer pretium, felis eget consequat pu",
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
      description: "Nam vel nisl quam. Sed id fringilla lectus. Vivamus volutpat nisi turpis, at aliquam nibh consequat vitae. Praesent ornare porta tellus, vel dictum urna eleifend at.",
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
