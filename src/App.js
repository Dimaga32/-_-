import React, { useState} from "react";
import "./styles/App.css"
import Table from "./components/UI/table/table";
import useFilters from "./components/hooks/useFilter";
import Filter from "./components/other components/Filter";
import PostServise from "./components/API/postServise";
import useFetching from "./components/hooks/useFetching";
import СargoCreater from "./components/UI/Creater/cargoCreater/cargoCreater";
function App() {
  const [cargoList, setCargoList] = useState([
    {
      id: "CARGO001",
      name: "Строительные материалы",
      status: "В пути",
      origin: "Москва",
      destination: "Казань",
      departureDate: "2024-11-24"
    },
    {
      id: "CARGO002",
      name: "Хрупкий груз",
      status: "Ожидает отправки",
      origin: "Санкт-Петербург",
      destination: "Екатеринбург",
      departureDate: "2024-11-26"
    }
  ]);
  const [vis, setVis] = useState(false);
  const [filter, setFilter] = useState({
    search: "",
    status: "",
    origin: "",
    destination: "",
    departureDate: ""
  });
  const searchedСargos = useFilters(cargoList, filter);
//useFetching(PostServise.fetch,setVis,"ссылка на json массив доставок",setIsLoadedNames)
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center" style={{ padding: 20 }}>
      <СargoCreater
        setVis={setVis}
        vis={vis}
        cargoList={cargoList}
        setCargoList={setCargoList}
      />
      <button
        className="btn btn-primary mb-4"
        style={{ width: "30vw", height: "10vh", fontSize: "36px" }}
        onClick={() => setVis(true)}
      >
        Добавить груз
      </button>
      <Filter filter={filter} setFilter={setFilter} />
      <Table elements={searchedСargos} cargoList={cargoList} setCargoList={setCargoList} />
    </div>
  );
}
export default App;
