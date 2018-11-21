import React, { Component } from 'react';
import './App.css';

import SpeakersUtils from './utils/speakers-utils'
import { SPEAKERS } from './config/speakers'


export default class Speakers extends Component {
  _fetchSpeakers() {
    return SpeakersUtils.formatSpeakersData(SPEAKERS)
  }

  _renderSpeaker(speaker, i) {
    return (
      <div id={i}>
        <div>Name: {speaker.name}</div>
        <img src={speaker.thumb} alt={speaker.name} />
      </div>
    )
  }

  render() {
    return (
      <header className="App-page--speakers">
        {this._fetchSpeakers().map(this._renderSpeaker)}
      </header>
    );
  }
}
