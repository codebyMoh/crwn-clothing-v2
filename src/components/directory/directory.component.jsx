import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => {
  console.log('Directory');
  return (

    
  
    <div className="directory-container">
      {categories.map((category) => (
        
        <CategoryItem key={category.id} category={category} />
 
      ))}
  
    </div>
    
  );
  console.log('Directory');
};

export default Directory;