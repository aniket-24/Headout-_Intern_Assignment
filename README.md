# Headout - Software Engineer, Intern - Assignment

## Screenshots

- Chrome local host :-

<img width="822" alt="image-1" src="https://github.com/aniket-24/Headout_Intern_Assignment/assets/76562459/71c8c88a-a7fb-4410-a751-55367d540202">

- Docker terminal :-
  
<img width="781" alt="image-2" src="https://github.com/aniket-24/Headout_Intern_Assignment/assets/76562459/efe33f72-51d4-40de-8dc6-5ee2b7c6e980">

- Docker container :-

<img width="783" alt="image-3" src="https://github.com/aniket-24/Headout_Intern_Assignment/assets/76562459/d056b990-eee0-43fd-8047-b5ad4fbc8187">

## Installation

1. Clone the repository to your local machine.

   ```sh
   git clone https://github.com/aniket-24/Headout_Intern_Assignment.git
   ```

2. Install the required packages.

   ```sh
   cd Headout_Intern_Assignment
   npm install
   ```

3. Start the development server.

   ```sh
   node server.js
   ```

4. Open the project in your browser at [`http://localhost:8080`](http://localhost:8080) to view your project.

## Coding Question: Optimize HTTP Server

### Problem Statement:

You are tasked with implementing a simple HTTP server with the following requirements.

### Implementation requirements

- Set up an HTTP server in a language/framework of your choice.
- The server should respond to incoming GET requests on the endpoint /data.
- You must accept 2 query params, n: file name, and m: line number.
- If n and line both are provided, return the content of file /tmp/data/n.txt at line number m.
- If only n is provided, return the contents of file /tmp/data/n.txt entirely.
- Each file should be around 100MB in size, there will be more than 30 different files (eg; 1.txt, 2.txt ... 30.txt … n.txt).

### Sample input and output:

- Request: /data?n=1&m=30
- Response: vyAF9kLDTIbqkv5R7hFqGDXaxezu3WMV5pcPd6RdudWMqMGJBQ9YLOoCQt
