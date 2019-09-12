# My green travels

This is my Milestone Project 2: Interactive Frontend Development - Code Institute.

On this one-page website I include 10 cities that are listed in a Sustainable Cities Index. You can search for accommodations and restaurants in these cities around the city center, while exploring them.
[Check it out here!](https://livhed.github.io/mgt-map/)

--------------------------------------------------------------------------------------------
## UX
After doing research looking at websites with Google maps included, my goals with the design was set to: 
1. To make the design suitable for people who care about sustainability with my choice of words, fonts and colors that give the feeling of sustainability and an environmentally conciousness. I wanted to do this with a simple a design as possible.
2. To make a one page webpage which provides a user friendly and easy layout to quick be able to understand what you can do and how, on the website.

### User stories
* As an environmentally conscious traveller I want to have a look at cities with a sustainable focus before I travel there, to get inspired and remember to keep the focus of those things I find most important in the society.
* As an environmentally conscious traveller on the road right now I would like to know where to eat and stay for the night while exploring the sustainable city I´m currently in.
* As a traveller with many different kinds of interests I would like to check this page out, out of pure curiosity, to see what kinds of cities the environmentally conscious travellers would want to visit, and maybe travel there myself to see what these cities are like.

### Wireframes
The wireframes are created with Balsamiq. They where made as a part of the design process and are saved as pdf documents and kept in a separate folder, which is called **wireframes**. 
One is designed for desktop view and the other for mobile view. [Check them out here!](https://github.com/LivHed/mgt-map/blob/master/wireframes/BalsamiqMockupMilestone2Latest.pdf).

------------------------------------------------------------------------------------------------
## Features
### Existing Features
* The presentation text is placed under the name of the page and provides a short introduction to the intention of the page, which give the users a direct way of reading about the page the first thing they do when they land on the page.
* The dropdown menu with the cities in it is placed underneath the introduction text as a natural next step to follow after reading about it and follow the directions given in the text.
* The functions of the radio buttons when clicked on them is that they returns results with either accommodations or restaurants in the chosen city, depending on which button you click, and shows markericons of the found places.
* The Result list...
* The More results button...
* (The navbar and the footer have the same design, which is meant to be a part of the clean design.)
* (A custom scrollbar is added, with a smooth scroll effect. I planned for the scrollbar to be discrete in it´s design.)
* The background color is supposed to give the users a feeling of the page´s authenticity when it comes to environmental sustainable thinking, and relate to the title of the page with its green insinuation. 
* The name of the webpage is placed in the navbar in a center position, like a brand or logo, meant to be discrete with the transparent background.
* (The hover effects on the button is designed with ...a hm color.., and the transition effect is set to feel smooth)
* (A Favicon is added for a better overall look of the website.)
* The footer 

### Features Left to Implement
1. In the future I want to add more radiobuttons to search for other places in the city, like cafes and parks.
2. In the future I also want to add an option to perform a textSearch in the cities, to narrow down the search to be more related to "green travels" with specific words related to sustainability, like "organic" or "sustainable".
3. To fix the Api initMap2 error that´s showing in the console. I tried to get the map from the body, to remove it first and add a new one to it, but it did not work. This doesn´t affect the functionality though, and will be adressed later on. 
--------------------------------------------------------------------------------------------------------------
## Technologies Used
* **The languages** I have used for this project is [HTML5](https://www.w3schools.com/html/html5_intro.asp), [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) and [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript). I have used the Bootstrap gridsystem with the built in media queries for the content to be responsive.
* **The libraries** included are the Javascript libraries [JQuery](https://jquery.com/) and [Popper.js](https://popper.js.org/) and [Bootstrap JS](https://getbootstrap.com).  (And also [Fontawesome](https://fontawesome.com/) to add icons.)  Remove fontaweome? not used now right? 
* **Frameworks** I have used is Bootstrap 4.3.1. I used the BootstrapCDN on [this page](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* **Other tools** I have used are [Cloud9 IDE](https://aws.amazon.com/cloud9/?origin=c9io) for the development of this site: writing, debugging and running my code. GIT was then used to push files to [Github](http://github.com) where the project is stored and deployed.
* I used **Google maps** [Maps Javascrip API](https://developers.google.com/maps/documentation/javascript/tutorial) for the map function on the page.
* As part of the **design process** i chose to use [Balsamic](https://balsamiq.com/) to make my wireframes with a simple yet goodlooking result.
* I used [Responsinator](http://www.responsinator.com/) to check the **responsiveness** of the page.
-------------------------------------------------------------------------------------------------------------------
## Testing
Here I present how my website meet the needs of the users that will visit the site, which I presented in the section UX: User stories:

* As an environmentally conscious traveller I want to have a look at cities with a sustainable focus before I travel there, to get inspired and remember to keep the focus of those things I find most important in the society. --> The information about which cities that are listed as sustainable cities and how to find them in the map are easily seen in the introduction right underneath the heading, and are therefore easy to understand how to find by choosing a city in the dropdown menu, and to finally see on the map and listed below it.

* As an environmentally conscious traveller on the road right now I would like to know where to eat and stay for the night while exploring the sustainable city I´m currently in. --> This information can easily be found on a smartphone on the go, since the webpage has a mobile-first design with a simple and easy understandable layout.

* As a traveller with many different kinds of interests I would like to check this page out, out of pure curiosity, to see what kinds of cities the environmentally conscious travellers would want to visit, and maybe travel there myself to see what these cities are like. --> This research can be done from home or on the go, beforehand or during the stay in the city.

#### Validation of code
* I used [this website](https://validator.w3.org/#validate_by_input) to validate my HTML by direct input.
* I used [this website](https://jigsaw.w3.org/css-validator/validator.html.en#validate_by_input) to validate my CSS by direct input.
* I used [JS Hint](https://jshint.com/) to check my Javascript code for errors and potential problems.

#### The responsive parts of the website
* The webpage is responsive since I´m using Bootstrap 4 and it works good on smaller devices too. The dropdown menu, the radiobuttons, the map and resultlist is placed inside of responsive columns.
* The title of the page is inside of a navbar, which is responsive by default.
* The More results button responds when it´s clicked and clear the results. 
* The Google maps Javascript API and Places library is responsive in itself and is set to respond to the interactions of the user.

#### Testing process scenarios 

(For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:
like this.. 
Contact form:
1.Go to the "Contact Us" page
2.Try to submit the empty form and verify that an error message about the required fields appears
3.Try to submit the form with an invalid email address and verify that a relevant error message appears
4.Try to submit the form with all inputs valid and verify that a success message appears.)

 **Zoom in on cities wheen choosing a city in the dropdown menu**
1. Click on the dropdown menu.
2. Choose a city to see that it´s zoomed in on as intended.
3. Try this with all of the cities one by one and verify that the function is working for all of them.

(look at my first projects testing processes for inspo..)

2. **Click on each radiobutton (restaurants and accommodation) for every city**
* 
*

3. **Click on the markers shown on the screen to see the info window **
* (will I be able to manage this in time?)
*

4. **Click the More results button**
* 
*

5. **Bugs I came across while creating the site and while testing it**
* 
*
*
--------------------------------------------------------------------------------------------------------------
## Deployment
**This website is hosted on GitHub pages, and deployed from the master branch. Follow these steps:**
* In the repository, click on settings in top right corner.
* Scroll down the page to GitHub Pages section.
* In the source dropdown you chose the alternative master branch.
* The published link will appear in the GitHub Pages section.
* Click on the link and you will reach the website.

Upon new commits to the master branch, the deployed site will automatically update. 
The landing page must be named index.html for the site to deploy correctly on GitHub pages.

**To run locally- You can clone this repository directly into the editor you prefer by following these steps:**
* Click on the green "clone or download" button on the repository page
* Or paste following: `git clone https://github.com/LivHed/mgt-map.git` into your terminal. Press enter, and your local clone will be created. 
* The last step is to cut ties with this GitHub repository. To do this type `git remote rm origin` into the terminal.
------------------------------------------------------------------------------------------------------------

## Credits
### Content


### Media
* The cities are an inspiration from [Arcadis homepage](https://www.arcadis.com/en/global/our-perspectives/sustainable-cities-index-2018/citizen-centric-cities/), and the listed top 10 most sustainable cities according to their Sustainable Cities Index.

### Acknowledgements
* For the radio buttons in the html code I copied the code snippet for the Inline custom form controls, from W3Schools on [this page](https://www.w3schools.com/bootstrap4/bootstrap_forms_custom.asp) and then modified it to what suited my needs.
* To perform a nearbySearch in the js code I copied parts of the sample code for the Page Search Pagination example, from [Google maps Javsacript API](https://developers.google.com/maps/documentation/javascript/examples/place-search-pagination).  
