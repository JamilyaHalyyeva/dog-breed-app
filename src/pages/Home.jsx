import { CardList } from "../components/CardList"

import { useOutletContext } from "react-router-dom"
export const Home = () => {

  const homedata=useOutletContext();
  
  return (
    <div>
      <CardList dogData={homedata}>

      </CardList>
  
    </div>
  )
}
