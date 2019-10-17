import React from 'react';
import { Grid } from "semantic-ui-react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

class App extends React.Component {
    render() {
        return (
            <Grid columns={2} divided>
                <Grid.Column>
                    <SongList />
                </Grid.Column>
                <Grid.Column>
                    <SongDetail />
                </Grid.Column>
            </Grid>
        )
    }
}

export default App;