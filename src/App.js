import React, { useState, useRef, useMemo, useEffect } from "react";
import "./styles/App.css"
import Table from "./components/UI/table/table";
import useFilters from "./components/hooks/useFilter";
import NameCreater from "./components/UI/Creater/nameCreater/nameCreater";
import Filter from "./components/other components/Filter";
import PostServise from "./components/API/postServise";
import useFetching from "./components/hooks/useFetching";
import Loader from "./components/UI/loader/Loader";
function App() {
  const [names,setNames]=useState([])
  const [filter, setFilter]=useState({sort:"", search:"",minID:"",maxID:""})
  const searchedNames=useFilters(names, filter)
  const [isLoadedNames,setIsLoadedNames]=useState(false)
  useFetching(PostServise.fetchNames,setNames,"https://jsonplaceholder.typicode.com/posts",setIsLoadedNames)
  return (
    <div className="App"  style={{padding:20, display:"flex", flexDirection:"column", alignItems:"center",justifyContent:'center'}}>
      <NameCreater names={names} setNames={setNames}/>
      <Filter filter={filter} setFilter={setFilter}/>
      {isLoadedNames?
      <Table filter={filter} setFilter={setFilter}
      elements={searchedNames}
      names={names}
      setNames={setNames}/>:
      <Loader/>
      }
      
    </div>
  )
}
export default App;
