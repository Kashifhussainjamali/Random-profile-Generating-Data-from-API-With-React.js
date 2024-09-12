import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Background from "./componants/back";
import { Getdata } from "./Api/getdata";
import Display from "./componants/display";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  let [data, setData] = useState();


  useEffect(() => {
    Getdata().then((data) => setData(data.results[0]));
  }, []);

  const refresh = () => {
    Getdata().then((data) => setData(data.results[0]));
  };

  return (
    <>
      <Background></Background>
      {data && <Display newData={data} func={refresh}></Display>}
    </>
  );
}

export default App;
