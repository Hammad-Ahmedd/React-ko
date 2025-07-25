import React, { useId } from 'react'

function Inputbox({
    label,
    amount,
    currentcurr = "usd",
    currencyoption = [],
    amountdisable = false,
    saveValueSelect,
    saveValueInput
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountdisable}
                    onChange={(e)=> saveValueInput }
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currentcurr}
                >
                    {currencyoption.map((opt) => (
                        <option value={opt}>
                            {opt}
                        </option>)
                    )}
                </select>
            </div>
        </div>
    );
}

export default Inputbox;