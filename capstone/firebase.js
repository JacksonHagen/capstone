export const firebaseAccount = {
  "type": "service_account",
  "project_id": "ontrak-capstone",
  "private_key_id": process.env.PRIVATE_KEY_ID,
  "private_key": process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
  "client_email": "firebase-adminsdk-7e89s@ontrak-capstone.iam.gserviceaccount.com",
  "client_id": "109361070347532745551",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7e89s%40ontrak-capstone.iam.gserviceaccount.com"
}