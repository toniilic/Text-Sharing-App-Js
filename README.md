# Text Sharing App

This is a simple web application that allows you to share text between devices without sending emails to yourself. It uses a Node.js backend with Express and a vanilla JavaScript frontend.

## Features

- Save text to a shared storage
- Load text from the shared storage
- Simple and intuitive user interface
- User authentication using JWT tokens
- Persistent text storage with MongoDB
- Enhanced UI with text formatting options
- Error handling for failed API requests

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm (Node Package Manager)
- You have installed MongoDB and have it running on your local machine
- You have a basic understanding of JavaScript and web development

## Installing Text Sharing App

To install the Text Sharing App, follow these steps:

1. Clone the repository or create a new directory for your project
2. Navigate to the project directory
3. Run the following commands:

```
npm init -y
npm install express cors body-parser mongoose bcryptjs jsonwebtoken dotenv
npm install -D nodemon
```

4. Create a `.env` file in the root of your project and add the following environment variables:

```
MONGODB_URI=mongodb://localhost:27017/textsharing
JWT_SECRET=your_jwt_secret
```

## Using Text Sharing App

To use the Text Sharing App, follow these steps:

1. Start the server by running:

```
npm start
```

2. Open your web browser and go to `http://localhost:3000`
3. Register a new user by entering a username and password, then click "Register"
4. Log in with the registered username and password, then click "Login"
5. Use the textarea to enter your text
6. Click "Save" to store the text
7. Click "Load" to retrieve the last saved text

## Contributing to Text Sharing App

To contribute to Text Sharing App, follow these steps:

1. Fork this repository
2. Create a branch: `git checkout -b <branch_name>`
3. Make your changes and commit them: `git commit -m update etx.`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contact

If you want to contact the maintainer, you can reach out at toniilicdeveloper@gmail.com.

## License

This project uses the following license: [MIT License](https://opensource.org/licenses/MIT).
