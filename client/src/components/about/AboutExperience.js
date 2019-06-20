import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 300
  }
}));

const AboutExperience = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container direction='column' justify='center'>
        <Typography variant='h4'>Experience Credentials</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <Hidden smDown>
                <TableCell className='hide-sm'>Title</TableCell>
                <TableCell className='hide-sm'>Years</TableCell>
              </Hidden>
              <TableCell className='hide-sm'>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>iKrema Inc.</TableCell>
              <Hidden smDown>
                <TableCell className='hide-sm'>
                  Front-End Web Developer
                </TableCell>
                <TableCell>2019/02/16 - 2018/01/13</TableCell>
              </Hidden>
              <TableCell>
                <Typography>
                  Develop, and implement websites in HTML, JavaScript, CSS, and
                  React utilizing Bootstrap framework.
                </Typography>
                <Typography>
                  Frontend development and design of image slideshows, toggling
                  navigation tabs, fill able forms and pop-ups using JavaScript
                  and jquery.
                </Typography>
                <Typography>
                  Build reusable shared components across the application.
                </Typography>
                <Typography>
                  Interact with customer to collect web page requirements for
                  changes, additions or daily updates.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Google Play</TableCell>
              <Hidden smDown>
                <TableCell className='hide-sm'>
                  Data Quality Specialist
                </TableCell>
                <TableCell>2016/05/25 -2017/09/15</TableCell>
              </Hidden>
              <TableCell>
                <Typography>
                  Evaluated large datasets of music contents for quality and
                  accuracy with content management system.
                </Typography>
                <Typography>
                  Determined the root cause of data quality errors and
                  recommended long-term solutions.
                </Typography>
                <Typography>
                  Collaborated with overseas business partners in Korea to
                  arrange B2B shipments of contents and the software development
                  team to identify and convert business goals into data
                  requirements.
                </Typography>
                <Typography>
                  Proposed technical maintenance and development of bug fixes
                  for existing web applications.
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Paper>
  );
};

export default AboutExperience;
