import React, { useEffect } from 'react';
import { ZoomMtg } from '@zoomus/websdk';

const ZoomMeeting = () => {
  useEffect(() => {
    ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    const apiKey = 'FID8kXjOmhy13w7TdRYcl5Z6cu4VEifk';
    const meetingNumber = 'MEETING_NUMBER';
    const role = 0; // 0 for attendee, 1 for host

    ZoomMtg.init({
      leaveUrl: window.location.origin,
      isSupportAV: true,
      success: () => {
        ZoomMtg.join({
          apiKey,
          meetingNumber,
          userName: 'Tushar Utane',
          userEmail: 'tusharutane2@email.com',
          apiKey: apiKey,
          success: (res) => {
            console.log('join meeting success', res);
          },
          error: (err) => {
            console.log('error', err);
          },
        });
      },
      error: (err) => {
        console.log('Zoom init error', err);
      },
    });

  }, []);

  return <div id="zmmtg-root"></div>;
};

export default ZoomMeeting;
