import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAoZ53hgUCMHd8KV2RSGriQf2If2Lg44qE",
    authDomain: "questionnaire-app-5cd30.firebaseapp.com",
    databaseURL: "https://questionnaire-app-5cd30.firebaseio.com",
    projectId: "questionnaire-app-5cd30",
    storageBucket: "questionnaire-app-5cd30.appspot.com",
    messagingSenderId: "663196583006"
};
firebase.initializeApp(config);

export const database = firebase.database()