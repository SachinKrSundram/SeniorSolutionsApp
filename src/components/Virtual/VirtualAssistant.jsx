import "./VirtualAssistant.css";
import React, { useState } from 'react';

function VirtualAssistant() {
  const [assistantResponse, setAssistantResponse] = useState('');

  const handleAssistantRequest = () => {
    const accessToken = 'YOUR_GOOGLE_ASSISTANT_ACCESS_TOKEN';

    const apiEndpoint = 'https://actions.googleapis.com/v2';
    const url = `${apiEndpoint}/conversations:execute`;
    
    const request = {
      "user": {
        "userId": "USER_ID"
      },
      "queryInput": {
        "text": {
          "text": "Hello",
          "languageCode": "en-US"
        }
      }
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((data) => {
        setAssistantResponse(data.queryResult.fulfillmentText);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Virtual Personal Assistant</h1>
      <button onClick={handleAssistantRequest}>Ask for Help</button>
      <p>{assistantResponse}</p>
    </div>
  );
}

export default VirtualAssistant;
