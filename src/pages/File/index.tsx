import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "outqource-react/components";
// import npctable from "@file/npc_table_mock.json";
import NpcTable from '@file/Npc/NPC.json';
import mock from "@file/mock.json";
import { css, jsx } from '@emotion/react';
import './style.scss';

// const Test = (): React.ReactElement => {
//   return <div>TEST EL</div>
// }
// const TestF: React.FC = () => {
//   return (<div>TEST FC</div>)
// }

interface JSONData {
  [id: string]: JSONValue;
}
interface JSONValue {
  NameID: number;
  Resource: string;
  Icon: string;
  MenuGroup: number;
  '#Desc': string;
  '#en': string;
}

// test02 - commit 1

const mockData: JSONData = NpcTable;

let iconList: string[] = [ '[Quest1]', '[Purchase2]', '[Sales3]' ]

const NpcQuestDialogue = () => {
  return (
    <>
      <div className="quest_dialogue">
        <div className="icon"></div>
        <div className="name"></div>
        <div className="message"></div>
        <div className="confirm"></div>
      </div>
    </>
  )
}

const FilePage: React.FC= () => {
  const nav = useNavigate();
  const [ icon, setIcon ] = React.useState<string[]>([]);
  const range: number = 10; //
  const [distance, setDistance] = React.useState<number>();
  const [npcId, SetNpcId] = React.useState<string>();
  const [menuDataList, SetMenuDataList] = React.useState<string>();
  
  const handleJSON = (): void => {
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

  const getNpcMenu = (): void => {
    const npcId: string = '500004';
    SetNpcId(npcId);
    SetMenuDataList(JSON.stringify(mockData[npcId]));
    console.log( typeof mockData[npcId]);
    const data = mockData[npcId];
    // for(let [k, v] in Object.entries(data)){
    //   console.log(`key:${k} value:${v}`)
    // }
    console.log(Object.entries(data))
    Object.entries(data).map((item, idx) => {

    });
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
      <Button className="" onClick={getNpcMenu}>[Event: GetNpcMenu] targetNpcId:{npcId}</Button>
      <div style={{margin: "0 auto"}}>{menuDataList}</div>
      <Button className="main_back" onClick={()=> nav(-1)}>Back</Button>
      <NpcQuestDialogue />
    </div>
  )
}

export default FilePage;