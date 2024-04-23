import { serverFunctions } from '../utils/serverFunctions'

export const getAllTasks = serverFunctions.getAllTasks
export const addTask = serverFunctions.addTask
export const updateTask = serverFunctions.updateTask
export const deleteTask = serverFunctions.deleteTask

/**
How to use
Using the gas-client utility class
The gas-client file lets you use promises to call and handle responses from the server, instead of using google.script.run:

// Google's client-side utility "google.script.run" works like this:
google.script.run
  .withSuccessHandler((response) => doSomething(response))
  .withFailureHandler((err) => handleError(err))
  .addSheet(sheetTitle);
// With this package we can now do this:
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();

// We now have access to all our server functions, which return promises
serverFunctions
  .addSheet(sheetTitle)
  .then((response) => doSomething(response))
  .catch((err) => handleError(err));

// Or we can use async/await syntax:
async () => {
  try {
    const response = await serverFunctions.addSheet(sheetTitle);
    doSomething(response);
  } catch (err) {
    handleError(err);
  }
};
Now we can use familiar Promises in our client-side code and have easy access to all server functions.
 */
