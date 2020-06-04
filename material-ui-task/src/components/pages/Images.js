import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Dialog from './Dialog';

import ResultContext from '../../context/results/resultContext';

const Images = () => {
    const resultContext = useContext(ResultContext);

    const {images} = resultContext;

    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        padding: '1em 2em',
        width: 'auto',
        height: 'auto',
        overflow: 'hidden'
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
    }));
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={3}>
        {images.map((tile) => (
          <GridListTile key={tile.id}>
            <img src={tile.largeImageURL} alt={'Pixabay'} />
            <GridListTileBar
              title={tile.tags}
              subtitle={<span>by: {tile.user}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <Dialog
                    img={tile.largeImageURL}
                  />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default Images
