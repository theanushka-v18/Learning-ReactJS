import './App.css';
import Vedio from './components/Vedio';

function App() {
  return (
    <>
      <p>Gallery Project using Components, props & JSX</p>
      <div className='container'>
        <div className='vedio-container'>
          <Vedio title="Nature Image" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className='vedio-container'>
          <Vedio title="Gaming Setup Image" src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className='vedio-container'>
          <Vedio title="Paris Image" src="https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className='vedio-container'>
          <Vedio title="Flower Image" src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className='vedio-container'>
          <Vedio title="Desert Image" src="https://images.pexels.com/photos/998653/pexels-photo-998653.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className='vedio-container'>
          <Vedio title="Mountain Image" src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </div>
    </>
  );
}

export default App;