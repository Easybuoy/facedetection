import React from 'react';
const FaceRecognition = ({celebrityImageResponse}) => {
    if(celebrityImageResponse){
        // console.log(celebrityImageResponse)
        let divrender = '';
        celebrityImageResponse.forEach(response => {
        //     divrender += `
        //    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        //    <div className="tc">
        //      {/* <img src="http://tachyons.io/img/avatar_1.jpg" alt="" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" /> */}
        //      <h1 className="f3 mb2">${response.name}</h1>
        //      <h2 className="f5 fw4 gray mt0">${response.value}</h2>
        //    </div>
        //  </article> `;
        //  console.log(divrender);
        });

        return (
            <div className="fl w-100">
            <article>
  <div className="cf pa2">
    <div className="fl w-50 w-25-m w-20-l pa2 bg-white ba b--black-10 br3 pa1 ma1">
      <a className="db link dim tc">
        <img src="http://is2.mzstatic.com/image/thumb/Music18/v4/5a/42/0f/5a420f73-6490-abc9-bdcc-3001d5c4e9fc/source/400x40000bb.png" alt="Coloring Book - Album cover" className="w-100 db outline black-10"/>
        <dl className="mt2 f6  mb2">
          <dt className="clip">Name</dt>
          <dd className="ml0 blue truncate w-100 f4">Coloring Book</dd>
          <dt className="clip">Perentage</dt>
          <dd className="ml0 gray truncate w-100 f5">Chance the Rapper</dd>
        </dl>
      </a>
    </div>
  </div>
</article>

            </div>
        );
    }else{
        return (
            <div></div>
        );
    }
    
}


export default FaceRecognition;