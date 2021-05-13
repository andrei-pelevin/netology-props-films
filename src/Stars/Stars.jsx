import Star from './Star/Star'
import shortid from 'shortid';

const Stars = ({ count }) => {
    const arrStars = [];
    if (count <= 5 && count > 0) {
        let i = 0;
        while (i < count) {
            arrStars.push('</Star>')
            i++;
        }
    }


    const starsIndex = arrStars.map((star) => ({ id: shortid.generate()}))

    return (
        <ul className="card-body-stars u-clearfix">
            {starsIndex.map(star => {
                return <Star key={star.id } /> })
            }
        </ul >

    )
}

export default Stars;