import { useEffect, useState } from "react";
import axios from "axios";

const App = ()=>{

  const [data, setData] = useState({
    data1: [],
    data2: [],
    data3: []
  });
  useEffect(() => {
    const getData = async()=>{
      const res = await axios.get("/api");
      setData((prev)=>{
        return {...prev, data1: res.data}
      });
    };
    getData()
  }, []);

  useEffect(() => {
    const getData2 = async()=>{
      const res = await axios.get("/api/1");
      setData((prev)=>{
        return {...prev, data2: res.data}
      });
    };
    getData2()
  }, []);

  useEffect(() => {
    const getData3 = async()=>{
      const res = await axios.get("/api/2");
      setData((prev)=>{
        return {...prev, data3: res.data}
      });
    };
    getData3()
  }, []);
  console.log(data)
  return (
    <div>
      <h1>Ajay is here</h1>
      <p>{data.data1}</p>
      <p>{data.data2}</p>
      <p>{data.data3}</p>
    </div>
  )
};

export default App;