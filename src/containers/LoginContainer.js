import { connect } from 'react-redux'
import LoginComponent from '../components/LoginComponent'
import { logInUser } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        logInUser: (username) => dispatch(logInUser(username))
    }
}

export default connect(null, mapDispatchToProps)(LoginComponent)
