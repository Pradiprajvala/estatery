import React, { useEffect, useRef, useState } from 'react'
import SearchButton from './SearchButton'
import '../styles/FilterBar.css'

const FilterBar = ({filter}) => {

  const showDropdown = ({id}) => {
     if(open[id] === true){
      setOpen({});
     } else {
        setOpen({[id]: true})
     }
  }

  
  const [date,setDate] = useState(null);
  const [open,setOpen] = useState({});
  const locationRef = useRef()
  const priceRef = useRef()
  const propertyTypeRef = useRef()

  useEffect(() => {

    const closeDropDown = (e) => {
      if(e.path[0]!== locationRef.current && e.path[0]!== priceRef.current && e.path[0]!== propertyTypeRef.current){
        setOpen({})
      }
    }
    
    document.body.addEventListener('click', (e) => closeDropDown(e))
  })

  const location = [
    'All',
    'New York',
    'Canada',
    'San Fransisco',
    'Germany',
    
  ]

  const price = [
    'All',
    "$0 - $1000",
    "$1000 - $2000",
    "$2000 - $3000",
    "more than $3000"
  ]

  const propertyType = [
    'All',
    "Office",
    "House",
    "Shop"
  ]

  const callFilter = () => {
    if(date){
      itemsToFilter[2]  = new Date(date)
    } else {
      itemsToFilter[2] = null
    }
    console.log(date)
    
    filter(itemsToFilter)
  }

  const [itemsToFilter, setItemsToFilter] = useState({1: 'All', 2: null, 3: 'All', 4: 'All'})

  const itemSelected = ({id, listItem}) => {

      setItemsToFilter({...itemsToFilter, [id]: listItem})
  }
  
  return (
    <div className='filterBar'>
            
          
            <div className='filterBarItem'>
              <p className='filterBarItemName'>Location</p>
              <p className='filterBarItemValue' ref={locationRef} onClick={() => showDropdown({id: 1})}>{itemsToFilter[1]}</p>
              <div className={`dropdown ${open[1] === true ? 'active' : 'inActive'}`}>
                {
                  location?.map(listItem => {
                    return (
                      <p className='filterBarItemValue' onClick={() => itemSelected({id:1, listItem})}>{listItem}</p>
                    )
                  })
                }
              </div>
            </div>
            <hr/>

            <div className='filterBarItem'>
              <p className='filterBarItemName'>When</p>
              {/* <p className='filterBarItemValue'  ></p> */}

              <input type='date' onChange={e => {
                if(e.target.value){
                  console.log('printing it',e.target.value)
                  setDate(e.target.value)
                } else {
                  console.log('its null')
                  setDate(null)
                }
                } 
              }/>
            </div>
            <hr/>
          
            <div className='filterBarItem'>
              <p className='filterBarItemName'>Price</p>
              <p className='filterBarItemValue' ref={priceRef} onClick={() => showDropdown({id: 3})}>{itemsToFilter[3]}</p>
              <div className={`dropdown ${open[3] === true ? 'active' : 'inActive'}`}>
                {
                  price?.map(listItem => {
                    return (
                      <p className='filterBarItemValue' onClick={() => itemSelected({id:3, listItem})}>{listItem}</p>
                    )
                  })
                }
              </div>
            </div>
            <hr/>
        
            <div className='filterBarItem'>
              <p className='filterBarItemName'>Property Type</p>
              <p className='filterBarItemValue' ref={propertyTypeRef} onClick={() => showDropdown({id: 4})}>{itemsToFilter[4]}</p>
              <div className={`dropdown ${open[4] === true ? 'active' : 'inActive'}`}>
                {
                  propertyType?.map(listItem => {
                    return (
                      <p className='filterBarItemValue' onClick={() => itemSelected({id:4, listItem})}>{listItem}</p>
                    )
                  })
                }
              </div>
            </div>
            <hr />
            <div className='filterBarItem' onClick={callFilter}>
              <SearchButton />
            </div>
          </div>
  )
}


export default FilterBar