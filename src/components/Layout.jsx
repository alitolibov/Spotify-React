import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    const none = (block) => {
        block.style.display = "none"
    }
    return ( 
        <div className="layout">
            <div className="left">
            <div className="left-top">
                <nav>
                    <Link className="img-block">
                        <div className="img home"></div>
                        <p className="text active">Home</p>
                    </Link>
                    <Link className="img-block">
                        <div className="img search"></div>
                        <p className="text">Search</p>
                    </Link>
                    <Link className="img-block">
                        <div className="img books"></div>
                        <p className="text">Your Library</p>
                    </Link>
                </nav>
            </div>
            <div className="left-center">
                <nav>
                <Link className="img-block">
                        <div className="img create"></div>
                        <p className="text">Create Playlist</p>
                    </Link>
                    <Link className="img-block">
                        <div className="img liked"></div>
                        <p className="text active">Liked Songs</p>
                    </Link>
                </nav>
            </div>
            <div className="left-bottom">
                <nav>
                    <div className="gap">
                    <Link className='grey'>Chill Mix</Link>
                    <Link className='grey'>Insta Hits</Link>
                    <Link className='grey'>Your Top Songs 2021</Link>
                    <Link className='grey'>Mellow Songs</Link>
                    <Link className='grey'>Anime Lofi & Chillhop Music</Link>
                    <Link className='grey'>BG Afro “Select” Vibes</Link>
                    <Link className='grey'>Happy Hits!</Link>
                    <Link className='grey'>Deep Focus</Link>
                    <Link className='grey'>Instrumental Study</Link>
                    <Link className='grey'>OST Compilations</Link>
                    <Link className='grey'>Nostalgia for old souled mill...</Link>
                    </div>
                </nav>
            </div>
        </div>
        <header>
               <div className="header-left">
                    <Link><div className="back"></div></Link>
                    <Link><div className="next"></div></Link>
               </div>
               <div className="header-right">
                </div>
               </header>
               <Outlet/>
               <div className="right">
            <div className="right-top">
                <p className="text1">Friend Activity</p>
                <div className="nav-block">
                    <div className="chel"></div>
                    <div className="none" onClick={(e) => none(e.target.parentNode.parentNode.parentNode)}></div>
                </div>
            </div>
            <p className="info">Let friends and followers on Spotify see what you’re listening to.  </p>
            <div className="contacts">
                <div className="contact animate-pulse"></div>
                <div className="contact animate-pulse"></div>
                <div className="contact animate-pulse"></div>
            </div>
            <p className="info">Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
            <button>SETTINGS</button>
        </div>
        <footer>
            <div className="footer-left">
                <p className="musictitle">Play It Safe</p>
                <p className="musicartist">Julia Wolf</p>
            </div>
            <div className="footer-center">
                <div className="footer-center-top">
                    <div className="shuffle"></div>
                    <div className="center-back"></div>
                    <div className="pause"></div>
                    <div className="center-next"></div>
                    <div className="return"></div>
                    <audio src=""></audio>
                </div>
                <div className="footer-center-bottom"></div>
            </div>
            <div className="footer-right">
                <div className="xs"></div>
                <div className="kolonka"></div>
                <div className="volume"></div>
                <div className="crossbar"></div>
                <div className="big"></div>
            </div>
        </footer>
        </div>
     );
}
 
export default Layout;