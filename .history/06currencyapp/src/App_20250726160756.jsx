import { useState } from 'react'
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

  const convert = () => {
    setconvertedcurr((amount * currinfo[to]).toFixed(2))
  }

  const swap = () => {
    setto(from)
    setfrom(to)
    setamount(convertedcurr)
    setconvertedcurr(amount)
  }

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1592496001020-bb49c6a09b7f?auto=compress&cs=tinysrgb&w=1600')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-300 rounded-2xl p-6 backdrop-blur-md bg-white/20 shadow-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="w-full mb-4">
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
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 transition-all"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="w-full mt-4 mb-6">
            <Inputbox
              label="To"
              currentcurr={to}
              amount={convertedcurr}
              currencyoption={option}
              amountdisable={true}
              saveValueSelect={(sets) => setto(sets)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-3 rounded-xl font-semibold transition-all m-2.5"
            onClick={convert}
          >
            Convert <span className="font-bold">{from.toUpperCase()}</span> to <span className="font-bold">{to.toUpperCase()}</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
