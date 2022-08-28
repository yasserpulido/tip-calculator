import React, { useEffect, useState } from "react";
import { BaseSyntheticEvent } from "../../types/Events";

export const Calculator = () => {
  const [inputStatus, setInputStatus] = useState({
    bill: {
      isFocused: false,
    },
    custom: {
      isFocused: false,
    },
    people: {
      isFocused: false,
    },
  });
  const [bill, setBill] = useState(0);
  const [tipsSelected, setTipSelected] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  useEffect(() => {
    if (people === 0) {
      setTipAmountPerPerson(0);
      return;
    }

    const tipPercentage = tipsSelected / 100;
    const calculation = (bill * tipPercentage) / people;
    const result = Math.round(calculation * 100) / 100;

    setTipAmountPerPerson(+result.toFixed(2));

    const total = (bill + result * people) / people;

    setTotalPerPerson(+total.toFixed(2));
  }, [bill, people, tipsSelected]);

  const billHandler = (e: BaseSyntheticEvent) => {
    const regex = /^[0-9]*(\.[0-9]{0,2})?$/;

    if (regex.test(e.target.value)) setBill(+e.target.value);
  };

  const peopleHandler = (e: BaseSyntheticEvent) => {
    const regex = /^[0-9]*$/;

    if (regex.test(e.target.value)) setPeople(+e.target.value);
  };

  const tipsHandler = (e: BaseSyntheticEvent) => {
    const regex = /^[0-9]*$/;

    if (regex.test(e.target.value)) setTipSelected(e.target.value);
  };

  const resetHandler = () => {
    setBill(0);
    setTipSelected(0);
    setPeople(0);
    setTipAmountPerPerson(0);
    setTotalPerPerson(0);
  };

  const resetStatus =
    tipAmountPerPerson > 0 || totalPerPerson > 0 ? false : true;

  return (
    <div className="row h-100">
      <div className="col-12 col-md-6 control-side__mobile">
        <div className="control-side h-100 d-flex flex-column justify-content-between">
          <section>
            <h6>Bill</h6>
            <div
              className={`input-wrapper ${
                inputStatus.bill.isFocused ? "btn-wrapper-active" : ""
              }`}
            >
              <i className="bi bi-currency-dollar"></i>
              <input
                className="text-end"
                type="number"
                id="bill"
                placeholder="0"
                value={bill}
                min="0"
                onFocus={() =>
                  setInputStatus((prevState) => {
                    return { ...prevState, bill: { isFocused: true } };
                  })
                }
                onBlur={() =>
                  setInputStatus((prevState) => {
                    return { ...prevState, bill: { isFocused: false } };
                  })
                }
                onChange={billHandler}
              />
            </div>
          </section>
          <section>
            <h6>Select Tip %</h6>
            <div className="row mb-3">
              <div className="d-grid gap-2 col-4 mx-auto">
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option1"
                  value="5"
                  autoComplete="off"
                  checked={tipsSelected === 5 ? true : false}
                  onChange={tipsHandler}
                />
                <label className="btn btn-tip" htmlFor="option1">
                  5%
                </label>
              </div>
              <div className="d-grid gap-2 col-4 mx-auto">
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option2"
                  value="10"
                  autoComplete="off"
                  checked={tipsSelected === 5 ? true : false}
                  onChange={tipsHandler}
                />
                <label className="btn btn-tip" htmlFor="option2">
                  10%
                </label>
              </div>
              <div className="d-grid gap-2 col-4 mx-auto">
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option3"
                  value="15"
                  autoComplete="off"
                  checked={tipsSelected === 5 ? true : false}
                  onChange={tipsHandler}
                />
                <label className="btn btn-tip" htmlFor="option3">
                  15%
                </label>
              </div>
            </div>
            <div className="row">
              <div className="d-grid gap-2 col-4 mx-auto">
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option4"
                  value="25"
                  autoComplete="off"
                  checked={tipsSelected === 5 ? true : false}
                  onChange={tipsHandler}
                />
                <label className="btn btn-tip" htmlFor="option4">
                  25%
                </label>
              </div>
              <div className="d-grid gap-2 col-4 mx-auto">
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option5"
                  value="50"
                  autoComplete="off"
                  checked={tipsSelected === 5 ? true : false}
                  onChange={tipsHandler}
                />
                <label className="btn btn-tip" htmlFor="option5">
                  50%
                </label>
              </div>
              <div className="d-grid gap-2 col-4 mx-auto">
                <div
                  className={`input-wrapper ${
                    inputStatus.custom.isFocused ? "btn-wrapper-active" : ""
                  }`}
                >
                  <input
                    className="text-center"
                    type="number"
                    id="custom"
                    value={tipsSelected}
                    placeholder="Custom"
                    min="0"
                    onFocus={() =>
                      setInputStatus((prevState) => {
                        return { ...prevState, custom: { isFocused: true } };
                      })
                    }
                    onBlur={() =>
                      setInputStatus((prevState) => {
                        return { ...prevState, custom: { isFocused: false } };
                      })
                    }
                    onChange={tipsHandler}
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="d-flex justify-content-between">
              <h6>Number of people</h6>
              {people === 0 && (
                <small className="text-danger">Can't be zero</small>
              )}
            </div>
            <div
              className={`input-wrapper ${
                inputStatus.people.isFocused ? "btn-wrapper-active" : ""
              } ${people === 0 ? "btn-wrapper-error" : ""}`}
            >
              <i className="bi bi-person-fill"></i>
              <input
                className="text-end"
                type="number"
                id="people"
                placeholder="0"
                value={people}
                min="0"
                onFocus={() =>
                  setInputStatus((prevState) => {
                    return { ...prevState, people: { isFocused: true } };
                  })
                }
                onBlur={() =>
                  setInputStatus((prevState) => {
                    return { ...prevState, people: { isFocused: false } };
                  })
                }
                onChange={peopleHandler}
              />
            </div>
          </section>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="h-100 result-side">
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <div className="row mb-5">
                <div className="col-6">
                  <div>
                    <span className="m-0 d-block">Tip Amount</span>
                    <span className="result-side--subtitle ">/ person</span>
                  </div>
                </div>
                <div className="col-6 text-end">
                  <i className="bi bi-currency-dollar total"></i>
                  <span className="total">{tipAmountPerPerson.toFixed(2)}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div>
                    <span className="m-0 d-block">Total</span>
                    <span className="result-side--subtitle ">/ person</span>
                  </div>
                </div>
                <div className="col-6 text-end">
                  <i className="bi bi-currency-dollar total"></i>
                  <span className="total">{totalPerPerson.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-reset"
              disabled={resetStatus}
              onClick={resetHandler}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
