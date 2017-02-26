import React from 'react';
// import './member-tile.scss';
/**
* Stateless MemberTile to just show simple data
* @prop name The name of the member
* @prop favoriteHero The hero the member likes
* @prop powerLevel Obvious property, need I explain
*/
export default ({ name = 'Unknown', favoriteHero = 'Unknown', powerLevel = '9000'}) => {

  return (
    <div className="tile">
       <h3>{name}</h3>
       <p><strong>Favorite Hero</strong>: {favoriteHero}</p>
       <p><strong>Power Level</strong>: {powerLevel}</p>
    </div>
  );
}
