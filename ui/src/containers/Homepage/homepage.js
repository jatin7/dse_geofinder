import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Reactmap from '../../components/Map/reactmap'
import Navtabs from '../../components/Navtabs/navtabs';
import Divider from '@material-ui/core/Divider';
import secrets from '../../secrets/secrets';
import style from '../../style/style.css';

import {getGeoNameSuggest} from '../../actions/actions'


const styles = {
    container: {
        padding: '.5%',
        position: 'relative',
        minHeight: '90vh',
        backgroundColor: '#f8f8f8',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
    },
    searchPaper: {
        padding: '50px 10px 0 10px',
        marginBottom: '2%',
        width: '29%',
        minHeight: '965px',
    },
    mapPaper: {
        display: 'flex',
        position: 'absolute',
        top: '8px',
        marginBottom: '1%',
        marginLeft: '30.5%',
        width: '70%',
        minHeight: '815px',
    },
    cqlPaper: {
        display: 'flex',
        position: 'absolute',
        top: '838px',
        marginLeft: '30.5%',
        width: '70%',
        minHeight: '188px',
        maxHeight: '188px',
    },
    cqlContainer: {
        width: '100%',
        maxHeight: '170px',
        margin:  '0 30px 0 20px',
        padding: '10px',
        overflow: 'scroll',
        
    },
    cqlTitle: {
        paddingBottom: '10px',
    },
    cqlSection: {
        display: 'flex',
        margin: '0 auto',
        textAlign: 'left',
    },
    queryText: {
        margin: '10px'
    },
}


class HomePage extends PureComponent {
    
    render() {
        const { classes } = this.props;
        const { query } = (this.props.locDataSuggest || {});
        
        return (
        <div className={classes.container}>
        <Grid container>
            <Paper className={classes.searchPaper}>
                <Navtabs />
            </Paper>

            <Paper className={classes.mapPaper} elevation={1}>
                <Reactmap />
            </Paper>

            <Grid item xs={12}>
                <Paper className={classes.cqlPaper} elevation={1}>
                    <div className={classes.cqlContainer}>
                        <Typography variant="h5" className={classes.cqlTitle}>Queries</Typography>
                        <Divider varient='middle' />
                        <div className={classes.cqlSection}>
                                <h5 className={classes.queryText}>SUGGEST CQL:<span style={{display: "flex", color: "gray", fontStyle: "italic"}}>{query}</span>
                                </h5>
                        </div>
                        <Divider varient='middle' />
                        <div className={classes.cqlSection}>


                        </div>
                    </div>
                </Paper>
            </Grid>
        </Grid>
        </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        locDataSuggest: state.location.locDataSuggest
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

const HomepageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(HomePage))

export default HomepageContainer;
