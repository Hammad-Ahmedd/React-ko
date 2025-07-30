<div id="step-2" style={{ display: step2 ? "none" : "block" }}>
  <h1 className="step-title">Step 2</h1>
  <p className="step-subtitle">Choose at least one hobby</p>
  <div className="checkbox-wrapper">
    <div className="checkbox-column">
      {option.map((opt, index) => (
        <label key={opt.id}>
          <input
            id={opt.id}
            type="checkbox"
            onChange={() => checkSelect(opt.id)}
            checked={select.includes(opt.id)}
          />{" "}
          Hobby {index + 1}
        </label>
      ))}
    </div>
  </div>
  <div className="btn-wrapper space-between">
    <button className="btn btn-back" onClick={gobacktostep1}>Back</button>
    <button className="btn btn-next" onClick={onClickStep2}>Next</button>
  </div>
</div>

{/* Step 3 */}
<div id="step-3" style={{ display: step3 ? "none" : "block" }}>
  <div className="thankyou-box">
    <h1 className="step-title">Thank You!</h1>
    <p className="thankyou-text">Your preferences have been saved successfully.</p>
    <button className="btn btn-submit">Submit</button>
  </div>
</div>
