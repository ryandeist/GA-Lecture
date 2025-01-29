# Fetching Data in React - Setting up the Weather API

## Signing up 
In this lecture, we'll utilize the [Weather API](https://www.weatherapi.com/) to make fetch requests in React. The Weather API is a resource for accessing weather and geolocation data. The Weather API is free but requires an account and API key. Let's walk through the setup now and gain access to our API Key. 

To begin, click [here](https://www.weatherapi.com/) to navigate to the Weather API landing page. 

On the landing page, click on the Sign Up button: 

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/fetching-data-in-react/setting-up-the-weather-api/assets/signup.png)

You should be presented with a signup form. 

After filling out the form, you should see the following Account Verification screen: 

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/fetching-data-in-react/setting-up-the-weather-api/assets/verify.png)

Open the email account you used to sign up and follow the provided link to verify your account. 

After verifying your email, you should see the following screen: 

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/fetching-data-in-react/setting-up-the-weather-api/assets/email-verified.png)

After logging in, you should be taken to a dashboard page displaying your API key: 

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/fetching-data-in-react/setting-up-the-weather-api/assets/dashboard.png)

Copy this key and store it somewhere readily accessible. We'll need it later on in this lesson. 

## Using the API Explorer
The Weather API offers a straightforward interface for testing the API. It can be accessed by clicking [here](https://www.weatherapi.com/api-explorer.aspx) Let's use the API Explorer to see what kind of data we can expect when using this API.

First, enter your API Key in the field at the top: 

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/fetching-data-in-react/setting-up-the-weather-api/assets/explorer.png)

Next, enter a city you wish to get weather data for: 

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/fetching-data-in-react/setting-up-the-weather-api/assets/city.png)

After submitting the request, you should see a response like the one below: 

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/fetching-data-in-react/setting-up-the-weather-api/assets/response.png)

There are two critical pieces of information here: 
1. **Call**
    Notice the value provided underneath the Call header. 

    ```
     http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no
    ```

    This is the URL or endpoint that we are making the request to. We'll use a URL that is very similar to this one in our React application. Notice the components of this URL, particularly the two properties (`key` and `q`) in our query string (`?`).

2. **Response Body**
    This is the data that we will be working with in React. Take a moment to familiarize yourseld with the structure used here, as we have some nested objects to consider. 