import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";

// function App() {
//     const [contact,setcontact]=React.useState({
//         name:"john",
//         lastname:"doe",
//         phone:"8309384756",
//         email:"shsanasdbej@gmail.com",
//         isFavourite:false
//     })

//     const [favorite,setFavorite] =React.useState(true)

//     function tooglefavourite(){
//         setFavorite(prevState => !prevState)   
//     }

//     return (
//       <main>
//         <article className="card">
//           <img
//             src="https://lh3.googleusercontent.com/ogw/AOh-ky0kA_usgStO7Fzi8UERZdUHaP0KcN_W9dBdqqprXA=s64-c-mo"
//             alt=""
//             className="card--image"
//           />
//           <div className="favourite">
//             <img
//               src={
//                 favorite
//                   ? "https://t3.ftcdn.net/jpg/02/12/94/86/240_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg"
//                   : "https://t4.ftcdn.net/jpg/01/07/90/75/360_F_107907549_nGPdxVXnDgHqQ1lSJlYKidLLfWb6PuN2.jpg"
//               }
//               alt=""
//               className="card-star"
//               onClick={tooglefavourite}
//             />
//             <h2 className="card--name">
//               {contact.name + " " + contact.lastname}
//             </h2>
//             <p className="card--contact">{contact.phone}</p>
//             <p className="card--contact">{contact.email}</p>
//           </div>
//         </article>
//       </main>
//     );
// }

ReactDOM.render(<App />, document.getElementById("root"));
