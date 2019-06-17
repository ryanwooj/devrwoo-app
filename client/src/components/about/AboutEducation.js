import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    overflowX: 'auto'
  },
  table: {
    width: '100%'
  },
  hideSm: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}));

const AboutEducation = () => {
  const classes = useStyles();
  return (
    <Box>
      <Paper className={classes.root}>
        <Typography variant='h4'>Education Credentials</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>School</TableCell>
              <TableCell>Degree</TableCell>
              <TableCell>Field of Study</TableCell>
              <TableCell>Years</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Udacity (Grow with Google)</TableCell>
              <TableCell>Nanodegree</TableCell>
              <TableCell>Full Stack Web Development</TableCell>
              <TableCell>2017/09/04 -2019/01/13</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>University of California, Berkeley</TableCell>
              <TableCell>Bachelor's</TableCell>
              <TableCell>Political / Computer Science</TableCell>

              <TableCell>2012/09/08 - 2016/05/26</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default AboutEducation;
