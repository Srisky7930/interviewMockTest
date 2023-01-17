import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const PlayingList = props => {
  const {eachItems, onDeleteButton} = props
  const {id, name, imageUrl, duration, genre} = eachItems

  const onClickDeleteButton = () => {
    onDeleteButton(id)
  }

  return (
    <li className="list-items">
      <div className="list-items-card">
        <div>
          <img src={imageUrl} alt="track" className="image" />
        </div>
        <div className="genre-card">
          <p className="name-music"> {name} </p>
          <p className="genre"> {genre} </p>
        </div>
      </div>
      <div className="duration-card">
        <p className="duration"> {duration} </p>
        <div>
          <button
            type="button"
            className="delete"
            onClick={onClickDeleteButton}
            data-testid="delete"
          >
            <AiOutlineDelete className="icon" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PlayingList
