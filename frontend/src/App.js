import "./App.css";
import MyProjects from "./components/Tasks/Index";
import TaskBoard from "./components/TaskBoard/Index";
function App() {
  return (
    <div className="flex absolute top-0 right-0 bottom-0 left-0 overflow-hidden	">
      <div className="w-60 bg-white shadow-custom">
        <TaskBoard />
      </div>
      <div className="flex-grow">
        <MyProjects />
      </div>
    </div>
  );
}

export default App;
