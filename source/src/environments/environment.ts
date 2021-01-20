/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  site : {
    title: "Base de conhecimento"
  },
  firebaseConfig : {
    apiKey: "AIzaSyDfBSpBDFmAocmZog0FIGtynQFm4VZN0gw",
    authDomain: "gil-post.firebaseapp.com",
    projectId: "gil-post",
    storageBucket: "gil-post.appspot.com",
    messagingSenderId: "295704121049",
    appId: "1:295704121049:web:ea09906869eb1dc6b6b8c8"
  }
};
