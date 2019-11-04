# Sneakerbox-API
## For Athletic Shoe Enthusiasts Everywhere

Sneakerbox-API is a **[NodeJS](https://nodejs.org/en/about/)**/**[ExpressJS](https://expressjs.com/)** **REST** API server for an online retailer of athletic/lifestyle footwear. Sneakerbox-API consists of three main Express {Router} route-handling objects:

1. **apiserver**: Defines the necessary sub-routers and routes to READ data back to the client application
2. **appserver**: Defines the necessary sub-routers and routes to CREATE, UPDATE, and DELETE data from the client application
3. **authserver**: Authenticates clients via user-provided credentials and authorizes them to access protected routes via **[JSON Web Tokens (JWTs)](https://jwt.io)**.

### Application Structure
Sneakerbox-API is organized according to the following structure:
+ **root**
    - middleware
    - models
    - routers
    - scripts
    - services
    - tests
    - server.js