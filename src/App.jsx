import { Scene } from "./Scene"
import { Environment, ScrollControls, Scroll } from "@react-three/drei"


function App() {

  return (
    <>
       <color attach={'background'} args={['#000000']} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment
        preset='city'
      />
      <ScrollControls pages={5.3} damping={0.5} >
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
        
        <Scene rotation={[0, 0, 0]} position={[0, -4, -5]} startFrame={0} />
        <Scroll>
          {/*CONTENT CANVAS*/}
          
          
        </Scroll>

        
        
      </ScrollControls>
    </>
  )
}

export default App
