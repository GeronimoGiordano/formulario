import "./App.css";
import rocketImg from "./assets/rocket.png";
import image from "./assets/image-removebg-preview.png";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
