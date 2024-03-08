import Navbar from './Navbar';
import styles from '@/styles/layout.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Layout = ({ children, color }) => {
  let style = {};

  if (color != null) {
    style = {
      backgroundColor: color,
    };
  }

  return (
    <div className={styles.layout} style={style}> 
      <Navbar />
      <main className={styles.main}> 
        <PresenceContainer>
          {children}
        </PresenceContainer>
      </main> 
    </div>
  );
};

export default Layout;



const PresenceContainer = ({children}) => {
  const [isVisible, setVisible] = useState(true)
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: .1 }}
          animate={{ opacity: 1,}}
          exit={{ opacity: .1 }}
          transition={{ duration: .5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}