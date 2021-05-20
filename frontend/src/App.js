import React from 'react';

class App extends React.Component {
  componentDidMount() {
    const apiUrl = 'http://localhost:8080/';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <div>
              <h1>Congrats! You have successfully loaded the interview project:</h1>
              <h3>This is the Full Stack Engineer problem set, this environment consists of</h3> 
              <li>React (Front End)</li>
              <li>Spring Boot (Back End)</li>
              <li>H2 database</li>
              <p>These items are all in place however need to be connected for you to complete your tasks</p>
              <p>Note: The browser console is showing some default JSON data from the back end and CORS has been disabled in the Spring Boot project for convenience</p>
              <p>Access H2 console by running the back end project and going to http://localhost:8080/h2-console , login and password are setup in the 'backend' project in the '/backend/src/main/resources/application.properties'</p>
              <h3>Listed Below are the tasks we would like you to complete:</h3>
              <li>1. Create a .sql script that adds a 'Book' table in the H2 database with the following attributes (Title, Author, Publication Date), put this script in the 'db_scrips' folder</li>
              <li>2. Create a .sql script that adds 5 new books to the table you can add any data you like.  Add this script to the 'db_scripts' folder</li>
              <li>3. Modify the services in the 'backend' to return JSON data with the contents of the 'Book' table</li>
              <li>4. Modify the 'frontend' project to display a 'Reading List' of the books in the database table, the list should have the ability to check off books as they have been read</li>
              <li>5. Create a pull request in github so that we can review</li>
          </div>;
  }
}
export default App;
