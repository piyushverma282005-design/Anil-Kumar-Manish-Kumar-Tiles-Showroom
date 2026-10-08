/**
 * ==============================================================================
 * ANIL KUMAR MANISH KUMAR TILES SHOWROOM - STATIC DATA & CONFIGURATION
 * ==============================================================================
 * This is a 100% static business website.
 * No database, no backend, no authentication, no CMS.
 * All client details are verified and exact.
 * ==============================================================================
 */

const showroomConfig = {
  // Business Identity
  name: "ANIL KUMAR MANISH KUMAR TILES SHOWROOM",
  businessType: "Retailer",
  tagline: "Tiles, Sanitaryware & Paints Retailer",

  // Exact Client Contact Information
  contacts: {
    primaryPhone: "9350444783",
    secondaryPhone: "9671390896",
    primaryPhoneTel: "+919350444783",
    secondaryPhoneTel: "+919671390896",
    whatsappNumber: "919350444783",
    email: "mannuchauhan13@gmail.com",
    address: "Jatauli Mandi, Under Fly Over",
    cityState: "Gurugram, Haryana, India",
    fullAddress: "Jatauli Mandi, Under Fly Over, Gurugram, Haryana, India"
  },

  // Exact Verified Direct Links
  links: {
    phoneCallPrimary: "tel:+919350444783",
    phoneCallSecondary: "tel:+919671390896",
    whatsapp: "https://wa.me/919350444783",
    whatsappGeneral: "https://wa.me/919350444783?text=Hello%20ANIL%20KUMAR%20MANISH%20KUMAR%20TILES%20SHOWROOM%2C%20I%20am%20interested%20in%20tiles%20and%20sanitaryware.",
    emailMailto: "mailto:mannuchauhan13@gmail.com?subject=Enquiry%20-%20ANIL%20KUMAR%20MANISH%20KUMAR%20TILES%20SHOWROOM",
    // Exact Verified Google Maps Location
    googleMapsDirections: "https://maps.app.goo.gl/NtGb8uakW4URSDrq5?g_st=iwb",
    googleMapsEmbed: "https://maps.google.com/maps?q=ward+no+15%2C+Anil+kumar+Manish+kumar+Marble%2CTiles+Show+room%2C+Jatauli+Mandi%2C+near+water+suplly%2C+Haileymandi%2C+Haryana+122504&t=&z=16&ie=UTF8&iwloc=&output=embed",
    // Exact Verified Social Media Profiles
    instagram: "https://www.instagram.com/anilkumarmanishkumar.3720/",
    facebook: "https://www.facebook.com/share/1EkNHfq69N/",
    youtube: "https://youtube.com/@anilkumarmanishkumar533"
  }
};

/**
 * ==============================================================================
 * PRODUCT CATEGORIES (Static Frontend Array)
 * ==============================================================================
 */
const productCategories = [
  {
    id: "floor-tiles",
    name: "Floor Tiles",
    categoryGroup: "tiles",
    description: "Premium polished and matte floor tiles for living rooms and bedrooms.",
    image: "assets/images/floor_tiles.jpg"
  },
  {
    id: "bathroom-tiles",
    name: "Bathroom Tiles",
    categoryGroup: "tiles",
    description: "Anti-skid floor and designer wall tiles for modern bathrooms.",
    image: "assets/images/bathroom_tiles.jpg"
  },
  {
    id: "wall-tiles",
    name: "Wall Tiles",
    categoryGroup: "tiles",
    description: "Beautiful accent and elevation tiles for interior and exterior walls.",
    image: "assets/images/kitchen_tiles.jpg"
  },
  {
    id: "sanitary-ware",
    name: "Sanitary Ware",
    categoryGroup: "sanitary",
    description: "High-quality ceramic commodes, washbasins, and urinals.",
    image: "assets/images/sanitaryware.jpg"
  },
  {
    id: "bathroom-fittings",
    name: "Bathroom Fittings",
    categoryGroup: "sanitary",
    description: "Premium faucets, showers, and CP fittings for your bathroom.",
    image: "assets/images/bathroom_fittings.png"
  },
  {
    id: "plumbing-materials",
    name: "Plumbing Materials",
    categoryGroup: "plumbing",
    description: "Complete range of durable plumbing materials for construction.",
    image: "assets/images/plumbing_materials.jpg"
  },
  {
    id: "pipes-fittings",
    name: "Pipes & Fittings",
    categoryGroup: "plumbing",
    description: "CPVC, UPVC, and PVC pipes and fittings for reliable water supply.",
    image: "assets/images/pipes_fittings.png"
  },
  {
    id: "paints",
    name: "Paints",
    categoryGroup: "paints",
    description: "Interior and exterior emulsions, enamels, and primers.",
    image: "assets/images/paints_new.jpg"
  },
  {
    id: "tile-adhesives",
    name: "Tile Adhesives",
    categoryGroup: "building",
    description: "High-strength tile adhesives and grouts for perfect fixing.",
    image: "assets/images/tile_adhesives.jpg"
  },
  {
    id: "water-tanks",
    name: "Water Tanks",
    categoryGroup: "plumbing",
    description: "Durable multi-layer water storage tanks for residential use.",
    image: "assets/images/water_tanks.jpg"
  },
  {
    id: "building-materials",
    name: "Building Materials",
    categoryGroup: "building",
    description: "Essential construction and finishing materials.",
    image: "assets/images/building_materials.png"
  }
];

/**
 * ==============================================================================
 * BRANDS WE DEAL IN (Static Frontend Array)
 * ==============================================================================
 * Featuring Mehak and Indigo Paints + Others
 */
const showroomBrands = [
  {
    id: "mehak",
    name: "Mehak",
    category: "Tiles & Surfaces",
    isPrimary: true,
    logoType: "image",
    logoSrc: "assets/logos/mehak_logo.png",
    logoAlt: "Mehak Official Logo"
  },
  {
    id: "indigo-paints",
    name: "Indigo Paints",
    category: "Paints & Finishes",
    isPrimary: true,
    logoType: "image",
    logoSrc: "assets/logos/indigo_logo.png",
    logoAlt: "Indigo Paints Official Logo"
  },
  {
    id: "kajaria",
    name: "Kajaria",
    category: "Tiles",
    isPrimary: false,
    logoType: "image",
    logoSrc: "assets/logos/kajaria_logo.png",
    logoAlt: "Kajaria Official Logo"
  },
  {
    id: "jaquar",
    name: "Jaquar",
    category: "Bath Fittings & Sanitaryware",
    isPrimary: false,
    logoType: "image",
    logoSrc: "assets/logos/jaquar_logo.png",
    logoAlt: "Jaquar Official Logo"
  },
  {
    id: "aplapollo",
    name: "APL Apollo",
    category: "Steel Pipes",
    isPrimary: false,
    logoType: "image",
    logoSrc: "assets/logos/aplapollo_logo.jpg",
    logoAlt: "APL Apollo Official Logo"
  },
  {
    id: "astral",
    name: "Astral Pipes",
    category: "Pipes & Fittings",
    isPrimary: false,
    logoType: "image",
    logoSrc: "assets/logos/astral pipes logo.jpg",
    logoAlt: "Astral Pipes Official Logo"
  },
  {
    id: "astral-tanks",
    name: "Astral Water Tanks",
    category: "Pipes & Tanks",
    isPrimary: false,
    logoType: "image",
    logoSrc: "assets/logos/astral_tanks_logo.jpg",
    logoAlt: "Astral Water Tanks"
  },
  {
    id: "cravo",
    name: "Cravo",
    category: "Tiles & Bathware",
    isPrimary: false,
    logoType: "image",
    logoSrc: "assets/logos/cravo logo.jpg",
    logoAlt: "Cravo Official Logo"
  },
  {
    id: "kamdhenu-paints",
    name: "Kamdhenu Paints",
    category: "Paints & Finishes",
    isPrimary: false,
    logoType: "image",
    logoSrc: "assets/logos/kamdhenu_paints_logo.jpg",
    logoAlt: "Kamdhenu Paints Official Logo"
  },
  {
    id: "kerovit",
    name: "Kerovit",
    category: "Sanitaryware & Bathware",
    isPrimary: false,
    logoType: "image",
    logoSrc: "assets/logos/kerovit_logo.jpg",
    logoAlt: "Kerovit Official Logo"
  },
  {
    id: "astral-bathware",
    name: "Astral Bathware",
    category: "Bath Fittings & Sanitaryware",
    isPrimary: false,
    logoType: "image",
    logoSrc: "assets/logos/astral_bathware_logo.jpg",
    logoAlt: "Astral Bathware Official Logo"
  },
  {
    id: "coats",
    name: "Coats",
    category: "Bath Fittings & Accessories",
    isPrimary: false,
    logoType: "image",
    logoSrc: "assets/logos/coats_logo.jpg",
    logoAlt: "Coats Bath Fittings & Accessories"
  },
  {
    id: "sakarni-adhesives",
    name: "Sakarni Tile Adhesive",
    category: "Tile Adhesives",
    isPrimary: false,
    logoType: "image",
    logoSrc: "assets/logos/sakarni_adhesive_logo.jpg",
    logoAlt: "Sakarni Tile Adhesive"
  },
  {
    id: "sakrni",
    name: "Sakarni",
    category: "Plaster & Wall Putty",
    isPrimary: false,
    logoType: "image",
    logoSrc: "assets/logos/sakrni logo.jpg",
    logoAlt: "Sakarni Official Logo"
  }
];

/**
 * ==============================================================================
 * WHY CHOOSE US (Compact Features)
 * ==============================================================================
 */
const showroomFeatures = [
  {
    icon: "fa-boxes-stacked",
    title: "Wide Product Selection",
    description: "Explore a massive range of tiles and building materials."
  },
  {
    icon: "fa-award",
    title: "Quality-Focused Products",
    description: "Only the best materials for your construction needs."
  },
  {
    icon: "fa-user-tie",
    title: "Helpful Guidance",
    description: "Expert assistance to help you make the right choice."
  },
  {
    icon: "fa-location-dot",
    title: "Convenient Local Showroom",
    description: "Located right here in Jatauli Mandi, Gurugram."
  }
];

/**
 * ==============================================================================
 * FREQUENTLY ASKED QUESTIONS (Factual & Honest)
 * ==============================================================================
 */
const showroomFaqs = [
  {
    question: "Where is ANIL KUMAR MANISH KUMAR TILES SHOWROOM located?",
    answer: "Our showroom is located at Jatauli Mandi, Under Fly Over, Gurugram, Haryana, India. You can get directions using the Google Maps link on this page."
  },
  {
    question: "What is your business type?",
    answer: "We are a retailer dealing in tiles, sanitaryware, bath fittings, and paints."
  },
  {
    question: "How can I contact the showroom for product enquiries?",
    answer: "You can call us directly on 9350444783 or 9671390896, chat with us on WhatsApp at https://wa.me/919350444783, or email us at mannuchauhan13@gmail.com."
  },
  {
    question: "Which brands do you deal in?",
    answer: "We deal in brands such as Mehak, Indigo Paints, Kajaria, Somany, Jaquar, and Cera."
  },
  {
    question: "Can I enquire on WhatsApp about tile availability?",
    answer: "Yes, you can click any of the WhatsApp buttons on this website to chat directly with us on WhatsApp."
  }
];
