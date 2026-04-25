import Lottie from 'lottie-web/build/player/lottie_light';
import React, { useContext, useEffect, useState } from 'react';
import PaperClip from '../assets/images/paperclip.svg';
import LockIcon from '../assets/images/lock.svg';
import { Header, Footer } from '../components';
import Layout from '../containers/Layout';
import Footer2Image from '../assets/images/footer-2.svg';
import { useNavigate } from 'react-router-dom';
import OwlClip from '../assets/animations/owl.json';
import { AuthContext } from '../context';

export default function Authentication() {
  const { unlock } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (busy || !password) return;
    setBusy(true);
    try {
      await unlock(password);
      navigate('/works');
    } catch {
      setError(true);
      setTimeout(() => setError(false), 250);
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    const owlInstance = Lottie.loadAnimation({
      container: document.querySelector('#owlClip'),
      animationData: OwlClip,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
    return () => {
      owlInstance.destroy();
    };
  }, []);

  return (
    <Layout className="bg-default flex flex-col justify-between items-center " border={false}>
      <Header />

      <div className="auth-container">
        <img src={PaperClip} alt="PaperClip" className="paper-clip" />
        <div id="owlClip" className="owl-clip"></div>

        <div className="auth-box">
          <h1 className="title">
            <img src={LockIcon} alt="Lock" />
            <span>what's the password?</span>
          </h1>

          <form onSubmit={onSubmit}>
            <div
              className={`lg:rounded-md rounded-md flex w-full xxl:mt-[2vw] xl:mt-[2vw] mt-[2vw] overflow-hidden font-light ${
                error && 'shake'
              }`}
            >
              <input
                placeholder="say the magic word..."
                className="password-input "
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
              />
              <button type="submit" disabled={busy} className="btn btn-primary btn-unlock">
                {busy ? 'unlocking...' : 'unlock portfolio'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer
        bg={Footer2Image}
        left={{ name: 'go back', onClick: () => navigate('/') }}
        right={{ name: 'just wanna say hi', onClick: () => navigate('/say-hi') }}
      />
    </Layout>
  );
}
