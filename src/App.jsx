import Completed from "./pages/Completed/Completed";
import Doing from "./pages/Doing/Doing";
import Incomplete from "./pages/Incomplete/Incomplete";
import Overd from "./pages/Overd/Overd";
import Todo from "./pages/Todo/Todo";
import UnderReview from "./pages/UnderReview/UnderReview";

const App = () => {
  return (
    <div className="px-4 flex gap-2 items-center">
      <Incomplete />
      {/* <Todo/>
      <Doing/>
      <Completed/>
      <UnderReview/>
      <Overd/> */}
    </div>
  );
};

export default App;
