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
     if(filter.departureDate){
       var i=[];
       [...sorted_names].filter(
         (el)=>{
           if(el.departureDate==filter.departureDate){i.push(el)}
         })
         sorted_names=[...i]
     }
     if(filter.status){
       var i=[];
       [...sorted_names].filter(
         (el)=>{
           if(el.status==filter.status){i.push(el)}
         })
         sorted_names=[...i]
     }
     if(filter.destination){
      var i=[];
      [...sorted_names].filter(
        (el)=>{
          if(el.destination==filter.destination){i.push(el)}
        })
        sorted_names=[...i]
    }
    if(filter.origin){
      var i=[];
      [...sorted_names].filter(
        (el)=>{
          if(el.origin==filter.origin){i.push(el)}
        })
        sorted_names=[...i]
    }
    return(sorted_names)
    
},
  [names,filter]))
}
export default useFilters