window.sr = ScrollReveal();
sr.reveal('#navigation', {
  origin: 'top',
  duration: 2000,
  distance: '250px'
});
sr.reveal('.navbar-brand', {
  origin: 'left',
  duration: 2200,
  distance: '400px'
});
sr.reveal('h1', {
  origin: 'top',
  duration: 3000,
  distance: '300px'
});
sr.reveal('.card', {
  duration: 2000,
  origin: 'left',
  distance: '300px'
});
sr.reveal('.imgcuisines', {
  duration: 2000,
  origin: 'left',
  distance: '200px'
});
sr.reveal('.cuisines', {
  duration: 2000,
  origin: 'right',
  distance: '200px'
});
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('Logged in');
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
