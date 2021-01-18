import React from 'react';
import './TodoList.css';
import { Form } from 'react-bootstrap';


class TodoList extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
    id:'',
    itemName: '',
    completed: false,
    };

    }

    render() {
        

        return (
           
          <div className="main-list">
              <Form>
                 <Form.Control 
                    type="text" 
                    placeholder="What's Next?"
                    value={this.state.itemName} onChange/>
              </Form>
          </div>
       
            
        )
       
    }
}

export default TodoList;
