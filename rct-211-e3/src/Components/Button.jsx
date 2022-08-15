import "./Button.css";

export const Button = ({ colorScheme, variant, size }) => {
  return <button
      className={`btn ${colorScheme || "white"} ${variant} ${size}`}
     >
      Click Me
  </button>;
};



















// const Button = ({ children, variant, colorScheme, onClick }) => {
//   return (
//     <button
//       data-testid="cButton"
//       className={`btn ${colorScheme || "red"}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// .btn {
//   color: whitesmoke;
//   border-radius: 2px;
//   cursor: pointer;
// }

// .red {
//   background-color: crimson;
// }

// .green {
//   background-color: aquamarine;
//   color: black;
// }

// .bordered {
//   border: 1px solid black;
// }

// .ghost {
//   border: none;
// }
