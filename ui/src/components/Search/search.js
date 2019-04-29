import React, {Component} from 'react';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = {
    button: {
        margin: '12px',
    },
    input: {
        display: 'none',
    },
    inputInput: {
            paddingTop: '2px',
            paddingRight: '2px',
            paddingBottom: '2px',
            paddingLeft: '30px',
            transition: 'width 2s',
            width: '80%',
                /* [theme.breakpoints.up('sm')]: {
                    width: 120,
                    '&:focus': {
                    width: 200,
                    },
                }, */
    },
    search: {
        display: 'flex',
        borderRadius: '2px',
        backgroundColor: '#e5e5e5e5',
            '&:hover': {
                backgroundColor: '#c0c0c0',
            },
    },
    searchIcon: {
        marginTop: '6px',
        marginLeft: '5%',
        pointerEvents: 'none',
        color: '#999999',
    },
    divider: {
        margin: 0,
    }

};

class Search extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.search}>
                    <InputBase
                        placeholder="Search…"
                        //value={ this.props.currentTransaction }
                        //onChange={(e) => this.props.updateCurrentTransaction("currentTransaction", e.target.value) }
                        className={classes.inputInput}/>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                </div>
                <div>
                    <Button variant="contained" color="primary" size="small" className={classes.button}>
                        GO
                    </Button>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id=""
                        multiple
                        type="file"/>
                </div>
                <Divider variant="middle" className={classes.divider} />
            </div>
        )
    }
}

export default withStyles(styles)(Search);
