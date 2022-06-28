// import fullStar from '../assets/fullstar.svg'
// import emptyStar from '../assets/emptystar.svg'

const Stars = ({rating}) => {
    const maxRating = 5;
    const stars = Array.from({length: maxRating}, () => '🟊')

    return(
        <div className="stars">
            {stars.map((star, index) => {
                let active = false;
                if (index < rating) {
                    active = true;
                }
                return (
                    <span 
                        className={active ? "stars__star stars__star--active" : "stars__star stars__star--inactive"}  
                        key={index}>
                            {star}
                    </span>
                )
            })}
        </div>
    )
}

export default Stars