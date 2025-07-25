import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usecurrency from './hooks/usecurrency'
import Inputbox from './components/Inputbox'


function App() {
  const [amount, setamount] = useState(0)
  const [to, setto] = useState("pkr")
  const [from, setfrom] = useState("usd")
  const [convertedcurr, setconvertedcurr] = useState(0)
  const currinfo = usecurrency(from)
  const option = Object.keys(currinfo)
  const convert = (() => {
    setconvertedcurr(Math.round(amount * currinfo[to]))
  })
  function swap() {
    setto(from)
    setfrom(to)
    setamount(convertedcurr)
    setconvertedcurr(amount)
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();

            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="From"
                amount={amount}
                currencyoption={option}
                amountdisable={false}
                currentcurr={from}
                saveValueInput={(amount) => setamount(amount)}
                saveValueSelect={(sets) => setfrom(sets)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="To"
                currentcurr={to}
                amount={convertedcurr}
                currencyoption={option}
                amountdisable={true}
                saveValueSelect={(sets) => setto(sets)}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer" onClick={convert}>
              Covert<span>{from.toUpperCase()}</span> to <span>{to.toUpperCase()}</span>
              {`Covert ${from.toUpperCase()} to ${to.toUpperCase()}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
