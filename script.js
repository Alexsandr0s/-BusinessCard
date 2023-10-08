function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains('light')) {

    //Se tiver light mode, adicionar a imagem
    img.setAttribute("src", "./assets/AvatarLight.png")
  } else {
    //Se tiver sem light mode, manter a imagem
    img.setAttribute("src", "./assets/Avatar.png")
  }

  
  
}