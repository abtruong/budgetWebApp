# budgetWebApp
Final project for CPSC 473 Front End, budgetting web application

Description: 
An application that monitors a user’s monthly budget and stores the monthly costs for different categories (ex. Rent, Groceries, Utilities, etc.). Additional features include data visualization and the ability to define and create unique categories. 
*Side note: no framework is required as this application is purely constructed through HTML, JavaScript, and Firebase.  
Aesthetics:
This application’s aesthetics are supposed to be simple and easy to look at. The general color scheme and layout can be described as monotonic, which purposely serves to maintain simplicity and to reduce distractive stylizations. 
Front-end Design:
The application’s front-end design is composed of 3 major parts: an account overview, a monthly cost to budget overview, and a graph to visualize the allocation of monthly costs. These three parts are separated into 2 columns. The left side holds the account overview and the right side holds the budget overview and graph. 
1) Account Overview
The account overview is composed of individual sections that include the definition of a unique category and the monthly costs associated with that category.
2) Monthly Cost to Budget Overview
The monthly cost to budget overview contains all the costs from all categories and displays the total monthly cost after the user hits the “generate” button.
3) Data visualization
The pie chart’s main purpose is to allow the user to visualize the distribution of their monthly costs. We pass in an array of costs to Google Charts API in order to visual the user’s costs.  
