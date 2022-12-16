# Fly Example: Apps with Multiple Exposed Ports

For this example we will show how to expose multiple ports from your app. 

We will be using NodeJS with Express but that's not what's important, what matters
is that our app listen to two different ports and each port has a different handler.

Look at [main.js](main.js) to see that we have two servers running on different ports.
Then take a look on [fly.toml](fly.toml) for the line by line explanation of
how you can configure you app to listen to these different ports.

## How to deploy

Launch to create the app, but don't deploy it yet.

```sh
# Launch the app and keep the configuration by replying Yes on the first question
$ fly launch
An existing fly.toml file was found
? Would you like to copy its configuration to the new app? Yes
Creating app in /path/to/folder
Scanning source code
Detected a Dockerfile app
? Choose an app name (leave blank to generate one): myappname-multiple-ports
? Select Organization: Lubien (personal)
? Choose a region for deployment: São Paulo (gru)
Created app myappname-multiple-ports in organization personal
Admin URL: https://fly.io/apps/myappname-multiple-ports
Hostname: myappname-multiple-ports.fly.dev
Wrote config file fly.toml
? Would you like to setup a Postgresql database now? No
? Would you like to set up an Upstash Redis database now? No
? Would you like to deploy now? No
Your app is ready! Deploy with `flyctl deploy`
```

This app needs a dedicated global IPv4 address; a shared one won't work with multiple services. Fly.io does not automatically allocate [dedicated IPv4s](https://fly.io/docs/about/pricing/#anycast-ip-addresses), so you have to provision one yourself:

```
$ fly ips allocate-v4
```

Open your app:

```
$ fly open
```

If you named your app `myapp` you will have the domains `https://myapp.fly.dev`
and `https://myapp.fly.dev:9091`. Read more about how to change this on
[fly.toml](fly.toml).
