import React from 'react';
import { connect } from 'react-redux';
import {Item, Button, Container} from "semantic-ui-react";

import { selectSong } from "../actions";
import './style.css'

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                    <Item key={song.title}>
                        <Item.Content verticalAlign='middle'>
                            <Item.Header>{song.title}</Item.Header>
                            <Item.Extra>
                                <Button floated='right'
                                        onClick = {() => this.props.selectSong(song)}>
                                    Select
                                </Button>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
            )
        });
    }

    render(){
        return (
            <div className="song-list">
                <Container>
                    <Item.Group divided>{this.renderList()}</Item.Group>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { songs: state.songs };
};

export default connect(
    mapStateToProps, 
    {selectSong: selectSong}
)(SongList);