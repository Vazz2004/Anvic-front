export const idUser = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedUser = localStorage.getItem('myToken')
    if (storedUser) {
      const user = JSON.parse(storedUser)
      const idUsuario = user.usuario[0].id_usuario
      return idUsuario
    } else {
      window.location.href = '/'
    }
  } else {
    console.error("El objeto 'window' no está definido o 'localStorage' no está disponible. No es un entorno de navegador.")
  }
}
