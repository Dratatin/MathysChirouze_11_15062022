import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Slider from '../components/Slider';


const Housing = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  useEffect(() => {
    fetch("../../logements.json")
      .then(response => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.find(elem => elem.id === id));
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div className="location">
      <Slider tabimages={items.pictures} />
    </div>
    );
  }
}

export default Housing
