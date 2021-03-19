import { connect } from 'react-redux'
import Cards from './cards'

const mapStateToProps = (state) => ({
    products: state.products,
    counts: state.counts
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
