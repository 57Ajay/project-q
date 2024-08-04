import { useEffect, useState } from "react";
import axios from "axios";

type DataState = {
  data1: any[];
  data2: any[];
  data3: any[];
};

const App = () => {
  const [data, setData] = useState<DataState>({
    data1: [],
    data2: [],
    data3: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api");
        setData((prev) => ({
          ...prev,
          data1: Array.isArray(res.data) ? res.data : [res.data],
        }));
      } catch (error) {
        console.error("Error fetching data1:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData2 = async () => {
      try {
        const res = await axios.get("/api/1");
        setData((prev) => ({
          ...prev,
          data2: Array.isArray(res.data) ? res.data : [res.data],
        }));
      } catch (error) {
        console.error("Error fetching data2:", error);
      }
    };
    getData2();
  }, []);

  useEffect(() => {
    const getData3 = async () => {
      try {
        const res = await axios.get("/api/2");
        setData((prev) => ({
          ...prev,
          data3: Array.isArray(res.data) ? res.data : [res.data],
        }));
      } catch (error) {
        console.error("Error fetching data3:", error);
      }
    };
    getData3();
  }, []);

  setTimeout(()=>{
    console.log("data",data)
  }, 5000);
  
  return (
    <div>
      <h1>Ajay is here</h1>
      <h2>Data1</h2>
      {data.data1.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <h2>Data2</h2>
      {data.data2.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <h2>Data3</h2>
      {data.data3.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default App;
