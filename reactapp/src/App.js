import logo from './logo.svg';
import './App.css';
import { AutoComplete, Button, Col, Input, Row, Space, Table } from "antd"
import Card from 'antd/es/card/Card';

import axios from 'axios';
import Loader from './Loader';
import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view'

function App() {
  const [data, setData] = useState()
  const [url, setUrl] = useState()
  const [loading, setLoading] = useState(false)
  const options = [
    {
      label: (<div style={{whiteSpace: 'pre-wrap', padding: '10px'}}>httpshttps://www.amazon.in/dp/B0C62PVKC5</div>),
      value: "https://www.amazon.in/dp/B0C62PVKC5"
    },
    {
      label:( <div style={{whiteSpace: 'pre-wrap', padding: '10px'}}>httpshttps://www.amazon.in/dp/B07X3W9VSP</div>),
      value: "https://www.amazon.in/dp/B07X3W9VSP"
    },
    {
      label: (<div style={{whiteSpace: 'pre-wrap', padding: '10px'}}>httpshttps://www.amazon.in/Fossil-Smartwatch-Snapdragon-Smartphone-Notifications/dp/B09DGRNGX5</div>),
      value: "https://www.amazon.in/Fossil-Smartwatch-Snapdragon-Smartphone-Notifications/dp/B09DGRNGX5"
    },
    {
      label: (<div style={{whiteSpace: 'pre-wrap', padding: '10px'}}>httpshttps://www.amazon.in/Paris-Hyaluronic-Dehydrated-Hyaluron-Moisture/dp/B0B6XZBQ1G</div>),
      value: "https://www.amazon.in/Paris-Hyaluronic-Dehydrated-Hyaluron-Moisture/dp/B0B6XZBQ1G"
    },
    {
      label: (<div style={{whiteSpace: 'pre-wrap', padding: '10px'}}>httpshttps://www.amazon.in/Redmi-Storage-Performance-Mediatek-Display/dp/B0BYN34PGJ</div>),
      value: "https://www.amazon.in/Redmi-Storage-Performance-Mediatek-Display/dp/B0BYN34PGJ"
    }
  ]

  const fetchData = () => {
    if (url) {
      setLoading(true)
      axios.post('/api', { url: url }).then(res => {
        console.log(typeof (res?.data?.data), 'response')
        setData(res?.data?.data || {})
        setLoading(false)
      }).catch(err => {
        console.error(err)
        setLoading(false)
      })
    }
  }
  return (
    <div className='padding'>
      <Card

      >
        <Row justify={'center'} align={'bottom'}>
          <Col>
            <div className='title'>DataExtractX</div>
            <AutoComplete dropdownMatchSelectWidth={344} style={{width: '100%'}} size={'large'} options={options} placeholder={'www.example.com...'} value={url} onSearch={value => setUrl(value)} onSelect={option => setUrl(option)} />
          </Col>
          <Col style={{ paddingLeft: '10px' }}>
            <Button disabled={loading} size={'large'} type={'primary'} onClick={fetchData}>Submit</Button>
          </Col>
        </Row>
        <Card >
          {loading ? <Loader /> : data ? <ReactJson src={data || {}} name={false} displayDataTypes={false} displayObjectSize={false} /> : null}

        </Card>

      </Card>
    </div>
  );
}
export default App;
