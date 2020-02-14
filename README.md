# Webhook API serrion

#### Setup Repository
 1. Create a repository on GIthub,`Webhook-API-example`
 2. `git clone repo-url`
 3. `yarn init` to initialize the packages
 4. add dependancy packages
   - `yarn add express body-parser mongoose crypto`
 5. git `.gitignore` and add `node_modules` in ignore list
 6. `git commit -am "initial repo setup`
 7. `git push`

#### Create an Server
 1. Init `server.js`
 2. setup an express server  (Hands on)
    1. database connection
    2. Mongoose model
    3. MongoDb connection
 3. Create CRUD api for WebHook

#### Deployment
  1. Get login into server via SSH
      - username
      - password
      - ssh root@ip
  2. git clone repo and start server
  3. 

#### GitHub WebHook trigger
 1. Configure Github webhook
 2. Create issue or do other activity to trigger webhook
