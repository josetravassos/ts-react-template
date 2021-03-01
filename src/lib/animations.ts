export const pageAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
       // when: 'beforeChildren',
       staggerChildren: 0.2,
      },
    },
  };
  

  export const titleAnimation = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    show: {
      opacity: 1,
      x:0,
      transition: {
        duration: 0.4,
      },
    },
  };

  export const cardsAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.4,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };