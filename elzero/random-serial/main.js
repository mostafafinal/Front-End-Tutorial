document.querySelector(".generate").onclick = () => {
  const serialChars = "5x2m0uv3c9djyhk@#$%&^*87641qwertiopalgb";
  let serialGen = "";

  // Generate Random Element And Store It In serialGen
  for (let i = 0; i < 10; i++) {
    serialGen += serialChars[Math.floor(Math.random() * serialChars.length)];
  }
  // Append Serial
  document.querySelector(".serial").innerHTML = serialGen.toUpperCase();
};
