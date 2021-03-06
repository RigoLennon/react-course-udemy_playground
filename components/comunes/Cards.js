import React from 'react';

class Cards extends React.Component{
    render(){
        return(
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    
                </div>
                <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        );
    }
}

export default Cards;



/*
export default () =>(
    <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="images/office.jpg">
            </div>
            <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
            </div>
            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
)
/*
render(){
    return (
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="images/office.jpg">
            </div>
            <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
            </div>
            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    );
}
*/