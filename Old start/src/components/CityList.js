import CityListItem from "./CityListItem";
const CityList = ({cities})=>{
   return(
    <div>
        <h3>List of Cities</h3>
        <ol>
            {cities.map((city,index)=>(
                <CityListItem city={city} index={index}/>
            //<li key={index}>{city}</li>
            ))
            }
        </ol>
          <ul>
            {cities.map((city,index)=>(
                <CityListItem city={city} index={index}/>
            //<li key={index}>{city}</li>
            ))
            }
        </ul>
    </div>
   )
}

export default CityList;