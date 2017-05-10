[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Lights, Camera, Action: Full Stack Project

Presenting [Lights, Camera, Action!](https://d00medman.github.io/fullStackApp/)(LCA), an app designed to help you both find information about and keep track of your favorite movies. 

This app is perfect for people who both love movies and have never heard of IMDB.

## How Does it work?

On its [back end](https://github.com/d00medman/fullStackProjectAPI), LCA is a fairly rudimentary rails server. There are two tables, a user table (which is out of the box and thus largely untouched) and a custom built movie table. There is an unaugmented many-to-one relationship built between these two tables. The movie table is fairly simple, containing only a column of name strings. When a user logs into the app, that user gains the ability to read from and write to this table. 

My front end is very similar to that of my [tic-tac-toe game](https://github.com/d00medman/ticTacToeGame). A user must create an account and login. This collapses my login fields (something I was frustratingly unable to do in tic-tac-toe) and presents both the core functionality of the app and the change password/logout fields (the second of which restores the login fields while hiding the core). At the core, the user has the option to use one of the application's two widgets at a time. The first widget is a search field which allows the user to search the [Open Movie Database](http://www.omdbapi.com/)(OMDB) and retrieve information about whatever movie they're interested in. The second functionality is a form which is connected to my custom built table. A user can add movies to their favorites, which are then displayed for them on the screen. A user may then either change the movie or delete it entirely. At the bottom of the screen, a poorly labeled button allows the user to switch between these two widgets. When a returning user signs in, their movie list is created automatically and can be displayed by toggling (the default widget on sign in is the OMDB search). 

## Creating LCA

I opted to keep my back end as simple as humanly possible, largely because of how new I am at building rails apps. I found testing to be rather opaque, as success and failure are not manifested in obvious ways. I had considered building more functionality to my back end once I had hit minimum viable product, building a profiles table on a seperate branch of my backend before electing to move in a different direction. 

On my front end, I started by building out four simple forms which performed each of the crud actions to the API. Once these were working, I built a handlebars script to display each movie created along with its ID (for destroy, update, and show). Next, I integrated the destroy and show functionality into the handlebars scripts, automatically targeting each of these actions to their associated items (a feature which was extremely problematic, then extremely trivial following a good night's sleep). 

Once I hit this point, I was at minimum viable product. With two work days left, I started to consider how I may implement a bonus. At first, I wanted to build a morecomplicated ERD, but ultimately opted to use a third party API in the form of the OMDB. At first, I was very as to how I could do this. Once I realized that using a third party API is as simple as linking to it in an AJAX request, I was off to the races. I quickly was able to successfully return from the back end, and built out a search form and accompanying handlebars script which displayed the returned information.

Here is where things got rough for me. I found that a logical next step was to move the OMDB information retrieval into the handlebars-produced list. This would allow for the return of information from OMDB directly into my list, rather than mandating a seperate form. It would also be a step towards a button-free retrieval of information, with the user able to directly create it to their list. I struggled with this problem for hours, eventually coming up with an imperfect solution using data-id's based on the title of the movie. Upon testing, however, I found that this approach had inadvertantly broken my update feature, one more essential to LCA's core functionality than the feature it had been sacrificed to build. Terrifyingly, I had already deployed this broken functionality. For most of Monday night, I performed emergency surgery on my master branch, reverting it to the past implementation (a seperate field and handlebars display) and redeploying. 

This measure solved the immediate danger, but basically put me back to square one on what to do next. After weighing my options, I abandoned calling the info into my list. Instead, I elected to break up the two distinct functionalities of my app into two widgets that a user could toggle between with a button. Much of Tuesday was spent building and debugging this functionality, along with generalized styling.

Aside from the obvious of getting the info build right, one thing I would have liked to have done, but ultimately came just short of, would have been more advanced verification in the movie listing widget. I envisioned a feature where, when given a string which returned no valid OMDB entry, through an error message. However, I began work on this feature to late to get it up, running, and sufficiently debugged to deploy. My troubles in creating this feature can be found [here](https://github.com/ga-wdi-boston/full-stack-project/issues/889), and there is a strong possibility I eventually finish it.

## User Stories

- As a pretentious cinephile, I really need to list my favorite movies and show you how much better my taste in film is than yours.

- As a data-driven individual, I need to be able to break down when my favorite movies were made and who made them.

- As a bigshot hollywood producer, I need to see which directors, genres and periods have produced the most popular films

- As a General Assembly developer, I need to create a product which will pass muster.

## Wireframe
Can be found [here](http://imgur.com/LvmZ3xS), complete with commentary from confused Imgur users.
