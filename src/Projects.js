import { Redirect } from "react-router-dom";

const Projects = (props) => {

  // if (props.user.admin) {
  //   return (
  //     <div>
  //       <h2>Projects component</h2>
  //     </div>
  //   );
  // } else {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      {props.user.admin ? 
      (
        <div>
          <h2>Projects component</h2>
        </div>
      ) : 
      <Redirect to="/" />}
      
      {/* {props.user.admin && (<div>
          <h2>Projects component</h2>
        </div>)} */}

      {/* {!props.user.admin && <Redirect to="/" />} */}
    </>
  );
};

export default Projects;
