// @flow

import path from 'path'
import { List, Map } from 'immutable'


export default class SpeakersUtils {
  static formatSpeakersData(speakersList: List<string>) {
    return speakersList.map(SpeakersUtils.formatSpeakerData)
  }

  static formatSpeakerData(speaker: string) {
    return Map({
      name: speaker,
      thumb: path.join(`images/speakers/${speaker}`),
    })
  }
}
