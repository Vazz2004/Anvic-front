import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: 'AIzaSyBXIQq_J60YS7VAaq-lLXydVl-rD6KwajQ',
  authDomain: 'anvic-image.firebaseapp.com',
  projectId: 'anvic-image',
  storageBucket: 'anvic-image.appspot.com',
  messagingSenderId: '323399267610',
  appId: '1:323399267610:web:94a7e0991e4efb3747e8a3',
  measurementId: 'G-7VDK2MCGWP'
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

async function uploadFile (file) {
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}

export default uploadFile
