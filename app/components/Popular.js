var React= require ('react');
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
            selectedLanguage :name
        }
        });
    }

    render(){
     
        var languages=['All','JavaScript','Ruby','CSS','Python'];
    return(
        <ul className='languages'>
            {
                languages.map(function(name)
                {
                    return(
                        <li
                        style={
                            name===this.state.selectedLanguage ? {color:'#FF0000'}:null
                        }
                        key={name}
                        onClick={this.updateLanguage.bind(null,name)}>
                            {name}
                            </li>
                    )

                    
                },this)
            }
        </ul>
    
    )
 }
}
module.exports=Popular;