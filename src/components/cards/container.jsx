import { connect } from "react-redux";
import Cards from "./cards";

const mapStateToProps = (state) => ({
    products: state.products,
    cards: state.cards,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
