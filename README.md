I am using pnpm for this, but feel free to use whatever package manager you prefer.

`$ pnpm i` to install the dependencies.
`$ pnpm dev` to get the local api running.

Make requests to 3000, the "serverless" api runs on 3002.

Other commands.
`$ pnpx sls invoke local -f api` to locally run a functions. 
`$ pnpx sls deploy` to deploy to aws.

The reason we are exporting the api and using it in the `handler.js` is so that we can isolate the testing to only the functions.
We should not be testing the handler (as far as I know). AWS & Serverless should take care of all the handler stuff for us.