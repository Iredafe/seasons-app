import React from 'react';

const getSeason=(lat, month)=>{
if(lat>2 && lat<9){
    return lat > 0 ? 'summer' : 'winter';
}else{
    return lat < 0 ? 'winter' : 'summer';
}
}

const SeasonDisplay=(props)=>{

    const season = getSeason(props.lat, new Date().month)
    console.log(season);
    const text = season=== 'winter' ? 'Burr, it is chilly outta here' : 'Whoa, Lets hit the beach';
    const icon= season==='winter'? 'snowflake' : 'sun'
    
    return (
    <div>
        <i className={`${icon} icon`}/>
        <h1>{text}</h1>
        <i className={`${icon} icon`} />
    </div>)
}

export default SeasonDisplay;