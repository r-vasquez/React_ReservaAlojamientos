import { hotelsData } from '../../scripts/data.js';

class CardContainer extends React.Component {
  render() {
    const hotelesName = hotelsData.map(hotel => {
      return <li key={hotel.name}>{hotel.name}</li>;
    });

    return (
      <div>
        <ul>{hotelesName}</ul>
      </div>
    );
  }
}
export default CardContainer;
