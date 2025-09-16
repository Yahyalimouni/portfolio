import { easeOut } from 'framer-motion'

export const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3, // Display childs one after one
            },
        },
    };


export const titleVariants = {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      };


export const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
    };

export const stackVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1,
      when: "beforeChildren"
    } 
  }
};
