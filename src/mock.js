// Mock data for Jerry Lee's Cajun Foods

export const mockData = {
  // Store Information
  storeInfo: {
    name: "Jerry Lee's Cajun Foods",
    tagline: "The King of Boudin Since 1979",
    founder: "Gerard 'Jerry' Lee Duplantis",
    phone: "(225) 272-0739",
    address: "12181 Greenwell Springs Rd, Baton Rouge, LA 70814",
    hours: {
      weekday: "Monday - Friday: 5:00 AM - 5:00 PM",
      saturday: "Saturday: 5:00 AM - 3:00 PM",
      sunday: "Sunday: Closed"
    },
    rating: 4.8,
    reviewCount: 847,
    social: {
      facebook: "https://facebook.com/jerryleesboudin",
    }
  },

  // Hero Section
  hero: {
    headline: "Hard Work, Sacrifice & Secret Seasonings",
    subheadline: "The Cajun Two-Step for Your Tastebuds",
    description: "Jerry Lee’s Cajun Foods has served authentic Cajun boudin for over 45 years, made fresh daily from premium Boston Butt pork roast and a secret spice blend. Founded in 1979 by Jerry Lee Duplantis, the business brought the flavors of Cajun Country to Baton Rouge. Now led by his son Jerry Jr. and daughter Annie, the family continues to deliver great Cajun food and exceptional service. “If it’s not Jerry Lee’s, it’s not Boudin!”",
    cta: {
      primary: "Visit the Shop",
      secondary: "View Our Daily Specials"
    }
  },

  // Products Catalog - All image paths updated to .jpg
  products: {
    boudin: [
      {
        id: "b1",
        name: "Steamed Boudin",
        description: "Our signature steamed boudin with the secret family recipe known by no one else. Made fresh daily.",
        price: "$6.99/lb",
        popular: true,
        image: "/images/products/boudin-steamed.jpg"
      },
      {
        id: "b2",
        name: "Smoked Boudin",
        description: "Premium boudin slow-smoked over pecan wood for that authentic Louisiana smokehouse flavor.",
        price: "$7.99/lb",
        popular: true,
        image: "/images/products/boudin-smoked.jpg"
      }
    ],
    specialties: [
      {
        id: "s1",
        name: "Fresh Cracklins",
        description: "Crispy, golden cracklins made fresh every day. The perfect Cajun snack.",
        price: "$8.99/lb",
        popular: true,
        bestseller: true,
        image: "/images/products/cracklins.jpg"
      },
      {
        id: "s2",
        name: "Hogshead Cheese",
        description: "Traditional family recipe hogshead cheese, a true Cajun delicacy.",
        price: "$5.99/lb",
        image: "/images/products/hogshead-cheese.jpg"
      },
      {
        id: "s3",
        name: "Beef Jerky",
        description: "Premium beef jerky seasoned with our special Cajun spices.",
        price: "$12.99/lb",
        image: "/images/products/beef-jerky.jpg"
      }
    ],
    sausages: [
      {
        id: "sa1",
        name: "Andouille Sausage",
        description: "Authentic smoked andouille sausage, essential for gumbo and jambalaya.",
        price: "$6.99/lb",
        image: "/images/products/andouille.jpg"
      },
      {
        id: "sa2",
        name: "Brown Sugar Sausage",
        description: "Our famous brown sugar sausage - sweet, savory, and absolutely irresistible.",
        price: "$7.49/lb",
        popular: true,
        image: "/images/products/brown-sugar-sausage.jpg"
      },
      {
        id: "sa3",
        name: "Tasso",
        description: "Spicy smoked pork tasso, perfect for adding Cajun flavor to any dish.",
        price: "$8.99/lb",
        image: "/images/products/tasso.jpg"
      },
      {
        id: "sa4",
        name: "Italian Sausage",
        description: "Traditional Italian sausage with a Cajun twist.",
        price: "$6.49/lb",
        image: "/images/products/italian-sausage.jpg"
      }
    ],
    plateLunches: [
      {
        id: "pl1",
        name: "Daily Plate Lunch Special",
        description: "Hot, homemade Cajun plate lunches available daily. Call ahead for today's special!",
        price: "Market Price",
        image: "/images/products/plate-lunch.jpg"
      }
    ],
    stuffedMeats: [
      {
        id: "sm1",
        name: "Stuffed Deboned Chicken",
        description: "Whole chicken deboned and stuffed with our signature dressing.",
        price: "$18.99 each",
        image: "/images/products/stuffed-chicken.jpg"
      },
      {
        id: "sm2",
        name: "Stuffed Deboned Pork Chops",
        description: "Thick-cut pork chops deboned and stuffed to perfection.",
        price: "$14.99/lb",
        image: "/images/products/stuffed-pork-chops.jpg"
      }
    ]
  },

  // History Timeline
  history: {
    intro: "From a small Kwik Shop to the heart of Cajun country in Baton Rouge, Jerry Lee's journey is one of dedication, family tradition, and the preservation of authentic Louisiana cuisine.",
    // Recommended update for mock.js history section
    timeline: [
      {
        year: "1977",
        title: "Jerry Lee's Kwik Stop",
        description: "Jerry Lee Duplantis and his father-in-law open a convenience store on Greenwell Springs Road, initially selling gas and groceries."
      },
      {
        year: "1979",
        title: "The Birth of the Boudin",
        description: "Seeking to stand out, Jerry Lee decides to bring the flavors of St. Martinville to Baton Rouge. He begins a year-long process to perfect his signature boudin recipe."
      },
      {
        year: "Early 80s",
        title: "Cajun Specialty Transition",
        description: "The business shifts focus to specialty meats. Starting with just 40 lbs a week, Jerry Lee begins making his 'modern style' hogshead cheese and fresh boudin."
      },
      {
        year: "2014",
        title: "A Baton Rouge Institution",
        description: "The shop now produces 1,000 lbs of boudin daily. Long-time employees Terry Eldridge and Stephen Cangelosi celebrate over 30 years of working alongside Jerry."
      },
      {
        year: "Today",
        title: "The Legend Continues",
        description: "Nearly 50 years later, Jerry Lee's remains dedicated to the traditional smokehouse method, using hickory and pecan wood to season their world-famous meats."
      }
    ],
    legacy: "Our secret seasonings and dedication to quality have made us a Louisiana legend. Every batch is made with the same care and tradition Jerry started with in 1979."
  },

  // Testimonials
  testimonials: [
    {
      id: "t1",
      name: "Marcus B.",
      location: "Baton Rouge, LA",
      rating: 5,
      text: "Best boudin in Louisiana, hands down. I've been coming here for 20 years and it never disappoints. The smoked boudin is out of this world!",
      date: "2 weeks ago"
    },
    {
      id: "t2",
      name: "Sarah L.",
      location: "Zachary, LA",
      rating: 5,
      text: "The cracklins are AMAZING! Fresh, crispy, and perfectly seasoned. We drive 30 minutes just to get them. Worth every mile!",
      date: "1 month ago"
    },
    {
      id: "t3",
      name: "James T.",
      location: "Baker, LA",
      rating: 5,
      text: "True Cajun tradition. Jerry Lee's is a Baton Rouge institution. The brown sugar sausage is my family's favorite. Keep up the great work!",
      date: "3 weeks ago"
    },
    {
      id: "t4",
      name: "Patricia M.",
      location: "Denham Springs, LA",
      rating: 5,
      text: "I stop by every Friday morning for fresh cracklins and boudin. The staff is friendly and the quality is always top-notch.",
      date: "1 week ago"
    },
    {
      id: "t5",
      name: "Robert D.",
      location: "Baton Rouge, LA",
      rating: 5,
      text: "Been a customer since the 80s. This place survived floods, tornadoes, and everything else. The secret recipe is the real deal!",
      date: "2 months ago"
    },
    {
      id: "t6",
      name: "Lisa K.",
      location: "Central, LA",
      rating: 5,
      text: "The hogshead cheese is just like my grandmother used to make. You can taste the authenticity in every bite!",
      date: "3 weeks ago"
    }
  ],

  // Why Choose Us
  whyChooseUs: [
    {
      icon: "award",
      title: "Since 1979",
      description: "Nearly 50 years of perfecting authentic Cajun cuisine with family recipes passed down through generations."
    },
    {
      icon: "lock",
      title: "Secret Recipe",
      description: "Our boudin recipe is known by Jerry Lee alone - a true family secret refined over decades."
    },
    {
      icon: "flame",
      title: "Made Fresh Daily",
      description: "Everything from cracklins to boudin is prepared fresh every single day, ensuring the highest quality."
    },
    {
      icon: "heart",
      title: "Family Tradition",
      description: "St. Martinville traditions brought to Baton Rouge with hard work, sacrifice, and love for Cajun food."
    },
    {
      icon: "star",
      title: "4.8 Star Rating",
      description: "Rated 4.8 stars by over 800 customers - a testament to our commitment to excellence."
    },
    {
      icon: "clock",
      title: "Early Bird Hours",
      description: "Open at 5 AM for plant workers and early risers who want the freshest products right out of the smokehouse."
    }
  ],

  // Facebook Feed
  facebookPosts: [
    {
      id: "fb1",
      date: "Today at 6:30 AM",
      text: "Fresh cracklins just came out of the pot! 🔥 Come get 'em while they're hot!",
      image: "/images/7.jpg", // Updated to image 7
      likes: 124,
      comments: 18
    },
    {
      id: "fb2",
      date: "Yesterday",
      text: "Smoked boudin Friday! Pecan wood smoked to perfection. Stop by and grab some!",
      image: "/images/8.jpg", // Updated to image 8
      likes: 98,
      comments: 12
    },
    {
      id: "fb3",
      date: "2 days ago",
      text: "Today's plate lunch special: Smothered pork chops with rice and gravy, green beans, and cornbread. $8.99",
      image: "/images/9.jpg", // Updated to image 9
      likes: 156,
      comments: 23
    }
  ],

  contactReasons: [
    "General Inquiry",
    "Catering Request",
    "Bulk Order",
    "Feedback",
    "Other"
  ],

  // Blog/News Posts
  news: [
    {
      id: "n1",
      title: "The Secret Behind Our Boudin",
      date: "November 15, 2024",
      excerpt: "Ever wondered what makes Jerry Lee's boudin so special? It's all in the secret seasonings and the dedication to tradition...",
      image: "/images/news/secret-boudin.jpg",
      category: "Recipe Stories"
    },
    {
      id: "n2",
      title: "Holiday Catering Now Available",
      date: "November 1, 2024",
      excerpt: "Planning your holiday gatherings? Let Jerry Lee's cater your event with authentic Cajun specialties...",
      image: "/images/news/holiday-catering.jpg",
      category: "Announcements"
    },
    {
      id: "n3",
      title: "47 Years of Cajun Excellence",
      date: "October 20, 2024",
      excerpt: "Celebrating nearly five decades of bringing St. Martinville traditions to Baton Rouge. A look back at our journey...",
      image: "/images/news/anniversary.jpg",
      category: "History"
    }
  ]
};