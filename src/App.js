import { Typography } from "@mui/material";
import { LearningRedux } from "./components/learningRedux";
import { Counter } from "./components/counter";

function App() {
  return (
    <>
      <Typography variant="h1">DevALMO, YouTube Channel</Typography>

      <LearningRedux />
      <Counter />
    </>
  );
}

export default App;
