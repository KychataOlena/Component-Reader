import { Component } from 'react';
import { Controls } from './Control';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  componentDidMount() {
    const saveState = localStorage.getItem(LS_KEY);
    if (saveState) {
      this.setState({ index: Number(saveState) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    // console.log(this.props.items[this.state.index]);
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];

    return (
      <div>
        <Controls
          total={totalItems}
          current={index + 1}
          onChange={this.changeIndex}
        />

        <Progress total={totalItems} current={index + 1} />
        <Publication item={currentItem} />
      </div>
    );
  }
}
