import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
   render() {
      return (
         <Html lang="en">
            <Head />
            <body className="bg-white font-montserrat">
               <Main />
               <NextScript />
               <div id="portal2"></div>
            </body>
         </Html>
      )
   }
}

export default MyDocument
