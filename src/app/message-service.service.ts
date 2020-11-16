// import { Injectable } from '@angular/core';
// import { environment } from './../environments/environment';

// declare var SockJS;
// declare var Stomp;

// @Injectable({
//   providedIn: 'root'
// })
// export class MessageServiceService {

//   constructor() {
//     this.initializeWebSocketConnection();
//   }
//   public stompClient;
//   public msg = [];
//   initializeWebSocketConnection() {
//     const url = environment.serverUrl + '/task-board';
//     const ws = new SockJS(url);
//     this.stompClient = Stomp.over(ws);
//     const that = this;
//     // tslint:disable-next-line:only-arrow-functions
//     this.stompClient.connect({}, function(frame) {
//       that.stompClient.subscribe('/topic/answer', (message) => {
//         if (message.body) {
//           that.msg.push(message.body);
//         }
//       });
//     });
//   }
  
//   sendMessage(message) {
//     this.stompClient.send('/app/message' , {}, message);
//   }
// }
