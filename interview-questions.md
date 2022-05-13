# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.




1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: the foreign key should be named after the model. it would be named "students_id" so we can assign many students to the Cohort model. 

  Researched answer: the reason to use a foreign key is to uniquely identify a row in the referenced table. So since we have a Cohort model with a Student model where there are many students, we want to link that student to their Cohort. a foreign key is simply linked to the primary key before it. the students model would be considered a "sub model" of Cohort, because we are linking the students to their Cohort. the foreign key would be named "student_id" which would link the "student" to the "Cohort" model id. 




2. Which RESTful routes must always be passed params? Why? 

  Your answer: The RESTful routes that must always contain a param are show routes (get) if we want to see a specific ":id", the update routes (put/patch) because we are updating ":id"'s, and the delete routes (delete) if we are trying to delete a specific ":id".

  Researched answer: 

Show Route: the show route contains an ":id" param where can access that id and use the controller method "show". the "show method" also represents the "R" in "CRUD" which is "Read". "show method" reads the data and displays that id. "show" is the Rails convention for listing one item in a particular model.

Update Route: the update route contains an ":id" param where we can access that id and use the controller method "update". the "update" method also represents the "U" in "CRUD". "update" is the Rails convention for updating info in the database. we use the ":id" param so we are only updating a piece of data and not doing major changes to the database. 

Delete Route: the delete route contains an ":id" param where we can then access that id and use the controller method "destroy". the "destroy" method also represents the "D" in "CRUD". "destroy" is the Rails convention for removing info from the database. 


3. Name three rails generator commands. What is created by each? 

  Your answer: 
  1. rails g model ...  = creates a model "name" where you can then add data under that model with strings, integers, booleans and so on. This would then be stored in a database that you can create.
  2. rails g controller ... = the controller "name" file we create is a location where we place methods to use on our model "name".   
  3. rails g rspec:install ... = installs a testing tool called RSpec where you can test Ruby code. 


  Researched answer:
Rails Generate Model: the rails generate model "..." creates a blueprint or a model. with this model, we can create many of these items under that model with attributes. we can make these attributes unique for each item. we can also create these attributes when we create the model, for example: $ rails g model User name:string age:integer bio:text
the "string" "integer" "text" are some data types we can pass through our attributes. There will be some new additions to the app under app/models/"model".rb named "model".rb. also the file named "TimeStampNumber"_create_"model".rb and the path is db/migrate/"TimeStampNumber"_create_"model".rb
with "rails g model", we need to also make sure our model is singular. a model example would be model = "Tundra" and the instances would be Tundra.create model:"string", color:"string", VIN:"string"
. we can then create endless amounts of instances with different model names, colors and VIN numbers. 

Rails Generate Controller: when we use the "rails generate conroller 'enter here'" we come back with a new file in our app named "'controllername'_controller.rb" as well as "'controllername'_users"
The "'controllername'_controller.rb" is where we will create actions or methods. these methods will give us the capability of viewing a specific instance, creating an instance, or updating an instance. these methods are "def index", "def create", "def update", etc. this location is where CRUD(Create, Read, Update, Delete) funtionality happens. once we have those methods created, we can then create routes in the file "view/'controllername'" 

Rails Generate rspec:install: when we use the  "rails generate rspec:install" we install the RSpec gem for testing a Ruby on Rails backend. RSpec is a testing library for Ruby on Rails backend. Testing Ruby on Rails backend ensures that our code is outputting our desired functionality. We should see something similar to this output when we run the "rails generate rspec:install" command 
output: "ruby 2.6.1p33 (2019-01-30 revision 66950) [x86_64-darwin19]" 
If we dont see this, we need to make sure Ruby has been properly installed on the project. we can check if it has been installed by running the "ruby -v" command. Once RSpec has been installed, you can begin running tests for the backend.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform? 

action: "GET"    location: /students 

# answer: "index" => this controller method will "read" all data, so we will be outputting any data that is under the "student" model

action: "POST"   location: /students 

# answer: "create" => this controller method would "create" new data, so we will be creating new data under the "student" model

action: "GET"    location: /students/new   

# answer: "new" => this controller method would create data locally but not save to the database like "create" does

action: "GET"    location: /students/2  

# answer: "show" => this controller method would "read" one piece of data, so with the model "student" and the param id "2" we are accessing a specific piece of data not the whole database

action: "GET"    location: /students/2/edit    

# answer: "edit" => this controller method will "read" or render the view but will not interact with the database

action: "PATCH"  location: /students/2       

# answer: "update" => this controller method will "update" data, so since we are accessing a specific index of "2" we are going to only update that piece of data

action: "DELETE" location: /students/2      

# answer: "destroy" => this controller method would "delete" data, since we are accessing a specific index of "2" we are deleting only that piece of data. 









5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories). 



As <user role>, I want <what?>, so that <why?>. 

1. As a "project manager", I want "organization", so that "I can provide my clients with an estimated completion time". 
2. As a "dog walker", I want "scheduling", so that "I can choose the best time to walk my clients dogs".
3. As a "bodybuilder", I want "a check list", so that "I can know what workout I've completed". 
4. As a "teacher", I want "a sub-task I can add to a to do list item", so that "I can assign different tasks to each student".
5. As a "student", I want "a priority indicator", so that "I know which assignments I need to focus on more". 
6. As a "chef", I want "a step by step feature", so that "I can verify what step I am on when cooking". 
7. As a "baker", I want "a conversion calculator", so that "I can easily convert cups to ounces to grams".
8. As a "wedding planner", I want "a to do list template creator", so that "I can reuse the template for future weddings". 
9. As a "researcher", I want "an archive of my past to do lists", so that "I can look back on previous to do lists".
10. As "someone who does not use technology often", I want "a seamless UI", so that "I dont have difficulty navigating the app". 
