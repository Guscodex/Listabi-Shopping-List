import React from "react"
import { NavigationContainer } from "@react-navigation/native" 

import StackRoutes from "./stack.routes";
import TabRoutes from "./tab.routes"

const Routes: React.FC = () => {
  return(
    <NavigationContainer>
      <TabRoutes /> 
    </NavigationContainer>
  )
}

export default Routes


