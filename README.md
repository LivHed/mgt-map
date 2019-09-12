# My green travels

This is my Milestone Project 2: Interactive Frontend Development - Code Institute.

This is a one-page website that function as a search tool to find accommodations and restaurants in 10 cities from a Sustainable Cities Index list.
[Check it out here!](https://livhed.github.io/mgt-map/)

--------------------------------------------------------------------------------------------
## UX
After doing research looking at websites with Google maps included, my goals with the design was set to: 
1. To make the design suitable for people who care about sustainability with choice of words, fonts and colors that give the feeling of sustainability and an environmentally conciousness. I wanted to do this with a simple a design as possible.
2. To make one page webpage which provides a user friendly and easy layout to quick be able to understand what you can do and how on the website.

### User stories
* As an environmentally conscious traveller I want to have a look at the range of places with a sustainable focus before I travel there, to get inspired and remember to keep the focus of those things I find most important in the society.
* As a traveller that´s on a trip right now I would like to have a look at the supply of environmentally conscious places in the city while I´m on the run on my way to explore the city, and would like to pass by a couple of these places.
* As a traveller with no special focus while travelling I would like to check this page out that has narrowed down the search, out of pure interest, to see what kind of places the environmentally conscious travellers usually visit, and maybe I pass by one of these places to see if it´s something that interests me.

### Wireframes
The wireframes are created with Balsamiq. They where made as a part of the design process and are saved as pdf documents and kept in a separate folder, which is called **wireframes**. 
One is designed for desktop view and the other for mobile view. [Check them out here](https://github.com/LivHed/mgt-map/blob/master/wireframes/BalsamiqMockupMilestone2Latest.pdf).

------------------------------------------------------------------------------------------------
## Features
### Existing Features
* The presentation text is placed under the name of page and give a short introduction to the intention of the page, which give the users a direct way of reading about the page the first thing they do when they land on the page.
* The search fields is placed underneath the introduction text as a natural next step to follow after reading about it and follow the instructions given in the text.
* The Result list 
* The Clear button 
* The navbar and the footer have the same design, which is meant to be a part of the clean design. 
* A custom scrollbar is added, with a smooth scroll effect. I planned for the scrollbar to be discrete in it´s design.
* The fullwidth background image is supposed to give the users a feeling of the page´s authenticity when it comes to environmental sustainable thinking. The content scrolls infront of the image.
* The webpage´s name is placed in a top center position on the page with a transparent background, like a brand or logo.
* The Download my resume link and the Social links is placed in the footer to be easily accessed on every page on the website.
* The hover effects on the button is designed with ...a hm color.., and the transition effect is set to feel smooth.
* A Favicon added for a better overall look of the website. 
* The footer 

### Features Left to Implement
1. In the future I want to add more radiobuttons to search for other places in the city, like cafes and parks. 
2. In the future I also want to change the current..
3. I would like to change the look of the ... and implement...
--------------------------------------------------------------------------------------------------------------
## Technologies Used
* **The languages** I have used for this project is [HTML5](https://www.w3schools.com/html/html5_intro.asp), [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) and [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript). I have used the Bootstrap gridsystem with the built in media queries for the content to be responsive.
* **The libraries** included are the Javascript libraries [JQuery](https://jquery.com/) and [Popper.js](https://popper.js.org/) and [Bootstrap JS](https://getbootstrap.com).  (And also [Fontawesome](https://fontawesome.com/) to add icons.)  Remove fontaweome? not used now right? 
* **Frameworks** I have used is Bootstrap 4.3.1. I used the BootstrapCDN on [this page](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* **Other tools** I have used are [Cloud9 IDE](https://aws.amazon.com/cloud9/?origin=c9io) for the development of this site: writing, debugging and running my code. GIT was then used to push files to [Github](http://github.com) where the project is stored and deployed.
* I used **Google maps** [Maps Javascrip API](https://developers.google.com/maps/documentation/javascript/tutorial) for the map function on the page.
* As part of the **design process** i chose to use [Balsamic](https://balsamiq.com/) to make my wireframes in a simple way with a goodlooking result.
* I used [Responsinator](http://www.responsinator.com/) to check the **responsiveness** of the page.
-------------------------------------------------------------------------------------------------------------------
## Testing
Here I present how my website meet the needs of the different kinds of users that will visit the site, which I presented in the section UX: User stories:

* As an environmentally conscious traveller I want to have a look at the range of places with a sustainable focus before I travel there, to get inspired and remember to keep the focus of those things I find most important in the society. --> The information about the sustainable cities and how to find them and it´s range of these kinds of places are easily found as presented in the text underneath the heading, and are therefor easy to understand how to search for in the search fields, and to finally see on the map and listed below it.

* As a traveller that´s on a trip right now I would like to have a look at the supply of environmentally conscious places in the city while I´m on the run on my way to explore the city, and would like to pass by a couple of these places. --> This can easily be done on the smartphone since the webpage is a mobile-first design with a simple and easy to understand- layout.

* As a traveller with no special focus while travelling I would like to check this page out that has narrowed down the search, out of pure interest, to see what kind of places the environmentally conscious travellers usually visit, and maybe I pass by one of these places to see if it´s something that interests me. --> The result list and markers on the map is easy to find and to see.  

#### Validation of code
* I used [this website](https://validator.w3.org/#validate_by_input) to validate my HTML by direct input.
* I used [this website](https://jigsaw.w3.org/css-validator/validator.html.en#validate_by_input) to validate my CSS by direct input.
* I used [JS Hint](https://jshint.com/) to check my Javascript code for errors and potential problems.

#### The responsive parts of the website
* The webpage is responsive since I´m using Bootstrap 4 and it works good on smaller devices too. The dropdown menu, the radiobuttons, the map and resultlist is placed inside of responsive columns.
* The title of the page is inside of a navbar, which is responsive by default.
* The Clear button responds when it´s clicked and clear the results. 

#### Testing process scenarios 
1. **Zoom in on cities wheen choosing a city in the dropdown menu**
* 
* (look at my first projects testing processes for inspo)

2. **Click on each radiobutton (restaurants and accommodation) for every city**
* 
*

3. **Click on the markers shown on the screen to see the info window **
* 
*

4. **Click the Clear button** remove this 
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
* The background picture used in this site was obtained from..
* The cities are an inspiration from [Arcadis homepage](https://www.arcadis.com/en/global/our-perspectives/sustainable-cities-index-2018/citizen-centric-cities/), and the listed top 10 most sustainable cities according to their Sustainable Cities Index.

### Acknowledgements
E.g 
I Copied the code for the... from ..this page.. and then modified it to what suits my needs.
The original code for the ... copied from ..this page and then customized for my .. idea... 
