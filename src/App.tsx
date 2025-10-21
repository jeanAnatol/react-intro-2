// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

//Always import the components
import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";



function App() {

    //Return in this form
  return (
    <>
      {/*<ViteIntro />*/}
        <ClassComponent />
        <FunctionalComponent />
        <ArrowFunctionalComponent/>
    </>
  )
}
//Always export
export default App
// ΣΥΝΕΧΕΙΑ 20250925 μετα το διαλειμμα