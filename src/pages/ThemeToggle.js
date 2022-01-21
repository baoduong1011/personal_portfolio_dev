import React, { useEffect } from 'react';

export default function ThemeToggle() {

    // useEffect(() => {
    //     let themeColor = document.querySelectorAll('.theme-toggler span');
    //     themeColor.forEach(color =>color.addEventListener('click',() => {
    //         let background = color.style.background;
    //         document.querySelector('.body').style.background = background;
    //     }))
    // },[])

    

    let onClick = () => {
        let themeColor = document.querySelectorAll('.theme-toggler span');
        
        themeColor.forEach(color =>color.addEventListener('click',() => {
            let background = color.style.backgroundImage;
            document.querySelector('.body').style.background = background;
        }))   
    }


  return <div className='theme-toggler' >
        <span onClick={onClick} style={{backgroundImage: `linear-gradient(deeppink,purple)`}} ></span>
        <span onClick={onClick} style={{backgroundImage: `linear-gradient(lightgreen,crimson)`}} ></span>
        <span style={{backgroundImage: `linear-gradient(coral,blueviolet)`}} ></span>
        <span style={{backgroundImage: `linear-gradient(blueviolet,deeppink)`}} ></span>
        <span style={{backgroundImage: `linear-gradient(#999,#111)`}} ></span>
  </div>;
}
