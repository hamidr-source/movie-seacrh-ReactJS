import { motion } from "framer-motion";
import Fab from "@mui/material/Fab";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = ({ onOpenSearchBar }) => {
  return (
    <div>
      <motion.div
        className="mt-20 rounded-3xl"
        animate={{
          x: [2, 3, -3, 3, -3, 2],
          rotate: [2, 3, -3, 3, -3, 2],
          boxShadow: [
            "0 0px 0px rgba(0, 0, 0, 0.0)",
            "0 0px 20px rgba(76, 175, 80, 0.6)",
            "0 0px 0px rgba(0, 0, 0, 0.0)",
          ],
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Fab variant="extended" onClick={onOpenSearchBar}>
          <SearchIcon />
        </Fab>
      </motion.div>
    </div>
  );
};

export default SearchButton;
