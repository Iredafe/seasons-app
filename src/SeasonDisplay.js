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
    const text = season=== 'winter' ? 'Burr, it is chilly outta here' : `Whoa, Let's hit the beach`
    return <div><h1>{text}</h1></div>
}

export default SeasonDisplay;