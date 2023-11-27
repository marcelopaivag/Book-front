import { Caroussel } from "../components/Caroussel"
import ProjectList from '../components/ProjectList'
import { JumbotronComp } from '../components/JumbotronComp'

export const Home = () => {
  return (
    <>
      <Caroussel />
      <JumbotronComp/>
      <ProjectList/>
    </>
  )
}
