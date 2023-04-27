import React ,{useState} from 'react';
import Card from './Card';

const cardData = [
    {
      title: 'MHTCET',
      description: 'This is the description for card 1',
      image: '/mhtcet.jpg',
      link : './Page'
    },
    {
      title: 'Gate',
      description: 'This is the description for card 2',
      image: '/gate.png',
      link : './gate'
    },
    {
      title: 'G R E',
      description: 'This is the description for card 3',
      image: '/gre.png ',
      link : './gre'

    },
    {
      title: 'M B A',
      description: 'This is the description for card 4',
      image: '/mba.png',
      link : './mba'
    },
    {
        title: 'NEET',
        description: 'This is the description for card 4',
        image: '/neet.png',
        link : './neet'
    },
    {
        title: 'TOEFL',
        description: 'This is the description for card 4',
        image: 'toefl.png',
        link : './toefl'
    },
  ];
  
  
  const Exams = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
       <div className='bg-gray-200 p-2 pt-5'>
        <h1 className='text-center text-4xl font-serif'>Select Your Exam</h1>
      

      <div className="flex  px-32 py-8 justify-around">

        <div className="flex overflow-x-scroll scrollbar-none hide-scroll-bar h-full">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3  ${
              index === currentIndex ? '' : 'hidden md:block'
            }`}
          >
            <Card title={card.title} description={card.description} image={card.image} link={card.link} />
          </div>
        ))}
      </div>
      </div>
      </div>
    );
  };
  


export default Exams