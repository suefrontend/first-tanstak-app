<img src='./src/assets/image.gif' alt='Filter by name' style="border: 1px solid #ccc;">

# App Overview

This is my first project using Tanstak Query. When you access the app, you will see a list of users. You can filter users by entering user's name in the input field.

## Set isLoading status

When I first opened the app on the Github Page, I encountered an error and couldn't preview it. This was due to the API taking some time to load the data, and me using the `.map` method before the data was available.

To fix the issue, I set `isLoading` method from useQuery and added a condition to display a message while the app was fetching the data. With this modification, the `.map` method only ran after the data was available, and the app rendered without any errors.

## Use derived state to show filtered data

I utilized derived state for the filtered data since it can be computed from existing data and does not require re-rendering.

## API

I used [Random User Generator](https://randomuser.me) to fetch random users data.

## Other Frameworks and Libraries

I used the following framework and library:

- Axios
- Tailwind CSS

## Available Scripts

To preview the project, please run:

### `npm start`
