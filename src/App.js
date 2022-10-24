import './App.scss';
import {useState} from 'react'
import img1 from './img/user1.jpg'
import img2 from './img/user2.jpg'
import img3 from './img/user3.jpg'
import img4 from './img/user4.jpg'
import img5 from './img/user5.jpg'

function App() {
  const [index,setIndex] = useState(0)
  const data = [
    {
      id: 0,
      name: 'PETER DOE',
      position: 'Product Manager',
      img: img1,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?'
    },
    {
      id: 1,
      name: 'SUSAN DOE',
      position: 'Developer',
      img: img2,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?'
    },
    {
      id: 2,
      name: 'EMMA DOE',
      position: 'Designer',
      img: img3,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?'
    },
    {
      id: 3,
      name: 'SUSAN DOE',
      position: 'Developer',
      img: img4,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?'
    },
    {
      id: 4,
      name: 'EMMA DOE',
      position: 'Designer',
      img: img5,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?'
    },
  ]

  const handleClickBtnNext = () => {
    if(index === data.length - 1)
      setIndex(0)
    else
      setIndex(prev => prev + 1)
  }

  const handleClickBtnPrev = () => {
    if(index === 0)
      setIndex(data.length - 1)
    else
      setIndex(prev => prev - 1)
  }

  return (
    <div className="App">
      <div className='container'>
        <h2 className='header'><span>/ </span>Reviews</h2>
        <div className='box'>
          <div className='btn' onClick={handleClickBtnPrev}>
            <i class="fas fa-chevron-left"></i>
          </div>

          <div className='content'>
            <div className='contentBox' style={{width: `${data.length * 60}vw`,transform: `translateX(-${60 * index}vw)`}}>
              {
                data.map(item => (
                  <div className='contentItem' key={item.id}>
                    <div className='img'>
                      <img src={item.img} alt='ptc' />
                    </div>
                    <p className='name'>{item.name}</p>
                    <p className='position'>{item.position}</p>
                    <p className='description'>{item.description}</p>
                    <div className='symbol'>
                      <i class="fas fa-quote-right"></i>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className='btn' onClick={handleClickBtnNext}>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
