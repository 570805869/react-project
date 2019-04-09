import React from 'react';
require('./css/mystyle.css')

class Page1 extends React.Component{
    render(){
        return(
            <div>
                <div id="mydiv">This is Page1!</div>
            </div>
        );
    }
}

export default Page1;