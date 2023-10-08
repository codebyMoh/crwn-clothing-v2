import Directory from '../../components/directory/directory.component';


const Home = () => {

    const categories = [
        {
            id: 1,
            title: 'Hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        },
        {
            id: 2,
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/cvpntL1/jackets.png',
        },
        {
            id: 3,
            title: 'Sneakers',
            imageUrl: 'https://i.ibb.co/cvpntL1/snekers.png',
        },
        {
            id: 4,
            title: 'Womens',
            imageUrl: 'https://i.ibb.co/cvpntL1/womens.png',
        },
        {
            id: 5,
            title: 'Mens',
            imageUrl: 'https://i.ibb.co/cvpntL1/mens.png',
        },
    ];


    return <Directory categories={categories} />;
  

};

export default Home;