import React from 'react';

const seasonConfig = {
summer:{
    text: "Whoa, Let's hit the beach",
    iconName: 'snowflake'
},
winter:{
    text: 'Burr, it is chilly outta here',
    iconName: 'sun'
}
}

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
    const{text, iconName} = seasonConfig[season];

    return (
    <div>
        <i className={`${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`${iconName} icon`} />
    </div>)
}

export default SeasonDisplay;