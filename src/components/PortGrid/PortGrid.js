import React, { Component } from "react";
import { Grid, Item, Header } from "semantic-ui-react";
import Lightbox from "react-images";
import "./PortGrid.css";
import CoookieCollector from "../Images/cookieCollector";
import TriviaGame from "../Images/physicImage";
import NewYorkTimesSearch from "../Images/newYorkTimesSearch";
import AdminACPR from "../Images/adminAcpr";
import TimeCard from "../Images/TimeCard";
import GiphyRequester from "../Images/GiphyRequester.js";

let Images = [];
class PortGrid extends Component {
  state = {
    WindowSize: 0
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }
  handleResize = () => {
    this.setState({ WindowSize: window.innerWidth });
  };
  openLightbox = e => {
    //could grab which section it is to go to that
    //picture instead of clearing the array everytime
    Images = [];
    e.preventDefault();
    Images.push({ src: e.target.src });
    this.setState({
      currentImage: 0,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    const { currentImage } = this.state;
    this.setState({
      currentImage: currentImage + 1
    });
  };
  render() {
    const { WindowSize } = this.state;
    let menuClass;
    if (WindowSize <= 780) {
      menuClass = false;
    } else {
      menuClass = true;
    }
    return (
      <div className={menuClass ? "sizing" : ""}>
        <Header dividing textAlign="center" style={{ margin: 0, paddingTop: 25 }}>
          My Portfolio/Projects
        </Header>
        <Grid centered style={{ marginTop: 20, margin: 0 }} divided="vertically">
          <Grid.Row>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <TriviaGame />
            </Grid.Column>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">Project Title</Item.Header>
                <Item.Description>
                  Ex reprehenderit nulla sunt adipisicing ea ea. In fugiat nostrud elit
                  reprehenderit Lorem laboris laboris dolor. Nisi consequat proident officia
                  voluptate in ut consequat adipisicing ad labore. Voluptate est sunt cupidatat
                  cupidatat eiusmod ad. Consectetur ipsum exercitation ipsum id incididunt tempor
                  quis mollit. Quis excepteur ea labore incididunt culpa. Quis officia eiusmod ad ad
                  sint cupidatat pariatur aliquip incididunt culpa laboris ullamco tempor laboris.
                </Item.Description>
                <Item.Extra as="a" href="#">
                  Demo: Link
                </Item.Extra>
                <br />
                <Item.Extra as="a" href="#" target="_blank">
                  Repo: alj
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">Cookie Collector</Item.Header>
                <Item.Description>
                  You will be given a random number at the start of the game. There are four cookies
                  below. By clicking on a cookie, you will add a specific amount of points to your
                  total score. You win the game by matching your total score to the random number,
                  you lose the game if your total score goes above the random number. The value of
                  each cookie is hidden form you until you click on it. Each time the game starts,
                  the game will change the values of each cookie.
                </Item.Description>
                <Item.Extra as="a" href="https://midlu.github.io/Unit-4-Game/" target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra as="a" href="https://github.com/Midlu/Unit-4-Game" target="_blank">
                  Github Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <CoookieCollector />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <NewYorkTimesSearch />
            </Grid.Column>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">New York Times Search</Item.Header>
                <Item.Description>Add Description</Item.Description>
                <Item.Extra
                  as="a"
                  href="https://midlu.github.io/NewYorkTimes_Search/"
                  target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra
                  as="a"
                  href="https://github.com/Midlu/NewYorkTimes_Search"
                  target="_blank">
                  Github Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">Giphy Requester</Item.Header>
                <Item.Description>Add Description</Item.Description>
                <Item.Extra as="a" href="https://midlu.github.io/GiphyRequester/" target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra as="a" href="https://github.com/Midlu/GiphyRequester" target="_blank">
                  Github Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <GiphyRequester />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <TimeCard />
            </Grid.Column>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">Time Card</Item.Header>
                <Item.Description>Add Description/Broken app...</Item.Description>
                <Item.Extra as="a" href="https://midlu.github.io/TimeCard" target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra as="a" href="https://github.com/Midlu/TimeCard" target="_blank">
                  Github Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="10" tablet="14">
              <Item.Content>
                <Item.Header as="h2">Admin Apex Cell Phone Repair</Item.Header>
                <Item.Description>
                  An Adminastration Page to manage the phones you have to repair and/or repaired.
                </Item.Description>
                <Item.Extra
                  as="a"
                  href="https://laughing-spence-6eaa46.netlify.com/"
                  target="_blank">
                  Demo
                </Item.Extra>
                <br />
                <Item.Extra as="a" href="https://github.com/Midlu/AdminACPRReact" target="_blank">
                  Backend Repo
                </Item.Extra>
                <br />
                <Item.Extra
                  as="a"
                  href="https://github.com/Midlu/AdminACPRReactFrontend"
                  target="_blank">
                  Frontend Repo
                </Item.Extra>
              </Item.Content>
            </Grid.Column>
            <Grid.Column computer="4" tablet="14" onClick={e => this.openLightbox(e)}>
              <AdminACPR />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row />
        </Grid>
        <Lightbox
          backdropClosesModal={true}
          images={Images}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

export default PortGrid;
