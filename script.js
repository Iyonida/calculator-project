"use strict";

const displayInputEl = document.querySelector(".display_input");
const numKeyContainer = document.querySelector(".num_key_container");
const opKeyContainer = document.querySelector(".op_key_container");
const resetBtn = document.querySelector(".reset_btn");
const equateBtn = document.querySelector(".equate_btn");

class CalcApp {
  equationEntries = [];
  result;
  inputData;
  arr = [];

  constructor() {
    numKeyContainer.addEventListener("click", this._makeNumEntry.bind(this));

    opKeyContainer.addEventListener("click", this._makeOpEntry.bind(this));

    equateBtn.addEventListener("click", this._equate.bind(this));

    resetBtn.addEventListener("click", this._deleteEntry.bind(this));

    resetBtn.addEventListener("dblclick", this._resetCalc.bind(this));
  }

  _intoArr(val) {
    this.equationEntries.push(val);
    //   console.log(equationEntries);
  }

  _makeNumEntry(e) {
    if (e.target.classList.contains("num_key")) {
      const btnValue = e.target.dataset.value;
      this._intoArr(btnValue);
      this._showEntry();
    }
  }

  _makeOpEntry(e) {
    if (e.target.classList.contains("op_key")) {
      const btnValue = e.target.dataset.value;
      this._intoArr(btnValue);
      this._showEntry();
    }
  }

  _showEntry() {
    this.arr = this.equationEntries.slice();

    if (this.arr.length !== 0) {
      this.inputData = this.arr.join().replaceAll(",", "");

      displayInputEl.innerText = this.inputData;
    }
  }

  _equate() {
    let equation = this.equationEntries.join().replaceAll(",", "");
    this.result = eval(equation);

    displayInputEl.innerText = this.result;

    this.equationEntries = [];
    this.equationEntries.push(this.result);
  }

  _deleteEntry() {
    if (this.equationEntries.length !== 0) {
      this.equationEntries.pop();
      this.arr.pop();

      this._showEntry();
    }
  }

  _resetCalc() {
    displayInputEl.innerText = "";
    this.equationEntries = [];
  }
}
const app = new CalcApp();
