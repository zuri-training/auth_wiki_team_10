# Auth Wiki backend [NestJs]
## API DOCUMENTATION
Hosted on Heroku on the domain: https://auth-wiki-team10.herokuapp.com
### AUTH
#### 1) SIGN UP:
  Registers a new user
  ```js
    POST https://auth-wiki-team10.herokuapp.com/api/auth/register/
  ```
  - **Body**
  ```js
    {
      "name": "Hamsa",
      "email": "has@hamsa.com",
      "password": "password"
    }
  ```
  - **Response**: User object
  - **Status code**: `200`
  ```js
    {
      "id": "62ef57b6eca28200167a2860"
      "name": "Hamsa",
      "email": "has@hamsa.com",
      "createdAt": "2022-08-07T06:12:06.617Z",
    }
  ```
#### 2) LOG IN:
  Logs in user
  ```js
    POST https://auth-wiki-team10.herokuapp.com/api/auth/login/
  ```
  - **Body**
  ```js
    {
      "email": "has@hamsa.com",
      "password": "password",
    }
  ```
  - **Response**: access token and refresh token
  - **Status code**: `200`
  ```js
    {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 eyJpZCI6IjYyZWY0OTQ0NDY1NTRjMzM5ODc1MzlmZiIsIm5hbWUiOiJIYW1zYSIsImVtYWlsIjoiaGFtc2FAaGFtc2EuY29tIiwiaWF0IjoxNjU5ODUyODkyLCJleHAiOjE2NTk4ODg4OTJ9.x7HHawUwvGdsiPfmUangVVFBezHy8XB-Br-eSQYDoSA",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWY0OTQ0NDY1NTRjMzM5ODc1MzlmZiIsIm5hbWUiOiJIYW1zYSIsImVtYWlsIjoiaGFtc2FAaGFtc2EuY29tIiwiaWF0IjoxNjU5ODUyODkyLCJleHAiOjE2NjAwMjU2OTJ9.YoxfQNhG3WZLvdn_WL0mK8nFsnYauz_vBCDriaIOdmY"
    }
  ```
#### 3) REFRESH ACCESS TOKEN:
  Refreshes access token
  ```js
    POST https://auth-wiki-team10.herokuapp.com/api/auth/refresh/
  ```
  - **Body**
  ```js
    {
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWVmYmUwZmE4YmQ2NGRhY2Y5NDg1ZiIsIm5hbWUiOiJGYWxlbmNlIExlbXUiLCJlbWFpbCI6ImxlbXVAbGVtdS5jb20iLCJpYXQiOjE2NTk4MjkzNjgsImV4cCI6MTY2MDAwMjE2OH0.EhQvM6CHmEs50M9wI45pWxLXbFyRPXCDRcQn52VQ07I",
    }
  ```
  - **Response**: access token and refresh token
  - **Status code**: `200`
  ```js
    {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 eyJpZCI6IjYyZWY0OTQ0NDY1NTRjMzM5ODc1MzlmZiIsIm5hbWUiOiJIYW1zYSIsImVtYWlsIjoiaGFtc2FAaGFtc2EuY29tIiwiaWF0IjoxNjU5ODUyODkyLCJleHAiOjE2NTk4ODg4OTJ9.x7HHawUwvGdsiPfmUangVVFBezHy8XB-Br-eSQYDoSA",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWY0OTQ0NDY1NTRjMzM5ODc1MzlmZiIsIm5hbWUiOiJIYW1zYSIsImVtYWlsIjoiaGFtc2FAaGFtc2EuY29tIiwiaWF0IjoxNjU5ODUyODkyLCJleHAiOjE2NjAwMjU2OTJ9.YoxfQNhG3WZLvdn_WL0mK8nFsnYauz_vBCDriaIOdmY"
    }
  ```
