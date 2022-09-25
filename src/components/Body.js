import React, { useState } from 'react'

import '../styles/Body.css'
import properties from '../Data/data';
import PropertyCard from './PropertyCard';

import FilterBar from './FilterBar';
const Body = () => {
  const [data,setData] = useState([...properties])
  console.log(data)
 
  const filter = (itemsToFilter) => {

    var newData = properties
    
    if(itemsToFilter[1]!=="All"){
      
      newData = newData.filter(item => item.location === itemsToFilter[1]) 
    }

    if(itemsToFilter[2]!==null){
      const date = itemsToFilter[2].getDate();
      const month = itemsToFilter[2].getMonth()+1;
      const year = itemsToFilter[2].getFullYear();
      
      newData = newData.filter(item => {
        const itemFullDate = new Date(item.moveInDate)
        let itemDate, itemMonth, itemYear
        itemDate = itemFullDate.getDate();
        itemMonth = itemFullDate.getMonth()+1;
        itemYear = itemFullDate.getFullYear();
        console.log(itemsToFilter[2], itemDate, itemMonth, itemYear)
        if(itemYear > year){
          return true;
        } else if(itemYear === year){
          if(itemMonth > month) {
            return true;
          } else if(itemMonth === month){
            if(itemDate>= date){
              return true;
            } return false;
          } else {
            return false
          }
        } else {
          return false
        }
      })  
    }
    
    if(itemsToFilter[3]!=="All"){
      
      let min, max = 0;
      if(itemsToFilter[3]==="$0 - $1000") {
        min = 0
        max = 1000
      }
      if(itemsToFilter[3]==="$1000 - $2000"){
        console.log('setting min max')
        min = 1000
        max = 2000
      }
      if(itemsToFilter[3]==="$2000 - $3000"){
        min = 2000
        max = 3000
      }
      if(itemsToFilter[3]==="more than $3000"){
        min = 3000
        max = 100000
      }
    
      newData = newData.filter(item => item.price > min && item.price < max) 
      console.log('printing new', newData)
    }

    if(itemsToFilter[4]!=="All"){
      
      newData = newData.filter(item => item.type === itemsToFilter[4]) 
    }

  console.log(newData)
  setData([...newData])
      
  }
  return (
    <div className='body'>
      <div className='bodyContainer'>
        <div className='bodyHeader'>
          <h2>Search properties to rent</h2>
          
        </div>
        <FilterBar filter={(itemsToFilter) => filter(itemsToFilter)}  />
        <div className='bodyContent'>
          <div className='grid'>
        {
          data?.map(property => {
            return(
              <PropertyCard property={property}/>
            );
          })
        }
        </div>
        </div>
      </div>
    </div>
  )
}


export default Body