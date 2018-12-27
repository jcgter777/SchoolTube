var config = {
    apiKey: "AIzaSyBWjUvrbLe2ZX5MCHd0PoITIzeDNMw4DlI",
    authDomain: "schooltube-cjms.firebaseapp.com",
    databaseURL: "https://schooltube-cjms.firebaseio.com",
    projectId: "schooltube-cjms",
    storageBucket: "schooltube-cjms.appspot.com",
    messagingSenderId: "1046727065520"
  };
  firebase.initializeApp(config);

var ui = new firebaseui.auth.AuthUI(firebase.auth());

function load() {
	ui.start('#firebaseui-auth-container', {
  		signInOptions: [
    		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  		],
  	
	});
}

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'https://jcgter777.github.io/SchoolTube',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};