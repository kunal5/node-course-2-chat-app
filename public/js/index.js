var socket=io();
socket.on('connect',function (){
  console.log('Connected to Server');

  // socket.emit('createMessage',{
  //   from:'Andrew',
  //   text:'Yup, that works for me'
  // });



  // socket.emit('createEmail',{
  //   to:'jen@example.com',
  //   text:'Hey, This is Andrew'
  // });
});

socket.on('disconnect',function (){
  console.log('Disconnected from server');
});

socket.on('newMessage',function (message){
  console.log('New Message',message);
});

// socket.on('newEmail',function (email){
//   console.log('New Email',email);
// });
