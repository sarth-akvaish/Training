import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";
import { playerListData } from "./src/constants";


export async function setUpPlayer() {
    let isSetup = false
    try {
        await TrackPlayer.getActiveTrack()
        isSetup=true;
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetup=true;
    } finally {
        return isSetup;
    }
}

export async function addTrack(){
    await TrackPlayer.add(playerListData)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export async function playbackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })
}