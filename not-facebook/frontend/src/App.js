import { LiveVideo } from "./svg";

function App() {
  const get = async () => {
    const res = await fetch("http://localhost:8000", "sote other link");
    function options(req, res) {
      let tmp;
      let origin = req.header("Origin");
      if (allowed.indexOf(origin) > -1) {
        tmp = {
          origin: true,
          optionSuccessStatus: 200,
        };
      } else {
        tmp = {
          origin: "stupid",
        };
      }
      res(null, tmp);
    }
  };

  return (
    <div>
      <h1>Hello Frontend</h1>
      <div className="all_friends_icon" />
      <div className="all_friends_icon" />
      <i className="trash_icon" />
      <LiveVideo color="red" />
    </div>
  );
}

export default App;
