import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

export default function Loader(){
    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: 32,
          }}
          spin
        />
    );
    return (
    <div style={{
      display:'flex',
      height:`${1}in`,
      margin:'0px 50%',
      alignItems:'center',
      justifyItems:'center'
    }}>
        <Spin indicator={antIcon} />
    </div>
  )
}