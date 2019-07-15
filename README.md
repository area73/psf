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

## 08 Dealing with impure functions (side effects)
https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/

There’s two main ways they do dealt with this:

1-. Dependency injection
 
    We take any impurities in our code, and shove them into function parameters. Then we can treat 
    them as some other function’s responsibility.
    This is very interesting for unit testing our functions because we can stub our impure ends 
    and pass them as parameters

2-. Using an Effect functor, (procrastination)
    
    A side effect isn’t a side effect until it actually happens. 
    So we will wrap our unsafe function inside another function -_> the effect functor.
    The Effect functor, works by wrapping everything behind a function. To run the effects, we have to make a deliberate effort to run the wrapper function.
    
    In our case we are goinf to use a monad call maybe

## 09 Creating a logger

We want to cleanup a little bit out log system combining both techniques previous presented.
Hint use a function decorator ?????

## 10 Create a display system
Now tht we have particles and we are moving them we want to plot those particles into a visual 
display.<br>
This display will be impure since it is something that we are getting from outside.<br>
In our example we are going to use canvas to display particles.
 
 We are creating a an object call Display that will hold all our data definition to display our 
 particles
