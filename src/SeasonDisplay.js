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
    return <div>Hello Season</div>
}

export default SeasonDisplay;