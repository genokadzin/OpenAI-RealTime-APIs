async function initiateCall(phoneNumber, clientInfo) {
  const response = await fetch('https://2b38c62e-3467-4e43-86c5-217753ed44fb-00-ydlmvysiy7gx.janeway.replit.dev/initiate-call', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phoneNumber: phoneNumber,
      clientInfo: clientInfo
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  console.log('Call initiated:', result);
  return result;
}

import dotenv from "dotenv";
dotenv.config();
const VOICEFLOW_DESC = process.env.VOICEFLOW_DESC;
const a = 5;
// Example usage:
const result = initiateCall('+17159524991',
    { firstName: 'John',  AccountId: '12345'});
console.log(result)

