import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "outqource-react/components";
import npctable from "@file/npc_table_mock.json";
import mock from "@file/mock.json";
import { css, jsx } from '@emotion/react';

// const Test = (): React.ReactElement => {
//   return <div>TEST EL</div>
// }
// const TestF: React.FC = () => {
//   return (<div>TEST FC</div>)
// }

interface JSONData { 
  [id:string] :JSONValue
}

interface JSONValue {
  ItemID: string;
  NameID: string;
  Resource: string;
  Icon: string;
  MenuGroup: string;
}

const mockData: JSONData = npctable;

let iconList: string[] = [ '[Quest1]', '[Purchase2]', '[Sales3]' ]


const FilePage: React.FC= () => {
  const nav = useNavigate();
  const [ icon, setIcon ] = React.useState<string[]>([]);
  const range: number = 10; //
  const [distance, setDistance] = React.useState<number>();
  
  const handleJSON = (): void => {
    console.log(typeof npctable)
    console.log( mockData["1"].NameID )
  }

  const setNpcInRange = (): void => setDistance(genDistance(1,9))

  const setNpcOutOfRange = (): void => setDistance(genDistance(1,9) + 10)

  const genDistance = (mi: number, mx: number): number => Math.floor( Math.random() * (mx - mi))

  const npcInRange = (): void => {
    
    let inRange = distance! <= range ? true : false
    console.log(`is Npc in range [ ${inRange} ]`)

    if(inRange) {
      setIcon([...iconList]);
    } else {
      setIcon([]);
    }
  }



  return(
    <div style={{display:"flex", flexDirection:"column"}}>
      [ICON TEST]
      <Button className="" onClick={handleJSON}>[TEST JSON]</Button>
      <Button className="" onClick={setNpcInRange}>[setNpcInRange]</Button>
      <Button className="" onClick={setNpcOutOfRange}>[setNpcOutOfRange]</Button>
      <Button className="" onClick={npcInRange}>[npcInRange]</Button>
      <div style={{margin: "0 auto"}}>Current Distance: {distance}</div>
      <div style={{margin: "0 auto"}}>{icon}</div>
      <Button className="main_back" onClick={()=> nav(-1)}>Back</Button>
      
    </div>
  )
}

export default FilePage;