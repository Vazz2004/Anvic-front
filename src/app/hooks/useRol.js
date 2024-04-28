export const rolUser = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedUser = localStorage.getItem('myToken')
    if (storedUser) {
      const user = JSON.parse(storedUser)
      const idRol = user.usuario[0].rol_id
      console.log('id rol hok', user)
      return idRol
    }
  } else {
    console.error("El objeto 'window' no está definido o 'localStorage' no está disponible. No es un entorno de navegador.")
  }
}
