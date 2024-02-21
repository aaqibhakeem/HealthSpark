import React, { useState, useRef, useEffect } from 'react';

const VideoPage = () => {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peerConnection, setPeerConnection] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    const initialize = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setLocalStream(stream);
        localVideoRef.current.srcObject = stream;

        const pc = new RTCPeerConnection();
        pc.onicecandidate = handleICECandidate;
        pc.ontrack = handleTrack;
        stream.getTracks().forEach(track => pc.addTrack(track, stream));
        setPeerConnection(pc);
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };
    initialize();
  }, []);

  const handleICECandidate = (event) => {
    if (event.candidate) {
      console.log('Sending ICE candidate');
      // Send ICE candidate to the peer via signaling server
    }
  };

  const handleTrack = (event) => {
    setRemoteStream(event.streams[0]);
    remoteVideoRef.current.srcObject = event.streams[0];
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;
    const newMessage = {
      sender: 'me', // You can replace this with the actual sender
      text: messageInput.trim()
    };
    setChatMessages([...chatMessages, newMessage]);
    // Send chat message to the peer via signaling server
    setMessageInput('');
  };

  return (
    <div>
      <div>
        <h2>Local</h2>
        <video ref={localVideoRef} autoPlay muted style={{ width: '240px', height: '180px' }} />
      </div>
      <div>
        <h2>Remote</h2>
        <video ref={remoteVideoRef} autoPlay style={{ width: '240px', height: '180px' }} />
      </div>
      <div>
        <h2>Chat</h2>
        <div style={{ height: '200px', overflowY: 'scroll', border: '1px solid #ccc', marginBottom: '10px' }}>
          {chatMessages.map((message, index) => (
            <div key={index}>
              <strong>{message.sender}: </strong>{message.text}
            </div>
          ))}
        </div>
        <input type="text" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default VideoPage;
