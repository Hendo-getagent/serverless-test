I am using pnpm for this, but feel free to use whatever package manager you prefer.

Run `pnpm i` to install the dependencies.
Run `pnpm dev` to get the local api running.

Other commands.
Run `pnpx sls invoke local -f api` to locally run the functions. 
Run `pnpx sls deploy` to deploy to aws.

The reason we are exporting the api and using it in the handler is simply to keep the testing to the functions themselves, not the handler. AWS & Serverless should handle all the handler stuff, we can't really test that here.