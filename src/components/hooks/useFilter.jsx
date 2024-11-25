import { useMemo } from "react";

function useFilters(names, filter){
  return (useMemo(()=>{
    var sorted_names=[]
    if(filter.search){
      var i=[];
      [...names].filter(
        (el)=>{
          if(el.name.includes(filter.search)){i.push(el)}
        })
        sorted_names=[...i]
    }
    else{sorted_names=[...names]}
     if(filter.maxID){
       var i=[];
       [...sorted_names].filter(
         (el)=>{
           if(el.id<=filter.maxID){i.push(el)}
         })
         sorted_names=[...i]
     }
     if(filter.minID){
       var i=[];
       [...sorted_names].filter(
         (el)=>{
           if(el.id>=filter.minID){i.push(el)}
         })
         sorted_names=[...i]
     }
    
    switch (filter.sort){
      case 1:
        sorted_names=[...sorted_names].sort((a, b) => a.id-b.id)
        break
      case 2:
        sorted_names=[...sorted_names].sort((a, b) => b.id-a.id)
        break
      case 3:
        sorted_names=[...sorted_names].sort((a, b) => b.name[0].localeCompare(a.name[0]))
        break
      case 4:
        sorted_names=[...sorted_names].sort((a, b) => a.name[0].localeCompare(b.name[0]))
        break
    }
    return(sorted_names)
},
  [names,filter]))
}
export default useFilters