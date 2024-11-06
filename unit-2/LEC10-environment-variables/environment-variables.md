# Environment Variables
## Concepts
### Application environments
As a full-stack developer, your apps often interact with external databases, servers, and authentication services. Your apps also need to be aware of their local operating environment. This environment includes all the external systems and services your application communicates with and how they influence its functionality and behavior. 

#### Multiple Environments
The environment an application runs in will likely vary depending on the context in which it operates. Suppose we have an application that requires a database to store information.

The best practice would be to have *two* environments:
* **Development Environment**: While developing and testing, the app would connect to a test database filled with fake data for development purposes. This data can be modified or even deleted freely because it is not user-facing and, therefore, unimportant. This environment is commonly referred to as ***dev***.
* **Production Environment**: When the app is deployed to the internet, where users can interact with it, the app will connect to a different production database. Here, maintaining data integrity is crucial as real user data is involved. The environment is commonly referred to as ***prod***.

![dev vs prod graphic](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/environment-variables/concepts/assets/environments.png)

You wouldn't want developers messing around with data for the actual users, as the might mess something up in the development process - impacting real users in detrimental ways. 

The complexity, features of the app, and the size of the development team can significantly shape the number and types of environments used. Different projects may require different setups based on their specific needs and goals. 

That said, development and production environments, as we've discussed, represent an appropriate starting point for any app. 

> An application's *environment* is all the external factors that impact its operation in a given circumstance. It includes things like the configuration for an application (such as what database it should connect to).

## Configuring Environments with Environment Variables
### Environment Variables
To make use of the environment configuration in our code, we use ***environment variables***. They store specific data (like database URLs containing passwords) that may change between environment. Collectively, these variables are an app's configuration.

#### Why use environment variables?
**1. Separation of Concerns**
The main reason to use environment variables involves separating concerns between our app's code and how it's configured. 
* Configuration varies with environments; source code generally does not.
* Using environment variables allows up to change settings withing a config file without altering the rest of the code base 

These points are important because the allow us to deploy an application and only change the environment variable to their new values; none of the code we've written changes. Not changing the code we've writted is important because it allows us to use the same codebase for developing and deploying applications. 

**2. Security**
Environment variables also help protect sensitive information (API keys, passwords, authentication credentials, etc.). You should ***never*** hardcode secrets like these into your code. If you push hardcoded secrets to GitHub, they will be exposed publicaly.

### Example Scenario
The app example above mentioned that connecting to a database requires a password. If we were to push this password to GitHub as part of our codebase, anyone on the internet could read our password and act as an owner of our database!

The same goes for items like API keys. While this is not as much of a concern when using free services, as soon as we out of pocket for data storage or API calls, the consequences of accidently uploading a secret become much more costly. 

This is such a problem that GitHub generously employs a mechanism for scanning public repos automatically for this type of security mistake called [secret scanning](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning). If you accidently push details like this to a public GitHub repo, you'll likely receive an email and security warning on GitHub.

To prevent this problem, we store our environment variables in a file called a `.env` and then tell Git to ignore that file when pushing our code to git hub. 


