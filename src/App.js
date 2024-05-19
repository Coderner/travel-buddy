import Map from "./components/Map";
import List from "./components/List";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{display:"flex", justifyContent:"space-between"}}>
       <List/>
       <Map/>
    </Box>
  );
}

export default App;
