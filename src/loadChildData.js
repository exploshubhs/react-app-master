import  React,{Component} from 'react';

export default class loadChildData extends Component
    {
        constructor(props)
        {
            super(props);
            this.state={date:new Date().toDateString()};
            this.state={bigImage:''}
            // This binding is necessary to make `this` work in the callback
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick(event, imageURL) {
            this.setState({'bigImage':imageURL});
        }
        componentDidMount()
        {
            this.setState({mounted:'yes',mountedAt:new Date().toDateString()});
        }
        componentWillUnmount()
        {
            this.setState({unmounted:'yes',unmountedAt:new Date().toDateString()});
        }
             render()
             {
                 return (<div>
                         <p>Did Component Mount? {this.state.mounted} </p>
                         <p>It Mounted At  {this.state.mountedAt} </p>
                         <img src={this.props.imagesrc} alt="image"/>
                         <p>Hello,{this.props.name}</p>
                       <p>You are {this.props.level} to use </p>
                         <p> Comment On {this.state.date}</p>
                    {/*     <p>Did Component Unmount? {this.state.unmounted} </p>
                         <p>It Unmounted At  {this.state.unmountedAt} </p>*/}
                         <p>Click Me to Get Bigger Image <img src={this.state.bigImage} onClick={(event)=>this.handleClick(event,this.props.imageURL)} /></p>
                     </div>
                 )
             }


    }

