import { motion } from "framer-motion";
import Fab from "@mui/material/Fab";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = ({ onOpenSearchBar }) => {
  return (
    <div className="flex justify-center items-center p-10">
      <motion.div
        className="focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75 rounded-full"
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
        <Fab
          variant="extended"
          onClick={onOpenSearchBar}
          sx={{
            backgroundColor: "#4CAF50",
            color: "white",
            "&:hover": {
              backgroundColor: "#45a049",
            },
            padding: "15px 30px",
            fontSize: "1.25rem",
            borderRadius: "50px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          <SearchIcon sx={{ mr: 1 }} />
          Search
        </Fab>
      </motion.div>
    </div>
  );
};

export default SearchButton;
