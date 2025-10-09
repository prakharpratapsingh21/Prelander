import React from 'react'

function Props1({text,color}) {
  return (
    <>
        <button className={`px-3 py-1 ${color} rounded-md`}>{text}</button>
    </>
  )
}

export default Props1

//app.jsx

// import React from 'react'
// import Propscard from './Components/Propscard'

// function App() {
//   return (
//     <div>
//       <Props1 text="Know More" color="bg-blue-300"/>
//       <Props1 text="Download" color="bg-red-500"/>
//     </div>
//   )
// }

// export default App