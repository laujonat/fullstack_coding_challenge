# TinderChallenge

a [Sails](http://sailsjs.org) application

Jonathan Lau Tinder Challenge
-----------------------------

 Hello! This is my submission for the Full Stack Tinder Coding Challenge.

 This application was created in Sails.js, utilizing the AngularJS library along with Hammer.js for the swiping gestures!

 Extras Included
 ---------------


  - Added two buttons: Like and Dislike.  Clicking on these buttons will essentially do the same as swipping left and right.
  - Swipping right displays a LIKE across the user profile, while swipping left displays a NOPE across the profile.
  - Displays the number of mutual interests based on user on each card.


Questions!
----------

   * How long this took me:<br />
   My experience with Angular is limited, so a lot of time was spent reading through the documentation and learning about
      the library.  

      In total, working on and off this project throughout the week, I'd say it took me a total of 12 hours or so to complete.
      Through this process, I hope this demonstrates my ability to learn quickly along with the ability to juggle
      multiples projects with time contraints.  (It's been a rough week with exams and other work commitments haha)

* What you would change/add if you had more time:<br />
  There's a few issues with this project that stumped me.. and due to time contraints I won't be able to fix it
  with the time contraint.  <br /><br />
  1) When you click the buttons, it changes the scope state of the 'goNext' and 'action' attributes from CardController.js.
  The problem arises when you swipe, then click the button, since the scope state is still unchanged, you have to click
  the button again, to change the state.<br /><br />
  2) Styling and animation.  There's a few styling issues I wish I could have addressed, such as the like and dislike animations.
        If I had more time I could have done a bit more reading into the different libraries used to make this work correctly.  
        I would have definitely fixed a lot of the css issues if I had more time...


The Application
----------
    * How to Run
    I was only able to test this program on localhost.  To run, you'll have to install Sails.js, which is similar to express, and
      then simply perform [sails lift] in the terminal to run.  Make sure you have mongo enabled!

    The application is routed to the root of the application: http://localhost:1337/
    Due to time contraints, I was only able to test if this renders on iPhone6 through an iphone simulator
      I used: http://www.responsinator.com/
