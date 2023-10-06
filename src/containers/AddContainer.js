import { connect } from 'react-redux'
import AddComponent from '../components/AddComponent'
import { addListing } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addListing: (listing) => dispatch(addListing(listing))
    }
}

export default connect(null, mapDispatchToProps)(AddComponent)