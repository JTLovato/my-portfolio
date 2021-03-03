import React from 'react';

export default function About() {

    var one_day = 1000 * 60 * 60 * 24 
    var present_date = new Date(); 
    var creation = new Date(1986, 5, 19) 
    var Result = Math.round( present_date.getTime() - creation.getTime()) / (one_day); 
    var Final_Result = Result.toFixed(0); 
    let birthday = (Final_Result); 
    
    return (
        <div className="about-page">
            <div className="header">
                <h1>about me?</h1>
            </div>
            <div className="about-container">
                    <img
                        className="about-pic"
                        src="../img/me.png"
                    />
                <div className="about-info-container">
                    <div className="about-info">
                        <h1>I Never Know What To Put Here...</h1>
                        <p>{birthday} days ago, <span>John T. Lovato</span> was created. This had made many people very angry and has been widely regarded as a bad move. In the time since, John has spent his time studying <span>designs</span>, ranging from television ads and internet social medias, to print splashes and billboards, refining what looks good. Recently, he graduated from Treehouse Online Bootcamp for <span>front-end web development</span>. Once he has a focus on his project he doesn't let up until it's complete and looks amazing, utilizing an almost honey badger-esque mindframe.</p>
                        <p><q>Passion is Energy</q></p>
                        <p>John has lived in several parts of the US and currently calls <span>Denver</span> his home. When he's not on VCS or Photoshop, John likes to play video games, watches and plays hockey, roots for the Avalanche, and plays with his <span>two dogs</span>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
