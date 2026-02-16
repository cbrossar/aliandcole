export type Category =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "coffee"
  | "nightlife"
  | "shop"
  | "visit"
  | "do"
  | "stay";

export const categories: { id: Category; label: string; color: string }[] = [
  { id: "stay", label: "Stay", color: "#4A6741" },
  { id: "breakfast", label: "Breakfast", color: "#E8927C" },
  { id: "lunch", label: "Lunch", color: "#D4764E" },
  { id: "dinner", label: "Dinner", color: "#C4555A" },
  { id: "coffee", label: "Coffee", color: "#A0522D" },
  { id: "nightlife", label: "Nightlife", color: "#8E44AD" },
  { id: "shop", label: "Shop", color: "#E84393" },
  { id: "visit", label: "Visit", color: "#2980B9" },
  { id: "do", label: "Do", color: "#27AE60" },
];

export interface Place {
  name: string;
  neighborhood: string;
  description: string;
  category: Category;
  subcategory?: string;
  lat: number;
  lng: number;
}

export interface Venue {
  name: string;
  neighborhood: string;
  description: string;
  type: "wedding" | "welcome";
  lat: number;
  lng: number;
}

export const venues: Venue[] = [
  {
    name: "Çırağan Palace",
    neighborhood: "Beşiktaş",
    description: "Wedding venue",
    type: "wedding",
    lat: 41.0439752,
    lng: 29.0161433,
  },
  {
    name: "Mandarin Oriental Bosphorus",
    neighborhood: "Beşiktaş",
    description: "Welcome party at the Olea & Bar",
    type: "welcome",
    lat: 41.0570193,
    lng: 29.0356217,
  },
];

