import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { white } from 'ansi-colors';
import ScrollTop from 'react-scrolltop-button';

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
  main:{
    textAlign: "center",
    fontSize: theme.typography.pxToRem(40),
    fontWeight: 900,
    padding: "50px 0 50px 0"
  }

});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <>
    <ScrollTop
  text='to top'
  distance={100}
  breakpoint={768}
  style={{ backgroundColor: '#f8c512', zIndex: 9999 }}
  className='scroll-your-role'
  speed={10}
  target={0}
/>
    <div className={classes.main}>
Najczęściej zadawane pytania
    </div>
    <div className={classes.root}>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.field}>
          <Typography className={classes.heading}>Do czego służy aplikacja moveIt?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.fieldYellow}>
          <Typography className={classes.text}>
            Aplikacja <b>moveIt</b> ma na celu pómoc Ci przy trudach <b>przeprowadzki</b>. Z moveIt wybierzesz najbardziej rzetelnego przewoźnika za <b>najniższą cenę</b>. 
            Jako zalogowany użytkownik możesz tworzyć listy przeprowadzkowe, które trafiają na giełdę ofert. Decydujesz co chcesz przewieźć i wybierasz najbardziej <b>odpowiedni</b> dla Ciebie <b>termin</b>. Twoje <b>oferty będą wyceniane</b> przez przewoźników, a Ty możesz wybrać <b>najlepszą</b> dla Ciebie propozycję.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.field}>
          <Typography className={classes.heading}>Chcę się przeprowadzić. Od czego zacząć?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.fieldYellow}>
          <Typography className={classes.text}>
            Wystarczy, że <b>założysz konto</b> i już możesz stworzyć swoją pierwszą <b>listę przeprowadzkową</b>. Opisz meble które chcesz przewieźć. Podaj ich <b>wymiary</b> oraz <b>destynację</b> przeprowadzki. Postaraj się dodać <b>jak najwięcej szczegółów</b> żeby upewnić się, że Twoja przeprowadzka odbędzie się szybko i sprawnie. 
            Teraz wystarczy poczekać na <b>propozycje od dostawców</b>. Szczegóły możesz omówić po zaakceptowaniu oferty przewoźnika. Gratulacje! Twoja przeprowadzka jest zaplanowana.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.field} >
          <Typography className={classes.heading}>FAQ Question 3 in progress...</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.fieldYellow}>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.field}>
          <Typography className={classes.heading}>FAQ Question 4</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.fieldYellow}>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.field}>
          <Typography className={classes.heading}>FAQ Question 5</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.fieldYellow}>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    </>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);