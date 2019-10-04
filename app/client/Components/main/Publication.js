import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Typography
} from '@material-ui/core'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  content: {
    whiteSpace: "pre-wrap"
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: "center"
  },
  divider: {
    marginTop: 20,
    marginBottom: 20
  }
}))


function Publication (props) {
  const {publication} = props
  const classes = useStyles()

  return (
    <Card>
      <CardHeader className={classes.header} title={publication.title}>
      </CardHeader>
      <CardContent className={classes.content}>
          {publication.body}
        <Divider className={classes.divider} />
        <Typography paragraph align="right">
          Written by: {publication.author}
        </Typography>
        <Typography paragraph align="right">
          {moment(publication.date).format("YYYY-MM-DD HH:mm")}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Publication
