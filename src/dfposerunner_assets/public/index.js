import dfposerunner from 'ic:canisters/dfposerunner';

dfposerunner.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
