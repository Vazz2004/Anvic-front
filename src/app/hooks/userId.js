const storedUser = localStorage.getItem('myToken')
export const idUser = () => {
  if (storedUser) {
    const user = JSON.parse(storedUser)
    const idUsuario = user.usuario[0].id_usuario

    return idUsuario
  } else {
    window.location.href = '/'
  }
}
