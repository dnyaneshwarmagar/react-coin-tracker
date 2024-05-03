import { useEffect, useState } from "react";
import "./App.css";
import Row from "./components/Row";

function App() {
  let [loading, setLoading] = useState(true);
  let [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      let apiUrl =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
      let response = await fetch(apiUrl);
      let data = await response.json();
      console.log("data:", data);
      setLoading(false);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div id="table_div">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table id="cryptoTable">
          <tbody>
            {data?.map((coin, index) => (
              <Row key={index} coin={coin} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
