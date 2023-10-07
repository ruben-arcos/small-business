import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import { logOutUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
      taquerias: state.taquerias,
      username: state.username,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: () => dispatch(logOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
