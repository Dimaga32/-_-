import { useEffect } from "react";
function useFetching(fetchFunc,setParams,url,setIsLoaded){
  useEffect(() => {
    const fetchAndSetNames = async () => {
      try {
        const data = await fetchFunc(url); 
        if (data){setParams(data)}; 
        setIsLoaded(true)
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        setIsLoaded(true)
      }
    };
    fetchAndSetNames();
  }, [])}
  export default useFetching