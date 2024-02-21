import React from 'react';

const Restaurants = () => {
  return (
    <section id="restaurants">
      <p className='text'>In this article we will cover both Vegetarian and Non-vegetarian restaurants availabile in the temple town.</p>
      
      <div className="restaurants-container">
        <div className="restaurants-card">
          <img  src="https://lh3.googleusercontent.com/p/AF1QipM3smP-neMX9ySFvHunV993qBzjc1sBTT5feToS=s680-w680-h510" alt="Kanishka Multicuisine restaurant" className="restaurants-image" />
          <div className="restaurants-details">
            <h3 className="restaurants-title">Kanishka Multicuisine restaurant</h3>
            <p className="restaurants-description">Kanishka Multicuisine restaurant is known for its variety of North Indian, South Indian, Vegetarian and Non Vegetarian food. Need not to mention the attractive ambience.</p>
          </div>
        </div>

        <div className="restaurants-card">
          <img  src="https://lh3.googleusercontent.com/p/AF1QipN1AXmPkfEb0Or2JcqoM-Eu3fQfBqKtK1yafRqd=s680-w680-h510" alt="Green Paradise" className="restaurants-image" />
          <div className="restaurants-details">
            <h3 className="restaurants-title">Green Paradise restaurant</h3>
            <p className="restaurants-description">Green Paradise restaurant is known for its peaceful ambience. And Rayalaseema Chicken curry is their star item. It is located on the Srikalahasti-Nellore Highway and comprises both Non vegetarian and Vegetarian food.</p>
          </div>
        </div>
        <div className="restaurants-card">
          <img  src="https://b.zmtcdn.com/data/pictures/4/20195054/1108472d0286cec5d44855a1e0b98b72.jpg" alt="I-fruit restaurant" className="restaurants-image" />
          <div className="restaurants-details">
            <h3 className="restaurants-title">I-fruit</h3>
            <p className="restaurants-description">This Vegetarian only restaurant is located in MG street. Burgers, Pizzas, Hygenic Pani puri, Sandwiches are their specialities.</p>
          </div>
        </div>
        
        <div className="restaurants-card">
          <img  src="https://b.zmtcdn.com/data/pictures/7/20249467/dc697274330ebe77b498943150288a92.jpg?fit=around|960:500&crop=960:500;*,*" alt="sk food court" className="restaurants-image" />
          <div className="restaurants-details">
            <h3 className="restaurants-title">SK Food Court</h3>
            <p className="restaurants-description">SK Food Court is known for its variety of South Indian and North Indian cuisines. The food is delicious and price is reasonable. Special Chicken biriyani is their special Dish.</p>
          </div>
        </div>
        <div className="restaurants-card">
          <img  src="https://lh3.googleusercontent.com/p/AF1QipNbRZa37IvYh-ubO6wE2lJljlwT60qs6Dgoc6Jm=w1080-h608-p-k-no-v0" alt="HFC" className="restaurants-image" />
          <div className="restaurants-details">
            <h3 className="restaurants-title">HFC Food Court</h3>
            <p className="restaurants-description">In HFC food court we can expect fried chicken like that of KfC. Reasonable prices and variety of dishes like desserts, fried rice, noodles, pizzas are available here.</p>
          </div>
        </div>
        <div className="restaurants-card">
          <img  src="https://content.jdmagicbox.com/comp/srikalahasti/e5/9999p8578.8578.220605021045.e2e5/catalogue/arabian-kebabs-srikalahasti-ho-srikalahasti-biryani-restaurants-0vf81o5dwm.jpg?clr=#382e38" alt="Arabian Kebabs" className="restaurants-image" />
          <div className="restaurants-details">
            <h3 className="restaurants-title">Arabian Kebabs</h3>
            <p className="restaurants-description">Arabian Kebabs is well known in the localhood for their Chicken Dum Biriyani. Muslim style, aroma cooked on firewood make it unique. Also here we can find kebabs, fried chicken, veg rolls and Non veg rolls.</p>
          </div>
        </div>
        </div>
   
    </section>
  )
};

export default Restaurants;