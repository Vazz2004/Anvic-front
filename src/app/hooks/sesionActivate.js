export const existingUser = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedUser = localStorage.getItem('myToken')
    if (storedUser) {
      const permisos = true
      return permisos
    } else {
      const permisos = false
      return permisos
    }
  } else {
    console.error("El objeto 'window' no está definido o 'localStorage' no está disponible. No es un entorno de navegador.")
  }
}
