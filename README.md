# README.md

# Chatbot Project

This project is a chatbot application that allows users to query a product and supplier database using natural language. It utilizes the LangGraph framework for agent workflows and integrates with an open-source LLM to fetch and summarize data from a MySQL/PostgreSQL database.

## Project Structure

```
chatbot-project
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── chatbot
│   │   ├── ActionProvider.ts    # Handles user actions and interacts with LangGraph
│   │   ├── MessageParser.ts     # Processes user input and extracts queries
│   │   └── config.ts            # Configuration settings for the chatbot
│   ├── controllers
│   │   └── index.ts             # Handles incoming requests and routes them
│   ├── database
│   │   ├── mysql.ts             # Functions to connect to and query MySQL
│   │   └── postgresql.ts        # Functions to connect to and query PostgreSQL
│   ├── routes
│   │   └── index.ts             # Sets up the application routes
│   ├── services
│   │   ├── langGraphService.ts   # Interacts with the LangGraph framework
│   │   └── llmService.ts         # Interfaces with the open-source LLM
│   └── types
│       └── index.ts             # Interfaces and types used throughout the application
├── package.json                 # npm configuration file
├── tsconfig.json                # TypeScript configuration file
└── README.md                    # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd chatbot-project
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the database connection in `src/database/mysql.ts` or `src/database/postgresql.ts` as needed.

4. Start the application:
   ```
   npm start
   ```

## Usage

Once the application is running, users can interact with the chatbot through the designated interface. Users can ask questions related to products and suppliers, and the chatbot will process the queries using natural language understanding and return relevant information.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.