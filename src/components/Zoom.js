
import { ZoomMtg } from '@zoomus/websdk' ;
import {useEffect} from 'react' ;


const Zoom = (props) => {

  const {meetingId, password} = props

  const meetConfig = {
    apiKey : 'DMxmqmhYTh2XdDHFastjQw',
    apiSecret : "gdO7L74LJSsHMaAHEVyXnRSjjSxvRYXvDVBZ",
    meetingNumber : meetingId ,
    role : 0,
    userName : 'WebSDK',
    userEmail : 'websdk@gmail.com',
    passWord : password,
  }

  const joinMeet = () => {
    ZoomMtg.generateSignature({
      meetingNumber: meetConfig.meetingNumber,
      apiKey: meetConfig.apiKey,
      apiSecret: meetConfig.apiSecret,
      role: meetConfig.role,
      success(res) {
          console.log('signature', res.result);
          ZoomMtg.init({
              leaveUrl: 'http://localhost:3000/',
              isSupportAV: true, //optional,
              isSupportChat: true, //optional,
              isSupportQA: true, //optional,
              screenShare: true, //optional,
              isLockBottom: false, // optional,
              success() {
                  ZoomMtg.join(
                      {
                          meetingNumber: meetConfig.meetingNumber,
                          userName: meetConfig.userName,
                          signature: res.result,
                          apiKey: meetConfig.apiKey,
                          userEmail: 'email@gmail.com',
                          passWord: meetConfig.passWord,
                          success() {
                              console.log('join meeting success');
                          },
                          error(res) {
                              console.log(res);
                          }
                      }
                  );
              },
              error(res) {
                  console.log(res);
              }
          });
      }
  });
  }

  const showZoomDiv = () => {
      document.getElementById('zmmtg-root').style.display = 'block' ;
  }

  useEffect(() => {
    showZoomDiv();
    ZoomMtg.setZoomJSLib("https://source.zoom.us/2.4.5/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
    joinMeet();
  }, [])


    return  <div className="App">Zoom</div>
}

export default Zoom


// const showZoomDiv = () => {
    //     document.getElementById('zmmtg-root').style.display = 'block' ;
    // }

  //   const joinMeeting = (signature) => {
  //     ZoomMtg.generateSignature({
  //       meetingNumber: meetingId,
  //       apiKey: meetingConfig.apiKey,
  //       apiSecret: meetingConfig.apiSecret,
  //       role: meetingConfig.role,
  //       success: (res) => {
  //         console.log('res',meetingId, res);
  //         ZoomMtg.init({
  //           leaveUrl: "http://localhost:3000",
  //           isSupportAV: true,
            
  //           success: (success) => {
  //             console.log('Init Success ', success);
    
  //             ZoomMtg.join({ 
  //               console: console.log("zoom.join consoled", meetingId),
  //               meetingNumber: meetingId,
  //               userName: meetingConfig.userName,
  //               userEmail: meetingConfig.userEmail,             
  //               password : meetingConfig.passWord,
  //               role : meetingConfig.role,
  //               apiKey : meetingConfig.apiKey,
  //               signature: signature,
  //               success () {
  //                 console.log(success, "success msg")
  //               },
  //               error: (error) => {
  //                 console.log(error, "error in zoom.join method")
  //               },
  //             }) ;
  //           },
  //           error : (error) => {
  //             console.log(error, "error in zoomMtg.init method")
  //           }
  //         });
    
  //         // setTimeout(() => {
  //         //   joinMeeting(res.result); /* res.result is the generated signature */
  //         // }, 1000);
  //       }
  //     })
      
  //   }

  //   useEffect(() => {
  //     showZoomDiv();
  //     ZoomMtg.checkSystemRequirements()
  //     ZoomMtg.setZoomJSLib('https://source.zoom.us/2.4.5/lib', '/av');
  //     ZoomMtg.preLoadWasm();
  //     ZoomMtg.prepareWebSDK();
  //     joinMeeting();
  // }, []);