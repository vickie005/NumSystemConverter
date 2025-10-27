const input = document.getElementById("inputNumber");
const fromSystem = document.getElementById("fromSystem");
const toSystem = document.getElementById("toSystem");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");
const convertBtn = document.getElementById("convertBtn");
const convertAllBtn = document.getElementById("convertAllBtn");
const historyList = document.getElementById("historyList");

// Convert function
function convertNumber(num, from, to) {
  if (from === "naf" || to === "naf") {
    return nafConversion(num, from, to);
  }
  if (from === "1s") num = fromOnesComplement(num);
  if (from === "2s") num = fromTwosComplement(num);

  let decimal;
  try {
    decimal = parseInt(num, parseInt(from));
    if (isNaN(decimal)) throw new Error();
  } catch {
    return "Invalid input!";
  }

  let output;
  if (to === "1s") output = toOnesComplement(decimal);
  else if (to === "2s") output = toTwosComplement(decimal);
  else if (to === "naf") output = nafConversion(decimal.toString(), from, to);
  else output = decimal.toString(parseInt(to)).toUpperCase();

  return output;
}

// 1's complement
function toOnesComplement(decimal) {
  let bin = decimal.toString(2);
  return bin
    .split("")
    .map((b) => (b === "1" ? "0" : "1"))
    .join("");
}

function fromOnesComplement(num) {
  return parseInt(
    num
      .split("")
      .map((b) => (b === "1" ? "0" : "1"))
      .join(""),
    2
  ).toString();
}

// 2's complement
function toTwosComplement(decimal) {
  let bin = decimal.toString(2);
  let inverted = bin
    .split("")
    .map((b) => (b === "1" ? "0" : "1"))
    .join("");
  let carry = 1;
  let result = inverted
    .split("")
    .reverse()
    .map((b) => {
      if (b === "1" && carry) {
        carry = 1;
        return "0";
      } else if (b === "0" && carry) {
        carry = 0;
        return "1";
      }
      return b;
    })
    .reverse()
    .join("");
  return result;
}

function fromTwosComplement(num) {
  return parseInt(num, 2).toString();
}

// NAF conversion (basic form)
function nafConversion(num, from, to) {
  let decimal = parseInt(num, parseInt(from === "naf" ? 2 : from));
  if (to === "naf") {
    let naf = [];
    let k = 0;
    while (decimal > 0) {
      if (decimal % 2 !== 0) {
        let ai = 2 - (decimal % 4);
        naf[k] = ai;
        decimal -= ai;
      } else naf[k] = 0;
      decimal /= 2;
      k++;
    }
    return naf.reverse().join("");
  } else if (from === "naf") {
    // Approx decode (treats -1 as complement)
    let nafArr = num.split("").map(Number);
    let val = 0;
    for (let i = 0; i < nafArr.length; i++) {
      val += nafArr[i] * Math.pow(2, nafArr.length - i - 1);
    }
    return val.toString(parseInt(to));
  }
  return "Unsupported!";
}

// Handle Convert Button
convertBtn.addEventListener("click", () => {
  const inputVal = input.value.trim();
  if (!inputVal) {
    result.textContent = "Please enter a number.";
    return;
  }
  const output = convertNumber(inputVal, fromSystem.value, toSystem.value);
  result.textContent = output;

  addToHistory(
    `${inputVal} (${fromSystem.value}) → ${output} (${toSystem.value})`
  );
});

// Convert to all systems
convertAllBtn.addEventListener("click", () => {
  const inputVal = input.value.trim();
  if (!inputVal) return;

  const systems = ["2", "8", "10", "16"];
  result.innerHTML = systems
    .map(
      (s) =>
        `${
          s === "2"
            ? "Binary"
            : s === "8"
            ? "Octal"
            : s === "10"
            ? "Decimal"
            : "Hex"
        }: <b>${convertNumber(inputVal, fromSystem.value, s)}</b>`
    )
    .join("<br>");
});

// Copy result
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(result.textContent);
  copyBtn.textContent = "✅ Copied!";
  setTimeout(() => (copyBtn.textContent = "📋 Copy"), 1500);
});

// Add to history
function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}
