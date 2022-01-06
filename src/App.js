import React from 'react';
import PropTypes from 'prop-types'

const foodILike=[
  {
    'id':1,
    'name':'борщ',
    'image':'https://avatars.mds.yandex.net/get-zen_doc/931568/pub_5bd338c19229b700ab50e2c7_5bd33a76580af300ac34702e/scale_1200',
    'rating': 4.8
  },
  {
    'id':2,
    'name':'драники',
    'image':'https://avatars.mds.yandex.net/get-zen_doc/1350031/pub_5b977500602fad00ad9aa181_5b977d12c9e72b00a91db465/scale_1200',
    'rating': 4.9
  }
]

function Food({name, pic, rating}){
  return (
    <div>
      <h3>Я люблю {name}</h3>
      <h4>{rating}/5</h4>
      <img src={pic} alt="picture" />
    </div>)
}

Food.propTypes={
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} pic={dish.image} rating={dish.rating} />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}
export default App;
