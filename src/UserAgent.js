import React from 'react'
import { connect } from 'react-redux'
import actions from './actions'

export class UserAgent extends React.Component {
    componentDidMount(){
      this.props.loadData()  
    }
    render(){
        if(this.props.isFetching){
            return <span><strong>Loading...</strong></span>
        } 
        if (this.props.error) {
            return <span>Error</span>
        }
        return <span>User-agent: {this.props.data['user-agent']} </span>
    }
}

const mapStateToprops = (state) => {
    return {
        isFetching: state.ua.isFetching,
        data: state.ua.data,
        error: state.ua.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(actions.loadUA())
    }
} 

export default connect(mapStateToprops, mapDispatchToProps)(UserAgent)