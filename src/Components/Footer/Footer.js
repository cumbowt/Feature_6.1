import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <br />
      <Link to="./">Home</Link>
      <br />
      <Link to="./collections">Collections</Link>
      <br />
      <Link to="./userprofile">Your Profile</Link>
      <br />
      <Link to="./about">About the App</Link>
      <br />
    </div>
  );
};
export default Footer;

// const Footer = () => (
//   <footer>
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="./collections">Collections</Link>
//         </li>

//         <li>
//           <Link to="/userprofile">Your Profile</Link>
//         </li>
//         <li>
//           <Link to="/about">About the App</Link>
//         </li>
//       </ul>
//     </nav>
//   </footer>
// );
// export default Footer;
