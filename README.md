Getting started:

run "npm install"
run "npm run dev"

To update xata schemas run
xata init

Please note that xata.ts will be created.
Make sure to have your .env file as detailed in the dotenv_example.txt with correct API keys for each platform

If you get any error, please make add/change the xata.ts file as follows:

// --------- CODE --------

// ------ IMPORTS --------
require("dotenv"); // to use process.env.XATA_API_KEY
// ------ IMPORTS --------

// ------ REPLACE AT THE END OF THE CODE -----
let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
if (instance) return instance;

const apiKey = process.env.XATA_API_KEY;
if (!apiKey) {
throw new Error("XATA_API_KEY environment variable is missing.");
}

instance = new XataClient({
enableBrowser: true,
apiKey: apiKey,
});
return instance;
};

// ------ REPLACE AT THE END OF THE CODE -----

// --------- CODE ----------
