export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '/',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Project',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
   
      
    
  
  export const myProjects = [
    {
      title: 'The Augmented Reality Shopping Experience',
      desc: ' ShopSmart AR is an innovative AR shopping app that lets users virtually try on clothes before buying. By enabling real-time visualization of fit, it boosts shopper confidence and encourages sharing experiences for instant feedback.',
      subdesc:
        'ShopSmart AR is currently in development, enhancing its interface and functionality. Built with React.js, AR.js, Node.js, and MongoDB, the app focuses on seamless e-commerce integration and mobile optimization.',
      href: '/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/arshop.jpg',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/JS.webp',
        },
        {
          id: 4,
          name: 'AR',
          path: '/assets/AR.png',
        },
      ],
    },
    {
      title: ' Tomato: Your Go-To Food Booking App',
      desc: 'Tomato is a dynamic food booking app that connects users with local restaurants and delivery services. Users can explore menus, read reviews, and place orders effortlessly. With a user-friendly interface, customers can customize meals and track deliveries in real-time for a convenient dining experience.',
      subdesc:
        'The project is completed and fully functional, offering secure payment processing and user authentication. FoodieHub provides a seamless and scalable platform for food enthusiasts, enhancing their dining experience through modern technology.',
      href: '/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/food.webp',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/db.svg',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/node.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/JS.webp',
        },
      ],
    
    
      
       
      
      
       
   
     
         
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.06 : isMobile ? 0.08 : 0.065,
      deskPosition: isMobile ? [0.5, 1, 0.5] : [0.25, 0, 0],
      cubePosition: isSmall ? [2.2, -9, -10] : isMobile ? [0, -3, -10] : isTablet ? [5, -5, 0] : [-5.3, 1, 0.1],
      reactLogoPosition: isSmall ? [-3.5, 1, 0] : isMobile ? [0, -3, -10] : isTablet ? [0, 10, 0] : [0.3, 0.13, 0.1],
      ringPosition: isSmall ? [-5, 6, 0] : isMobile ? [-9, -3, -10] : isTablet ? [-12, 10, 0] : [19, -11, 0.1],
      targetPosition: isSmall ? [-5, -9, -10] : isMobile ? [-9, -3, -10] : isTablet ? [-11, -7, -10] : [-13.5, -11, -10],
      ringScale: isSmall ? 1 : isMobile ? 0.001 : 0.065,
    };
  };
  
 