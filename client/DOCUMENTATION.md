# Online Blood Bank
Our project is a web-based blood bank management system that aims to connect donors with those in need of blood, making the process of blood donation and transfusion more efficient and effective.

## About
Our blood bank management system is designed to address the critical need for blood donations in emergency situations by providing an online platform that connects blood donors with those in need. With this system, users can register as blood donors, request blood when needed, and search for donors based on location and blood type. The system is user-friendly and intuitive, allowing users to quickly and easily navigate through the various features.

Our project aims to overcome the challenges of traditional blood banks, which can often be cumbersome and inefficient. With the help of modern technology, we have created a centralized platform that streamlines the process of blood donation and ensures that those in need receive the necessary assistance in a timely and efficient manner. We believe that our project has the potential to save countless lives and make a real difference in the world.

# Implimentation
Our blood donation management system was built using the MERN stack, which is a popular technology stack for developing web applications. MERN stands for MongoDB, Express.js, React, and Node.js. We used MongoDB as our database to store user and request data, Express.js to create our RESTful API, React to build our user interface, and Node.js to run our server-side code.

To connect our front-end and back-end, we used Axios, a popular library for making HTTP requests. This allowed us to fetch and post data from our front-end to our back-end and update our database accordingly.

Our front-end was built using React components, which were organized into different pages such as Home, RequestBlood, EmergencyPage, Login, RegisterUser, and Profile. We also used various UI components such as Navbar, Footer, Card, and FloatingButton to create a seamless user experience.

On the back-end, we created two main routes using Express.js - a user route and a request route. The user route handles user registration, updates, and login. The request route handles requests for blood donations, including creating new requests, fetching all requests, and searching for potential donors.

Overall, our project was built using a combination of modern technologies and best practices to create a user-friendly, responsive, and reliable blood donation management system.

## Steps to Use this Project

1. Clone the project from GitHub repository by running the following command in your terminal:
   ```
   git clone https://github.com/aswnss-m/BloodBank.git
   ```
2. Navigate to the cloned directory:
   ```
   cd blood-bank
   ```
3. Install the required dependencies for the frontend and backend:
   ```
   cd ./client
   npm install

   cd ..
   cd ./server
   npm install
   ```
4. Start the backend server:
   ```
   // Assuming that you are in ./server directory

   node index.js
   ```
5. Start the frontend server:
   ```
   // open a new terminal 
   cd ./client
   npm start

   ```
6. Navigate to `http://localhost:3000` on your web browser to access the project.

Note: Make sure to have Node.js and npm installed on your machine before following the above steps.

## Detailed Explaination about each files
1. App.js
   * The `App.js` file is the main entry point for the React application. It imports several components from various files and renders them based on the URL path. 
   * The file begins with importing various components including `Home`, `RequestBlood`, `Navbar`, `RegisterUser`, `EmergencyPage`, `SearchResult`, `Profile`, `Login`, and `Admin`. It also imports `Route` and `Routes` from the `react-router-dom` library.

   * The `App` function is the main function component that renders the application. It returns a `div` with the `app` class name and renders the `Navbar` component. Then it uses the `Routes` component to define the routes for the application. Each `Route` component maps to a URL path and renders a specific component. For example, the `Home` component is rendered when the URL path is `/`, the `RequestBlood` component is rendered when the URL path is `/search`, and so on.

   * The last part of the file exports the `App` function so that it can be used in other parts of the application.

2. Home.js
   * This is the code for the Home.js file. It is a functional component that renders the home page of the blood bank web application.

    * The component imports the FloatingButton and Emergency components from the respective files. The styles for this page are defined in the Home.css file.

    * The Home function returns a div with the class container, which contains the Emergency component and the homeContentContainer div. The homeContentContainer div contains the homeContent div, which displays the heading, slogan and the explore button. Finally, the FloatingButton component is rendered outside the homeContentContainer div.

    * The Home component is exported as a default.
