# Text-Em-All React Coding Challenge - Movie Search Engine - Wensong Zhang

https://tea-app.herokuapp.com/

![alt text](https://drive.google.com/uc?export=view&id=1zHnSfOwByLFbnDggI-nCy03T7D7VaUP3)
![alt text](https://drive.google.com/uc?export=view&id=1HCvLuEibi_yapXsPKYA6X7fOHqox6VkB)
## Available Scripts
In the project directory, you can run:
### `npm run dev`
Or
### `npm run build`
### `npm start`

## Thinking and design process
### Structure of the project:
1. Header Bar
    Includes the title of the website with css animation.
2. Search Bar:
    Allows user to search for movies, enter key or click search button to search.
3. Movie List or warning message:
    If there is no movie found or keyword returns too many results, a warning message will be displayed.
    If there are movies found, a list of movies will be displayed, each movie has a poster and a title. 
    Made with MUI Grid and Card.
    Mouse hover on the movie will display a shodow effect.
4. Page Navigation:
    If there are more than 10 movies found, a page navigation bar will be displayed at the bottom of the page.
    Made with MUI Pagination.
5. Movie Detail:
    When user clicks on a movie card, a movie detail page will be displayed.
    Made with MUI Modal, Grid and Icons.
### Design:
1. Responsive design:
    The website is responsive to different screen sizes.
2. Color scheme:
    The color scheme is inspired by the Northwestern University's color scheme, I choose purple and white as the main colors.
3. Animation:
    The title of the website has a css animation, there will be a underline animation when the mouse hovers on and move away.

## Implementation time
I start from Saturday 03/25/2023 and finish at Friday 03/31/2023.
I spent about 15 hours on this project in total.

## What needs to be improved
1. The movie detail page is not responsive perfectly to some screen(I use 13 inch Mac,
styles may different on windows or other size screens, specially on the small size screen,
the scroll bar will be displayed).
2. The design, layout, and color of both the main page and warning message require further consideration.
3. If the picture of the movie is not found, it would lead to an unsatisfactory user experience.
