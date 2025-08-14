import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Usecontextprovider } from './Usecontext/Usecontexttic'
import Boxs from './Components/Boxs'


function App() {
  const [boxs, setboxs] = useState(
    Array(9).fill(null).map((_, index) => ({
      id: index,
      checkbox: false,
      boxText: ""
    }))
  );

  const ClickBox = (clickedBox) => {
    setboxs((prev) =>
      prev.map((box) => {
        if (box.id === clickedBox.id) {
          const nextCheckbox = !box.checkbox;
          return {
            ...box,
            checkbox: nextCheckbox,
            boxText: nextCheckbox ? "O" : "X" // based on new state
          };
        }
        return box;
      })
    );
  };


  console.log(boxs);


  return (
    <Usecontextprovider value={{ boxs, ClickBox }}>
      <div className="tic-wrapper">
        {boxs.map((box) => (
          <Boxs key={box.id} box={box} />
        ))}
      </div>
    </Usecontextprovider>
  )
}

export default App
