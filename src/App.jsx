import { useCallback, useEffect, useRef, useState } from 'react';
import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

const storedIds= JSON.parse(localStorage.getItem('selectedPlace')) || [];
const storedPlaces = storedIds.map(id =>AVAILABLE_PLACES.find((place) => place.id === id));


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const selectedPlace = useRef();
  const [availablePlaces, setAvailablePlaces]=useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);


  const handleRemovePlace= useEffect(()=>{     
      navigator.geolocation.getCurrentPosition((position)=>{
        const sortedPlaces=sortPlacesByDistance(
              AVAILABLE_PLACES, 
              position.coords.latitude, 
              position.coords.longitude);
    
        setAvailablePlaces(sortedPlaces);
      //  console.log(sortedPlaces);
      });
    }, []);
  

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    const storedIds= JSON.parse(localStorage.getItem('selectedPlace')) || [];
    if(storedIds.indexOf(id)===-1) {
      localStorage.setItem('selectedPlace', JSON.stringify([id, ...storedIds]));
    }
  }


  const handleRemovePlaceFnc = useCallback(() => {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
  
     setModalIsOpen(false);
     const storedIds = JSON.parse(localStorage.getItem('selectedPlace')) || [];
     localStorage.setItem('selectedPlace', JSON.stringify(storedIds.filter(id => id !== selectedPlace.current)));
  }, []);
  


  return (
    <>
      <Modal   open={modalIsOpen}  onClose={handleStopRemovePlace} > 
       {modalIsOpen &&  <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlaceFnc}
        />}
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>Place  Picker</h1>
        <p>
        방문하고 싶거나 방문한 장소에 대한 개인 컬렉션을 만드세요.
        </p>
      </header>
      <main>
        <Places
          title="방문하고 싶은곳..."
          fallbackText={'아래에서 방문하고 싶은 장소를 선택하세요.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="이용 가능한 장소"
          places={availablePlaces}
          fallbackText="거리별로 장소를 정렬하는 중..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
