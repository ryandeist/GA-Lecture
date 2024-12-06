# Environment Variables - Configuring Environments with Environment Variables
## Environment Variables
To make use of the environment configuration in our code, we use ***environment variables***. They store specific data (like database URLs containing passwords) that may change between environment. Collectively, these variables are an app's configuration.

### Why use environment variables?
**1. Separation of Concerns**
The main reason to use environment variables involves separating concerns between our app's code and how it's configured. 
* Configuration varies with environments; source code generally does not.
* Using environment variables allows up to change settings withing a config file without altering the rest of the code base 

These points are important because the allow us to deploy an application and only change the environment variable to their new values; none of the code we've written changes. Not changing the code we've writted is important because it allows us to use the same codebase for developing and deploying applications. 

**2. Security**
Environment variables also help protect sensitive information (API keys, passwords, authentication credentials, etc.). You should ***never*** hardcode secrets like these into your code. If you push hardcoded secrets to GitHub, they will be exposed publicaly.

## Example Scenario
The app example above mentioned that connecting to a database requires a password. If we were to push this password to GitHub as part of our codebase, anyone on the internet could read our password and act as an owner of our database!

The same goes for items like API keys. While this is not as much of a concern when using free services, as soon as we out of pocket for data storage or API calls, the consequences of accidently uploading a secret become much more costly. 

This is such a problem that GitHub generously employs a mechanism for scanning public repos automatically for this type of security mistake called [secret scanning](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning). If you accidently push details like this to a public GitHub repo, you'll likely receive an email and security warning on GitHub.

To prevent this problem, we store our environment variables in a file called a `.env` and then tell Git to ignore that file when pushing our code to git hub. 