3. RegisterUser.js
    * In the `RegisterUser` component, axios is used to send an HTTP POST request to the backend server. The `handleSubmit` function is called when the user submits the form. 
    * Inside the `handleSubmit` function, an axios POST request is made to the URL `http://localhost:5000/register`. The data to be sent to the server is passed as an object in the second argument to `axios.post()` method. The object includes the user's name, age, blood group, location, and contact number. 
   
    ``` 
    axios.post('http://localhost:5000/register', {
    name,
    age,
    bloodGroup,
    location,
    contactNumber: number // the field in the model is called "contactNumber", so map "number" to "contactNumber"
    })
    ```

    * When the server responds with a success status (status 200), the `then` function is executed, and the user is redirected to the homepage using the `useNavigate` hook provided by the `react-router-dom` library. 

    ```
    .then(response => {
    console.log('Success:', response);
    navigate('/');
    })
    ```

    * If there is an error, the `catch` function is executed and an error message is logged to the console. 

    ```
    .catch(error => {
    console.error('Error:', error);
    });
    ```

    > Axios is a popular library for making HTTP requests from a web browser. It is promise-based and provides an easy-to-use API for sending requests and handling responses. In this example, we use it to communicate with the backend server and send data to the server.
4. RequestBlood.js
    * This is a React component called `RequestBlood`, which is used for submitting a form to request blood. The component imports the `useState` and `useNavigate` hooks from React, `axios` for making HTTP requests, and a CSS file for styling.

    * Inside the component function, there is a state variable called `formValues` which is an object that holds the values of the form inputs. The `handleChange` function is called whenever an input value changes, and it uses the `setFormValues` function to update the state.

    * The `handleSubmit` function is called when the form is submitted. It prevents the default form submission behavior, and sends an HTTP POST request to the `http://localhost:5000/search` endpoint using `axios`. The `formValues` object is sent as the request body. If the request is successful, the response is logged to the console, and the `useNavigate` hook is used to navigate to a new URL based on the `patientBloodGroup` and `patientLocation` values from the form. If the request fails, an error is logged to the console.

    * The `return` statement contains the JSX code for the form. It contains various input elements for the form, each with an associated label. The `defaultValue` attribute of the `select` element sets the default selected option to an empty string. Finally, there is a submit button with a class of `primaryButton` and `searchButton` and an `onClick` event that triggers the `handleSubmit` function.
3. SearchResult.js
    * The code shown is a React component called `SearchResult`. It retrieves a list of user data from a server and filters it based on the `bloodgroup` and `location` parameters obtained from the URL using the `useParams` hook from the React Router library. The filtered data is then rendered using another component called `Card`.

    * The `useEffect` hook is used to fetch the user data from the server once the component is mounted. It receives a function that will be called after the first render, and a dependency array that specifies the variables that the function depends on. In this case, the function depends on `bloodgroup` and `location`, so it will be called again if either of these variables change.

    * The `axios` library is used to make a GET request to the server's `/all` endpoint. The response is then filtered using the `filter` method to only include users whose `bloodGroup` and `location` properties match the corresponding parameters.

    * The filtered data is stored in the `userData` state variable using the `setUserData` function. The `map` method is then used to iterate over the `userData` array and render a `Card` component for each user.

    * The `Card` component receives several props, including `name`, `phoneNumber`, `age`, `bloodGroup`, and `location`. It renders a card with the user's blood group, name, age, and location, as well as a "Contact" button that allows the user to copy the user's phone number to the clipboard or call it directly, depending on the device being used.

    * The `handleCallButtonClick` function is called when the "Contact" button is clicked. It uses the `navigator` API to copy the phone number to the clipboard and alert the user, or to open the phone app with the number if the user is on a mobile device.

    * Overall, this code demonstrates the use of React, React Router, and axios to fetch and filter data from a server and display it in a user-friendly format using a reusable component.