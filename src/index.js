// Functional component => They are used tfor presenting UI elelment based on props(input data ) passed tto them
// Class component => These are js classes that extend from React.Components
// React Fragments allows s to group some element without leaving any trace(affecting) the DOM
// When rendering list item, we add key with any value i.e (<React.Fragment key = "pizza" >)


import React from "react";
// ReactDOM is a package that provides methods(render()) for rendering React components(functions, classes, JSX, props, statae, VirtualDOM) into the DOM
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom"; => React version before 18
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Create an App component
function App() {
  return (
  <div className="container">

   <Header />
   <Menu />
   <Footer />
  </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px",
  // textTransform: "uppercase"};  
  const style = {};

  return (
    <header className="header ">
    <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData;
  // const pizza = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
  {/* React Fragment allows us to have more than one element inside a piece of JSX (instead of using <div> as a parent element of other child element) */}
     
  {/* Using conditional rendering */} 
    {numPizzas > 0 ? (
      <>
         <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>

      {/* Rendering list */}
      <ul className="pizzas">
        {pizzaData.map((pizzaObj) => (
          <Pizza pizzaProps = {pizzaObj} key ={pizzaObj.name} />
        ))}
      </ul>
      </>
     ) : (
      <p>We're still working on our menu. Please come back later :)</p>
     )}

      {/* <Pizza 
      name="Pizza Spinaci"
      ingredients="Tomato, mozarella, spinaci, and ricotta cheese"
      photoName= "pizzas/spinaci.jpg"
      price={10}
      />

      <Pizza 
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        photoName= "pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  )
}

// Create Pizza component
function Pizza({ pizzaProps }) {
  console.log(pizzaProps);

  // if (pizzaProps.soldOut) return null;

  return (
 // If there's s pizzaProps that has a soldOut property the add the class of sold-out else return an empty string
    <li className={`pizza ${pizzaProps.soldOut ? "sold-out" : ""}`}> 
    <img src={pizzaProps.photoName} alt={pizzaProps.name} />
    <div>
    <h3>{pizzaProps.name}</h3>
    <p>{pizzaProps.ingredients}</p>
    
    {/* {pizzaProps.soldOut ? (
      <span>SOLD OUT</span>
    ) : (
      <span>{pizzaProps.price}</span>
    )} */}
                {/* OR */}
    {/* setting classes and text conditionally */}
    <span>{pizzaProps.soldOut ? "SOLD OUT" : pizzaProps.price }</span>
    </div>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour  = 12;
  const closeHour = 22;

  const isOpen = (hour >= openHour && hour <= closeHour);
  console.log(isOpen)

  // if (hour >= openHour && hour <= closeHour) alert("we're currently open")
  // else alert("we're currently closed")

  // if (!isOpen) return <p>CLOSED</p> => This early return is more useful when we want to render entire components conditionally but not some pieces of JSX

  return (
    <footer className="footer">. 
    {isOpen ? (
      <Order closeHours={closeHour} openHours={openHour}/>
    ) : (
      <p>
        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
      </p>
    )}
    </footer>
  );
  // Another method of creating an element( footer) with a text without JSX
  //return React.createElement("footer", null, "we're currently open!")
}

// Extracting JSX into a new component
  function Order({closeHours, openHours}) {
    return (
    <div className="order">
        <p>
          We're open from {openHours}:00 to {closeHours}:00. Come visit us or order online
        </p>
        <button className="btn">Order</button>
      </div>
    )
  }

// React version 18
// To display the newly created element in w UI
const root = ReactDOM.createRoot(document.getElementById("root"));
// Wrapping react components with strict mode and rendering into the UI
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// ReactDOM.render(<App />, document.getElementById("root"));