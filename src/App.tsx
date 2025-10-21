// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

//Always import the components
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ViteIntro/ArrowFunctionalComponentWithPropsType.tsx";
import Card from "./components/Card.tsx";
import Layout from "./components/Layout";
import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
import Counter from "./components/Counter.tsx";

function App() {

    //Return in this form
  return (
    <>
      {/*<ViteIntro />*/}
      {/*  <ClassComponent />*/}
      {/*  <FunctionalComponent />*/}




        {/*</Card>*/}
        <Layout>
            <Card title="card">
                <ArrowFunctionalComponentWithPropsType title="Arrow functional with Props"
                description="DESCRIPTION"/>
                <ArrowFunctionalComponent/>
            </Card>
            <FunctionalComponentWithState/>
            {/*<ClassComponentWithState/>*/}
            <Counter/>
        </Layout>
    </>

  )
}
//Always export
export default App
