import { useParams } from "react-router-dom";

const User = (props) => {
  const params = useParams();

  return (
    <div>
      <h2>Welcome, user {params.id}</h2>
    </div>
  );
};

export default User;
