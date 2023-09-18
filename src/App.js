import logo from "./logo.svg";
import "./App.css";
import { useMemo, useState } from "react";
import Hoc1 from "./Hoc1";
import Hoc2 from "./Hoc2";
import Count from "./Count";
import DemoThis from "./DemoThis";
import DemoUpdateState from "./DemoUpdateState";
import State01 from "./State01";
import { useImagesLoad, useImage } from "./CustomHooks";
import NextCount from "./NextCount";
import ComputedMd5 from "./ComputeMd5";

function App() {
  return <ComputedMd5 />;
}

// function App() {

//   const [count, setCount] = useState(0);

//   const handleParamClick = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   };

//   const handleCbClick = () => {
//     setCount(count => count + 1);
//     setCount(count => count + 1);
//     setCount(count => count + 1);
//   };

//   const imgs = [
//     'https://ntvb.tmsimg.com/assets/assets/164311_v9_bb.jpg?w=270&h=360',
//     'https://ntvb.tmsimg.com/assets/assets/174717_v9_bb.jpg?w=270&h=360',
//     'ajxnnsk',
//     'https://ntvb.tmsimg.com/assets/assets/538030_v9_bc.jpg?w=270&h=360'
//   ]

//   // const [imgStatus] = useLoading(imgs)
//   // console.log('imgStatus', imgStatus)
//   // const {isLoading, src, error} = useImage(imgs[0])

//   const [res] = useImagesLoad(imgs)

//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <h1>{count}</h1>
//         <button onClick={handleParamClick}>click1</button>
//         <button onClick={handleCbClick}>click2</button> */}
//         {/* <Hoc1 /> */}
//         {/* <Hoc2 age={11}/>
//         <Count />
//         <DemoThis name={count}/>
//         <DemoUpdateState  /> */}

//         {/* <State01 /> */}
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       {/* </header> */}
//       <h1>count: {count}</h1>
//       <button  onClick={() => {
//         setCount(_pre => ++_pre)
//         const _session = sessionStorage.getItem('AA')
//         if (_session) {
//           alert(_session)
//         }
//       }}>update</button>
//       <h1>Breaking Bad Actors</h1>
//       {
//         res && res.map(item => {
//           if (item.isLoading) {
//             return <p key={item.id}>Image is loading</p>
//           } else if (item.error) {
//             return <p key={item.id}>Error: {item.error}</p>
//           } else {
//             return <img width={100} key={item.id} alt='img' src={item.id}/>
//           }
//         })
//       }

//       {/* {
//         isLoading ? <p>loading image</p> : (error ? <p>error: {error}</p> : <img src={src} alt='img' />)
//       } */}

//       <NextCount />
//     </div>
//   );
// }

export default App;
