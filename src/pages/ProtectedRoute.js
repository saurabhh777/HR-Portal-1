import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ auth,element : Features , ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Features {...props} />;
        if (!auth)
          return (
            <Navigate to={{ path: "/", state: { from: props.location } }} />
          );
      }}
    />
  );
};

export default ProtectedRoute;
















// import React from 'react';
// import { Route,Navigate } from 'react-router-dom';

//  const isLogin =() =>{
//     if(localStorage.getItem('authToken')!== null){
//       <Navigate to="/dashboard"/>  
//     }
//  }
// const PrivateRoute = ({component: Component, ...rest}) => {
//     return (

//         <Route {...rest} render={props => (
//             isLogin() ?
//                 <Component {...props} />
//             : <Navigate to="" />
//         )} />
//     );
// };
// export default PrivateRoute;






// const PrivateRoutes =(props) =>{
//   const token =localStorage.getItem('token');
//   if (token){
//   return<Route exact ={true} path={props.path} components={props.components}/>
//   }else{
//   return<handleApi{...props}/>  
//   }
// }