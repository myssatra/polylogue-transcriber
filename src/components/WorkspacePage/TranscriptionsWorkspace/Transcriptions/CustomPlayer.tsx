import { MutedFilled, PauseCircleFilled, PlayCircleFilled, SoundFilled, StepBackwardFilled, StepForwardFilled } from "@ant-design/icons"
import { BackTop, ConfigProvider, Flex, Layout, Progress, Slider } from "antd"
import cp from './CustomPlayer.module.scss'
import { useEffect, useRef } from "react"
import ReactPlayer from "react-player"
import { useState } from "react";
import { SourceProps } from "react-player/base"
import Duration from "./Duration"
import { observer } from "mobx-react-lite"

type CustomPlayerProps = {
    url: string | string[] | SourceProps[] | MediaStream | undefined
}


export const CustomPlayer  = observer (({url} : CustomPlayerProps) => {
    const[playing,setPlaying] = useState<boolean>(false);
    const[played, setPlayed] = useState<number>(0);
    const[loaded, setLoaded] = useState<number>(0);
    const[duration,setDuration] = useState<number>(0);
    const[volume, setVolume] = useState<number>(0.6);
    const[playbackRate, setPlaybackRate] = useState<number>(1);
    const[muted, setMuted] = useState<boolean>(false);
    const[seeking, setSeeking] = useState<boolean>(false);
    const playerRef = useRef<ReactPlayer>(null);

    const middle = played / loaded * 100;

    const handlePlayPause = () => {
        setPlaying(!playing);
    }

    const handleToggleMuted = () => {
        setMuted(!muted);
    }

    const handleVolumeChange = (volume: number) => {
        setVolume(volume);
    }

    const handleDuration = (duration: number) => {
        setDuration(duration);
        console.log(duration);
    }

    const handleProgress = (state: { playedSeconds: number, loadedSeconds: number }) => {
        if (!seeking) {
          setPlayed(state.playedSeconds);
          console.log(played);
        }
        setLoaded(state.loadedSeconds);
      };
    

    const handleSeekChange = (played: number) => {
        setSeeking(true);   
        setPlayed(played);
    }

    const handleSeekMouseUp = (time: number) => {
        setSeeking(false);
        playerRef.current?.seekTo(time);
    };

    const handleSeekMouseDown = () => {
        console.log('mouse down')
        setSeeking(true);
    };

    const handleSeekMouseUpTest = (value: number[]) => {
        setSeeking(false);
        playerRef.current?.seekTo(value[1]);
    }

    const handleSeekChangeTest = (value: number[]) => {
        setSeeking(true);   
        setPlayed(value[1]);
        console.log(middle)
    }

    const handleEnded = () => {
        console.log('onEnded')
        setPlaying(false);
        setPlayed(0);
        url = '';
        console.log('duration',duration); //253.3527
    }


    useEffect(() => {
        const handles = document.querySelectorAll('.ant-slider-handle');
        handles[2].ariaDisabled = 'false';
        console.log(handles[2].getAttribute('aria-disabled'));
    }, []);
            
    return(
        <Layout>
            <ReactPlayer ref={playerRef}
                        controls={false}
                        url={url}
                        playing={playing}
                        played={played}
                        loaded={loaded}
                        volume={volume}
                        muted={muted}
                        progressInterval={0}
                        playbackRate={playbackRate}
                        onEnded={handleEnded}
                        onAfterChange={handleSeekMouseUp}
                        onBeforeChange={handleSeekMouseDown}
                        onChange={handleSeekChange}
                        onDuration={handleDuration}
                        onProgress={handleProgress}
                        width='0' height='0' />

            <Flex className={cp.customPlayer} vertical>
                <Flex>
                    <Slider
                        style={{width: '100%'}}
                        range
                        max={duration} min={0} step={0.1}
                        value={[0, played, loaded]}
                        //onChange={setPlayedLoaded}
                        onChange={handleSeekChangeTest}
                        onChangeComplete={handleSeekMouseUpTest}
                        tooltip={{ open: false }} 
                        styles={{
                            track: {
                                background: 'transparent',
                            },
                            tracks: {     
                               background: `linear-gradient(to right,rgb(141, 206, 38) ${middle}%,rgba(107, 107, 107, 0.16) ${middle}%)`
                            },
                            handle:{
                                
                            }
                          }}/>
                </Flex>

                <Flex className={cp.playerFooter}>

                    {/* <Flex>{ <Duration seconds={playerRef.current ? playerRef.current?.getSecondsLoaded() : 0} />}</Flex> */}
                    
                    <span> {<Duration seconds={played} />} / <Duration seconds={duration} /></span>

                    <Flex gap={'3px'}>
                        <StepBackwardFilled style={{fontSize: '20px'}}/>
                        <Flex onClick={handlePlayPause}>{[playing ? <PauseCircleFilled style={{fontSize: '25px'}} className={cp.playerIcons} /> : <PlayCircleFilled style={{fontSize: '25px'}} className={cp.playerIcons} />]}</Flex>
                        <StepForwardFilled style={{fontSize: '20px'}} />
                    </Flex>

                    <Flex gap={'5px'} >
                        <Flex onClick={handleToggleMuted}>{[muted ? <MutedFilled style={{fontSize: '15px'}} className={cp.playerIcons} /> : <SoundFilled style={{fontSize: '15px'}} className={cp.playerIcons} />]}</Flex>
                        <Slider value={volume} min={0} max={1} step={0.01} onChange={handleVolumeChange} tooltip={{ formatter: null }} style={{width: '70px' }} />
                    </Flex>
                    
                </Flex>                
                
            </Flex>
        </Layout>
    )
})


//export default CustomPlayer;