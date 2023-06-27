import { useState } from 'react'
import './Hero.css';
import loader from './assets/loader.svg'

import axios from 'axios';

function Hero() {

  const [url, setUrl] = useState("");
  const [inputText, setInputText] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handlePress = async () => {

    setLoading(true)
    const encodedParams = new URLSearchParams();
    encodedParams.set('voice_code', 'en-US-1');
    encodedParams.set('text', inputText);
    encodedParams.set('speed', '1.00');
    encodedParams.set('pitch', '1.00');
    encodedParams.set('output_type', 'audio_url');

    const options = {
      method: 'POST',
      url: 'https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'cea8423bf0msh54d0feeb708df23p1e04c8jsnbc1f6b42b739',
        'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      setLoading(false)
      console.log(response.data.result.audio_url);
      setUrl(response.data.result.audio_url)
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <section className='hero'>
      <h1>Convert Text To Audio Using Our Powerful Machine Learning Models</h1>
      <div className="hero__form">
        <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text" placeholder="Hi, What is your name?" />
        <button onClick={handlePress}>Convert</button>
      </div>
      {isLoading ?
        <img className='hero__loader' src={loader} alt='loader' /> :
        <a className='hero__url' target="_blank" rel="noreferrer" href={url}>{url.trim() == "" ? "" : "Click Here To Listen"}</a>}
    </section >
  )
}

export default Hero