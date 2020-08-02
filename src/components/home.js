import React from 'react';
import NewsList from './Widgets/NewsList/newsList';

//IMPORT THE SLIDER COMPONENT
import NewsSlider from './Widgets/NewsSlider/slider'; 
const Home = () => {
    return ( 
        <div>
            <NewsSlider
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots:true
                }}
            />

            <NewsList
                type="card"
                loadmore={true}
                start={3}
                amount={3}
            />
        </div>
     );
}
 
export default Home;