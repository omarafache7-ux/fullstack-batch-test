const CityListItem = ({city,index})=>{
    return(
        <>
        <span>
          <li key={index}>{city}</li>
        </span>
        </>
    )
}

export default CityListItem;