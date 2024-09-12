import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaStreetView } from "react-icons/fa";
import { FaLongArrowAltRight  } from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { FaGenderless } from "react-icons/fa";
const Display = (props) => {
  let a = props.newData;
  return (
    <>
      <div style={{ display: "flex" }}>
        <img class="image" src={a.picture.large} alt="" />
        <div>
          <h2 class="name">
            <b>{a.name.first}</b> <b>{a.name.last}</b>
          </h2>
          <h4 class="country">{a.location.country}</h4>
          <p class="detail">
            <p>
              <FaLocationDot /> {a.location.city}, {a.location.street.name},{" "}
              {a.location.country}
            </p>
          </p>
        </div>
      </div>
      <div class="maindiv">
        <div>
        <div class="data">
          <p>
            <FaPhoneAlt />
            &nbsp;&nbsp;
          </p>
          <p>
            {a.phone} (Office) <br /> {a.cell} (Home)
          </p>
        </div>
        <div class="data">
          <p>
            <MdEmail />
            &nbsp;&nbsp;
          </p>
          <p>{a.email}</p>
        </div>
        <div class="data">
          <p>
            <FaStreetView />
            &nbsp;&nbsp;
          </p>
          <p>{a.location.street.name}</p>
        </div>
        </div>
        <div style={{marginLeft:"10px",marginTop:"60px"}}>
            <h2 style={{color:"#7a7a7a"}}>Aditional Information <FaLongArrowAltRight /></h2>
        </div>
        <div>
        <div class="data">
          <p>
          <MdOutlineDriveFileRenameOutline />
            &nbsp;&nbsp;
          </p>
          <p>Username: {a.login.username}</p>
        </div>
        <div class="data">
          <p>
          <RiLockPasswordFill  />
            &nbsp;&nbsp;
          </p>
          <p>Password: {a.login.password}</p>
        </div>
        <div class="data">
          <p>
          < FaGenderless   />
            &nbsp;&nbsp;
          </p>
          <p>Age: {a.dob.age}</p>
        </div>
        <div class="data">
          <p>
          < CiCalendarDate   />
            &nbsp;&nbsp;
          </p>
          <p>Date & Time of Birth: {a.dob.date}</p>
        </div>
        <div class="data">
          <p>
          < FaGenderless   />
            &nbsp;&nbsp;
          </p>
          <p>Gender: {a.gender}</p>
        </div>
        </div>
        <div>
        <div class="data">
          <p>
          < FaLocationDot />
            &nbsp;&nbsp;
          </p>
          <p>State: {a.location.state}, {a.location.country}</p>
        </div>
            <button class="btn btn-success" onClick={props.func}>Load for New User</button>
        </div>
      </div>
    </>
  );
};
export default Display;
