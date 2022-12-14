<p>
<h4 align="center">4Geeks Academy</h4>
<h2 align="center" style="margin: 0">JWT Authentication With Flask & React.js</h2>
<h3 align="center" style="margin-top: 0">Keili Rosales</h3>
</p>

## Objective

The objective of this exercise is to build a web application implementing user authentication using Python and the Flask framework to build a back-end REST API and React.js, and sessionStorage API for the Front-end.

An authentication system with the following parts is implemented:

- Signup: The user must be able to pick its email, any password and submit the form, a new user must be created in the database and the user must be redirected to the login form afterwards.
- Login: The user fills out its email and password and it's redirected to the private dashboard after successfull authentication.
- Validation: Any page considered `private` must always validate that the current user is valid, if not, the page must redirect the user back to login.
- Logout: Any moment the user must be able to press `logout` in the navbar and it will get redirected back to the login path.

### Back-End Manual Installation:

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure yo replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`

### Front-End Manual Installation:

- Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

## Technologies

- Python
- Flask
- React.js
- Rest API

## Contributions

I´d love to get your appreciation or report on the code at https://github.com/keikeka/Authentication-System-Python-Flask-and-React.js

Thank you so much!
