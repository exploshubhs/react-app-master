import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
import Child from './loadChildData';
export default class loadData extends Component
{
  render()
  {
        return(
            <table>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Technology
                    </th>
                    <th>
                        Sub Property
                    </th>
                </tr>
                <tr>
                    <td>
                        {this.props.name}
                    </td>
                    <td>
                        {this.props.technology}
                    </td>
                    <td>
                        <Child name="web storm" level="easy" imagesrc="http://placekitten.com/g/64/64" imageURL="data:image/jpeg;base64,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"/>
                    </td>
                </tr>
            </table>
        )
  }
}
