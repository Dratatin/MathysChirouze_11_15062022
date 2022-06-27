import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import Dropdown from '../components/Dropdown';
import Stars from '../components/Starts'


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
      <div className="housing">
        <Slider tabimages={items.pictures} />
        <section className="housing__content">
          <div className="housing__content__heading">
            <div className="housing__content__heading__title">
              <h2>{items.title}</h2>
              <h4>{items.location}</h4>
            </div>
            <div className="housing__content__heading__host">
              <img src={items.host.picture} alt={items.title}/>
              <h4>{items.host.name}</h4>
            </div>
          </div>
          <div className="housing__content__details">
            <ul className="housing__content__details__tags">
              {items.tags.map((tag, index) => (
                <li key={index}>
                  {tag}
                </li>
              ))}
            </ul>
            <div className="housing__content__details__stars">
                <Stars rating={items.rating}/>
            </div>
          </div>
          <div className="housing__content__description">
            <Dropdown title="Description" content={items.description}/>
            <Dropdown title="Equipement" content={items.equipments}/>
          </div>
        </section>
      </div>
    );
  }
}

export default Housing
