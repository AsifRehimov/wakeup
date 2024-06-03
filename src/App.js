import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [Ad, setAd] = useState('')
  const [Soayd, setSoayd] = useState('')
  const [Age, setAge] = useState('')
  const [Data, setData] = useState([])

  function Submit(e) {
    e.preventDefault()
    const formdata = {
      Ad: Ad,
      Soyad: Soayd,
      Age: Age,
    }
    fetch("https://sheet.best/api/sheets/9243d8a4-044a-4478-806e-456fb0af073e",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      }
    )
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    console.log(formdata);


    // fetch("https://sheet.best/api/sheets/9243d8a4-044a-4478-806e-456fb0af073e",
    //   {
    //     method: "GET",
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // )
    //   .then(response => response.json())
    //   .then(data => setData(data))
    //   .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get("https://sheet.best/api/sheets/9243d8a4-044a-4478-806e-456fb0af073e",
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      // .then(response => response.json())
      .then(data => setData(data.data))
      .catch(err => console.log(err))
  }, [])


  console.log(Data.map(e => e.Ad))
  return (
    <div className="App">
      <p style={{
        fontSize: "30px",
        fontWeight: "bold",
        margin: "100px auto 0 auto"
      }}>
        Wake Up
      </p>
      <p style={{
        fontSize: "20px",
        margin: "20px auto 30px auto"
      }}>
        Google Sheetsə data əlavə etmək
      </p>
      <input type='text'
        placeholder='Ad'
        value={Ad}
        onChange={e => setAd(e.target.value)}
        name='Ad'
        style={{
          width: "200px",
          height: "30px",
          border: "0",
          borderRadius: "5px",
          background: "#E6E6E7",
          marginRight: "20px",
          paddingLeft: "10px"
        }} />
      <input type='text'
        placeholder='Soyad'
        name='Soyad'
        value={Soayd}
        onChange={e => setSoayd(e.target.value)}
        style={{
          width: "200px",
          height: "30px",
          border: "0",
          borderRadius: "5px",
          background: "#E6E6E7",
          marginRight: "20px",
          paddingLeft: "10px"
        }} />
      <input type='text'
        placeholder='Yaş'
        value={Age}
        onChange={e => setAge(e.target.value)}
        name='Age'
        style={{
          width: "200px",
          height: "30px",
          border: "0",
          borderRadius: "5px",
          background: "#E6E6E7",
          marginRight: "20px",
          paddingLeft: "10px"
        }} />
      <input
        type='submit'
        onClick={(e) => Submit(e)}
        style={{
          fontSize: "20px",
          padding: "10px",
          width: "fit-content",
          background: "blue",
          margin: "20px auto 30px auto",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      />
      <ul style={{display: 'flex', flexWrap:"wrap", gap:"20px", listStyleType: "none"}}>
            <li style={{width:"100px", fontWeight:"bold"}}>Ad</li>
            <li style={{width:"100px", fontWeight:"bold"}}>Soyad</li>
            <li style={{width:"100px", fontWeight:"bold"}}>Yaş</li>
          </ul>
        {Data.map((index, key) => {
          return (<ul key={key} style={{display: 'flex', flexWrap:"wrap", gap:"20px", listStyleType: "none"}}>
            <li style={{width:"100px"}}>{index.Ad}</li>
            <li style={{width:"100px"}}>{index.Soyad}</li>
            <li style={{width:"100px"}}>{index.Age}</li>
          </ul>)
        })}

    </div>
  );
}

export default App;