------------------------------------------------------------------------------------------------------
#### DOC
#### 1) CREATE DOC:
  Create a new documentation
  ```js
    POST https://auth-wiki-team10.herokuapp.com/api/docs/
  ```
  - **Body**
  ```js
    {
      "title": "New ones",
      "description": "Some description",
      "date_created": "2022-08-04",
      "blocks": [
        {
          "type": "heading",
          "content": "Kotlin Variables"
        },
        {
          "type": "paragraph",
          "content": "Lorem ipsum dolor sit amet consectetur."
        },
        {
          "type": "image",
          "content": "/image005.jpg"
        },
        {
          "type": "paragraph",
          "content": "Lorem ipsum dolor sit amet consectetur."
        },
        {
          "type": "code",
          "language": "kotlin",
          "content": "def register() {\n\tprint(\"Hello World!\")\n}"
        }
      ]
    }
  ```
  - **Response**: Documentation object
  - **Status code**: `200`
  ```js
    {
      "id": "62ef499646554c3398753a02",
      "title": "New ones",
      "description": "Some description",
      "author": {
        "name": "Hamsa",
        "email": "hamsa@hamsa.com",
        "id": "62ef494446554c33987539ff",
        "createdAt": "2022-08-07T05:10:28.309Z"
      },
      "blocks": [
        {
          "type": "heading",
          "content": "Kotlin Variables"
        },
        {
          "type": "paragraph",
          "content": "Lorem ipsum dolor sit amet consectetur."
        },
        {
          "type": "image",
          "content": "/image005.jpg"
        },
        {
          "type": "paragraph",
          "content": "Lorem ipsum dolor sit amet consectetur."
        },
        {
          "type": "code",
          "language": "kotlin",
          "content": "def register() {\n\tprint(\"Hello World!\")\n}"
        }
      ],
      "createdAt": "2022-08-07T05:11:50.109Z",
    }
  ```
#### 2) LIST DOCS:
  Gets a list of documentations
  ```js
    GET https://auth-wiki-team10.herokuapp.com/api/docs/
  ```
  - **Body**
  ```js
    { }
  ```
  - **Response**: List (array) of documentations
  - **Status code**: `200`
  ```js
    [
      {
        "id": "62ef499646554c3398753a02",
        "title": "New ones",
        "description": "Some description",
        "author": {
          "name": "Hamsa",
          "email": "hamsa@hamsa.com",
          "id": "62ef494446554c33987539ff",
          "createdAt": "2022-08-07T05:10:28.309Z"
        },
        "blocks": [
          {
            "type": "heading",
            "content": "Kotlin Variables"
          },
          {
            "type": "paragraph",
            "content": "Lorem ipsum dolor sit amet consectetur."
          },
          {
            "type": "image",
            "content": "/image005.jpg"
          },
          {
            "type": "paragraph",
            "content": "Lorem ipsum dolor sit amet consectetur."
          },
          {
            "type": "code",
            "language": "kotlin",
            "content": "def register() {\n\tprint(\"Hello World!\")\n}"
          }
        ],
        "createdAt": "2022-08-07T05:11:50.109Z",
      },
      {
        "id": "62ef499646554c3398753a02",
        "title": "New ones",
        "description": "Some description",
        "author": {
          "name": "Hamsa",
          "email": "hamsa@hamsa.com",
          "id": "62ef494446554c33987539ff",
          "createdAt": "2022-08-07T05:10:28.309Z"
        },
        "blocks": [
          {
            "type": "heading",
            "content": "Kotlin Variables"
          },
          {
            "type": "paragraph",
            "content": "Lorem ipsum dolor sit amet consectetur."
          },
          {
            "type": "image",
            "content": "/image005.jpg"
          },
          {
            "type": "paragraph",
            "content": "Lorem ipsum dolor sit amet consectetur."
          },
          {
            "type": "code",
            "language": "kotlin",
            "content": "def register() {\n\tprint(\"Hello World!\")\n}"
          }
        ],
        "createdAt": "2022-08-07T05:11:50.109Z",
      },
      ...
    ]
  ```