export const places: Place[] = [
  // ── Stay ─────────────────────────────────────────────────
  {
    name: "Radisson Blu Bosphorus Hotel",
    neighborhood: "Beşiktaş",
    description:
      "Right next to the Çırağan Palace, modern hotel with a variety of room options at affordable prices. 10 min walk to venue",
    category: "stay",
    lat: 41.04752,
    lng: 29.024571,
  },
  {
    name: "Conrad Istanbul Bosphorus",
    neighborhood: "Beşiktaş",
    description:
      "Panoramic Bosphorus views from its hilltop setting, with spa, pools, and tennis club. 20 min walk to venue",
    category: "stay",
    lat: 41.0471,
    lng: 29.0095,
  },
  {
    name: "Swissôtel The Bosphorus",
    neighborhood: "Beşiktaş",
    description:
      "Beautiful Bosphorus views, huge spa, and lots of restaurants. 15 min drive to venue",
    category: "stay",
    lat: 41.0415,
    lng: 28.9971,
  },
  {
    name: "Çırağan Hotel Bosphorus",
    neighborhood: "Beşiktaş",
    description:
      "Located right behind the Çırağan Palace, modern and budget-friendly. 5 min walk to venue",
    category: "stay",
    lat: 41.0439523,
    lng: 29.010892,
  },
  {
    name: "Sanasaryan Han Hotel",
    neighborhood: "Fatih (Old City)",
    description:
      "Luxury Marriott property near Hagia Sophia, Topkapı Palace, and Cisterns. 30 min drive to venue",
    category: "stay",
    lat: 41.0158,
    lng: 28.9753,
  },

  // ── Breakfast ───────────────────────────────────────────
  {
    name: "Journey",
    neighborhood: "Cihangir",
    description: "Eclectic cafe, more traditionally Turkish",
    category: "breakfast",
    lat: 41.0301457,
    lng: 28.9837991,
  },
  {
    name: "Batard",
    neighborhood: "Bomonti",
    description:
      "French inspired bistro, would also recommend for a nice hungover brunch",
    category: "breakfast",
    lat: 41.0563974,
    lng: 28.9811711,
  },
  {
    name: "Kruvasan",
    neighborhood: "Nişantaşı",
    description: "Lol brunch spot with fresh croissants",
    category: "breakfast",
    lat: 41.0447298,
    lng: 28.9911143,
  },

  // ── Lunch ─────────────────────────────────────────────
  {
    name: "Bi Nevi Deli",
    neighborhood: "Etiler",
    description: "Vegan lunch spot",
    category: "lunch",
    lat: 41.088102,
    lng: 29.0374649,
  },
  {
    name: "Pandeli",
    neighborhood: "Eminönü",
    description: "Historic restaurant located in the Spice Bazaar",
    category: "lunch",
    lat: 41.0170699,
    lng: 28.9712869,
  },
  {
    name: "Kıyı",
    neighborhood: "Tarabya",
    description:
      "Traditional Turkish seafood, best for late lunch on Sundays, reservation is a must",
    category: "lunch",
    lat: 41.1272,
    lng: 29.0532,
  },
  {
    name: "Casa Cooklife",
    neighborhood: "Bomonti",
    description: "Asian inspired brunch spot",
    category: "breakfast",
    lat: 41.0580685,
    lng: 28.9778697,
  },
  {
    name: "Şehzade Cağ Kebap",
    neighborhood: "Fatih",
    description: "Best kababs around",
    category: "lunch",
    lat: 41.0139781,
    lng: 28.9752568,
  },
  {
    name: "Mira",
    neighborhood: "Bebek",
    description: "Restaurant in Bebek",
    category: "lunch",
    lat: 41.0674257,
    lng: 29.0444508,
  },

  // ── Dinner: Turkish ─────────────────────────────────────
  {
    name: "Karaköy Lokantası",
    neighborhood: "Karaköy",
    description: "Classic Turkish mezzes, reservation recommended",
    category: "dinner",
    subcategory: "Turkish",
    lat: 41.0247498,
    lng: 28.9801935,
  },
  {
    name: "Asmalı Cavit",
    neighborhood: "Beyoğlu",
    description: "Classic Turkish mezzes, very local and casual",
    category: "dinner",
    subcategory: "Turkish",
    lat: 41.0302059,
    lng: 28.9746102,
  },
  {
    name: "Aheste",
    neighborhood: "Beyoğlu",
    description:
      "Turkish food with a modern twist, reservation recommended",
    category: "dinner",
    subcategory: "Turkish",
    lat: 41.0291185,
    lng: 28.9730937,
  },
  {
    name: "Alaf",
    neighborhood: "Kuruçeşme",
    description:
      "Turkish food with a modern twist and outdoor seating, reservation recommended",
    category: "dinner",
    subcategory: "Turkish",
    lat: 41.060277,
    lng: 29.0365706,
  },
  {
    name: "Mürver",
    neighborhood: "Karaköy",
    description:
      "Turkish food with a modern twist and great rooftop views, reservation recommended",
    category: "dinner",
    subcategory: "Turkish",
    lat: 41.024767,
    lng: 28.9800579,
  },
  {
    name: "Balıkçı Abdullah",
    neighborhood: "Beykoz",
    description: "Traditional Turkish seafood by the Bosphorus",
    category: "dinner",
    subcategory: "Turkish",
    lat: 41.1110918,
    lng: 29.081882,
  },
  {
    name: "Biz Istanbul",
    neighborhood: "Taksim",
    description:
      "Traditional Turkish and Ottoman cuisine, also good spot for rooftop drinks, amazing views",
    category: "dinner",
    subcategory: "Turkish",
    lat: 41.0367404,
    lng: 28.9877218,
  },
  {
    name: "Lokanta 1741",
    neighborhood: "Fatih",
    description:
      "Turkish food with a modern twist and great cocktails, located inside a Turkish bath",
    category: "dinner",
    subcategory: "Turkish",
    lat: 41.0106091,
    lng: 28.9753116,
  },
  {
    name: "İskele Restaurant",
    neighborhood: "Rumeli Hisarı",
    description: "Seafood place by the Bosphorus",
    category: "dinner",
    subcategory: "Turkish",
    lat: 41.088162,
    lng: 29.056858,
  },
  {
    name: "Günaydın Kebap",
    neighborhood: "Etiler",
    description: "Classic Turkish kebap restaurant",
    category: "dinner",
    subcategory: "Turkish",
    lat: 41.0808,
    lng: 29.0282,
  },

  // ── Dinner: Fine Dining ─────────────────────────────────
  {
    name: "Feriye Lokantasi",
    neighborhood: "Beşiktaş",
    description:"Spectacular dinner spot on the Bosphorus",
    category: "dinner",
    subcategory: "Fine Dining",
    lat: 41.0471157,
    lng: 29.024335,
  },
  {
    name: "TURK Fatih Tutak",
    neighborhood: "Bomonti",
    description:
      "2 Michelin star restaurant with exceptional food, reservation is a must",
    category: "dinner",
    subcategory: "Fine Dining",
    lat: 41.0583419,
    lng: 28.9777673,
  },
  {
    name: "Gallada",
    neighborhood: "Karaköy",
    description:
      "Turkish-Asian fusion by Fatih Tutak, reservation is a must",
    category: "dinner",
    subcategory: "Fine Dining",
    lat: 41.022992,
    lng: 28.9779435,
  },
  {
    name: "Neolokal",
    neighborhood: "Beyoğlu",
    description:
      "1 Michelin star restaurant with a plant based menu option, reservation is a must",
    category: "dinner",
    subcategory: "Fine Dining",
    lat: 41.0238362,
    lng: 28.9734027,
  },
  {
    name: "Mikla",
    neighborhood: "Beyoğlu",
    description:
      "1 Michelin star rooftop restaurant with impeccable views of Istanbul, reservation is a must",
    category: "dinner",
    subcategory: "Fine Dining",
    lat: 41.0310369,
    lng: 28.9741962,
  },
  {
    name: "Okra",
    neighborhood: "Taksim",
    description:
      "Mediterranean cuisine with stunning views of the city, reservation is recommended",
    category: "dinner",
    subcategory: "Fine Dining",
    lat: 41.0363917,
    lng: 28.9864423,
  },
  {
    name: "Telezzüz",
    neighborhood: "Kuzguncuk",
    description:
      "Vegan fine dining restaurant, reservation is a must, keep in mind it's on the Asian side",
    category: "dinner",
    subcategory: "Fine Dining",
    lat: 41.027408,
    lng: 29.042227,
  },
  {
    name: "Ulus 29",
    neighborhood: "Beşiktaş",
    description:
      "An Istanbul staple, with breath taking views of the Bosphorus, reservation is a must",
    category: "dinner",
    subcategory: "Fine Dining",
    lat: 41.0647857,
    lng: 29.0319305,
  },
  {
    name: "Araka",
    neighborhood: "Yeniköy",
    description:
      "1 Michelin star restaurant with a mostly plant based menu, very small so reservation is a must",
    category: "dinner",
    subcategory: "Fine Dining",
    lat: 41.1171178,
    lng: 29.0631093,
  },
  {
    name: "Arkestra",
    neighborhood: "Etiler",
    description:
      "1 Michelin star restaurant with a vibey bar upstairs, reservation is a must",
    category: "dinner",
    subcategory: "Fine Dining",
    lat: 41.0783673,
    lng: 29.0315745,
  },
  {
    name: "Yeni Lokanta",
    neighborhood: "",
    description:
      "Turkish food with a modern twist, reservation is highly recommended",
    category: "dinner",
    subcategory: "Fine Dining",
    lat: 41.0295319,
    lng: 28.9756319,
  },

  // ── Dinner: International ───────────────────────────────
  {
    name: "1924 Istanbul",
    neighborhood: "Beyoğlu",
    description:
      "Historic Russian restaurant with amazing ambiance and drinks, reservation recommended",
    category: "dinner",
    subcategory: "International",
    lat: 41.0328458,
    lng: 28.9760525,
  },
  {
    name: "Beymen Brasserie",
    neighborhood: "Nişantaşı",
    description:
      "Classic bistro with outdoor seating, great for people watching",
    category: "dinner",
    subcategory: "International",
    lat: 41.0495858,
    lng: 28.9920826,
  },
  {
    name: "Nid Noi",
    neighborhood: "Nişantaşı",
    description:
      "Small local Thai restaurant with fresh and authentic ingredients",
    category: "dinner",
    subcategory: "International",
    lat: 41.0504144,
    lng: 28.9900876,
  },
  {
    name: "Foxy",
    neighborhood: "Nişantaşı",
    description:
      "Local wine bar with an extensive Turkish wine menu and tapas style food",
    category: "dinner",
    subcategory: "International",
    lat: 41.0503114,
    lng: 28.9902157,
  },
  {
    name: "Apartıman",
    neighborhood: "Yeniköy",
    description:
      "Bistro/wine bar with great food and outdoor seating, reservation recommended",
    category: "dinner",
    subcategory: "International",
    lat: 41.117016,
    lng: 29.0639915,
  },
  {
    name: "Mezkla",
    neighborhood: "Etiler",
    description: "Mexican food with a hifi bar",
    category: "dinner",
    subcategory: "International",
    lat: 41.0790065,
    lng: 29.0256699,
  },
  {
    name: "Da Mario",
    neighborhood: "Etiler",
    description: "Classic Italian restaurant with outdoor seating",
    category: "dinner",
    subcategory: "International",
    lat: 41.0820245,
    lng: 29.0336841,
  },
  {
    name: "Inari Omakase",
    neighborhood: "Kuruçeşme",
    description: "Sushi place with great cocktails",
    category: "dinner",
    subcategory: "International",
    lat: 41.0599971,
    lng: 29.0361646,
  },
  {
    name: "Gün Lokantası",
    neighborhood: "Beyoğlu",
    description:
      "Small place with innovative cuisine, reservation is a must",
    category: "dinner",
    subcategory: "International",
    lat: 41.0304956,
    lng: 28.9746851,
  },

  // ── Coffee & Snacks ─────────────────────────────────────
  {
    name: "Petra Roasting Co",
    neighborhood: "Gayrettepe",
    description:
      "Extensive brunch menu, concept store inside, ideal for a hungover brunch :)",
    category: "coffee",
    lat: 41.0622075,
    lng: 29.0095032,
  },
  {
    name: "Petra Roasting Co",
    neighborhood: "Bebek",
    description: "Specialty coffee roasters",
    category: "coffee",
    lat: 41.0807546,
    lng: 29.0392717,
  },
  {
    name: "Kronotrop Topağacı",
    neighborhood: "Şişli",
    description: "Specialty coffee",
    category: "coffee",
    lat: 41.0511436,
    lng: 28.9953675,
  },
  {
    name: "Kronotrop Karaköy",
    neighborhood: "Karaköy",
    description: "Specialty coffee",
    category: "coffee",
    lat: 41.024981,
    lng: 28.973491,
  },
  {
    name: "POCO Coffee & Matcha Bar",
    neighborhood: "Şişli",
    description: "Coffee and matcha bar",
    category: "coffee",
    lat: 41.048267,
    lng: 28.9946952,
  },
  {
    name: "Cup of Joy",
    neighborhood: "Şişli",
    description: "Cozy coffee shop",
    category: "coffee",
    lat: 41.0526032,
    lng: 28.9882509,
  },
  {
    name: "Norre",
    neighborhood: "Beyoğlu",
    description: "Local coffee spot",
    category: "coffee",
    lat: 41.0314128,
    lng: 28.9798034,
  },
  {
    name: "Montag",
    neighborhood: "Bomonti",
    description: "Neighborhood coffee shop",
    category: "coffee",
    lat: 41.0532,
    lng: 28.9782,
  },
  {
    name: "Ninda",
    neighborhood: "Bebek",
    description: "Cafe in Bebek",
    category: "coffee",
    lat: 41.0771908,
    lng: 29.0411014,
  },

  // ── Nightlife ───────────────────────────────────────────
  {
    name: "Tavern",
    neighborhood: "Cihangir",
    description: "Cocktail Bar in Cihangir",
    category: "nightlife",
    lat: 41.0319117,
    lng: 28.9795166,
  },
  {
    name: "The Rooftop - 4 Seasons",
    neighborhood: "Fatih",
    description: "Gorgeous rooftop bar with views of the city",
    category: "nightlife",
    lat: 41.0067253,
    lng: 28.9755723,
  },
  {
    name: "Geyik",
    neighborhood: "Cihangir",
    description: "Bar in Cihangir",
    category: "nightlife",
    lat: 41.0302813,
    lng: 28.9837094,
  },
  {
    name: "Nardis Jazz Club",
    neighborhood: "Beyoğlu",
    description: "Live jazz venue",
    category: "nightlife",
    lat: 41.0253208,
    lng: 28.9713207,
  },
  {
    name: "Comedus Wine Bar",
    neighborhood: "Beyoğlu",
    description: "Wine Bar in Beyoğlu",
    category: "nightlife",
    lat: 41.0289819,
    lng: 28.9686035,
  },
  {
    name: "Alexandra Cocktail Bar",
    neighborhood: "Arnavutköy",
    description: "Cocktail bar",
    category: "nightlife",
    lat: 41.0673901,
    lng: 29.0435283,
  },
  {
    name: "Kaia",
    neighborhood: "Bebek",
    description: "Bar in Bebek",
    category: "nightlife",
    lat: 41.0790819,
    lng: 29.0403096,
  },

  // ── Shop: Accessories ───────────────────────────────────
  {
    name: "Misela",
    neighborhood: "Pera",
    description:
      "Luxury accessories brand with handbags, scarves and personalized made-to-order items",
    category: "shop",
    subcategory: "Accessories",
    lat: 41.029157,
    lng: 28.9730913,
  },
  {
    name: "Misela House No.7 Akaretler",
    neighborhood: "Beşiktaş",
    description:
      "Luxury accessories brand with handbags, scarves and personalized made-to-order items",
    category: "shop",
    subcategory: "Accessories",
    lat: 41.029157,
    lng: 28.9730913,
  },
  {
    name: "Mehry Mu",
    neighborhood: "Bebek",
    description: "Turkish bag designer",
    category: "shop",
    subcategory: "Accessories",
    lat: 41.0793519,
    lng: 29.0425746,
  },

  // ── Shop: Clothing ──────────────────────────────────────
  {
    name: "Fey",
    neighborhood: "Nişantaşı",
    description: "Clothing and concept store",
    category: "shop",
    subcategory: "Clothing",
    lat: 41.0499496,
    lng: 28.9906122,
  },
  {
    name: "Vakko",
    neighborhood: "Nişantaşı",
    description:
      "Department store with Turkish designers as well as global brands",
    category: "shop",
    subcategory: "Clothing",
    lat: 41.0487765,
    lng: 28.9926831,
  },
  {
    name: "Siedrés",
    neighborhood: "Karaköy",
    description:
      "Turkish apparel and accessories store with a Mediterranean color palette",
    category: "shop",
    subcategory: "Clothing",
    lat: 41.02435,
    lng: 28.9806396,
  },
  {
    name: "Faraway",
    neighborhood: "Bebek",
    description: "Turkish apparel store inspired by nature",
    category: "shop",
    subcategory: "Clothing",
    lat: 41.0766673,
    lng: 29.0376345,
  },
  {
    name: "Nackiyé",
    neighborhood: "Beşiktaş",
    description:
      "Turkish apparel store with Eastern Mediterranean influence",
    category: "shop",
    subcategory: "Clothing",
    lat: 41.0419208,
    lng: 29.0026422,
  },

  // ── Shop: Lifestyle & Souvenirs ─────────────────────────
  {
    name: "İznik Works",
    neighborhood: "Grand Bazaar",
    description: "Traditional Turkish ceramic objects",
    category: "shop",
    subcategory: "Lifestyle",
    lat: 41.0103691,
    lng: 28.9681009,
  },
  {
    name: "Naya Studio",
    neighborhood: "Arnavutköy",
    description: "Home decor and artworks studio",
    category: "shop",
    subcategory: "Lifestyle",
    lat: 41.0602475,
    lng: 29.0384766,
  },
  {
    name: "Wohha",
    neighborhood: "Arnavutköy",
    description: "Local ceramics and home decor shop",
    category: "shop",
    subcategory: "Lifestyle",
    lat: 41.068206,
    lng: 29.0425022,
  },
  {
    name: "Minoa",
    neighborhood: "Pera",
    description: "Bookstore with cafe",
    category: "shop",
    subcategory: "Lifestyle",
    lat: 41.029924,
    lng: 28.97326,
  },
  {
    name: "Ali Muhiddin Hacı Bekir Lokumları",
    neighborhood: "Eminönü",
    description: "Traditional Turkish delight shop",
    category: "shop",
    subcategory: "Lifestyle",
    lat: 41.015742,
    lng: 28.973492,
  },
  {
    name: "Ali Muhiddin Haci Bekir",
    neighborhood: "Beyoğlu",
    description: "Traditional Turkish delight shop",
    category: "shop",
    subcategory: "Lifestyle",
    lat: 41.0349828,
    lng: 28.9678059,
  },

  // ── Visit: History & Architecture ───────────────────────
  {
    name: "Ortaköy Square",
    neighborhood: "Beşiktaş",
    description: "Lively square with famous mosque and market",
    category: "visit",
    subcategory: "History",
    lat: 41.0475105,
    lng: 29.0258132,
  },
  {
    name: "Blue Mosque",
    neighborhood: "Fatih",
    description: "Iconic Ottoman-era mosque",
    category: "visit",
    subcategory: "History",
    lat: 41.0054,
    lng: 28.9768,
  },
  {
    name: "Hagia Sophia",
    neighborhood: "Fatih",
    description: "Historic cathedral turned mosque",
    category: "visit",
    subcategory: "History",
    lat: 41.0086,
    lng: 28.9802,
  },
  {
    name: "Basilica Cistern",
    neighborhood: "Fatih",
    description: "Ancient underground water cistern",
    category: "visit",
    subcategory: "History",
    lat: 41.0084,
    lng: 28.9778,
  },
  {
    name: "Grand Bazaar",
    neighborhood: "Fatih",
    description: "One of the largest and oldest covered markets in the world",
    category: "visit",
    subcategory: "History",
    lat: 41.0107,
    lng: 28.968,
  },
  {
    name: "Süleymaniye Mosque",
    neighborhood: "Fatih",
    description: "Magnificent Ottoman mosque",
    category: "visit",
    subcategory: "History",
    lat: 41.0162,
    lng: 28.964,
  },
  {
    name: "The Spice Bazaar",
    neighborhood: "Eminönü",
    description: "Historic market filled with spices and Turkish delights",
    category: "visit",
    subcategory: "History",
    lat: 41.0165,
    lng: 28.9705,
  },
  {
    name: "Topkapi Palace Museum",
    neighborhood: "Fatih",
    description: "Former residence of Ottoman sultans",
    category: "visit",
    subcategory: "History",
    lat: 41.0115,
    lng: 28.9833,
  },
  {
    name: "Galata Tower",
    neighborhood: "Beyoğlu",
    description: "Medieval stone tower with panoramic views",
    category: "visit",
    subcategory: "History",
    lat: 41.0256,
    lng: 28.9742,
  },

  // ── Visit: Arts & Culture ───────────────────────────────
  {
    name: "Istanbul Museum of Modern Art",
    neighborhood: "Beyoğlu",
    description: "Contemporary art museum in stunning Renzo Piano building at Galataport",
    category: "visit",
    subcategory: "Arts & Culture",
    lat: 41.0259,
    lng: 28.9828,
  },
  {
    name: "Istanbul Archaeological Museums",
    neighborhood: "Fatih",
    description: "Extensive archaeological collections",
    category: "visit",
    subcategory: "Arts & Culture",
    lat: 41.0118,
    lng: 28.981,
  },
  {
    name: "Sakıp Sabancı Museum",
    neighborhood: "Emirgan",
    description: "Art museum on the Bosphorus",
    category: "visit",
    subcategory: "Arts & Culture",
    lat: 41.1028,
    lng: 29.0562,
  },
  {
    name: "Borusan Contemporary",
    neighborhood: "Rumeli Hisarı",
    description: "Contemporary art space",
    category: "visit",
    subcategory: "Arts & Culture",
    lat: 41.0893,
    lng: 29.0566,
  },
  {
    name: "Zeyrek Çinili Hamam",
    neighborhood: "Fatih",
    description: "Historic tiled bathhouse turned cultural space",
    category: "visit",
    subcategory: "Arts & Culture",
    lat: 41.0198,
    lng: 28.958,
  },
  {
    name: "Arter",
    neighborhood: "Beyoğlu",
    description: "Contemporary art museum",
    category: "visit",
    subcategory: "Arts & Culture",
    lat: 41.0409,
    lng: 28.9788,
  },
  {
    name: "SALT",
    neighborhood: "Beyoğlu",
    description: "Cultural institution and research center",
    category: "visit",
    subcategory: "Arts & Culture",
    lat: 41.0321,
    lng: 28.9761,
  },
  {
    name: "Dirimart",
    neighborhood: "Dolapdere",
    description: "Contemporary art gallery",
    category: "visit",
    subcategory: "Arts & Culture",
    lat: 41.0425,
    lng: 28.9832,
  },
  {
    name: "Pilevneli",
    neighborhood: "Dolapdere",
    description: "Contemporary art gallery",
    category: "visit",
    subcategory: "Arts & Culture",
    lat: 41.0432,
    lng: 28.9822,
  },

  // ── Do: Explore & Shop ─────────────────────────────────
  {
    name: "Walk around Nişantaşı",
    neighborhood: "Şişli",
    description: "Stroll the charming shopping streets of Nişantaşı",
    category: "do",
    subcategory: "Explore",
    lat: 41.0485,
    lng: 28.9935,
  },
  {
    name: "Vintage shops in Cihangir & Galata",
    neighborhood: "Beyoğlu",
    description: "Browse vintage and secondhand shops",
    category: "do",
    subcategory: "Explore",
    lat: 41.0288,
    lng: 28.9758,
  },
  {
    name: "İstinyePark Mall",
    neighborhood: "İstinye",
    description: "Luxury stores in one of Istanbul's premier shopping malls",
    category: "do",
    subcategory: "Explore",
    lat: 41.1183,
    lng: 29.0356,
  },
  {
    name: "Zorlu Center",
    neighborhood: "Beşiktaş",
    description: "Luxury stores and entertainment complex",
    category: "do",
    subcategory: "Explore",
    lat: 41.0662,
    lng: 29.0168,
  },
  {
    name: "Ferry from Europe to Asia",
    neighborhood: "Kadıköy",
    description: "Ride the ferry across the Bosphorus to the Asian side",
    category: "do",
    subcategory: "Explore",
    lat: 41.0058,
    lng: 29.0228,
  },

  // ── Do: Nature & Wellness ──────────────────────────────
  {
    name: "Kılıç Ali Paşa Hamamı",
    neighborhood: "Karaköy",
    description: "Pamper yourself with a traditional Turkish bath experience",
    category: "do",
    subcategory: "Wellness",
    lat: 41.0258,
    lng: 28.9808,
  },
  {
    name: "Walk along the Bosphorus",
    neighborhood: "Bebek–Arnavutköy",
    description: "Scenic waterfront walk between Bebek and Arnavutköy",
    category: "do",
    subcategory: "Wellness",
    lat: 41.0722,
    lng: 29.0388,
  },
  {
    name: "Belgrad Forest",
    neighborhood: "Sarıyer",
    description: "Enjoy nature at Belgrad Forest's trails",
    category: "do",
    subcategory: "Wellness",
    lat: 41.1306,
    lng: 29.0414,
  },
  {
    name: "Dive into the Bosphorus",
    neighborhood: "Bebek",
    description: "Take a dip in the waters of the Bosphorus",
    category: "do",
    subcategory: "Wellness",
    lat: 41.0785,
    lng: 29.0452,
  },
  {
    name: "Row at the Golden Horn",
    neighborhood: "Eminönü",
    description: "Rowing on the historic Golden Horn waterway",
    category: "do",
    subcategory: "Wellness",
    lat: 41.0198,
    lng: 28.9548,
  },

];
