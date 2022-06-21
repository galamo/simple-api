# Rest API

### Prerequisites
1. Install Node.js
2. run `node -v`
3. run `npm -v` 


### Setup API 
1. run `npm init`
2. answer the intertactive CLI
3. insall the relevant dependencies
4. Deps:
```json
"dependencies": {
    "axios": "^0.27.2",
    "body-parser": "^1.20.0",
    "chai": "^4.3.6",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "swagger-ui-express": "^4.4.0"
  },
```
5. install Globals `npm install -g mocha nodemon`
6. Adding the relevant scripts
```json
  "scripts": {
    "test": "mocha",
    "start": "node index.js",
    "start-dev": "nodemon index.js"
  },
```

### Bulding API

1. Create Express Application
2. Listen to Port
3. Create initial middleware
4. Create entry points
##### GET /countries
##### GET /country/:id
##### DELETE /country/:id
##### POST /country

5. validations - Joi
6. authentication middleware


### Testing
1. run `npm install mocha --save-dev`

### Documentation
1. Add swagger middleware
```js
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/index.json');

...

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


```


2. add the configuration file example 

```json

{
    "swagger": "2.0",
    "info": {
        "title": "Simple API overview",
        "version": "v2"
    },
    "paths": {
        "/": {
            "get": {
                "operationId": "getCars",
                "summary": "Get all Cars list",
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "200 300 response",
                        "examples": {
                            "application/json": "{\n    \"versions\": [\n        {\n            \"status\": \"CURRENT\",\n            \"updated\": \"2011-01-21T11:33:21Z\",\n            \"id\": \"v2.0\",\n            \"links\": [\n                {\n                    \"href\": \"http://127.0.0.1:8774/v2/\",\n                    \"rel\": \"self\"\n                }\n            ]\n        },\n        {\n            \"status\": \"EXPERIMENTAL\",\n            \"updated\": \"2013-07-23T11:33:21Z\",\n            \"id\": \"v3.0\",\n            \"links\": [\n                {\n                    \"href\": \"http://127.0.0.1:8774/v3/\",\n                    \"rel\": \"self\"\n                }\n            ]\n        }\n    ]\n}"
                        }
                    },
                    "300": {
                        "description": "200 300 response",
                        "examples": {
                            "application/json": "{\n    \"versions\": [\n        {\n            \"status\": \"CURRENT\",\n            \"updated\": \"2011-01-21T11:33:21Z\",\n            \"id\": \"v2.0\",\n            \"links\": [\n                {\n                    \"href\": \"http://127.0.0.1:8774/v2/\",\n                    \"rel\": \"self\"\n                }\n            ]\n        },\n        {\n            \"status\": \"EXPERIMENTAL\",\n            \"updated\": \"2013-07-23T11:33:21Z\",\n            \"id\": \"v3.0\",\n            \"links\": [\n                {\n                    \"href\": \"http://127.0.0.1:8774/v3/\",\n                    \"rel\": \"self\"\n                }\n            ]\n        }\n    ]\n}"
                        }
                    }
                }
            }
        },
        "/v2": {
            "get": {
                "operationId": "getVersionDetailsv2",
                "summary": "Show API version details",
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "200 203 response",
                        "examples": {
                            "application/json": "{\n    \"version\": {\n        \"status\": \"CURRENT\",\n        \"updated\": \"2011-01-21T11:33:21Z\",\n        \"media-types\": [\n            {\n                \"base\": \"application/xml\",\n                \"type\": \"application/vnd.openstack.compute+xml;version=2\"\n            },\n            {\n                \"base\": \"application/json\",\n                \"type\": \"application/vnd.openstack.compute+json;version=2\"\n            }\n        ],\n        \"id\": \"v2.0\",\n        \"links\": [\n            {\n                \"href\": \"http://127.0.0.1:8774/v2/\",\n                \"rel\": \"self\"\n            },\n            {\n                \"href\": \"http://docs.openstack.org/api/openstack-compute/2/os-compute-devguide-2.pdf\",\n                \"type\": \"application/pdf\",\n                \"rel\": \"describedby\"\n            },\n            {\n                \"href\": \"http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl\",\n                \"type\": \"application/vnd.sun.wadl+xml\",\n                \"rel\": \"describedby\"\n            },\n            {\n              \"href\": \"http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl\",\n              \"type\": \"application/vnd.sun.wadl+xml\",\n              \"rel\": \"describedby\"\n            }\n        ]\n    }\n}"
                        }
                    },
                    "203": {
                        "description": "200 203 response",
                        "examples": {
                            "application/json": "{\n    \"version\": {\n        \"status\": \"CURRENT\",\n        \"updated\": \"2011-01-21T11:33:21Z\",\n        \"media-types\": [\n            {\n                \"base\": \"application/xml\",\n                \"type\": \"application/vnd.openstack.compute+xml;version=2\"\n            },\n            {\n                \"base\": \"application/json\",\n                \"type\": \"application/vnd.openstack.compute+json;version=2\"\n            }\n        ],\n        \"id\": \"v2.0\",\n        \"links\": [\n            {\n                \"href\": \"http://23.253.228.211:8774/v2/\",\n                \"rel\": \"self\"\n            },\n            {\n                \"href\": \"http://docs.openstack.org/api/openstack-compute/2/os-compute-devguide-2.pdf\",\n                \"type\": \"application/pdf\",\n                \"rel\": \"describedby\"\n            },\n            {\n                \"href\": \"http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl\",\n                \"type\": \"application/vnd.sun.wadl+xml\",\n                \"rel\": \"describedby\"\n            }\n        ]\n    }\n}"
                        }
                    }
                }
            }
        }
    },
    "consumes": [
        "application/json"
    ]
}

```