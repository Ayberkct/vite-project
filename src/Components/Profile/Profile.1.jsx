import { Card, Avatar, Name } from "./Profile";

export function Profile() {
  // eslint-disable-next-line no-undef
  const { profile } = props;
  const [name, avatar] = profile;

  /*
  {
    id: 7,
    name: "Ayberk",
    avatar:
      "https://occ-0-7335-3467.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229",
  },
 
  */
  return (
    <>
      <Card>
        <Avatar src={avatar}></Avatar>
        <Name>{name}</Name>
      </Card>
    </>
  );
}
