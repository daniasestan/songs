import React from 'react';
import { connect } from 'react-redux'
import {Container, Header } from "semantic-ui-react";

import './style.css';

class SongDetail extends React.Component {
    render(){
        const {song} = this.props;

        if (!song){
            return (
                <div className='song-detail'>
                    <Container textAlign='left'>
                        No song selected.
                    </Container>
                </div>
            )
        }
        
        return (
            <div className='song-detail'>
                <Container textAlign='left'>
                    <Header>Song Details</Header>
                    Title: {song.title}
                    <br />
                    Duration: {song.duration}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);