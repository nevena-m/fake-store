# Fake Store Demo

## Runing the server

- Install the latest stable version of Java.
- Install Eclipse.
- Import server project to Eclipse workspace
- Start the server.


## Running the client

### Install Node.js (LTS)

Before starting, ensure you have Node.js installed on your system.

Download and install Node.js from the official site: https://nodejs.org/
Verify the installation by running:
```
node -v
```
```
npm -v
```

These commands should output the installed Node.js and npm versions.

### Install Vite (if not installed)
In terminal run:
```
npm install -g vite
```

### Install Dependencies

Inside the project folder, install the required dependencies:
```
npm install
```

### Run the Development Server
Start the development server by running:
```
npm run dev
```
**NOTE:** If you need to run the application on another port you must make changes to the server code as well. See bellow
#### How to change port of client application
Changes needed in client code:
- open `client/vite.config.ts`
- change port specified in `server` to wanted port

Example:
```js
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr(), dts()],
  preview: {
    port: 8081
  },
  server: {
    port: 8085
  }
})
```

Changes needed in server code:
- open `server\src\main\java\com\seechange\fake_store\FakeStoreApplication.java`
- change the port in `allowedOriginPatterns` to the wanted client port.

Example:
```java
@Override
public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/product/*").allowedOriginPatterns("http://*:[8081,8085]");
}
```


### Open the Application in browser
Once the server is running, open your browser and go to: http://localhost:8082/. This will display the Fake Store app.

### Stoping the Development Server 
To stop the server, press `CRTL`+`c` in the terminal.