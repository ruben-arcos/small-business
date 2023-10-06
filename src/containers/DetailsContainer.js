import { connect } from 'react-redux'
import DetailsComponent from "../components/DetailsComponent"

const mapStateToProps = (state) => {
    return {
        taquerias: state.taquerias
    }
}

export default connect(mapStateToProps)(DetailsComponent)
