# Katatak

## Sumary

Designed for aspiring and professional devs in mind, Katatak helps you build a coding practise habit from the convenience of an App. Each code challenge, or 'kata', is solved by passing all of the given tests.

Testing the users submitted solution code for each Kata is carried out client-side - more information about this in our backend Katatak API...

### Katatak API

The hosted backend API can be found here: https://katatak.onrender.com/api/
And the repo for the backend is here: https://github.com/pigeonwatcher/katatak-be

### The App

The work in this repo represents the front end of the prototype of the MVP for this concept built as a group project as part of a software development bootcamp.

The front end of this project is built in React Native with Expo Go. The language used is Typescript.
Additional libraries and packages used include Axios for making HTTP requests to the Katatak API, and the React Native Code Editor (https://github.com/RivasCVA/react-native-code-editor) for the code solution input.

### The Minimum Viable Product features implemented

- A home page with a list of Katas to chose from to try solving (currently 11 example javascript katas provided for demonstration purposes).
- Ability to order the katas from easiest-hardest (or vice versa) and sort by topic (such as 'string manipulation')
- If a kata has previously been solved by a user this is shown on the Kata from the list in the homepage (currently dependent on the hard-coded user for demonstration purposes)
- A 'Current Kata' page where a user can attempt to solve a given kata challenge.
- The user can return to the 'Current Kata' page to return to the code they were working on if they have navigated away from the page.
- When a user submits code to a Kata they receive feedback in the form of passed/failed tests, mirroring a TDD approach.
- A User page showing the username, bio, avatar and stats on the katas and topics the user has completed.

## Previewing the app

There is no hosted instance of this app but it can be previewed by running it locally in node with Expo. Then simplest way to view it is then with the Expo Go app on your phone.

### Running this repo locally with Expo in Node

Recommended minimum version of node: v20.8.0

#### Clone the repo

In the command line, start by navigating to the directory where you wish to clone the repo.

Run `git clone https://github.com/gpynadath/katatak-fe.git`

#### Ensure you have all the required npm packages installed

Move into the root directory of the cloned repo.

Run `cd katatak fe`

Install the packages.

Run `npm install`

#### Start the app with Expo CLI

To open the Expo CLI and start the app, run `npx expo`

**Alternatively** use the script in the package.json, run `npm start`

### On your phone

Both devices being on the same wifi is recommended.

With the Expo Go app installed on your phone, scan the QR code in the Expo CLI. On an android you can do this in the app, selecting 'Scan QR Code'. On iOS, use your camera app to scan the code.

### When you are done...

You can close the app on your phone.

On the Expo CLI, to exit use Ctrl+C / Cmd+C.

## Thank you...

For checkout out our little coding practise app project. It was a very interesting idea to tackle as a team with some challenges to overcome along the way. Happy kata-ing!
