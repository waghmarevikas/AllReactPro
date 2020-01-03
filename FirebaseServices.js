import firebase from 'firebase';

export  function createUser(email,password,obj,callback) {
     firebase.auth().createUserWithEmailAndPassword(email,password)
     .then((success) => {
         console.log("success",JSON.stringify(success));
         localStorage.setItem('uid', success.user.uid)
        //  callback(JSON.stringify(success))
         putUserData(obj, success.user.uid)
         
         var actionCodeSettings = {
            // The URL to redirect to for sign-in completion. This is also the deep
            // link for mobile redirects. The domain (www.example.com) for this URL
            // must be whitelisted in the Firebase Console.
            url: 'https://www.example.com/finishSignUp?cartId=1234',
            iOS: {
              bundleId: 'com.example.ios'
            },
            android: {
              packageName: 'com.example.android',
              installApp: true,
              minimumVersion: '12'
            },
            // This must be true.
            handleCodeInApp: true
          };
        firebase.auth().sendSignInLinkToEmail(email,actionCodeSettings).then((success)=>{
           
            alert("Email send on Register email Id")
            callback(JSON.stringify(success))
        });
     })
     .catch((error)=>{
         console.log("error:",JSON.stringify(error));
         callback(error);
     })
 }

 function putUserData(obj,uid)
 {
     firebase.database().ref('/users/'+uid+'/userData/').set(obj)
 }

 export function createUserNote(obj) {
  const uid = localStorage.getItem('uid')
  console.log(uid+': uid');
  firebase.database().ref('/users/'+uid+'/notes').push(obj);
 }
 
 export function updateUserNote(obj,key) {
  const uid = localStorage.getItem('uid')
  console.log(uid+': uid');
  firebase.database().ref('/users/'+uid+'/notes/'+key).update(obj);
 }
 
 export function getNotes(callback) {
    firebase.database().ref('/users/'+localStorage.getItem('uid')+'/notes/')
    .on('value',(snapshot)=>{
    console.log("get Notes NOtes:",snapshot.val());
      callback(snapshot.val())
   })
 }
 
 export function editNoteTitle() {

 }

 export function editNoteData() {
   
 }