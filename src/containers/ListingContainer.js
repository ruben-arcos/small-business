import { connect } from 'react-redux'
import ListingComponent from "../components/ListingComponent"

const mapStateToProps = (state) => {
    return {
        taquerias: state.taquerias
    }
}

export default connect(mapStateToProps)(ListingComponent)
