Made use of faker JS for most of the scenarios but as the application didnt support faker banknumber and IFSC codes please refer to the below URL and substitute it with a new account number and IFSC code in the env file before running
https://www.licmf.com/assets/pdfs/LIST-OF-ALL-BANK-DETAILS-UPDATED26112019.pdf

To make it run on just chromium use command ➜  npx playwright test addRecipient.test.js --project=chromium --headed        
