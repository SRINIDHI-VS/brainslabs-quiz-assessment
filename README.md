# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# About 
This React application is a quiz game that asks the user to guess the capital city of a random country. It uses the countriesnow.space API to fetch the data about the countries and their capital cities.

# How to run the app
- Clone the repository to your local machine.
- Navigate to the project directory and run npm install to install the dependencies.
- Run npm start to start the development server.
- Open http://localhost:3000 in your web browser to view the app.

# How it works
The app uses React hooks to manage the state and the effects. The main components of the app are:

- Quiz: The main component that renders the quiz game. It fetches the data from the API using axios, and uses the useState, useEffect and useRef hooks to manage the state and the side effects.
- Spinner: A loading spinner component that is displayed while the data is being fetched from the API.
The app works as follows:

- When the Quiz component mounts, it fetches the data about the countries and their capital cities from the API using axios. While the data is being fetched, a loading spinner is displayed using the Spinner component.
- When the data is received from the API, it is stored in the countries state variable using the setCountries function. The loading spinner is then hidden.
- When the countries state variable is updated, a useEffect hook runs and selects a random country from the list using the setCurrentCountry function. The selected country is stored in the currentCountry state variable.
- The app then displays the name of the selected country and asks the user to guess its capital city.
- When the user submits their answer, the handleSubmit function checks if the answer is correct or not. If the answer is correct, the isCorrect state variable is set to true, otherwise it is set to false.
- The app then displays a message indicating whether the user's answer was correct or not, and a button to move to the next question.
- When the user clicks the next question button, the handleNextQuestion function selects a new random country and updates the currentCountry state variable. The userInput and isCorrect state variables are also reset.

# Screenshots

![image](https://user-images.githubusercontent.com/76029867/227423540-52e30bdd-4c38-462a-8740-6942d36b7db1.png)
![image](https://user-images.githubusercontent.com/76029867/227423636-e7d43499-a0b1-4afd-90d8-380d28670522.png)
![image](https://user-images.githubusercontent.com/76029867/227423727-32413c84-3dc8-47a0-be59-b709601877ef.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
