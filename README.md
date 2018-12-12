# BudgetAppUI Documentation/ Report

**Authors**: Alex Truong and Kenny Chao
****
**Challenge Statement**: Designing a system that simplifies personal finance for those looking for a fast solution to track budgets, with an application launch expected towards the end of December 2018. 

_*Side Note: no framework is used as this application is constructed purely through HTML, JavaScript, and Google Charts. Also, this application is for a front-end project not a full-stack project, thus no back-end functionalities will be considered for the time being._ 
****
**Goal of the Project**: Our mission for this project was to provide users the ability to record and visualize their budget using a simple and easy to use application. The primary objectives include the following:

1) Designing the System

2) Creating a Responsive Layout

3) Implementing Flexible Functionalities

4) Visualizing User Data

5) Full Implementation and Architecture

****

**Objective 1: Designing the System**

_**Initial Planning**_

In the initial stages of designing the layout we had to consider the following questions:
1) How do we want users to complete tasks?
2) What are the pros and cons of the user's journey through our application?

To answer the first question we had to determine the requirements users needed in order to operate the system. First and foremost, our application required users to directly interact with the interface such as entering in expenses using a keyboard and clicking buttons. Second, users needed to scroll downwards and upwards to complete the form and to generate their total expenses and cost visualization. These main functionalities became the focus of our design process.

Keeping the main functionalities in mind we structured the webpage into 2 columns. The reason behind this decision was based on breaking up the interactivity into two seperate actions. One column would be responsible for handling keyboard strokes and the one column would be responsible for handling button clicks. We decided this layout would make the flow of interactivity more consistent and fluid. In other words, we wanted users to focus of customizing their budget first before generating the final results and data visualization. 

_**Pros and Cons of Initial Draft**_

Upon completion of implementing our initial design we discovered what elements and functionalities worked/ didn't worked. Although our layout was simplistic and easy to use we ran into problems when the user would generate several sections. This made our webpage looked cluttered and claustrophobic. Also, our color scheme did not serve any purpose other than to make the application look pretty. The color scheme conflicted with functionality, therefore, we decided to make the webpage monotonic. A simplified list of the advantages and disadvantages is placed below:

Advantages:

1) Most functionalities work
2) Data visualization is aesthetically pleasing to see and is easy to read.

Disadvantages:

1) Complexity increases as user generates more categories
2) Navigation and fluidity of webpage can be increasingly inconvient if user must scroll up and down the webpage to interact with the application
3) Gradients that were pretty, but were distracting and took the focus away from user interaction

_**Refinement Process**_

After going through the process of reviewing our initial design we decided to go back to the drawing board to eliminate the weaknesses of our first draft. First, we prioritized on keeping the elements that worked well in our initial design. Second, we focused on the user's experience while navigation through our application. We concluded that it would be best if all elements would be contained within one "column" to provide the best viewing experience. In this stage we directed our focus to legibility, accessibility, and performance.

Legibility: This sub-objective measures the suitability of typefaces and fonts in our webpage. Our text and design elements must be readable and also uncluttered. Minimizing complexity allows us to maintain the focus of the application without any distracting elements.

Accessibility: This sub-objective relates to polishing the user's experience. In order to make the user's experience inviting we must make our application easy to use, operatable, understandable, and robust.

Performance: This sub-objective corresponds to how efficient our webpage loads. The performance of our webpage can be attributed to loading fonts, apis, and scripts. Although various fonts can add versatility to design, loading more fonts can increase the amount of page data and lower rendering times. To maintain optimal peformance we decided to use one font throughout the whole page. This allows us to maintain simplicity and consistent web design. The font we use in our application is classified as a slab serif typeface.

****

**Objective 2: Creating a Responsive Layout**

The application's layout was designed with consideration for window resizing. To make sure that the application would respond to changing views, we decided to uses vm to allow for automatic changes upon resizing. By design the user must scroll downwards to access the bottom half of the page. The reason for this design is for a better viewing angle and less collisions with other elements for smaller windows. One problem we ran into was the responsiveness of the charts generated from Google Charts API. The API allows use to customized graphs and charts to a certain degree

****

**Objective 3: Implementing Flexible Functionalities** 

The main functionalities of this application are focused around a simple set of interactions. These interactions can be broken down into 3 different user actions: scrolling, keyboard inputting, and clicking.

1) _**Scrolling**_ - In order to access and utilize every service the application offers the user must either scroll down/ up using the scroll wheel or moving the scroll bar on the webpage.

2) _**Keyboard Inputting**_ - In order to generate the total expenses and data visualization. Users must use the keyboard to define their categories and their costs. 

3) _**Clicking**_ - In order to calculate the total expenses and to generate the pie chart that shows the distribution of expenses. Also, if users want to create more categories they must click on a button that generates more sections for them to define. 

_**Main Functionalities (Elaborated)**_

