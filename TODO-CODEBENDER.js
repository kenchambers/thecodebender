==============================
----->   MAY 19
==============================

- set up a channel with users online users
- build create user_channel end point
- when you subscribe it automatically creates a user
  - checks token , if user than you can use that toekn to identify
  - if no token, than create new user
- once user is created you can associate messages with them
- also need to write jobs where we send notifications if user is online, or user typing 






- build in 'clearence' gem
- set up users
- add JWT token auth system
- add 'unstated' to front end - state management


STEPS (Backend):
https://scotch.io/tutorials/asynchronous-chat-with-rails-and-actioncable
- set up clearence gem
  - will create a user model :
  - run rails db:migrate
- controllers: set up controllers to broad cast to socket

- views: set up jbuilder
  - create , and index
- routes: return a json object
  - mount ActionCable.server => '/cable' (add this route)

  - set up resources: (to get access to crud methods)
- jobs: set up class to perform job to notify socket layer
- channels set up chanels to run methods for socket layer


STEPS (frontend):
- set up react-actioncable-provider
  - configure the context component
  - set up initial index request to seed for data
