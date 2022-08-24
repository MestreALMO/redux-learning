import { useSelector } from "react-redux";

export const LearningRedux = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <h1>Learning Redux</h1>
      <h2>Count: {count}</h2>
    </>
  );
};
