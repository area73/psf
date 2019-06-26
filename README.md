# Particle system functional

## 01 Initial Setup
    gitignone
    package.json
        babel
        eslint
        jest
        hasky
        prettier
        editorConfig
        WebPack

## 02 Event loop
  We need to create a loop for the event painting. To do so we will use requestAnimationFrame
  
## 03 Vector
  -. Cartesian Vector
  -. Vector.angle
  -. Vector.magnitude (hypotenuse) 
  -. Vector.add
  -. Vector.substract
  -. Vector.scale
  -. Vector.copy
  -. Vector.polarToCart
  
## 04 Particle
  -. Particle
    -- position
    -- velocity
    -- acceleration
    -- color
    -- size 
  -. Particle.move --> will depend on velocity  
   
## 05 Moving particles
We will start to add random particles and move them
1) From a fixed array move particles  [EX01]
  -. log output
  -. map array to move particle
