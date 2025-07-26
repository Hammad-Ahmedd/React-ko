import React from 'react';

function Inputbox({
  label,
  amount,
  currentcurr = "inr",
  currencyoption = [],
  amountdisable = false,
  saveValueSelect,
  saveValueInput
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      {/* Left Side - Label and Input */}
      <div className="w-full sm:w-1/2">
        <label className="block text-gray-500 text-sm mb-1">{label}</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          type="number"
          placeholder="Enter amount"
          value={amount}
          disabled={amountdisable}
          onChange={(e) => saveValueInput && saveValueInput(Number(e.target.value))}
        />
      </div>

      {/* Right Side - Currency Select */}
      <div className="w-full sm:w-1/2 text-right">
        <label className="block text-gray-500 text-sm mb-1">Currency Type</label>
        <select
          className="w-full sm:w-auto px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          value={currentcurr}
          onChange={(e) => saveValueSelect && saveValueSelect(e.target.value)}
        >
          {currencyoption.map((opt) => (
            <option key={opt} value={opt}>
              {opt.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
