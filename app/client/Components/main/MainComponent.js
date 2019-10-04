import React, {useEffect} from 'react'
import {
  CssBaseline,
  FormControl,
  InputAdornment,
  makeStyles,
  TextField,
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'
import Loading from '../common/Loading'
import AuthorsDrawer from './AuthorsDrawer'
import PublicationList from './PublicationList'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    }
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '95%',
    [theme.breakpoints.up('sm')]: {
      minWidth: 200,
    }
  },
}))

function MainComponent(props) {
  const { authors, publications, authorPublications, searchedPublications,
    error, loading, getAuthors, getPublications, searchByTitle,
    getAuthorPublications } = props
  const classes = useStyles()
  const [searchText, setSearchText] = React.useState(null)
  const [authorId, setAuthorId] = React.useState(null)
  const [form, setForm] = React.useState({
    search: ''
  })

  /**
   * Initial load
   */
  useEffect(() => {
    getAuthors()
    getPublications()
  }, [])

  useEffect(() => {
    if (error) alert(error)
  }, [error])

  useEffect(() => {
    searchText && searchText.length > 0 && searchByTitle(searchText)
  }, [searchText])

  useEffect(() => {
    authorId && getAuthorPublications(authorId)
  }, [authorId])

  const handleChange = name => event => {
    setForm({ ...form, [name]: event.target.value })
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      setSearchText(form.search)
    }
  }

  function onAuthorSelect(author) {
    setAuthorId(author)
  }

  /**
   * Selects the list to show
   */
  const publicationsToShow = () => {
    if (authorId) {
      return authorPublications
    }
    if (searchText && searchText.length > 0) {
      return searchedPublications
    }
    return publications
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AuthorsDrawer authors={authors} onAuthorSelect={onAuthorSelect} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form noValidate autoComplete="off">
          <FormControl className={classes.formControl}>
            <TextField
              id="title"
              placeholder="Search by title..."
              value={form.search}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              helperText="Press enter to search"
              onChange={handleChange('search')}
              onKeyDown={handleKeyPress}
              margin="normal"
            />
          </FormControl>
        </form>
        {
          loading ?
            <Loading/> :
            <PublicationList
              publications={publicationsToShow()}
              authors={authors}
            />
        }
      </main>
    </div>
  )
}

export default MainComponent
