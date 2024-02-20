Getting started:

run "npm install"
run "npm run dev"

To update xata schemas run
xata init

Then, xata.ts will be created but we need to add a couple of things.
require("dotenv"); // to use process.env.XATA_API_KEY

then we need to update the xata.ts code, api key and enable browse as parameters

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
