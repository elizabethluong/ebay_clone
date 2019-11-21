# lyster documentation
  
[Elizabeth Luong](https://github.com/elizabethluong/)
 
## Contents
 
[Brief](#brief)
[User Stories](#user-stories)
[Methodologies and Processes](#methodologies-and-processes)
[Reviewing the Process](#reviewing-the-process)
[Reflections on the Project](#reflections-on-the-project)
 
## Brief
 
Implement a simple listing service (think ebay but really simple).
 
- Homepage to have a form to enter the details of the items you wish to sell
- Click a button on this page to submit the form
- Send the form data to a new page that displays an example mock-up of your newly created listing to sell you item.
- A back button on the mock-up to go back to the original form to edit details.
 
## User Stories
 
As a user, I'd like to be able to type in the item, price and description for my listing
As a user, I'd like to see what listing service I'm using
As a user, I'd like to press a button to take me to a page where I can review my listing
As a user, I'd like to be able to edit my item listing
 
## Methodologies and Processes
 
Pair programming with 45 minute + 5 minute breaks
VS Code
 
### Technologies
 
- Node.js
- Express.js
- EJS
- HTML
- CSS
- JavaScript
- Git & Github
 
## Reviewing the Process
 
I started with setting up the server in app.js and the file structure, e.g. views and public folders.
 
Then, I added the markup and styling for the homepage and linked this up to the server.
 
After, I created the markup and styling for the listing page and added the form functionality to show user input.
 
## Reflections on the Project
 
I ran into a few problems trying to render the second html page and spent a lot of time on this but once I realised I had to changed the html files to ejs, I was able to render both pages. I also had issues getting user input to show on the second page but after reading tutorials on ejs I was able to get the functionality to work. The most difficult part of the project was the edit button. I was able to get this working partially with the item name and price fileds but couldn't get the description textarea to show user input.