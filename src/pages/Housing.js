import { useParams, Navigate } from 'react-router-dom';
import { useFetch } from '../services/api'
import Slider from '../components/Slider';
import Dropdown from '../components/Dropdown';
import Tag from '../components/Tag';
import Stars from '../components/Starts';
import Loader from '../components/Loader'


const Housing = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch("../../logements.json")

  if (error) {
    return <span>Il y a eu un problème</span>
  } else if (isLoading) {
    return <Loader />
  } else {
    const logement = data.find(elem => elem.id === id);

    if (logement === undefined) return <Navigate  to='/error404' />

    return (
      <div className="housing">
        <Slider tabimages={logement.pictures} />
        <section className="housing__content">
          <div className="housing__content__heading">
            <div className="housing-details">
              <h2>{logement.title}</h2>
              <h5 className="housing-details__subtitle" >{logement.location}</h5>
              <ul className="housing-details__tags">
                {logement.tags.map((tag, index) => (
                  <Tag key={index} tag={tag}/>
                ))}
              </ul>
            </div>
            <div className="housing-informations">
              <div className="housing-informations__host">
                <img src={logement.host.picture} alt={logement.title}/>
                <h5>{logement.host.name}</h5>
              </div>
              <div className="housing-informations__stars">
                  <Stars rating={logement.rating}/>
              </div>
            </div>
          </div>
          <div className="housing__content__description">
            <Dropdown title="Description" content={logement.description}/>
            <Dropdown title="Equipement" content={logement.equipments}/>
          </div>
        </section>
      </div>
    )
  }
}

export default Housing
