import CategoaryItem from './components/category-item/category-item.component';

import './catagories.styles.scss';



const App = () => {

  const catagories = [
    {
      id : 1,
      title : 'Hats',
      imageUrl : 'https://i.ibb.co/cvpntL1/hats.png', 
    },
    {
      id : 2,
      title : 'jackets',
      imageUrl : 'https://i.ibb.co/cvpntL1/jackets.png',
    },
    {
      id : 3,
      title : 'Sneakers',
      imageUrl : 'https://i.ibb.co/cvpntL1/snekers.png',
    },
    {
      id : 4,
      title : 'Womens',
      imageUrl : 'https://i.ibb.co/cvpntL1/womens.png',
    },
    {
      id : 5,
      title : 'Mens',
      imageUrl : 'https://i.ibb.co/cvpntL1/mens.png',
    },
  ];


  return (
    <div className="categories-container">
      {catagories.map((category) => (
        <CategoaryItem key={category.id} category={category}/> 
 
        ))}
  
    </div>
  )
}

export default App;
