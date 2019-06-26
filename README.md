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

## 06 ADDING NEW PARTICLES
 We want to add new particles every time we request a frame
  -.DRAWBACKS::  Since we are dealing with immutable , we are facing now a lot of constants 
  definitions and redefinitions every time we add a new one.
  Can we do it better ? ... composition to the rescue


## 07 Composition  (src/functionalUtils.js)
  -. we can solve las problem by chaining function's results, since all of them are returning a new 
  array
  -. Or we can compose those 2 functions
  -. Make it generic  
  -. Or pipe 
  -. We would also like to add some trace inside our composed point free programming --> tap  
