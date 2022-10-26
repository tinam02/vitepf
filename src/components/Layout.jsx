import { motion } from "framer-motion";

function Layout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, background: "#a5222a" }}
      animate={{ opacity: 1, background: "none" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
}

export default Layout;
