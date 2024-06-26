# Real-Time Chat Application Backend

## Objective
The objective of this project is to develop a comprehensive backend for a real-time chat application using the MERN stack. This emphasizes the use of Node.js and MongoDB for server-side logic and database management. The assignment aims to test your ability to manage real-time data exchange, database schema design, user authentication, and server-side logic, including integration with third-party APIs for language processing.

## Requirements
### User Authentication:
- Implement a registration and login system.
- Users should sign up with an email and password.
- Use JWT (JSON Web Tokens) for managing authentication.

### Chat Functionality:
- Users should be able to send and receive real-time messages.
- Utilize Socket.io for efficient real-time communication.

### Message Storage:
- Store all messages in MongoDB.
- Ensure messages in chat are retrievable for conversation between people.

### User Online Status and LLM Integration :
- A user can set their status as 'AVAILABLE' or 'BUSY'.
- Users can chat if they are online. If the recipient is 'BUSY', automatically generate an appropriate response using a language model API such as ChatGPT, Claude, Gemini, or any free API available. If an API is not available, use the function provided at the end of the assignment to mock the API response.
- API Response from the LLM should be sent within 10 seconds. If the LLM API does not respond in 10 seconds, send a standard message indicating the user is unavailable.

## Technologies Used
- Node.js
- Express
- JWT
- Socket.io
- MongoDB

## Installation and Setup
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up environment variables (see the `.env.example` file).
5. Run the application using `npm start`.

## API Routes
- **POST /api/auth/register:** Register a new user. Expected inputs: email, password. Output: User object.
- **POST /api/auth/login:** Login an existing user. Expected inputs: email, password. Output: JWT token.
- **GET /api/chat/messages:** Retrieve all messages. Output: Array of message objects.
- **POST /api/chat/send-message:** Send a message. Expected inputs: senderId, receiverId, message. Output: Sent message object.

## Environment Configurations
Ensure the following environment variables are set:
- `MONGODB_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT token generation.
- `LLM_API_KEY`: API key for Language Model API.
