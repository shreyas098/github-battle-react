var React= require ('react');
var PropTypes=require('prop-types');
function SelectLanguage(props)
{var languages=['All','JavaScript','Ruby','CSS','Python'];
    return(
<ul className='languages'>
            {
                languages.map(function(name)
                {
                    return(
                        <li
                        style={
                            name===props.selectedLanguage ? {color:'#FF0000'}:null
                        }
                        key={name}
                        onClick={props.onSelect.bind(null,name)}>
                            {name}
                            </li>
                    )

                    
                })
            }
        </ul>
    )
}
SelectLanguage.PropTypes={
    SelectLanguage:PropTypes.string.isRequired,
    updateLanguage:PropTypes.func.isRequired,
}
class Popular  extends React.Component{

    constructor(props){
      super(props);
       this.state={
           selectedLanguage:'All'
       };
       this.updateLanguage=this.updateLanguage.bind(this);
    }
    updateLanguage(name){
        this.setState(function(){
            return{
            selectedLanguage:name
        }
        });
    }

    render(){
     
        var languages=['All','JavaScript','Ruby','CSS','Python'];
    return(
        <SelectLanguage
        selectedLanguage={this.state.selectedLanguage}
        onSelect={this.updateLanguage}/>
    )
 }
}
module.exports=Popular;