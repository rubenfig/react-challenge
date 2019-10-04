import {connect} from 'react-redux'
import MainComponent from './MainComponent'
import {getAuthorPublications, getAuthors} from '../../store/actions/author'
import {getPublications, searchByTitle} from '../../store/actions/publication'

const mapDispatchToProps = dispatch => {
  return {
    getAuthors: () => dispatch(getAuthors()),
    getAuthorPublications: (authorId) => dispatch(getAuthorPublications(authorId)),
    getPublications: () => dispatch(getPublications()),
    searchByTitle: (searchText) => dispatch(searchByTitle(searchText))
  }
}

const mapStateToProps = ({author, publication}) => {
  return {
    authors: author.authors,
    authorPublications: author.authorPublications,
    searchedPublications: publication.searchedPublications,
    publications: publication.publications,
    loading: author.loading || publication.loading,
    error: author.error || publication.error
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent)
