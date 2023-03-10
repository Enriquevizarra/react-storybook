import { colors } from "../global/colors"
// import { theme } from "../global/theme"
function Button({
  children, 
  // currentTheme = "ligth"
}){
  return (
    <button
      style={{
        backgroundColor: colors.green[500],
        color: colors.gray[50],
      }}
    >{children}</button>
  )
}

export { Button }