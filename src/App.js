import { ThemeProvider } from "@mui/styles";
import SubscriptionForm from "./components/SubscriptionForm";
import SearchModels from "./components/SearchModels";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  spacing: 8,
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<SearchModels />} />
          <Route path="/form" element={<SubscriptionForm />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
