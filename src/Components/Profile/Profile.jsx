/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  border-radius: 
  width: 20%;
  max-width: 200px;
 &:hover,
  &:focus {
    border: 2px solid white;
  }
`;
const Avatar = styled.img`
  width: 100%;
  border-radius: 0.2rem;
`;

const Name = styled.h2`
  color: gray;
  text-align: center;
`;

function Profile() {
  const { profile, setActiveProfile } = props;
  const history = useHistory();

  /*
  {
    id: 7,
    name: "Ayberk",
    avatar:
      "https://occ-0-7335-3467.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229",
  },

  */
  const [name, avatar] = profile;
  const activeProfileHandler = () => {
    //set active profile
    setActiveProfile(profile);
    //home ssayfasına pushla
    history.push("/home");
  };

  return (
    <>
      <Card onClick={activeProfileHandler}>
        <Avatar src={avatar}></Avatar>
        <Name>{name}</Name>
      </Card>
    </>
  );
}

export default Profile;
