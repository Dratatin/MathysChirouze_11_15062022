import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import Dropdown from '../components/Dropdown';
import Tag from '../components/Tag';
import Stars from '../components/Starts';


const Housing = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [error404, setError404] = useState(null);
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
          const logement = result.find(elem => elem.id === id);
          setIsLoaded(true);
          if (logement === undefined) {
            setError404(true)
          }
          else {
            setItems(logement);
          }
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [id])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (error404) {
    return <Navigate  to='/error404' />
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div className="housing">
        <Slider tabimages={items.pictures} />
        <section className="housing__content">
          <div className="housing__content__heading">
            <div className="housing-details">
              <h2>{items.title}</h2>
              <h5 className="housing-details__subtitle" >{items.location}</h5>
              <ul className="housing-details__tags">
                {items.tags.map((tag, index) => (
                  <Tag key={index} tag={tag}/>
                ))}
              </ul>
            </div>
            <div className="housing-informations">
              <div className="housing-informations__host">
                <img src={items.host.picture} alt={items.title}/>
                <h5>{items.host.name}</h5>
              </div>
              <div className="housing-informations__stars">
                  <Stars rating={items.rating}/>
              </div>
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
