export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = true
export const domain = 'dev-wvrfwzhq.us.auth0.com'
export const clientId = 'lAcTCVPJK7nDO2DAFlGznd09I1Z68b49'
export const audience = 'https://JackDev.com'
export const firebaseConfig = {
  apiKey: "AIzaSyDeQ2_okhLsFQDNMaciif7MfHxosUmF33Y",
  authDomain: "ontrak-capstone.firebaseapp.com",
  projectId: "ontrak-capstone",
  storageBucket: "ontrak-capstone.appspot.com",
  messagingSenderId: "289407244703",
  appId: "1:289407244703:web:c560af06ddfd19f9ecc5aa",
  measurementId: "G-KBZEQ8SECW"
};