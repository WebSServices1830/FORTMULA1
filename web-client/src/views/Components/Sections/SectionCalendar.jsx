import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// calendar
import Calendar from 'react-calendar';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

class SectionBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }

  onChange(evt) {
    console.log(evt);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Calendario</h2>
          </div>

          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Calendar
                onChange={this.onChange}
                value={new Date()}
              />
            </GridItem>
          </GridContainer>
          <div id="buttons">
            <div className={classes.title}>
              <h3>
                Buttons
                <br />
                <small>Pick your style</small>
              </h3>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionBasics);
