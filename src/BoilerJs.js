import React,{Component} from 'react';

export default class boiler extends  Component
{
    constructor(props)
    {
      super(props);
      this.state={temperature:0};
    }
    render()
    {
        return( this.props.temperature && this.props.temperature>100?<p>Pot Will Boil</p>:<p>Pot Will Not Boil</p>)


    }
}