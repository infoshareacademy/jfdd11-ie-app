import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { white } from 'ansi-colors';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 900
    // fontWeight: theme.typography.fontWeightRegular,
  },
  field: {
    background: '#f8c512',
  },
  text: {
    fontSize: theme.typography.pxToRem(16),
    color: "#323232",
  },
  fieldYellow:{
    background: 'linear-gradient(180deg, #f8c512 30%, #edb60d 90%)'
  },

});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.field}>
          <Typography className={classes.heading}>Do czego służy aplikacja moveIt?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.fieldYellow}>
          <Typography className={classes.text}>
            Aplikacja moveIt ma na celu pómoc Ci przy trudach przeprowadzki. Z moveIt wybierzesz najbardziej rzetelnego przewoźnika za najniższą cenę. 
            Jako zalogowany użytkownik możesz tworzyć listy przeprowadzkowe, które trafiają na giełdę ofert. Decydujesz co chcesz przewieźć i wybierasz najbardziej odpowiedni dla Ciebie termin. Twoje oferty będą wyceniane przez przewoźników, a Ty możesz wybrać najlepszą dla Ciebie propozycję.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.field}>
          <Typography className={classes.heading}>Chcę się przeprowadzić. Od czego zacząć?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.fieldYellow}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
          <Typography className={classes.heading}>FAQ Question 3 in progress...</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel className={classes.fieldYellow}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>FAQ Question 4</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.fieldYellow}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>FAQ Question 5</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.fieldYellow}>
          <Typography >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);