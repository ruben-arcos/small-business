import { connect } from 'react-redux'
import AddComponent from '../components/AddCar'
import { addComponent } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addComponent: (addComponent) => dispatch(addCar(AddComponent))
    }
}

export default connect(null, mapDispatchToProps)(AddCar)