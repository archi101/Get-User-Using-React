import React, { FC } from "react"
// import HelloWorldComponent from "./assets/Components/HelloWorldComponent/HelloWorldComponent"
import UserListComponent from "./assets/Components/UsersListComponent/UserListComponent"

const App: FC = () => {
  return (
    <React.Fragment>

      {/* <HelloWorldComponent name="Archi" /> */}
      <UserListComponent/>
    </React.Fragment>
  )
}

export default App