
function setRem () {
  const baseSize = 8
  let scale = document.documentElement.clientWidth/750

  document.documentElement.style.fontSize = baseSize * Math.min(scale,2) + 'px'
}
setRem()
window.onresize = function () {
  setRem()
}
