import { useContext } from 'react';
import { GlobalSS } from './component/props/GlobalProps';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const App =() => {
  var var1 = "var1";
  let let1 = "let1";
  const const1 = "const1";  
  
  const handleVarButton = () =>
  {
    var1 = "var2";
    console.log(var1);
    // var var1;
    // var1 = "bbbb";
    // console.log(var1);
  }

  const handleLetButton = () =>{
    let1 = "let2";
    console.log(let1);
    // let let1;
    // let1 = "ppp";
    // console.log(let1);
  }

  const handlecCnstButton = () =>{
    const1 = "const2";
    console.log(const1);
//    const const1;
  }

  const mojiretsu = useContext(GlobalSS);


  return (
    <Tabs>
      <TabList>
        <Tab>importとエクスポート</Tab>
        <Tab>変数の型</Tab>
        <Tab>stateとイベント</Tab>
        <Tab>propとグローバル</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
        <p>componentフォルダを作成して、importしてみる</p>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
        <p>varとletとconstで何が違うか説明する</p>
        <button onClick={handleVarButton}>var1</button>
        <button onClick={handleLetButton}>let1</button>
        <button onClick={handlecCnstButton}>clnst</button>
        <p>{var1}</p>
        <p>{let1}</p>
        <p>{const1}</p>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
        <p>テキストボックスとボタンを説明する</p>
        <p>ラジオボタンとチェックボックスを説明する</p>
        <p>mapとfilterの説明をする</p>
        <p>オブジェクトと配列の書き方(オブジェクト型・プリミティブ型)</p>
      </TabPanel>
      <TabPanel>
        <h2>Any content 4</h2>
        <p>propのバケツリレー</p>
        <p>{`グローバルSS:${mojiretsu}`}</p>
      </TabPanel>
    </Tabs>
  );
}