# Fly Example: Apps with Multiple Exposed Ports

For this example we will show how to expose multiple ports from your app. 

We will be using NodeJS with Express but that's not what's important, what matters
is that our app listen to two different ports and each port has a different handler.

Look at [main.js](main.js) to see that we have two servers running on different ports.
Then take a look on [fly.toml](fly.toml) for the line by line explanation of
how you can configure you app to listen to these different ports.

## How to deploy

```sh
# Launch the app and keep the configuration by replying Yes on the first question
$ fly launch
An existing fly.toml file was found
? Would you like to copy its configuration to the new app? Yes
Creating app in /path/to/folder
Scanning source code
Detected a Dockerfile app
? App Name (leave blank to use an auto-generated name): myappname-multiple-ports
? Select organization: Lubien (personal)
? Select region: gru (São Paulo)
Created app myappname-multiple-ports in organization personal
Wrote config file fly.toml
? Would you like to setup a Postgresql database now? No
? Would you like to deploy now? Yes
Deploying myappname-multiple-ports
```

Open your app:

```
$ fly open
```

If you named your app `myapp` you will have the domains `https://myapp.fly.dev`
and `https://myapp.fly.dev:9091`. Read more about how to change this on
[fly.toml](fly.toml).