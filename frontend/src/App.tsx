import { useEffect, useState } from "react";
import axios from "axios";

const App = ()=>{

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    const getData = async()=>{
      const res = await axios.get("/api");
      setData(res.data);
    };
    getData()
  }, []);

  useEffect(() => {
    const getData2 = async()=>{
      const res = await axios.get("/api/1");
      setData2(res.data);
    };
    getData2()
  }, []);


  return (
    <div>
      <h1>Ajay is here</h1>
      <p>{(data)}</p>
      <p>{(data2)}</p>
    </div>
  )
};

export default App;