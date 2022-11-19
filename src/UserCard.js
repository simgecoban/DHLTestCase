import './UserCard.css';
import User from './User';
import Phone from './Phone';
import City from './City';
import Age from './Age'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';



const UserCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__image"><img src={userData.picture.medium}/></div>
            <div className="card__title"> </div>
           
            <div className="card__body">
                
                <User name={userData.name} location={userData.location} />
                <Phone number={userData.phone} />
                <City location={userData.location} /> 
                <Age dob={userData.dob} />
                <button className='btn'>  <FontAwesomeIcon icon={faEnvelope} /> </button>            
               
            </div>

        </div>
    )
};

export default UserCard;