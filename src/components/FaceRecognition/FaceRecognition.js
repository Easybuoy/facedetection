import React, {Component} from 'react';

class FaceRecognition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            div: '',
        }
    }

    componentDidMount(){
        var objTo = document.getElementById('divr');
        this.setState({div: objTo});
      }

    render(){
           const {celebrityImageResponse} = this.props;
        if(celebrityImageResponse){
            // console.log(celebrityImageResponse)
                // console.log(this.state)
            let divrender = '';
            // console.log(React.Children)
            celebrityImageResponse.forEach(response => {
                let name = response.name.toUpperCase();
                divrender += `       
                    <div class="fl w-50 w-25-m w-20-l pa2 bg-white ba b--black-10 br3 ma4">
                <a className="db link dim tc">
                  <img src="http://is2.mzstatic.com/image/thumb/Music18/v4/5a/42/0f/5a420f73-6490-abc9-bdcc-3001d5c4e9fc/source/400x40000bb.png" alt="Coloring Book - Album cover" class="w-100 db outline black-10"/>
                  <dl className="mt2 f6  mb2">
                    <dt class="clip">Name</dt>
                    <dd class="ml0 black truncate w-100 f4">${name}</dd>
                    <dt class="clip">Perentage</dt>
                    <dd class="ml0 gray truncate w-100 f5">${response.value}</dd>
                  </dl>
                </a>
              </div> `
            });
            
            // this.setState({div: this.state.div.appendChild(divrender)})
            var facerecdiv = this.state.div;
            var div = document.createElement('div'); // is a node
            div.className = "cf pa2";
            div.innerHTML = divrender;
            // var m = '<p> as </p>'
            facerecdiv.appendChild(div);
            return (
            <div className="fl w-100">
                <article>
                <div className="" id="divr">
                    {/* {divrender} */}
                </div>
                </article>
            </div>
            );
        }else{
            
            return (
                <div className="fl w-100">
                <article>
                <div className="" id="divr">
                    {/* {divrender} */}
                </div>
                </article>
            </div>
            );
        }
    }
    
    
}


export default FaceRecognition;