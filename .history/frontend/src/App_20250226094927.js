// frontend/src/App.js
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Trabalho de Pipeline DevSecOps</h1>
      <p>Bem-vindo à aplicação de Pipeline DevSecOps!</p>
    </div>
  );
}

export default App;

// frontend/Dockerfile
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]