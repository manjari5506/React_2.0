import "./styles.css";
import Mobile from "./components/Mobile";

export default function App() {

  let os = [{name:"Android"},{name:"Blackberry"},{name:"iphone"},{name:"Windows iphone"}];
  let manu = [{name:"Samsung"},{name:"HTC"},{name:"Micromax"},{name:"Apple"}];


  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
     <Mobile {...os[0]}/>
     <Mobile {...os[1]}/>
     <Mobile {...os[2]}/>
     <Mobile {...os[3]}/>

     <h1>Mobile Manufacturers</h1>
     <Mobile {...manu[0]}/>
     <Mobile {...manu[1]}/>
     <Mobile {...manu[2]}/>
     <Mobile {...manu[3]}/>

    </div>
  );
}
