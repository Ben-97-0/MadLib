document.getElementById("mad-lib").addEventListener("click", clicked);

function clicked() {
  let plural = document.getElementById("p-noun").value;
  let adj = document.getElementById("adj").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;

  let output = `"There are too many ${plural} on this ${adj} airplane!" I screamed. "Somebody has to ${verb} on the ${noun} to solve this problem!".`;
  document.getElementById("para1").innerHTML = output;
}

document.getElementById("madLib2").addEventListener("click", clicked2);
function clicked2() {
  let plural = document.getElementById("p-noun").value;
  let adj = document.getElementById("adj").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let output = `"Some ${plural} don't know how to ${adj}. We need to do ${verb} to fix the ${noun} of this problem`;
  document.getElementById("para2").innerHTML = output;
}