#### 3) GET A DOC:
  Get a documentation by id
  ```js
    GET https://auth-wiki-team10.herokuapp.com/api/docs/{id}
  ```
  - **Body**
  ```js
    { }
  ```
  - **Response**: Documentation object including an array of all comments associated to the documentation
  - **Status code**: `200`
  ```js
    {
      "id": "62ef5dab39fc51001607053c",
      "title": "New ones",
      "description": "Some description",
      "createdAt": "2022-08-07T06:37:31.154Z",
      "author": {
        "name": "Hamsa",
        "email": "hamsa@hamsa.com",
        "createdAt": "2022-08-07T05:10:28.309Z"
      },
      "likes": 5,
      "dislikes" 2,
      "blocks": [
        {
          "type": "heading",
          "content": "Kotlin Variables"
        },
        {
          "type": "paragraph",
          "content": "Lorem ipsum dolor sit amet consectetur."
        },
        {
          "type": "image",
          "content": "/image005.jpg"
        },
        {
          "type": "paragraph",
          "content": "Lorem ipsum dolor sit amet consectetur."
        },
        {
          "type": "code",
          "content": "def register() {\n\tprint(\"Hello World!\")\n}"
        }
      ],
      "comments": [
        {
          "message": "one more",
          "docId": "62ef5dab39fc51001607053c",
          "author": {
            "name": "Hamsa"
          },
          "id": "62ef5ea339fc51001607053e",
          "createdAt": "2022-08-07T06:41:39.568Z"
        },
        {
          "message": "Simply clean code",
          "docId": "62ef5dab39fc51001607053c",
          "author": {
            "name": "Hamsa"
          },
          "id": "62ef5eae39fc51001607053f",
          "createdAt": "2022-08-07T06:41:50.197Z"
        },
        {
          "message": "Horrible",
          "docId": "62ef5dab39fc51001607053c",
          "author": {
            "name": "Hamsa"
          },
          "id": "62ef5eb439fc510016070540",
          "createdAt": "2022-08-07T06:41:56.497Z"
        }
      ]
    }
  ```
#### 4) EDIT A DOC:
  Edits a documentation
  ```js
    PUT https://auth-wiki-team10.herokuapp.com/api/docs/{id}/edit
  ```
  - **Body**
  ```js
    {
      "title": "Hey",
      "description": "The atlantic shores",
      "date_created": "2022-08-04",
      "blocks": [
        {
          "type": "heading",
          "content": "Cameroon things"
        },
        {
          "type": "paragraph",
          "content": "Lorem ipsum dolor sit amet consectetur."
        }
      ]
    }
  ```
  - **Response**: New documentation object
  - **Status code**: `200`
  ```js
    {
      "id": "62ef499646554c3398753a02",
      "title": "Hey",
      "description": "The atlantic shores",
      "date_created": "2022-08-04",
      "blocks": [
        {
          "type": "heading",
          "content": "Cameroon things"
        },
        {
          "type": "paragraph",
          "content": "Lorem ipsum dolor sit amet consectetur."
        }
      ]
    }
  ```
#### 5) DELETE A DOC:
  Delete a documentation and all comments associated to it
  ```js
    PUT https://auth-wiki-team10.herokuapp.com/api/docs/{id}/delete
  ```
  - **Body**
  ```js
    { }
  ```
  - **Response**: Empty response
  - **Status code**: `200`
  ```js
    { }
  ```

------------------------------------------------------------------------------------------------------
#### COMMENT
#### 1) CREATE COMMENT:
  Creates a comment for a particilar documentation
  ```js
    POST https://auth-wiki-team10.herokuapp.com/api/comments/
  ```
  - **Body**
  ```js
    {
      "docId": "62ef499646554c3398753a02",
      "message": "Wow! Thanks for this code! It works well."
    }
  ```
  - **Response**: Empty response
  - **Status code**: `200`
  ```js
    { }
  ```
#### 2) DELETE COMMENT:
  Deletes a comment by id
  ```js
    DELETE https://auth-wiki-team10.herokuapp.com/api/comments/{id}/delete
  ```
  - **Body**
  ```js
    { }
  ```
  - **Response**: Empty response
  - **Status code**: `200`
  ```js
    { }
  ```

------------------------------------------------------------------------------------------------------
#### REACTION
#### 1) CREATE REACTION:
  Creates a reaction for a particilar documentation. `true` for like and `false` for dislike
  ```js
    POST https://auth-wiki-team10.herokuapp.com/api/reactions/
  ```
  - **Body**
  ```js
    {
      "docId": "62ef499646554c3398753a02",
      "isLike": true
    }
  ```
  - **Response**: Empty response
  - **Status code**: `200`
  ```js
    { }
  ```
#### 2) DELETE REACTION:
  Deletes a reaction by id
  ```js
    DELETE https://auth-wiki-team10.herokuapp.com/api/reactions/{id}/delete
  ```
  - **Body**
  ```js
    { }
  ```
  - **Response**: Empty response
  - **Status code**: `200`
  ```js
    { }
  ```