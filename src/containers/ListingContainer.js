import { connect } from 'react-redux'
import ListingComponent from "../components/ListingComponent"
import { removeTaqueria } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        taquerias: state.taquerias,
        username: state.username,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      removeTaqueria: (index) => dispatch(removeTaqueria(index)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ListingComponent)
