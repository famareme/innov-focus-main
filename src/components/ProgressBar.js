import { React } from 'react'
import useStorage from '../components/hooks/useSorage'
//import ProgressBar from 'react-bootstrap/ProgressBar'

const ProgressBar = ({file, setFile}) => {
  const { progress, url } = useStorage(file)
  console.log(progress, url)
  return ( 
    <>
      {/* <ProgressBar animated now={45} /> */}
      <div className="progress-bar" style={{ width : progress+ '%' }}>Progress</div>
    </>
   );
}
 
export default ProgressBar;