1) _**User Input**_ - Users are able to input any name for the subject field they are attempting to budget to allow flexibility on any topic they wish to budget. Three types of input fields are present: Subject, cost, and budget. Though the subject field allows for flexibility, both the budget and cost input fields are restricted to USD format and is error-checked via regex, following the format:

``` 
[integer]+.[digit][digit]
```

2) _**Input Storage**_ - The user's input for both the subject and cost fields will be saved into the JavaScript model. The model will store this information during the session to output to the webpage after being invoked by both the controller and the view files.

3) _**Input Calculation**_ - All cost input field values will be added together. The summed value will be compared to the user's budget input. The inputs are all treated as floating point values to properly follow the format of USD currency.

4) _**Outputting to Webpage**_ - Once the user has clicked the "Generate" button, the total calculation will be displayed to the user underneath the table where the user can input information. Depending on whether the budget was met, excess, or matched, it will prompt the user the state of their budgeting.

5) _**Data Visualization**_ - Depending on if the budget was met, excess, or matched, it will indicate below the input fields in a new text box that will be green if the budget was met or matched, or red if the costs exceeded the budget. A chart provided by the Google Charts API will also generate a visual representation of how much percentage of the funds were spent for each of the user's budgeting subjects.

****

**Objective 4: Visualizaing User Data**

To increase the legibility of data we decided to include data visualization through the use of Google Charts. Out of all the different types of charts to use we narrowed our choices down to the pie chart. We thought that the pie chart would be the best way to visualize data because it shows distribution well and is informative. 

_**Google Charts**_ - This is an API created by Google that specializes in customized data visualization. It passes in the data from the JavaScript model to populate the chart using a 2-dimensional array. The first value of one array in the 2-dimensional array is the name of the subject and the second value is the cost of that subject. After populating the data, it then generates the pie chart by invoking its "draw" function provided by the Google Charts' JavaScript file pulled via script command:

```
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
```

****

**Objective 5: Full Implementation and Architecture**

_**Implementation**_

All implementation is provided on GitHub. Please review the code via URL:

```
https://github.com/Kchao1910/BudgetAppUI
```

_**Architecture**_

This application is solely client-side based and does not feature any server-side functionalities. The 3 languages used are HTML, CSS, and JavaScript. There is no JavaScript framework associated with this Web application and all dynamic features are done purely by JavaScript.

* **HTML** - A basic HTML file formats the layout for the application. The HTML provides the foundation of how the Webpage will be presented to the user. The foundation is templated using multiple flexboxes to keep each container formatted properly. This allows for the architecture to be uniform without the use of any other templates or frameworks. The following elements are heavily used:
  * Divs
  * Tables
  * Input Fields
  * Buttons

* **CSS** - Allows the HTML to be stylized. It provides the necessary styling to make the Web application look like a proper Web budgeting application. The focus on the styling of the Web application was centered around keeping a nice, discrete background that was not distracting to the user while providing a minimalistic interface for ease of use. The font for all cost-related input fields are set to "Courier" and the rest of the template uses "Nixie One" for a more-uniform visual.

* **JavaScript** - Following the basic layout of the Model-View-Controller, three JavaScript files are provided to follow the JavaScript DOM model. This allows for encapsulation of data, keeping sensitive information away from the user and preventing access to sensitive information. This web application includes a model, view, and controller JavaScript file including one additional JavaScript file implementing the Google Charts' API script:

  * BudgetModel.js: Responsible for storing the current user's budgeting information in the current session. As the model file for the JavaScript, all data stored in this file cannot be accessed directly by the user and the information stored here is updated through the BudgetView.js.
  
  * BudgetView.js: Allows for dynamic responses to user's actions when an event has occurred. Invoked by the BudgetController.js file, the view updates the HTML Web application in response to any events triggered. It displays new information to the user, such as additional text boxes, pop-up messages, or the Google pie chart via Google's API. If any of the input fields are empty, an alert message will be invoked and displayed to the user, prompting the user to fill in any of the missing fields, and will not store any of that information into the BudgetModel.js file.

  * BudgetController.js: Invoked by an actual event triggered on the HTML Web application by the user. This file allows the HTML file to communicate with the JavaScript files linked to the HTML Web application. When an event is triggered, this JavaScript invokes methods implemented in the BudgetView.js and links the response to the events to these methods.

  * BudgetGoogleChart.js: JavaScript to invoke Google's pie chart API. This script is secluded from the BudgetModel.js file to further encapsulate how the pie chart works. The method implemented in this file is called from the BudgetView.js file at the end to display the necessary information gathering data from the BudgetModel.js after being updated with the user's input.

****

**Closing Notes**

This project is always open to suggestions and we would like to improve on any parts of the application. If you have any suggestions, please provide any feedback at:

```
alexbt1992@icloud.com
```

Thank you for using our web application!

****