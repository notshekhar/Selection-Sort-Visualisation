let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let arr = new Array()
for (let i = 0; i < canvas.width/20; i++) {
  arr.push(Math.random() * 400)
}
//clearing canvas
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)

let x = 2

function draw() {
  //clearing canvas
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  let x = 10
  for (let i = 0; i < arr.length; i++) {
    let y = arr[i]
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 15
    ctx.moveTo(x, canvas.height)
    ctx.lineTo(x, canvas.height-y)
    ctx.stroke()
    x+=20
  }
}
let i = 0
let interval = setInterval(() => {
  if (i<arr.length) {
    let smallest = Infinity
    let m
    for(let j=i; j<arr.length; j++){
      if(arr[j]<smallest){
        smallest = arr[j]
        m = j
      }
    }
    let temp = arr[i]
    arr[i] = smallest
    arr[m] = temp
    i++
    draw()
  } else {
    console.log('fnished')
    clearInterval(interval)
  }
}, 250)