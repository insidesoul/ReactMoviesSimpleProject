import {Card} from './Card'

function CardList (props) {
    const {cardList = []} = props;

    return <div className="cardList">
        {cardList.length ? cardList.map(card => (
             <Card key={card.imdbID} {...card} />
        )) : <h4 className="nothingFound">Nothing found</h4>
        }
    </div>
}

export {CardList}