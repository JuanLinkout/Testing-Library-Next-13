import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
 * {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 }
 html {
 font-size: 15px;
 /* Dimensions */
 --border-radius: 4px;
 /* Colors */
 --primary: #3a70e9;
 }
 body {
 font-family: 'Poppins', sans-serif;
 -webkit-font-smoothing: antialiased;
 }
 button {
 font-family: 'Poppins', sans-serif;
 }
 a {
 font-family: 'Poppins', sans-serif;
 }
 div {
 display: flex;
 }
`
